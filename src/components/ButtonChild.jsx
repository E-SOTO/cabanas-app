
function ButtonChild(props) {

    function handleClick(){
        props.onClick();
    }

    return ( 
        <div>
            <button
                onClick={handleClick}
                className={props.className}
            >
                {props.children}
            </button>
        </div>
    );
}

export default ButtonChild;