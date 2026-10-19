import { useContext, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { LuPackage, LuShoppingCart, LuTags, LuTag } from "react-icons/lu";
import { StatCard } from "../../components/Admin/StatCard";
import { ChartCard } from "../../components/Admin/ChartCard";
import { StatusBadge } from "../../components/Admin/StatusBadge";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { AdminProductService } from "../../services/Admin/AdminProductService";
import { AdminCategoryService } from "../../services/Admin/AdminCategoryService";
import { AdminOrderService } from "../../services/Admin/AdminOrderService";
import { AdminBrandService } from "../../services/Admin/AdminBrandService";
import { extractList, extractTotal, text } from "./utils/adminHelpers";
import { mockStats, ordersWeek, revenueMonthly, orderStatus, mockOrders } from "./data/mockStats";

export const Dashboard = () => {

    const { mode } = useContext(ThemeContext);
    const [live, setLive] = useState({ stats: {}, orders: [] });

    useEffect(() => {
        let ignore = false;
        Promise.allSettled([
            AdminProductService.GetAll(1),
            AdminOrderService.GetAll(1),
            AdminCategoryService.GetAll(1),
            AdminBrandService.GetAll(1),
        ]).then(([p, o, c, b]) => {
            if (ignore) return;
            const total = (r) => (r.status === "fulfilled" ? extractTotal(r.value) : undefined);
            setLive({
                stats: { products: total(p), orders: total(o), categories: total(c), brands: total(b) },
                orders: o.status === "fulfilled" ? extractList(o.value).slice(0, 5) : [],
            });
        });
        return () => { ignore = true; };
    }, []);

    const stat = (key) => (live.stats[key] ?? mockStats[key]).toLocaleString();

    const recent = live.orders.length
        ? live.orders.map((o) => ({ id: o.id, customer: text(o.customer ?? o.user ?? o.customer_name), total: o.total ?? o.total_price ?? o.amount ?? "-", status: o.status }))
        : mockOrders;

    const fore = mode === "dark" ? "#e5e7eb" : "#4b5563";
    const white = { chart: { toolbar: { show: false }, background: "transparent", foreColor: "#fff" }, grid: { borderColor: "rgba(255,255,255,0.25)", strokeDashArray: 4 }, dataLabels: { enabled: false }, tooltip: { theme: "dark" } };

    const barOptions = { ...white, colors: ["#ffffff"], plotOptions: { bar: { columnWidth: "18%", borderRadius: 4 } }, xaxis: { categories: ordersWeek.categories } };
    const lineOptions = { ...white, colors: ["#ffffff"], stroke: { curve: "smooth", width: 3 }, markers: { size: 4 }, xaxis: { categories: revenueMonthly.categories } };
    const donutOptions = { chart: { background: "transparent", foreColor: fore }, labels: orderStatus.labels, colors: ["#be185d", "#f472b6", "#fbcfe8", "#6b7280"], legend: { position: "bottom" }, dataLabels: { enabled: false }, stroke: { colors: [mode === "dark" ? "#1f2937" : "#ffffff"] } };

    return (
        <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Admin / Dashboard</p>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Dashboard</h1>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
                <StatCard title="Products" value={stat("products")} icon={<LuPackage />} note="Total in catalog" />
                <StatCard title="Orders" value={stat("orders")} icon={<LuShoppingCart />} note="All orders" />
                <StatCard title="Categories" value={stat("categories")} icon={<LuTags />} note="Active categories" />
                <StatCard title="Brands" value={stat("brands")} icon={<LuTag />} note="Registered brands" />
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mt-10">
                <ChartCard title="Orders this week" subtitle="Sample data until a stats endpoint exists">
                    <Chart type="bar" height={200} series={[{ name: "Orders", data: ordersWeek.data }]} options={barOptions} />
                </ChartCard>
                <ChartCard title="Monthly revenue" subtitle="Sample data until a stats endpoint exists" tone="dark">
                    <Chart type="line" height={200} series={[{ name: "Revenue", data: revenueMonthly.data }]} options={lineOptions} />
                </ChartCard>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mt-6">
                <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Recent orders</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead>
                                <tr className="text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                                    <th className="py-2 px-2 font-medium">Order</th><th className="py-2 px-2 font-medium">Customer</th><th className="py-2 px-2 font-medium">Total</th><th className="py-2 px-2 font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recent.map((o) => (
                                    <tr key={o.id} className="border-b border-gray-100 dark:border-gray-700 text-gray-800 dark:text-gray-100">
                                        <td className="py-2 px-2">#{o.id}</td><td className="py-2 px-2">{o.customer}</td><td className="py-2 px-2">${o.total}</td><td className="py-2 px-2"><StatusBadge status={o.status} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Order status</h3>
                    <Chart type="donut" height={250} series={orderStatus.data} options={donutOptions} />
                </div>
            </div>
        </div>
    )
}
