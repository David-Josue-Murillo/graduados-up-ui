import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const InfoCard = ({ title, content,link }) => {
    return (
        <div className="w-8/12 m-auto">
            <h3 className="text-xl font-semibold mb-2 dark:text-slate-300">
                {title}
            </h3>
            <p className="text-gray-500 text-sm">
                {content}
                {link && (
                    <Link
                        to={link}
                        className="text-blue-600 hover:text-blue-700 ml-1"
                    >
                        documentación
                    </Link>
                )}
            </p>
        </div>
    )
}

InfoCard.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    link: PropTypes.string
  };
  
InfoCard.defaultProps = {
link: ''
};
  

export default InfoCard
