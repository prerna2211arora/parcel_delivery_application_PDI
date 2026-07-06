import { lazy, Suspense } from "react"
import { createBrowserRouter, type RouteObject } from "react-router-dom"

import { PageLoader } from "@/components/common/PageLoader"
import { RootLayout } from "@/components/layout"

const HomePage = lazy(() =>
  import("@/pages/Home").then((module) => ({ default: module.HomePage })),
)

const SignInPage = lazy(() =>
  import("@/pages/SignIn").then((module) => ({ default: module.SignInPage })),
)

const ServicesPage = lazy(() =>
  import("@/pages/Services").then((module) => ({
    default: module.ServicesPage,
  })),
)

const PricingPage = lazy(() =>
  import("@/pages/Pricing").then((module) => ({
    default: module.PricingPage,
  })),
)

const AboutPage = lazy(() =>
  import("@/pages/About").then((module) => ({ default: module.AboutPage })),
)

const ContactPage = lazy(() =>
  import("@/pages/Contact").then((module) => ({
    default: module.ContactPage,
  })),
)

const NotFoundPage = lazy(() =>
  import("@/pages/NotFound").then((module) => ({
    default: module.NotFoundPage,
  })),
)

function withSuspense(element: React.ReactNode) {
  return <Suspense fallback={<PageLoader />}>{element}</Suspense>
}

const routeConfig: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: withSuspense(<HomePage />),
      },
      {
        path: "signin",
        element: withSuspense(<SignInPage />),
      },
      {
        path: "services",
        element: withSuspense(<ServicesPage />),
      },
      {
        path: "pricing",
        element: withSuspense(<PricingPage />),
      },
      {
        path: "about",
        element: withSuspense(<AboutPage />),
      },
      {
        path: "contact",
        element: withSuspense(<ContactPage />),
      },
      {
        path: "*",
        element: withSuspense(<NotFoundPage />),
      },
    ],
  },
]

export const router = createBrowserRouter(routeConfig)
