import { cn } from "@/lib/utils"

type PageLoaderProps = {
  className?: string
}

export function PageLoader({ className }: PageLoaderProps) {
  return (
    <div
      className={cn(
        "flex min-h-[50vh] items-center justify-center",
        className,
      )}
      role="status"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <span className="text-sm text-muted-foreground">Loading…</span>
      </div>
    </div>
  )
}
