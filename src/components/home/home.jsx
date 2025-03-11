import '../../App.css'
import Button from '../button/button'

function Home(props) {

    return (
        <>
            <main className='homeContainer'>
                <div className='home'>
                    <div className='homeTxt'>
                        <h1 className='title titleWhite'>{props.title}<span>.</span></h1>
                        <h2 className='subTitle'>{props.subTitle1}<br/>{props.subTitle2}</h2>
                        <Button text={props.textButton} onClick={props.onClick}/>
                    </div>
                    <img src={props.image} className='homeImage'/>
                </div>
            </main>
        </>
    )
}

export default Home