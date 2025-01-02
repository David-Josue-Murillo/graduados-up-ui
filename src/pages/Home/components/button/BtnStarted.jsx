import { Link } from 'react-router-dom'

const BtnStarted = () => {
    return (
        <Link to='/documentation'>
            <button className="bg-green-600 text-white px-6 py-3 rounded-md shadow hover:bg-green-700">
                Get Started
            </button>
        </Link>
    )
}

export default BtnStarted
