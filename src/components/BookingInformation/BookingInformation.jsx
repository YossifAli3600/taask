import React from 'react'
import NavAndTabs from '../NavsAndTabs/NavsAndTabs'
import { PricesTab } from '../PricesTab/PricesTab'
import { TimesTab } from '../TimesTab/TimesTab'

export const BookingInformation = () => {
    return (
        <div className='bg-white dark:bg-slate-500 dark:text-white  p-6 rounded-md'>
            <NavAndTabs
                defaultValue='pricesTab'
                tabs={[
                    {
                        target: 'pricesTab',
                        element: "أسعار الخدمات"
                    },
                    {
                        target: 'timesTab',
                        element: "أوقات العمل"
                    }
                ]}
                tabsContent={[
                    {
                        id: 'pricesTab',
                        element: <PricesTab />
                    },
                    {
                        id: 'timesTab',
                        element: <TimesTab />
                    }
                ]}
            />
        </div>
    )
}
