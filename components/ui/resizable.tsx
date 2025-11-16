"use client"

import * as React from "react"
import { GripVerticalIcon } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"
import { cn } from "valery/lib/utils"

// ---------------------------------------------------------------------------
// TYPES
// ---------------------------------------------------------------------------

type PanelGroupProps = React.ComponentProps<typeof ResizablePrimitive.PanelGroup> & {
  className?: string
  direction: "horizontal" | "vertical"
}

type PanelProps = React.ComponentProps<typeof ResizablePrimitive.Panel>

type HandleProps = React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
  className?: string
}

// ---------------------------------------------------------------------------
// COMPONENTS
// ---------------------------------------------------------------------------

export function ResizablePanelGroup({
  className,
  direction,
  ...props
}: PanelGroupProps) {
  return (
    <ResizablePrimitive.PanelGroup
      direction={direction}
      data-slot="resizable-panel-group"
      className={cn(
        "flex h-full w-full transition-all duration-300",
        // auto switch to stacked layout on mobile
        "max-md:flex-col",
        className,
      )}
      {...props}
    />
  )
}

export function ResizablePanel(props: PanelProps) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />
}

export function ResizableHandle({
  withHandle = true,
  className,
  ...props
}: HandleProps) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        "relative flex items-center justify-center bg-border transition-all",
        "hover:bg-border/60 active:bg-border/80",
        // horizontal
        "w-0.5 max-md:w-full max-md:h-0.5",
        // vertical orientation
        "data-[panel-group-direction=vertical]:h-0.5",
        className,
      )}
      {...props}
    >
      {withHandle && (
        <div className="z-20 flex h-5 w-4 items-center justify-center rounded-sm border bg-background/80 shadow-md backdrop-blur-md">
          <GripVerticalIcon className="size-3 opacity-70" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  )
}
