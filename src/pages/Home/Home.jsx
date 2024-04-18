import React, { Fragment } from 'react'
import { SectionLayout } from '../../components/SectionLayout/SectionLayout'
import { FormattedMessage } from 'react-intl'
import Categories from '../../components/Categories/Categories'

export const Home = () => {
    return (
        <Fragment>
            <SectionLayout title={<FormattedMessage id='digitalGuide' />}>
                <Categories  />
            </SectionLayout>
        </Fragment>
    )
}
