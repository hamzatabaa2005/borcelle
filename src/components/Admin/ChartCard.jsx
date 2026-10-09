export const ChartCard = ({ title, subtitle, children, tone = "pink" }) => {
    const toneStyle = tone === "dark"
        ? "from-gray-800 to-gray-600"
        : "from-pink-700 to-pink-500";

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 pt-0">
            <div className={`-mt-4 mb-4 rounded-xl bg-linear-to-tr ${toneStyle} shadow-lg p-2`}>
                {children}
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
        </div>
    )
}
