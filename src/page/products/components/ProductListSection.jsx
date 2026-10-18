import { ProductCard } from './ProductCard';
import { ProductCardSkeleton } from './ProductCardSkeleton';

export const ProductListSection = ({ productsData, isLoading, grid, from = 0, to = 6 }) => {
    return (
        <div className={`grid gap-2 py-5 ${grid ? 'xl:grid-cols-3  lg:grid-cols-2  md:grid-cols-2 grid-cols-1' : 'grid-cols-1'}`}>
            {isLoading || !productsData ? (
                Array.from({ length: 6 }).map((_, index) => (
                    <ProductCardSkeleton key={index} isCol={grid} />
                ))
            ) : (
                productsData.slice(from, to).map((product, index) => (
                    <ProductCard
                        key={index}
                        {...product}
                        isCol={grid}

                    />
                ))
            )}
        </div>
    );
};