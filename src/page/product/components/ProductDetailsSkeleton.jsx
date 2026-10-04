import Skeleton from '@mui/material/Skeleton';
export const ProductDetailsSkeleton = () => {
    return (
        <div className="flex flex-col gap-4 p-5">
            {/* Stock badge & Title */}
            <div className="space-y-2">
                <Skeleton
                    variant="text"
                    width={80}
                    height={16}
                    animation="wave"
                />
                <Skeleton
                    variant="text"
                    width="80%"
                    height={38}
                    animation="wave"
                />
            </div>

            {/* Stars, Reviews, and Sold row */}
            <div className="flex items-center gap-4">
                <Skeleton
                    variant="rectangular"
                    width={90}
                    height={18}
                    animation="wave"
                    className="rounded!"
                />
                <Skeleton
                    variant="text"
                    width={70}
                    height={18}
                    animation="wave"
                />
                <Skeleton
                    variant="text"
                    width={60}
                    height={18}
                    animation="wave"
                />
            </div>

            {/* Highlighted Price Banner */}
            <div className="flex p-5 gap-8 w-full rounded-md bg-orange-200/80 dark:bg-pink-950">
                <Skeleton
                    variant="text"
                    width={100}
                    height={32}
                    animation="wave"
                />
            </div>

            {/* SKU, Category, Color block */}
            <div className="flex flex-col border-b border-gray-300 dark:border-gray-600 pb-3 gap-3">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex justify-between items-center px-5">
                        <Skeleton
                            variant="text"
                            width={60}
                            height={18}
                            animation="wave"
                        />
                        <Skeleton
                            variant="text"
                            width={90}
                            height={18}
                            animation="wave"
                        />
                    </div>
                ))}
            </div>

            {/* Description lines */}
            <div className="flex flex-col border-b border-gray-300 dark:border-gray-600 gap-2 pb-3">
                <Skeleton
                    variant="text"
                    width="100%"
                    height={16}
                    animation="wave"
                />
                <Skeleton
                    variant="text"
                    width="90%"
                    height={16}
                    animation="wave"
                />
                <Skeleton
                    variant="text"
                    width="60%"
                    height={16}
                    animation="wave"
                />
            </div>
        </div>
    );
};