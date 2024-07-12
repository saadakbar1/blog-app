import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble, BsBuildingX, BsLinkedin } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-4 py-2 bg-gradient-to-r from-green-400 via-green-500 to-green-400 rounded-lg text-white'>
              DevBytes
              </span>
           
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://saadakbar1.github.io/PhotographhyWebsite/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Photography
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  
                  rel='noopener noreferrer'
                >
                  Saad's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/saadakbar1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='https://twitter.com/saad_akbar_10' target='_blank'>Twitter</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Saad's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://www.linkedin.com/in/saad-akbar10/' target='_blank' icon={BsLinkedin}/>
            <Footer.Icon href='https://www.instagram.com/clicks.360_saad/' target='_blank'icon={BsInstagram}/>
            <Footer.Icon href='https://twitter.com/saad_akbar_10' target='_blank'icon={BsTwitter}/>
            <Footer.Icon href='https://github.com/saadakbar1' target='_blank' icon={BsGithub}/>
            

          </div>
        </div>
      </div>
    </Footer>
  );
}
