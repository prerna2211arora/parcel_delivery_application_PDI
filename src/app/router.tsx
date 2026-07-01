import { lazy, Suspense } from "react"
import { createBrowserRouter, type RouteObject } from "react-router-dom"

import { PageLoader } from "@/components/common/PageLoader"
import { RootLayout } from "@/components/layout"

const HomePage = lazy(() =>
  import("@/pages/Home").then((module) => ({ default: module.HomePage })),
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
        path: "*",
        element: withSuspense(<NotFoundPage />),
      },
    ],
  },
]

export const router = createBrowserRouter(routeConfig)
