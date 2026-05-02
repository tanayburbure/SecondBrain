
interface ButtonInterface {
    title : string ,
    size : "sm" | "md" | "lg"
}

const sizeStyles = {
    "sm" : "px-2 py-1",
    "md" : "px-4 py-2",
    "lg" : "px-6 py-3"
}

export function Button(props :ButtonInterface){
    return <button className={sizeStyles[props.size]} >
        {props.title}
    </button>
}