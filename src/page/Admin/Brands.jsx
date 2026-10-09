import { ResourcePage } from "../../components/Admin/ResourcePage";
import { AdminBrandService } from "../../services/Admin/AdminBrandService";
import { getName, getTr } from "./utils/adminHelpers";

const fields = [
    { name: "name", label: "Name (EN)", required: true }
];

const columns = [
    { label: "ID", render: (r) => r.id },
    { label: "Name (EN)", render: (r) => getName(r) },
    { label: "Name (AR)", render: (r) => <span dir="rtl">{getTr(r, "ar") || "-"}</span> },
];

const toForm = (item) => ({ "en.name": getTr(item, "en"), "ar.name": getTr(item, "ar") });

// The brand API also expects a top-level "name"; we fill it from the English name
const transform = (payload) => (payload.en?.name ? { name: payload.en.name, ...payload } : payload);

export const Brands = () => (
    <ResourcePage title="Brands" addLabel="Add brand" service={AdminBrandService} columns={columns} createFields={fields} toForm={toForm} transform={transform} />
)
