
interface ButtonInterface {
    title : string ,
    size : "sm" | "md" | "lg"
}




export function Button(props :ButtonInterface){
    return <button className="">
        {props.title}
    </button>
}