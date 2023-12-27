import './Footer.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter';
// import InstagramIcon from '@material-ui/icons/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => (
  <footer className='footer'>
    <a
      href='https://github.com/Atu77l/Portfolio-Atul/'
      className='link footer__link'
    >
      <h3 className='t'>Created By : </h3>
      <h3 className='text-white'>Atul kesharwani</h3> 
    </a>
    <h6 className='mt-5 text-white'><CopyrightIcon/>Copyright 2023 Atul Kesharwani. All Rights Reserved.</h6>
    <div className='text-white'><GitHubIcon style={{marginRight:"10px"}}/><LinkedInIcon style={{marginRight:"10px"}}/><TwitterIcon/></div>
  </footer>
)

export default Footer
