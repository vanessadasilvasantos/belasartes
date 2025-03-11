import './App.css';
import { useRef } from 'react';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Materials from './components/materials/materials';
import WorksList from './components/works/worksList';
import Footer from './components/footer/footer';
import { HashRouter as Router, Routes, Route, useNavigate} from 'react-router';
import Catalog from './pages/catalog/Catalog';
import HomeImage from './assets/home.png'


function App() {
  const sectionRefs = {
    materials: useRef(null),
    work: useRef(null),
    contact: useRef(null),
    about: useRef(null)
  }

  const navigate = useNavigate()
  const handleClickCatalog =()=>{
      navigate('../../catalog')
  }

  const scrollToTarget =(section)=> {
    sectionRefs[section].current.scrollIntoView({ behavior: 'smooth'})
  } 
  return (
      <Routes>
        <Route path='/' element={
          <>
            <Header 
            about={()=> scrollToTarget('about')} 
            materials={()=> scrollToTarget('materials')}
            work={()=> scrollToTarget('work')}
            contact={()=> scrollToTarget('contact')}
            title1='Quem somos' title2='materiais' title3='trabalhos'/>

            <Home
            title='Transforme seus sonhos em realidade'
            subTitle1='Tenha sua casa do jeito que '
            subTitle2='sempre sonhou!' textButton='escolha o seu material'
            onClick={handleClickCatalog} image={HomeImage}/>
            
            <About ref={sectionRefs.about}/>
            <Materials ref={sectionRefs.materials}/>
            <WorksList ref={sectionRefs.work}/>
            <Footer ref={sectionRefs.contact}/>
          </>
        }/>
        <Route path='/catalog' element={<Catalog />} />
      </Routes>
  )
}

export default App