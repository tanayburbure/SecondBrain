type Variants = "primary" | "secondary"

export interface ButtonProps {
    variant: Variants;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: any;
    endIcon?: any;
    onClick: () => void
}

const varientStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600"
}

const sizeStyles = {
    "sm": "p-2",
    "md": "p-3",
    "lg": "p-4"
}

const defaultStyle = "rounded-md "

export const Button = (props: ButtonProps) => {
    return <button className={`${varientStyles[props.variant]} ${defaultStyle} ${sizeStyles[props.size]}`}> {props.startIcon} {props.text} {props.endIcon}</button>
}

<Button variant="primary" size="md" onClick={() => { }} text={"Start"} startIcon={"-"} endIcon={"+"} /> 