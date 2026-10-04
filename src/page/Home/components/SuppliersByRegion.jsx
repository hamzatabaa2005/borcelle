

export const SuppliersByRegion = ({ img, country, supplierName, ...props }) => {
    return (
        <div {...props}>
            <div className="flex  flex-wrap gap-2 items-center dark:text-white">
                <div className="h-8 w-8 shrink-0 overflow-hidden">
                    <img src={img} alt={country} loading="lazy" className="w-full h-full object-contain object-center" /></div>
                <div>
                    <h3 className="text-sm">{country}</h3>
                    <p className="text-gray-500 text-sm dark:text-white">{supplierName}</p>
                </div>
            </div>
        </div>
    )
}
