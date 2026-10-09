import { ArrowLeft, ArrowRight } from "lucide-react";

export const AdminPagination = ({ page, lastPage, onChange }) => {
    if (lastPage <= 1) return null;

    const start = Math.max(1, Math.min(page - 2, lastPage - 4));
    const end = Math.min(lastPage, start + 4);
    const pages = [];
    for (let p = start; p <= end; p++) pages.push(p);

    const base = "h-10 w-10 border-2 border-pink-700 hover:bg-pink-500 hover:text-white flex items-center justify-center dark:text-white";

    return (
        <div className="flex justify-end mt-4">
            <button className={`${base} rounded-s-lg`} disabled={page <= 1} onClick={() => onChange(page - 1)}><ArrowLeft size={18} /></button>
            {pages.map((p) => (
                <button key={p} onClick={() => onChange(p)} className={`${base} border-s-0 ${p === page ? "bg-pink-700 text-white" : ""}`}>{p}</button>
            ))}
            <button className={`${base} border-s-0 rounded-e-lg`} disabled={page >= lastPage} onClick={() => onChange(page + 1)}><ArrowRight size={18} /></button>
        </div>
    )
}
