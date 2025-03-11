import '../../App.css' 

function Works(props) {
    return(
        <>
        <div className='workContainer'>
            <img src={props.image} className='sink'/>
            <h2 className='titleWork'>{props.title}</h2>
        </div>
        </>
    )
}

export default Works