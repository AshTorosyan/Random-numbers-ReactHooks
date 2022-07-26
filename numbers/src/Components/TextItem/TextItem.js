const TextItem = (props) => {
    return (
        <p className={props.className}>
            {props.children}
        </p>
    );
}

export default TextItem;