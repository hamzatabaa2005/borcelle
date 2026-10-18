import { ResourcePage } from "../../components/Admin/ResourcePage";
import { AdminCategoryService } from "../../services/Admin/AdminCategoryService";
import { getName, getTr } from "./utils/adminHelpers";

const fields = [
    { name: "en.name", label: "Name ", required: true },
];

const columns = [
    { label: "ID", render: (r) => r.id },
    { label: "Name ", render: (r) => getName(r) },
];

const toForm = (item) => ({ "en.name": getTr(item, "en") });

export const Categories = () => (
    <ResourcePage title="Categories" addLabel="Add category" service={AdminCategoryService} columns={columns} createFields={fields} toForm={toForm} />
)
