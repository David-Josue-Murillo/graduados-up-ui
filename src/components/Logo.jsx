import logo from '../assets/img/logo_light.png'


const Logo = () => {
    return (
        <div className='w-5/12 sm:w-3/12 md:w-2/12 lg:w-1/6  overflow-hidden' data-aos="fade-right">
            <img src={logo} alt="Logo" className='w-full h-full object-cover' />
        </div>
    )
}

export default Logo
