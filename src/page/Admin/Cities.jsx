import { ResourcePage } from "../../components/Admin/ResourcePage";
import { AdminCityService } from "../../services/Admin/AdminCityService";
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

export const Cities = () => (
    <ResourcePage title="Cities" addLabel="Add city" service={AdminCityService} columns={columns} createFields={fields} toForm={toForm} />
)
