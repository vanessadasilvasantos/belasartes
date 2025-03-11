import '../../Catalog.css'
import CatalogItem from '../catalogItem'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { forwardRef } from 'react';
import listCatalog from '../../api/granites';


const GranitesList = forwardRef((props, ref)=> {
    return (
        <section className='catalogContainer' ref={ref}>
            <h1 className='title'>Granitos<span>.</span></h1>
            <Swiper 
             modules={[Pagination]}
                slidesPerView={1.40}
                spaceBetween={0}
                pagination={{clickable: true}}
                className='swiperContainer'
            > 
            {listCatalog.map((item) => (
                <SwiperSlide key={item.id} 
                className='slideItem slideItemCatalog'
                >
                    <CatalogItem title={item.text} image={item.image}/>
                </SwiperSlide>
                
            ))}
            </Swiper>
        </section>
    )
})

export default GranitesList