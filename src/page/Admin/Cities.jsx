import { ResourcePage } from "../../components/Admin/ResourcePage";
import { AdminCityService } from "../../services/Admin/AdminCityService";
import { getName, getTr } from "./utils/adminHelpers";

const fields = [
    { name: "en.name", label: "Name ", required: true },
];

const columns = [
    { label: "ID", render: (r) => r.id },
    { label: "Name ", render: (r) => getName(r) },
];

const toForm = (item) => ({ "en.name": getTr(item, "en") });

export const Cities = () => (
    <ResourcePage title="Cities" addLabel="Add city" service={AdminCityService} columns={columns} createFields={fields} toForm={toForm} />
)
