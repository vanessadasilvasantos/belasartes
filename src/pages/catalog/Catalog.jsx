import './Catalog.css'
import { useNavigate} from 'react-router';
import { useRef } from 'react'
import Footer from '../../components/footer/footer.jsx'
import Header from '../../components/header/header.jsx'
import Home from '../../components/home/home.jsx'
import CatalogHome from './assets/catalogHome.png'
import GranitesList from './componentsCatalog/granites/granitesList.jsx'
import MarbleList from './componentsCatalog/marbles/marbleList.jsx'


 
function Catalog() {
    const navigate = useNavigate()
    const handleClickHome =()=>{
        navigate('/')
    }

    const sectionRefs = {
        granites: useRef(null),
        marbles: useRef(null),
        contact: useRef(null)
      }
    
    const scrollToTarget =(section)=> {
        sectionRefs[section].current.scrollIntoView({ behavior: 'smooth'})
    }

    return(
        <>
            <Header 
                title1='principal'
                title2='granitos' 
                title3='mármores'
                about={handleClickHome}
                materials={()=> scrollToTarget('granites')} 
                work={()=> scrollToTarget('marbles')}
                contact={()=> scrollToTarget('contact')}
            />

            <Home 
                title='Catálogo de pedras'
                subTitle1='escolha o materiaL que mais '
                subTitle2='combina com seu projeto.'
                textButton='arraste para baixo ↓'
                onClick={()=> scrollToTarget('granites')}
                image={CatalogHome}
            />
            <GranitesList ref={sectionRefs.granites}/>
            <MarbleList ref={sectionRefs.marbles}/>
            <Footer ref={sectionRefs.contact} />
            </>
    )
}

export default Catalog