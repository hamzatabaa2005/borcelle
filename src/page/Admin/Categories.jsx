import { ResourcePage } from "../../components/Admin/ResourcePage";
import { AdminCategoryService } from "../../services/Admin/AdminCategoryService";
import { getName, getTr } from "./utils/adminHelpers";

const fields = [
    { name: "en.name", label: "Name (EN)", required: true },
    { name: "ar.name", label: "Name (AR)", required: true },
];

const columns = [
    { label: "ID", render: (r) => r.id },
    { label: "Name (EN)", render: (r) => getName(r) },
    { label: "Name (AR)", render: (r) => <span dir="rtl">{getTr(r, "ar") || "-"}</span> },
];

const toForm = (item) => ({ "en.name": getTr(item, "en"), "ar.name": getTr(item, "ar") });

export const Categories = () => (
    <ResourcePage title="Categories" addLabel="Add category" service={AdminCategoryService} columns={columns} createFields={fields} toForm={toForm} />
)
