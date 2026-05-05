import type { ReactElement } from "react"

interface ButtonInterface {
    title: string,
    size: "sm" | "md" | "lg",
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    varient : "primary" | "secondary"
}


export function Button(props: ButtonInterface) {
    return 
}

