import { RecommendedProductCard } from './RecommendedProductCard';
import { RecommendedProductCardSkeleton } from './RecommendedProductCardSkeleton';
import { SectionLayout } from '../../../../layout/SectionLayout';
export const RecommendedSection = ({ recProducts, isLoading }) => {
    return (
        <SectionLayout styleSection="space-y-5" title="Recommended items">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {isLoading || !recProducts ? (
                    Array.from({ length: 10 }).map((_, index) => (
                        <RecommendedProductCardSkeleton key={index} />
                    ))
                ) : (
                    recProducts.slice(3, 13).map((product, index) => (
                        <RecommendedProductCard
                            key={product.id || index}
                            price={product.price}
                            description={product.name}
                            img={product.image}
                            id={product.id}
                        />
                    ))
                )}
            </div>
        </SectionLayout>
    );
};