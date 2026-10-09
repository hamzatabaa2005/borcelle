// Mock data for dashboard parts that the Admin API does not provide yet.
// When real endpoints exist, replace these imports in Dashboard.jsx.

export const mockStats = {
    products: 1240,
    orders: 386,
    categories: 24,
    brands: 58,
};

export const ordersWeek = {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    data: [42, 28, 19, 35, 61, 24, 47],
};

export const revenueMonthly = {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    data: [4200, 3900, 5100, 4800, 6200, 5700, 6900, 7300, 6600, 7800, 8400, 9100],
};

export const orderStatus = {
    labels: ["Delivered", "Pending", "Processing", "Cancelled"],
    data: [58, 21, 14, 7],
};

export const mockOrders = [
    { id: 1832, customer: "Sara A.", total: 240, status: "delivered" },
    { id: 1831, customer: "Omar K.", total: 89, status: "pending" },
    { id: 1830, customer: "Lina M.", total: 150, status: "processing" },
    { id: 1829, customer: "Yousef T.", total: 310, status: "cancelled" },
    { id: 1828, customer: "Huda R.", total: 64, status: "delivered" },
];
