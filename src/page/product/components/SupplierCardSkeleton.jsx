import Skeleton from '@mui/material/Skeleton';

export const SupplierCardSkeleton = () => {
    return (
        <div className="border border-gray-200 dark:border-gray-600 p-4 rounded-md">

            <div className="pb-4 border-b border-gray-200 flex gap-2 items-center">
                <Skeleton
                    variant="rectangular"
                    width={32}
                    height={32}
                    animation="wave"
                    className="rounded-md! "
                />
                <Skeleton
                    variant="text"
                    width={120}
                    height={20}
                    animation="wave"
                />
            </div>

            <div className="flex flex-col gap-2 my-3">
                <Skeleton
                    variant="text"
                    width={80}
                    height={16}
                    animation="wave"
                />
                <Skeleton
                    variant="text"
                    width={130}
                    height={16}
                    animation="wave"
                />
                <Skeleton
                    variant="text"
                    width={150}
                    height={16}
                    animation="wave"
                />
            </div>

            <div className="flex flex-col my-3 gap-2">
                <Skeleton
                    variant="rectangular"
                    width="100%"
                    height={38}
                    animation="wave"
                    className="rounded-md!"
                />
                <Skeleton
                    variant="rectangular"
                    width="100%"
                    height={38}
                    animation="wave"
                    className="rounded-md!"
                />
            </div>
        </div>
    );
};