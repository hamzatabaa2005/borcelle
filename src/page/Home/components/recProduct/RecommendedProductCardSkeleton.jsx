import Skeleton from '@mui/material/Skeleton';

export const RecommendedProductCardSkeleton = () => {
    return (
        <div className="block shadow-md dark:shadow-gray-800 shadow-gray-300 rounded-sm overflow-hidden">

            <Skeleton variant="rectangular" width="100%" height={200} animation="wave" />
            <div className="p-2 space-y-2">

                <Skeleton variant="text" width="40%" height={24} animation="wave" />

                <Skeleton variant="text" width="80%" height={20} animation="wave" />
            </div>
        </div>
    );
};