import '../../App.css'
import { forwardRef } from 'react';
import Button from '../button/button'
import MaterialsImg from '../../assets/materials.png'
import { useNavigate } from 'react-router';

const Materials = forwardRef((props, ref) => {
    const navigate = useNavigate()
    const handleClickCatalog =()=>{
        navigate('../../catalog')
    }

    return(
        <>
        <section className='materialsContainer' ref={ref}>
            <div className='materials'>
                <div className='materialsTxt'>
                    <h1 className='title titleWhite'>Escolha o material de sua preferência<span>.</span></h1>
                    <p className='subTitle'>Conheça todos os nossos materiais disponiveis no nosso catálogo</p>
                    <Button text='ir para catálogo' onClick={handleClickCatalog}/>
                </div>
            <img src={MaterialsImg} />
            </div>
        </section>
        </>
    )
})

export default Materials