import { CategoryCard } from '../CategoryCard';
import { ProductCard } from '../ProductCard'
import { ProductSectionLayout } from '../../../../layout/ProductSectionLayout'
import { CategoryCardSkeleton, ProductCardSkeleton } from './ProductCardSkeleton';

export const ProductsSection = ({ products, isLoading, img, sectionTitle, from = 0, to = 8 }) => {
    if (isLoading || !products) {
        return (
            <ProductSectionLayout>
                <CategoryCardSkeleton />

                {Array.from({ length: 8 }).map((_, index) => (
                    <ProductCardSkeleton key={index} />
                ))}
            </ProductSectionLayout>
        );
    }

    return (
        <ProductSectionLayout>
            <CategoryCard
                img={img}
                title={sectionTitle}
                link="/"
                btnTitle="Source now"
                divStyle="space-y-7 ps-5 pt-5"
            />

            {products.slice(from, to).map((product) => (
                <ProductCard
                    key={product.id}
                    title={product.name}
                    currency={product.currency}
                    price={product.price}
                    img={product.image}
                    id={product.id}
                />
            ))}
        </ProductSectionLayout>
    );
};