import { ResourcePage } from "../../components/Admin/ResourcePage";
import { StatusBadge } from "../../components/Admin/StatusBadge";
import { AdminOrderService } from "../../services/Admin/AdminOrderService";
import { text } from "./utils/adminHelpers";

const statuses = ["pending", "processing", "shipped", "delivered", "cancelled"].map((s) => ({ value: s, label: s }));

const createFields = [
    { name: "customer_id", label: "Customer ID", type: "number", required: true },
    { name: "address_id", label: "Address ID", type: "number", required: true },
    { name: "notes", label: "Notes", type: "textarea" },
];

const editFields = [
    { name: "status", label: "Status", type: "select", options: statuses, required: true },
    { name: "notes", label: "Notes", type: "textarea" },
];

const columns = [
    { label: "Order", render: (r) => `#${r.id}` },
    { label: "Customer", render: (r) => text(r.customer ?? r.user ?? r.customer_name ?? r.customer_id) },
    { label: "Address", render: (r) => text(r.address ?? r.address_id) },
    { label: "Total", render: (r) => `$${text(r.total ?? r.total_price ?? r.amount)}` },
    { label: "Status", render: (r) => <StatusBadge status={r.status} /> },
    { label: "Date", render: (r) => (r.created_at ? String(r.created_at).slice(0, 10) : "-") },
];

const toForm = (item) => ({ status: item.status, notes: item.notes });

export const Orders = () => (
    <ResourcePage title="Orders" addLabel="Add order" service={AdminOrderService} columns={columns} createFields={createFields} editFields={editFields} toForm={toForm} showView />
)
