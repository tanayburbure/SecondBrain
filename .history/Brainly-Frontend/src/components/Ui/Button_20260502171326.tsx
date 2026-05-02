
interface ButtonInterface {
    title : string ,
    size : "sm" | "md" | "lg"
}

const sizeStyles = {
    "sm" : ""
}


export function Button(props :ButtonInterface){
    return <button className="">
        {props.title}
    </button>
}