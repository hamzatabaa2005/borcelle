import { ProductDetails } from "./ProductDetails";
import { ProductDetailsSkeleton } from "./ProductDetailsSkeleton";
import { ProductImg } from "./ProductImg";
import { ProductImgSkeleton } from "./ProductImgSkeleton";
import { SupplierCard } from "./SupplierCard";
import { SupplierCardSkeleton } from "./SupplierCardSkeleton";


export const ProductDetailPage = ({ product, supplier, isLoading }) => {
    return (
        <div className="grid lg:grid-cols-12 border border-gray-300 dark:border-gray-600 rounded-md my-5">

            <div className="lg:col-span-4 p-4">
                {isLoading || !product ? (
                    <ProductImgSkeleton />
                ) : (
                    <ProductImg img1={product.image} images={product.images} />
                )}
            </div>

            <div className="lg:col-span-5">
                {isLoading || !product ? (
                    <ProductDetailsSkeleton />
                ) : (
                    <ProductDetails
                        inStock={true}
                        title={product.name}
                        rate={5}
                        numberOfReview={50}
                        numberOfSold={100}
                        price={product.price}
                        sku={product.sku}
                        category={product.category?.name}
                        color={product.colors?.[0]?.name}
                        description={product.description}
                        id={product.id}
                    />
                )}
            </div>

            <div className="lg:col-span-3 p-3">
                {isLoading || !supplier ? (
                    <SupplierCardSkeleton />
                ) : (
                    <SupplierCard
                        supplierName={supplier.name}
                        country={supplier.country}
                        isVerified={true}
                    />
                )}
            </div>
        </div>
    );
};