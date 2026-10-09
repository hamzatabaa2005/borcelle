import { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import { DataTable } from "./DataTable";
import { AdminPagination } from "./AdminPagination";
import { FormModal } from "./FormModal";
import { ConfirmDelete } from "./ConfirmDelete";
import { ViewModal } from "./ViewModal";
import { extractList, extractLastPage } from "../../page/Admin/utils/adminHelpers";

// One reusable CRUD page. Each admin page (Products, Brands...) is just a config for this.
export const ResourcePage = ({ title, addLabel, service, columns, createFields, editFields, toForm, transform, showView = false }) => {

    const [page, setPage] = useState(1);
    const [reload, setReload] = useState(0);
    const [query, setQuery] = useState("");
    const [modal, setModal] = useState(null); // {type:"form"|"delete"|"view", item}
    const [result, setResult] = useState({ key: null, list: [], lastPage: 1, error: "" });

    const requestKey = `${page}-${reload}`;
    const loading = result.key !== requestKey;

    useEffect(() => {
        let ignore = false;
        service.GetAll(page)
            .then((res) => { if (!ignore) setResult({ key: requestKey, list: extractList(res), lastPage: extractLastPage(res), error: "" }); })
            .catch((err) => { if (!ignore) setResult({ key: requestKey, list: [], lastPage: 1, error: err.message }); });
        return () => { ignore = true; };
    }, [service, page, requestKey]);

    const rows = query
        ? result.list.filter((r) => JSON.stringify(r).toLowerCase().includes(query.toLowerCase()))
        : result.list;

    const refresh = () => { setModal(null); setReload((r) => r + 1); }

    const handleSave = (payload) => {
        const data = transform ? transform(payload) : payload;
        const item = modal.item;
        return (item ? service.Update(item.id, data) : service.Create(data)).then(refresh);
    }

    const editing = modal?.type === "form" ? modal.item : null;
    const formFields = editing ? (editFields ?? createFields) : createFields;

    return (
        <div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Admin / {title}</p>
                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">{title}</h1>
                </div>
                <div className="flex items-center gap-3">
                    <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search this page"
                        className="rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-2 text-sm focus:outline-none focus:border-pink-500" />
                    {createFields && (
                        <button onClick={() => setModal({ type: "form", item: null })} className="flex items-center gap-2 px-4 py-2 rounded-md bg-pink-700 hover:bg-pink-600 text-white text-sm">
                            <LuPlus /> {addLabel}
                        </button>
                    )}
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
                {result.error && <p className="mb-3 text-sm text-red-600 dark:text-red-400">Could not load data: {result.error}</p>}
                <DataTable
                    columns={columns}
                    rows={rows}
                    loading={loading}
                    onView={showView ? (item) => setModal({ type: "view", item }) : undefined}
                    onEdit={(editFields ?? createFields) ? (item) => setModal({ type: "form", item }) : undefined}
                    onDelete={(item) => setModal({ type: "delete", item })}
                />
                <AdminPagination page={page} lastPage={result.lastPage} onChange={setPage} />
            </div>

            {modal?.type === "form" && (
                <FormModal
                    key={editing?.id ?? "new"}
                    title={editing ? `Edit ${title.toLowerCase()}` : addLabel}
                    fields={formFields}
                    initial={editing && toForm ? toForm(editing) : {}}
                    onSubmit={handleSave}
                    onClose={() => setModal(null)}
                />
            )}
            {modal?.type === "delete" && (
                <ConfirmDelete onConfirm={() => service.Delete(modal.item.id).then(refresh)} onClose={() => setModal(null)} />
            )}
            {modal?.type === "view" && (
                <ViewModal service={service} id={modal.item.id} onClose={() => setModal(null)} />
            )}
        </div>
    )
}
