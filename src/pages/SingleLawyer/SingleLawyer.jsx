import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useSearchMutations from '../../hooks/Search/useSearchMutations';
import { useQueryClient } from 'react-query';
import { FormattedMessage } from 'react-intl';
import { LawyerCard } from '../../components/LawyerCard/LawyerCard';
import { SectionLayout } from '../../components/SectionLayout/SectionLayout';
import Loading from '../../components/Categories/Loading/Loading';
import { useCategoriesData, useLawyerData } from '../../queries/queries';
import { PersonalInformation } from '../../components/PersonalInformation/PersonalInformation';
import { BookingInformation } from '../../components/BookingInformation/BookingInformation';
// import SearchResult from './SearchResult'; // Importing the SearchResult component

export const SingleLawyer = () => {
    let { lawyerId } = useParams();
    const { data: LawyerData, isLoading } = useLawyerData(lawyerId);

    let content;
    if (isLoading) {
        content = <Loading />;
    }
    else if (!LawyerData) {
        content = <h2 className="fw-bolder text-center"><FormattedMessage id='noCategories' /></h2>;
    } else {
        content = (
            <div className='grid grid-cols-12 gap-8 m-auto'>
                <div className='col-span-12 md:col-span-7'><PersonalInformation LawyerData={LawyerData} /></div>
                <div className='col-span-12 md:col-span-5'><BookingInformation /></div>
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
