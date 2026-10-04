
export const TermsCard = ({ title, description }) => {
    return (
        <div className="px-2 mx-2 py-4 border-b border-gray-300 dark:border-gray-600 space-y-3  dark:text-white">
            <h2 className="text-xl text-pink-700">
                {title}
            </h2>
            <p>
                {description}
            </p>
        </div>
    )
}
