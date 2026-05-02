import type { ReactElement } from "react"

export interface IconProps {
    title:string
    size : "sm" | "md" | "lg"
    startIcon?:ReactElement
    endIcon?:ReactElement
}

export const iconSizeVarients = {
    "sm": "size-6",
    "md" : "size-8",
    "lg" : "size-10"
}