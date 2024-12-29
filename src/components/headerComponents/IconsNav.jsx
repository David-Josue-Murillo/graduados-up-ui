import GitHubIcons from '../icons/GitHubIcons';
import ThemeIcons from '../icons/ThemeIcons';

const IconsNav = ({ click, toggleTheme, theme }) => {
    return (
        <div className={click ? 'flex mt-10 m-auto space-x-6' : 'hidden items-center space-x-6 md:mt-2 md:flex lg:mt-3'}>
            <button className='hover:scale-110'
                onClick={toggleTheme}
            >
                <ThemeIcons theme={theme} />
            </button>

            <button className='hover:scale-110'>
                <a href='https://github.com/David-Josue-Murillo/graduadosup-api'>
                    <GitHubIcons theme={theme} />
                </a>
            </button>
        </div>
    )
}

export default IconsNav
