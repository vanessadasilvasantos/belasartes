import '../../App.css'

function Button(props) {
    return (
        <>
            <a className='button' onClick={props.onClick}>{props.text}</a>
        </>
    )
}

export default Button