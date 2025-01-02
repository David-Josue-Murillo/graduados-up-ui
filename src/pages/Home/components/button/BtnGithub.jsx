import GitHubIcons from '../../../../components/icons/GitHubIcons';

const BtnGithub = ({ theme }) => {
    return (
        <div>
            <a
                href="https://github.com/David-Josue-Murillo/graduadosup-api"
                className="flex border border-gray-300 px-4 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:border-green-700 hover:text-green-700"
            >
                <GitHubIcons
                    theme={theme}
                />
                <span className="pl-2 pt-1">GitHub</span>
            </a>
        </div>
    )
}

export default BtnGithub
