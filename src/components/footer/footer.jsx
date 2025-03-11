import '../../App.css'
import { forwardRef } from 'react';

const Footer = forwardRef((props, ref)=>{
    const handleInsta =()=> {
        window.open('https://www.instagram.com/belas_artes.marmoraria/', '_blank')
    }

    const handleEmail =()=> {
        window.location.href = 'mailto:belasartes70@gmail.com'
    }

    const handleCall = (number) => {
        window.location.href = number
    }

    return (
        <>
        <footer className='containerFooter' ref={ref}>
            <div className='footer'>
                <h1 className='title titleWhite'>Contato<span>.</span></h1>
                <div className='contact'>
                    <div>
                        <h2 className='textFooter'>WhatsApp</h2>
                        <p className='subTitle subTitleFooter'><a onClick={()=> handleCall('tel:+5598985158645')}>(98) 98515-8645</a></p>
                        <p className='subTitle subTitleFooter'><a href='tel:+5598984583923'>(98) 98458-3923</a></p>
                    </div>
                    <div>
                        <h2 className='textFooter'>Instagram</h2>
                        <p className='subTitle subTitleFooter'><a onClick={()=> handleInsta()}>@belas_artes.marmoraria</a></p>
                    </div>
                    <div>
                        <h2 className='textFooter'>E-mail</h2>
                        <p className='subTitle subTitleFooter'><a onClick={()=> handleEmail()}>belasartes70@gmail.com</a></p>
                    </div>
                </div>
                <p className='subTitle footerText'>Belas Artes Marmoraria © Alguns direitos reservados.</p>
            </div>
        </footer>
        </>
    )
})

export default Footer