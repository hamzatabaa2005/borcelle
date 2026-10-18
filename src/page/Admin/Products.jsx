import { LuImage } from "react-icons/lu";
import { ResourcePage } from "../../components/Admin/ResourcePage";
import { AdminProductService } from "../../services/Admin/AdminProductService";
import { AdminCategoryService } from "../../services/Admin/AdminCategoryService";
import { extractList, getName, getTr, text } from "./utils/adminHelpers";

const loadCategories = () => AdminCategoryService.GetAll(1).then((res) => extractList(res).map((c) => ({ value: c.id, label: getName(c) })));

const fields = [
    { name: "sku", label: "SKU", required: true },
    { name: "category_id", label: "Category", type: "select", required: true, loadOptions: loadCategories },
    { name: "price", label: "Price", type: "number", required: true },
    { name: "en.name", label: "Name (EN)" },
    { name: "en.description", label: "Description (EN)", type: "textarea" },
    { name: "ar.name", label: "Name (AR)" },
    { name: "ar.description", label: "Description (AR)", type: "textarea" },
    { name: "image", label: "Image (optional)", type: "file" },
];

// editing a product does not change its image
const editFields = fields.filter((f) => f.type !== "file");

const columns = [
    {
        label: "Image", render: (r) => {
            const src = r.image ?? r.thumbnail ?? r.images?.[0]?.url ?? r.images?.[0];
            return typeof src === "string"
                ? <img src={src} alt="" className="w-9 h-9 rounded-md object-cover" />
                : <span className="w-9 h-9 rounded-md bg-gray-100 dark:bg-gray-700 text-pink-600 flex items-center justify-center"><LuImage /></span>;
        }
    },
    { label: "SKU", render: (r) => text(r.sku) },
    { label: "Name (EN)", render: (r) => getName(r) },
    { label: "Name (AR)", render: (r) => <span dir="rtl">{getTr(r, "ar") || "-"}</span> },
    { label: "Category", render: (r) => text(r.category ?? r.category_name ?? r.category_id) },
    { label: "Price", render: (r) => `$${text(r.price)}` },
];

const toForm = (item) => ({
    "sku": item.sku,
    "category_id": item.category_id ?? item.category?.id,
    "price": item.price,
    "en.name": getTr(item, "en"),
    "en.description": getTr(item, "en", "description"),
    "ar.name": getTr(item, "ar"),
    "ar.description": getTr(item, "ar", "description"),
});

export const Products = () => (
    <ResourcePage title="Products" addLabel="Add product" service={AdminProductService} columns={columns} createFields={fields} editFields={editFields} toForm={toForm} showView />
)
