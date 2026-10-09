import { useEffect, useState } from "react";
import { Modal } from "../Modal";

export const ViewModal = ({ service, id, onClose }) => {

    const [state, setState] = useState({ loaded: false, data: null, error: "" });

    useEffect(() => {
        let ignore = false;
        service.GetById(id)
            .then((res) => { if (!ignore) setState({ loaded: true, data: res?.data ?? res, error: "" }); })
            .catch((err) => { if (!ignore) setState({ loaded: true, data: null, error: err.message }); });
        return () => { ignore = true; };
    }, [service, id]);

    const entries = state.data && typeof state.data === "object" ? Object.entries(state.data) : [];

    return (
        <Modal showModal={true}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 mx-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Details</h2>
                {!state.loaded && <p className="text-gray-500 dark:text-gray-400">Loading...</p>}
                {state.error && <p className="text-red-600 dark:text-red-400">{state.error}</p>}
                <dl className="text-sm">
                    {entries.map(([k, v]) => (
                        <div key={k} className="flex justify-between gap-4 py-2 border-b border-gray-100 dark:border-gray-700">
                            <dt className="text-gray-500 dark:text-gray-400">{k}</dt>
                            <dd className="text-gray-800 dark:text-white text-right break-all">{v !== null && typeof v === "object" ? JSON.stringify(v) : String(v ?? "-")}</dd>
                        </div>
                    ))}
                </dl>
                <div className="flex justify-end mt-5">
                    <button onClick={onClose} className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200">Close</button>
                </div>
            </div>
        </Modal>
    )
}
