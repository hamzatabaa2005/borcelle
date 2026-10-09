import { useEffect, useState } from "react";
import { Modal } from "../Modal";
import { toNested } from "../../page/Admin/utils/adminHelpers";

const inputStyle = "w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-2 focus:outline-none focus:border-pink-500";

// fields: [{ name:"en.name", label, type:"text|number|textarea|select", options?, loadOptions?, required? }]
export const FormModal = ({ title, fields, initial = {}, onSubmit, onClose }) => {

    const [values, setValues] = useState(initial);
    const [options, setOptions] = useState({});
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        let ignore = false;
        fields.filter((f) => f.loadOptions).forEach((f) => {
            f.loadOptions()
                .then((list) => { if (!ignore) setOptions((o) => ({ ...o, [f.name]: list })); })
                .catch(() => { });
        });
        return () => { ignore = true; };
    }, [fields]);

    const handleChange = (name, value) => setValues((v) => ({ ...v, [name]: value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        const flat = {};
        fields.forEach((f) => {
            const raw = values[f.name];
            if (raw === undefined || raw === null || raw === "") return;
            flat[f.name] = f.type === "number" ? Number(raw) : raw;
        });

        setSaving(true);
        setError("");
        onSubmit(toNested(flat))
            .catch((err) => { setError(err.message); setSaving(false); });
    }

    return (
        <Modal showModal={true}>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 mx-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{title}</h2>

                <div className="flex flex-col gap-3">
                    {fields.map((f) => (
                        <label key={f.name} className="flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-300">
                            {f.label}
                            {f.type === "textarea" && (
                                <textarea dir="auto" rows={3} className={inputStyle} value={values[f.name] ?? ""} onChange={(e) => handleChange(f.name, e.target.value)} />
                            )}
                            {f.type === "select" && (
                                <select className={inputStyle} required={f.required} value={values[f.name] ?? ""} onChange={(e) => handleChange(f.name, e.target.value)}>
                                    <option value="">Select...</option>
                                    {(f.options ?? options[f.name] ?? []).map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                                </select>
                            )}
                            {(f.type === "text" || f.type === "number" || !f.type) && (
                                <input dir="auto" type={f.type ?? "text"} step={f.type === "number" ? "any" : undefined} required={f.required} className={inputStyle} value={values[f.name] ?? ""} onChange={(e) => handleChange(f.name, e.target.value)} />
                            )}
                        </label>
                    ))}
                </div>

                {error && <p className="mt-3 text-sm text-red-600 dark:text-red-400">{error}</p>}

                <div className="flex justify-end gap-3 mt-6">
                    <button type="button" onClick={onClose} className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200">Cancel</button>
                    <button type="submit" disabled={saving} className="px-4 py-2 rounded-md bg-pink-700 hover:bg-pink-600 text-white disabled:opacity-60">{saving ? "Saving..." : "Save"}</button>
                </div>
            </form>
        </Modal>
    )
}
