
interface ButtonInterface {
    title : string ,
    
}


export function Button(props :ButtonInterface){
    return <button className="">
        {props.title}
    </button>
}