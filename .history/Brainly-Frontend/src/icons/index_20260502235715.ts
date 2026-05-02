import type { ReactElement } from "react"

export interface IconProps {
    titleC:string
    size : "sm" | "md" | "lg"
    startIcon?:ReactElement
    endIcon?:ReactEle
}

export const iconSizeVarients = {
    "sm": "size-6",
    "md" : "size-8",
    "lg" : "size-10"
}