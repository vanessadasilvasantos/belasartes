import '../../Catalog.css'
import CatalogItem from '../catalogItem'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { forwardRef } from 'react';
import listCatalogMarble from '../../api/marbles';


const MarbleList = forwardRef((props, ref)=> {
    return (
        <section className='marble' ref={ref}>
            <div className='catalogContainer marbleContainer'>
                <div>
                    <h1 className='title titleWhite'>Mármores<span>.</span></h1>
                    <Swiper 
                    modules={[Pagination]}
                    slidesPerView={1.40}
                    spaceBetween={0}
                    pagination={{clickable: true}}
                    className='swiperContainer'
                    > 
                        {listCatalogMarble.map((item) => (
                            <SwiperSlide key={item.id} 
                            className='slideItem slideItemCatalog'
                            >
                                <CatalogItem title={item.text} image={item.image}/>
                            </SwiperSlide>
                
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
})

export default MarbleList