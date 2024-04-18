import React from 'react'
import { FormattedMessage } from 'react-intl'
import { RateStars } from '../RateStars/RateStars'

export const CustomersRating = () => {
    return (
        <div className='text-[#A3A4A5] dark:text-white'>
            <div className='bg-white dark:bg-slate-500 p-5 rounded-xl my-8'>
                <h3 className=' dark:text-white font-extrabold text-2xl mb-8 text-[#2C4768]'><FormattedMessage id='customersRating' /></h3>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-5'>
                        <RateStars rate={5} />
                        <span className=' max-w-[60%]'>التقييم العام من 154 من العملاء</span>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <RateStars rate={5} />
                        <span>تقييم المنصة</span>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <span className='bg-[#fec109] w-fit px-4 py-2 rounded-lg m-auto text-white'>5/5</span>
                        <span>تقييم الاستشاري</span>
                    </div>
                </div>
            </div>

            <div className='bg-white dark:bg-slate-500  p-5 rounded-xl my-8'>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col gap-5'>
                        <RateStars rate={5} />
                        <span>التقييم العام</span>
                        <span>“ استشارى ممتاز ومحترف وواعى بشكل كبير بمختلف القضايا القانونية والفقهية</span>
                        <span>الخميس 3 فبراير 2024</span>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <span className='bg-[#fec109] w-fit px-4 py-2 rounded-lg m-auto text-white'>5</span>
                        <span>تقييم الاستشاري</span>
                    </div>
                </div>
            </div>
            
            <div className='bg-white dark:bg-slate-500  p-5 rounded-xl my-8'>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col gap-5'>
                        <RateStars rate={5} />
                        <span>التقييم العام</span>
                        <span>“ استشارى ممتاز ومحترف وواعى بشكل كبير بمختلف القضايا القانونية والفقهية</span>
                        <span>الخميس 3 فبراير 2024</span>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <span className='bg-[#fec109] w-fit px-4 py-2 rounded-lg m-auto text-white'>5</span>
                        <span>تقييم الاستشاري</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
