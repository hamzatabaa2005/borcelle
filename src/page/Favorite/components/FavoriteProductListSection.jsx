import { ProductCard } from './ProductCard';
import { ProductCardSkeleton } from '../../products/components/ProductCardSkeleton';

export const FavoriteProductListSection = ({ productsData, isLoading, grid, from = 0, to = 6 }) => {
    return (
        <div className={`grid gap-2 my-5 ${grid ? 'lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-stretch' : 'grid-cols-1'}`}>
            {isLoading || !productsData ? (
                Array.from({ length: 6 }).map((_, index) => (
                    <ProductCardSkeleton key={index} isCol={grid} />
                ))
            ) : (
                productsData.slice(from, to).map((Favorite) => {
                    return (

                        < ProductCard
                            key={Favorite.id}
                            {...Favorite.product}
                            isCol={grid}

                        />
                    )
                })
            )}
        </div >
    );
};