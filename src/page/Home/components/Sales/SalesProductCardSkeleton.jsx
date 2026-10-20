import Skeleton from '@mui/material/Skeleton';

export const SalesSectionCardSkeleton = () => {
    return (
        <div className="p-5 space-y-4 w-full h-full flex flex-col gap-3">
            <div className="space-y-2">
                <Skeleton
                    variant="rectangular"
                    width="80%"
                    height={36}
                    animation="wave"
                    className="rounded-md!"
                />
                <Skeleton
                    variant="text"
                    width="40%"
                    height={20}
                    animation="wave"
                />
            </div>

            <div className="flex gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton
                        key={i}
                        variant="rectangular"
                        width={50}
                        height={50}
                        animation="wave"
                        className="rounded-md! "
                    />
                ))}
            </div>
        </div>
    );
};

export const SalesProductCardSkeleton = () => {
    return (
        <div className="flex flex-col w-full h-full justify-between items-center p-2.5 space-y-3">

            <div className="w-full h-42">
                <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="100%"
                    animation="wave"
                    className="rounded-xl! "
                />
            </div>

            <div className="py-3 flex flex-col items-center justify-between w-full h-1/2 space-y-2">

                <Skeleton
                    variant="text"
                    width="75%"
                    height={20}
                    animation="wave"
                />
                <Skeleton
                    variant="rectangular"
                    width={60}
                    height={32}
                    animation="wave"
                    className="rounded-2xl! "
                />
            </div>
        </div>
    );
};