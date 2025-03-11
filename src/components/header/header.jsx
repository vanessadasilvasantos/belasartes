import Logo from '../../assets/belasArtesLogo.png';
import { useNavigate } from 'react-router';
import '../../App.css';


function Header(props) {
    const navigate = useNavigate()
    const handleClickCatalog =()=>{
        navigate('/')
    }

    return(
        <>
            <header className='headerContainer'>
                <div className='header'>
                    <a onClick={handleClickCatalog} ><img src={Logo} className="logo"/></a>
                    <ul className="headerTxt" >
                        <li className='remove'><a onClick={props.about}>{props.title1}</a></li>
                        <li><a onClick={props.materials}>{props.title2}</a></li>
                        <li className='remove2'><a onClick={props.work}>{props.title3}</a></li>
                        <li className='remove2'><a onClick={props.contact}>contato</a></li>
                    </ul>
                 </div>
            </header>
        </>
    )
}

export default Header