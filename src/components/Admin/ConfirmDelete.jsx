import { useState } from "react";
import { Modal } from "../Modal";
import { LuTrash2 } from "react-icons/lu";

export const ConfirmDelete = ({ onConfirm, onClose }) => {

    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");

    const handleConfirm = () => {
        setBusy(true);
        setError("");
        onConfirm().catch((err) => { setError(err.message); setBusy(false); });
    }

    return (
        <Modal showModal={true}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-sm p-6 mx-4 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xl"><LuTrash2 /></div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Delete this item?</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">This action cannot be undone.</p>
                {error && <p className="mt-3 text-sm text-red-600 dark:text-red-400">{error}</p>}
                <div className="flex justify-center gap-3 mt-5">
                    <button onClick={onClose} className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200">Cancel</button>
                    <button onClick={handleConfirm} disabled={busy} className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-500 text-white disabled:opacity-60">{busy ? "Deleting..." : "Delete"}</button>
                </div>
            </div>
        </Modal>
    )
}
