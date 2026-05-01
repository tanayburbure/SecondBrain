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
    "default" : "bg-purple-600 text-white"
}

export const Button = (props : ButtonProps)  => {
    return <button></button>
}

<Button variant="primary" size="md" onClick={() => {}} text={"Start"} startIcon={"-"} endIcon={"+"}/>