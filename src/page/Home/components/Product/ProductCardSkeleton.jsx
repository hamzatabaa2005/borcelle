import Skeleton from '@mui/material/Skeleton';

// Fixed Category Card Skeleton
export const CategoryCardSkeleton = () => {
    return (
        <div className="w-full h-full min-h-55 p-5 flex flex-col gap-5 bg-gray-50 dark:bg-gray-800">
            <div className="space-y-3">
                <Skeleton
                    variant="rectangular"
                    width="75%"
                    height={32}
                    animation="wave"
                    className="rounded-md!"
                />
            </div>

            <Skeleton
                variant="rectangular"
                width={110}
                height={36}
                animation="wave"
                className="rounded-md!"
            />
        </div>
    );
};

export const ProductCardSkeleton = () => {
    return (
        <div className="flex w-full h-full min-h-22.5 gap-3 p-3 items-center">

            <div className="flex-1 min-w-0 space-y-2">
                <Skeleton
                    variant="text"
                    width="90%"
                    height={18}
                    animation="wave"

                />
                <Skeleton
                    variant="text"
                    width="60%"
                    height={14}
                    animation="wave"

                />
            </div>

            <div className="w-18 shrink-0 flex items-center">
                <Skeleton
                    variant="rectangular"
                    width="100%"
                    height={65}
                    animation="wave"
                    className="rounded-sm! "
                />
            </div>
        </div>
    );
};