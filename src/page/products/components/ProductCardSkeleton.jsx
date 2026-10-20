import Skeleton from '@mui/material/Skeleton';

export const ProductCardSkeleton = ({ isCol = true }) => {
    return (
        <div
            className={`flex relative border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden ${isCol ? 'flex-col h-[460px]' : 'gap-5 h-[180px] p-2'
                }`}
        >
            {/* Favorite Button Skeleton */}
            <div className="absolute right-2.5 top-2.5 z-10">
                <Skeleton
                    variant="rectangular"
                    width={32}
                    height={32}
                    animation="wave"
                    className="!rounded-md "
                />
            </div>

            {/* Image Skeleton */}
            <div className={`shrink-0 ${isCol ? 'h-1/2 w-full' : 'h-full w-1/3'}`}>
                <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="100%"
                    animation="wave"
                />
            </div>

            {/* Details Container */}
            <div className={`p-2 space-y-2 flex-1 ${isCol ? 'relative' : ''}`}>
                {/* Name/Title (Shown in list view or grid layout) */}
                <Skeleton
                    variant="text"
                    width={isCol ? '85%' : '60%'}
                    height={20}
                    animation="wave"
                />

                {/* Price Skeleton */}
                <Skeleton
                    variant="text"
                    width="40%"
                    height={22}
                    animation="wave"
                />

                {/* Rating / Meta Info Row */}
                <div className="flex gap-3 items-center">
                    <Skeleton
                        variant="rectangular"
                        width={80}
                        height={16}
                        animation="wave"
                        className="!rounded"
                    />
                    {!isCol && (
                        <Skeleton
                            variant="text"
                            width={60}
                            height={16}
                            animation="wave"
                        />
                    )}
                </div>

                {/* Description Lines */}
                <div className="space-y-1 pt-1">
                    <Skeleton
                        variant="text"
                        width="95%"
                        height={16}
                        animation="wave"
                    />
                    <Skeleton
                        variant="text"
                        width="70%"
                        height={16}
                        animation="wave"
                    />
                </div>
            </div>
        </div>
    );
};