import React from 'react'
import { useStore } from '../../zustand/store'
import { LawyerCard } from '../../components/LawyerCard/LawyerCard'

export const SearchPage = () => {
    const searchData = useStore((state) => state.SearchData)

    return (
        <div>
            {searchData ?
                searchData.lawyers.length > 1 ?
                    <div className='my-5 border-4 rounded-lg p-5'>
                        <h3 className=' dark:text-white font-extrabold text-2xl mb-8 text-[#2C4768]'>معلومات البحث</h3>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                            {searchData.lawyers.map((item) => {
                                return (
                                    <LawyerCard lawyer={item} />
                                )
                            })}
                        </div>
                    </div>
                    :
                    <div className='h-[80vh] flex items-center justify-center'><span className='text-2xl  text-center'>لا يوجد بيانات</span></div>
                : <div className='h-[80vh] flex items-center justify-center'><span className='text-2xl  text-center'>لا يوجد بيانات</span></div>}
        </div>
    )
}
