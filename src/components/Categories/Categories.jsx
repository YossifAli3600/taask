import React, { Fragment } from 'react'
import { useCategoriesData } from '../../queries/queries';
import Loading from './Loading/Loading';
import { FormattedMessage } from 'react-intl';
import { CategoryCard } from '../CategoryCard/CategoryCard';

export default function Categories() {

    const { data: categories, isLoading } = useCategoriesData();
    let content;
    if (isLoading) {
        content = <Loading />;
    } else if (!categories.categories || !categories.categories.length) {
        content = <h2 className="fw-bolder text-center"><FormattedMessage id='noCategories' /></h2>;
    } else {
        content = (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {categories.categories.map((category) => {
                    return (
                        <CategoryCard key={category.id} category={category} />
                    )
                })}
            </div>
        );
    }

    return (
        <div className='custom_container'>
            <div className=" flex items-center justify-between mb-3">
                <h5 className="font-bold mb-0">
                    <FormattedMessage id='categoriesNumber' /> : <span>{categories?.categories ? categories?.categories?.length : 0}</span>
                </h5>
            </div>
            {content}
        </div>
    );
}