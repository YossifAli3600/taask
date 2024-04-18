import React, { Fragment } from 'react'
import { PriceCard } from '../PriceCard/PriceCard'
import { useParams } from 'react-router';
import { useLawyerData } from '../../queries/queries';

export const PricesTab = () => {
    let { lawyerId } = useParams();
    const { data: LawyerData, isLoading } = useLawyerData(lawyerId);
    console.log()
    return (
        <Fragment>
            {LawyerData.lawyer.services.map((service) => {
                return (
                    <PriceCard service={service} />
                )
            })}
        </Fragment>
    )
}
