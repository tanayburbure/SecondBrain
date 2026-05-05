import type { ReactElement } from "react"

interface ButtonInterface {
    text: string,
    startIcon?: ReactElement,
    varient : "primary" | "secondary"
}

const varientClasses = {
    "primary" : "bg-purple-600 text-white" ,
    "secondary" : "bg-purple-200 text-purple-400"
}


export function Button({varient , text , startIcon}: ButtonInterface) {
    return <button className={varient === "primary" ? "" : ""}>
        {startIcon}
        {text}
    </button>
}

