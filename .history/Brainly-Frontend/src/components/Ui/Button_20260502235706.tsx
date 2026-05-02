
export function Button(props: ButtonInterface) {
    return <button className={sizeStyles[props.size] + " bg-red-400"}>
        {props.title}
    </button>
}

