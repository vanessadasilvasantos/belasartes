import '../../App.css'
import { forwardRef } from 'react';
import Works from './works'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';



{/*imports images */}
import Sink from '../../assets/works/sinkWork.png'
import Countertop from '../../assets/works/countertop.png'
import WashBasin from '../../assets/works/washBasin.png'
import Ladder from '../../assets/works/ladder.png'
import Table from '../../assets/works/table.png'

const list = [
    {id: '1', image: Ladder, text: 'Escadas'},
    {id: '2', image: Sink, text: 'Pias'},
    {id: '3', image: WashBasin, text: 'Lavatórios'},
    {id: '4', image: Table, text: 'Mesas'},
    {id: '5', image: Countertop, text: 'Bancadas'},
]

const WorksList = forwardRef((props, ref)=> {
    return (
        <section className='worksContainer' ref={ref}>
            <h1 className='title'>Nossos serviços<span>.</span></h1>
            <Swiper 
             modules={[Pagination]}
                slidesPerView={1.40}
                spaceBetween={30}
                pagination={{clickable: true}}
                className='swiperContainer'
            > 
            {list.map((item) => (
                <SwiperSlide key={item.id} 
                className='slideItem'
                >
                    <Works title={item.text} image={item.image}/>
                </SwiperSlide>
                
            ))}
            <SwiperSlide></SwiperSlide>
            </Swiper>
        </section>
    )
})

export default WorksList