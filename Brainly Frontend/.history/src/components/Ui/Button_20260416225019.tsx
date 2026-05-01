type Variants = "primary" | "secondary"

export interface ButtonProps {
    variant  : Variants ;
    size : "sm" | "md" | "lg" ;
    text : string ;
    startIcon? : any ;
    endIcon? : any ;
    onClick : () => void
}

const varientStyles = {
    "primary" : "bg-purple-600 text-white" ,
    "secondary" : "bg-purple-400 text-purple-600"
}

const sizeStyles = {
    "sm" : "p-2" ,
    "md" : "p-4" ,
    "lg" : "p-6"
}

const defaultStyle : "rounded-md p-4"

export const Button = (props : ButtonProps)  => {
    return <button className={`${varientStyles[props.variant]} ${defa}`}>{props.text}</button>
}

<Button variant="primary" size="md" onClick={() => {}} text={"Start"} startIcon={"-"} endIcon={"+"}/>