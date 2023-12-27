import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { about } from '../../portfolio';
import img from '../../akash_image.jpg';
import './About.css';

const About = () => {
  const { name, description, resume, social } = about

  return (
    
    <div className="about1" id="About">
    <div className='about'>
      {name && (
        <h1>
          Hi, I am <span className='about__name font-semibold'>{name}.</span>
        </h1>
      )}
      
      <h2 className='about__role'>
      <h2 className="role">Full Stack Developer.</h2>
      </h2>
      
      <p className='about__desc'>{description && description}</p>

      <div className='flex text-left justify-start rounded-lg mt-10 mb-10'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline rounded-lg  text'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon sx={{color:"blue"}}/>
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon sx={{color:"blue"}}/>
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <TwitterIcon sx={{color:"blue"}}/>
              </a>
            )}
            {/* {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <InstagramIcon sx={{color:"blue"}}/>
              </a>
            )} */}
          </>
        )}
      </div>
      
    </div>
    </div>
    
  )
}

export default About
