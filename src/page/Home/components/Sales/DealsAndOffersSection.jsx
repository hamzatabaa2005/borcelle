import { SalesProductSectionLayout } from '../../../../layout/SalesProductSectionLayout';
import { SalesSectionCardSkeleton, SalesProductCardSkeleton } from './SalesProductCardSkeleton';

import { SalesProductCard } from "../SalesProductCard"
import DaysTimer from '../../../../components/DaysTimer';
import { useState } from 'react';
export const DealsAndOffersSection = ({ salesProducts, isLoading }) => {
    const initialSeconds = 4 * 86400 + 13 * 3600 + 34 * 60 + 56;

    const [seconds, setSeconds] = useState(initialSeconds);
    if (isLoading || !salesProducts) {
        return (
            <SalesProductSectionLayout>
                <SalesSectionCardSkeleton />

                {Array.from({ length: 5 }).map((_, index) => (
                    <SalesProductCardSkeleton key={index} />
                ))}
            </SalesProductSectionLayout>
        );
    }

    return (
        <SalesProductSectionLayout>
            <div className="p-5 space-y-3">
                <div>
                    <h2 className="text-2xl xl:text-3xl font-bold leading-tight dark:text-white">Deals and Offers</h2>
                    <p className="text-base text-gray-700 dark:text-white">equipments</p>
                </div>
                <DaysTimer seconds={seconds} setSeconds={setSeconds} />
            </div>

            {salesProducts.slice(0, 5).map((product) => (
                <SalesProductCard
                    key={product.id}
                    title={product.name}
                    sale={product.sale}
                    img={product.image}
                    id={product.id}
                />
            ))}
        </SalesProductSectionLayout>
    );
};