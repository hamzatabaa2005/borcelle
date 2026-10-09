export const StatCard = ({ title, value, icon, note }) => {
    return (
        <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 pt-6 mt-4">
            <div className="absolute -top-4 left-4 w-12 h-12 rounded-xl bg-linear-to-tr from-pink-700 to-pink-500 text-white flex items-center justify-center text-2xl shadow-lg">
                {icon}
            </div>
            <div className="text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
                <p className="text-2xl font-semibold text-gray-800 dark:text-white">{value}</p>
            </div>
            {note && <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 border-t border-gray-100 dark:border-gray-700 pt-2">{note}</p>}
        </div>
    )
}
