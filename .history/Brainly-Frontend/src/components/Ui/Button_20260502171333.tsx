
interface ButtonInterface {
    title : string ,
    size : "sm" | "md" | "lg"
}

const sizeStyles = {
    "sm" : "px-4 py-2"
}


export function Button(props :ButtonInterface){
    return <button className="">
        {props.title}
    </button>
}