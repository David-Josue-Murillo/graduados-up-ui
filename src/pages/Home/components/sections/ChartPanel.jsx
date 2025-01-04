import ChartComponent from "../../../../components/ChartComponent"

const ChartPanel = () => {
    return (
        <div className="bg-white dark:bg-transparent shadow-md rounded-lg p-4 md:col-span-2 border border-green-200 dark:border-green-400">
            <ChartComponent />
        </div>
    )
}

export default ChartPanel
