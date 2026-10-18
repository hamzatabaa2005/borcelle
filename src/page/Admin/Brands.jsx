import { ResourcePage } from "../../components/Admin/ResourcePage";
import { AdminBrandService } from "../../services/Admin/AdminBrandService";
import { getName, getTr } from "./utils/adminHelpers";

const fields = [
    { name: "name", label: "Name ", required: true }
];

const columns = [
    { label: "ID", render: (r) => r.id },
    { label: "Name ", render: (r) => getName(r) },
];

const toForm = (item) => ({ "en.name": getTr(item, "en") });

// The brand API also expects a top-level "name"; we fill it from the English name
const transform = (payload) => (payload.en?.name ? { name: payload.en.name, ...payload } : payload);

export const Brands = () => (
    <ResourcePage title="Brands" addLabel="Add brand" service={AdminBrandService} columns={columns} createFields={fields} toForm={toForm} transform={transform} />
)
