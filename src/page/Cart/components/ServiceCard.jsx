
export const ServiceCard = ({ icon, serviceName, description, ...props }) => {
    return (
        <div {...props}>
            <div className="flex gap-2 items-center dark:text-white">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-500">
                    {icon}
                </div>
                <div>
                    <h3>{serviceName}</h3>
                    <p className="text-gray-500 dark:text-white">{description}</p>
                </div>
            </div>
        </div>
    )
}
