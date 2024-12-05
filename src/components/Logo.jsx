import logo_light from '../assets/img/logo_light.png'
import logo_dark from '../assets/img/logo_dark.png'

const Logo = ({theme}) => {
    return (
        <div className='w-5/12 sm:w-3/12 md:w-2/12 lg:w-1/6  overflow-hidden' data-aos="fade-right">
            <img src={theme === 'light' ? logo_light : logo_dark} alt="Logo" className='w-full h-full object-cover' />
        </div>
    )
}

export default Logo
