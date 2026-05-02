
interface ButtonInterface {
    title : string ,
    size : "sm" | "md" | "lg"
}

const sizeStyles = {
    "sm" : "px-2 py-1",
    "md" : "px-4 py-2",
    "lg" : "px-6 py-3"
}

export function Button(props.ButtonInterface) {
    if (props.size === "sm") {
    return <button className={sizeStyles="sm"}>
        {props.title}
    </button>
}
if (props.size === "md") {
    return <button className={sizeStyles="md"}>
        {props.title}
    </button>
}
if (props.size === "lg") {
    return <button className={sizeStyles="lg"}>
        {props.title}
    </button>
}
}

