import '../../App.css'
import { forwardRef } from 'react';
import LogoBlack from '../../assets/belasArtesBlack.png';

const About = forwardRef((props, ref)=> {
    return(
        <section className='aboutContainer' ref={ref}>
            <h1 className='title titleBlack'>Quem somos<span>.</span></h1>
            <div className='about'>
                <p className='subTitle subTitleAbout'>
                Somos uma marmoraria especializada em marmores, granitos e vidros. Estamos localizados na ilha de São Luis, contando com os melhores distribuidores, e materiais de qualidade.
                </p>
                <img src={LogoBlack}/>
            </div>
        </section>
    )
})

export default About