import type { ReactElement } from "react"

interface ButtonInterface {
    title : string ,
    size : "sm" | "md" | "lg",
    startIcon?:ReactElement,
    endIcon?:ReactElement
}

const sizeStyles = {
    "sm" : "px-2 py-1",
    "md" : "px-4 py-2",
    "lg" : "px-6 py-3"
}

export function Button(props: ButtonInterface) {
    return <button className={sizeStyles[props.size] + " bg-red-400"}>
        {props.title}
    </button>
}

