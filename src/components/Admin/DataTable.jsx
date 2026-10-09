import { LuEye, LuPencil, LuTrash2 } from "react-icons/lu";

export const DataTable = ({ columns, rows, loading, onView, onEdit, onDelete }) => {

    const hasActions = onView || onEdit || onDelete;

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
                <thead>
                    <tr className="text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                        {columns.map((c) => <th key={c.label} className="py-3 px-3 font-medium whitespace-nowrap">{c.label}</th>)}
                        {hasActions && <th className="py-3 px-3 font-medium">Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {loading && [1, 2, 3, 4, 5].map((i) => (
                        <tr key={i} className="animate-pulse">
                            <td colSpan={columns.length + (hasActions ? 1 : 0)} className="py-3 px-3">
                                <div className="h-5 rounded bg-gray-200 dark:bg-gray-700"></div>
                            </td>
                        </tr>
                    ))}

                    {!loading && rows.length === 0 && (
                        <tr>
                            <td colSpan={columns.length + (hasActions ? 1 : 0)} className="py-10 text-center text-gray-500 dark:text-gray-400">No records found</td>
                        </tr>
                    )}

                    {!loading && rows.map((row, index) => (
                        <tr key={row.id ?? index} className="border-b border-gray-100 dark:border-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700/40">
                            {columns.map((c) => <td key={c.label} className="py-3 px-3">{c.render(row)}</td>)}
                            {hasActions && (
                                <td className="py-3 px-3">
                                    <div className="flex items-center gap-3 text-lg">
                                        {onView && <button aria-label="View" onClick={() => onView(row)} className="hover:text-pink-600"><LuEye /></button>}
                                        {onEdit && <button aria-label="Edit" onClick={() => onEdit(row)} className="hover:text-pink-600"><LuPencil /></button>}
                                        {onDelete && <button aria-label="Delete" onClick={() => onDelete(row)} className="text-red-500 hover:text-red-700"><LuTrash2 /></button>}
                                    </div>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
