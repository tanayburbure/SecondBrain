import type { ReactElement } from "react"

interface ButtonInterface {
    text: string,
    startIcon?: ReactElement,
    varient : "primary" | "secondary"
}


export function Button({varient , text , startIcon}: ButtonInterface) {
    return <button className={varient === "primary" ? "bg-purple-600 text-white" : "bg-purple-200 text-purple-400"}>
        {startIcon}
        {text}
    </button>
}

