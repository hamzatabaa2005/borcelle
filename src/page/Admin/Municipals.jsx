import { ResourcePage } from "../../components/Admin/ResourcePage";
import { AdminMunicipalService } from "../../services/Admin/AdminMunicipalService";
import { AdminCityService } from "../../services/Admin/AdminCityService";
import { extractList, getName, getTr, text } from "./utils/adminHelpers";

const loadCities = () => AdminCityService.GetAll(1).then((res) => extractList(res).map((c) => ({ value: c.id, label: getName(c) })));

const fields = [
    { name: "city_id", label: "City", type: "select", required: true, loadOptions: loadCities },
    { name: "en.name", label: "Name (EN)", required: true },
    { name: "ar.name", label: "Name (AR)", required: true },
];

const columns = [
    { label: "ID", render: (r) => r.id },
    { label: "Name (EN)", render: (r) => getName(r) },
    { label: "Name (AR)", render: (r) => <span dir="rtl">{getTr(r, "ar") || "-"}</span> },
    { label: "City", render: (r) => (r.city ? getName(r.city) : text(r.city_name ?? r.city_id)) },
];

const toForm = (item) => ({ "city_id": item.city_id ?? item.city?.id, "en.name": getTr(item, "en"), "ar.name": getTr(item, "ar") });

export const Municipals = () => (
    <ResourcePage title="Municipals" addLabel="Add municipal" service={AdminMunicipalService} columns={columns} createFields={fields} toForm={toForm} />
)
