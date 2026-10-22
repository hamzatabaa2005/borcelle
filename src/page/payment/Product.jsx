export const Product = ({ img, title, quantity, price }) => {
    return (
        <div className="flex justify-between items-start gap-4 py-4 border-b border-gray-100 last:border-b-0 dark:border-gray-700 md:text-black text-white dark:text-white">
            <div className="flex gap-4 min-w-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden" >
                    <img src={img} alt={title} loading="lazy" className="w-full h-full object-cover object-center " /></div >
                <div className="min-w-0">
                    <h2 className="text-lg font-semibold leading-snug line-clamp-2">{title}</h2>
                    <p className="mt-1 text-sm text-gray-300 md:text-gray-500 dark:text-gray-400">Qty: {quantity}</p>
                </div>
            </div >
            <span className="shrink-0 text-xl font-bold text-pink-600">{price * quantity}</span>
        </div >
    )
}
