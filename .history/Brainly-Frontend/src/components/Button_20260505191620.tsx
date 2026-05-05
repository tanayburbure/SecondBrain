import type { ReactElement } from "react"

interface ButtonInterface {
    text: string,
    startIcon?: ReactElement,
    varient : "primary" | "secondary"
}

const varientClasses = {
    "primary" : "bg-purple-600 text-white" ,
    "secondary" : "bg-purple-200 text-purple-600"
}

const defaultStyles = "px-4 py-2 rounded-md flex items-center"

export function Button({varient , text , startIcon}: ButtonInterface) {
    return <button className={varientClasses[varient] + " " + defaultStyles}>
        <div className="pr-[4px]">
        {startIcon}
        </div>
        {text}
    </button>
}

