import Skeleton from '@mui/material/Skeleton';

// Left Column Skeleton (Main Image Gallery)
export const ProductImgSkeleton = () => {
    return (
        <div>
            <div className="w-full h-[70vh] rounded-md overflow-hidden mb-2">
                <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="100%"
                    animation="wave"
                />
            </div>

            <div className="grid grid-cols-6 gap-2">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="w-14 h-14 rounded-md overflow-hidden">
                        <Skeleton
                            variant="rectangular"
                            width="100%"
                            height="100%"
                            animation="wave"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};