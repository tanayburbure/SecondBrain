import type { ReactElement } from "react"

interface ButtonInterface {
    text: string,
    size: "sm" | "md" | "lg",
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    varient : "primary" | "secondary"
}


export function Button(props: ButtonInterface) {
    return 
}

