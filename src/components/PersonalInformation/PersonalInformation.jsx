import React, { Fragment } from 'react'
import { LawyerInformation } from '../LawyerInformation/LawyerInformation';
import { BriefInformation } from '../BriefInformation/BriefInformation';
import { CustomersRating } from '../CustomersRating/CustomersRating';

export const PersonalInformation = ({ LawyerData }) => {
    return (
        <Fragment>
            <LawyerInformation LawyerData={LawyerData.lawyer} />
            <BriefInformation />
            <CustomersRating />
        </Fragment>
    )
}
