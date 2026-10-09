const styles = {
    delivered: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    completed: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    processing: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    shipped: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    cancelled: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
}

export const StatusBadge = ({ status }) => {
    const key = String(status ?? "").toLowerCase();
    return (
        <span className={`px-2 py-1 rounded-full text-xs capitalize ${styles[key] ?? "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200"}`}>
            {status || "-"}
        </span>
    )
}
