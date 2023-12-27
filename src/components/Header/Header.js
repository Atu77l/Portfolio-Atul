import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import Alogo from '../../a_logo.png'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center z-30 h-16'>
      <img src={Alogo}  alt="logo" className='h-16 w-20'/>

      <h3 className="head1">
      <div className="link font-semibold"> {title}</div>
     
        {/* {homepage ? (
          <a href={homepage} className='link font-semibold'>
            {title}
          </a>
        ) : (
          title
        )} */}
      </h3>

      <Navbar />
    </header>
  )
}

export default Header
