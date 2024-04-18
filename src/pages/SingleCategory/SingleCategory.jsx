import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useSearchMutations from '../../hooks/Search/useSearchMutations';
import { useQueryClient } from 'react-query';
import { CategoryCard } from '../../components/CategoryCard/CategoryCard';
import { FormattedMessage } from 'react-intl';
import { LawyerCard } from '../../components/LawyerCard/LawyerCard';
import { SectionLayout } from '../../components/SectionLayout/SectionLayout';
import { useStore } from '../../zustand/store';

export const SingleCategory = () => {
    let { categoryId } = useParams();
    const { handleGetCategories } = useSearchMutations("category", categoryId);
    const [LawyersData, setLawyersData] = useState([])
    const CategoryData = useStore((state) => state.CategoryData[categoryId])

    useEffect(() => {
        if(!CategoryData){
            handleGetCategories.mutate({ category_id: categoryId });
        }
    }, [categoryId])
    
    useEffect(()=>{
        setLawyersData(CategoryData)
    },[CategoryData]);

    let content;

    if (!LawyersData?.lawyers || !LawyersData?.lawyers?.length) {
        content = <h2 className="fw-bolder text-center"><FormattedMessage id='noCategories' /></h2>;
    } else {
        content = (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 dark:text-white'>
                {LawyersData?.lawyers?.map((lawyer) => {
                    return (
                        <LawyerCard key={lawyer?.id} lawyer={lawyer} />
                    )
                })}
            </div>
        );
    }
    return (

        <SectionLayout title={"المحامين"}>
            <div className='custom_container'>
                {content}
            </div>
        </SectionLayout>
    );
};
