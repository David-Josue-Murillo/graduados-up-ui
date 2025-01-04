import InfoCard from "../../../../components/InfoCard"
import { INFO_CARDS } from "../../constants/graduates"

const InfoPanel = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-4 mt-12 text-center">
            {INFO_CARDS.map((card) => (
                <InfoCard 
                    key={card.id}
                    title={card.title}
                    content={card.content}
                    link={card.link}
                />
            ))}
        </div>
    )
}

export default InfoPanel
