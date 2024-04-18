import React from 'react'

export const TimesTab = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-1 gap-2'>
      <div className=' rounded-lg  overflow-hidden'>
        <div className='h-[50px] bg-[#DDB762] text-center' >اليوم</div>
        <div className='bg-[#F9F9F9] h-full dark:bg-slate-400 text-black dark:text-white flex items-center justify-center'>
          لا يوجد مواعيد
        </div>
      </div>
      <div className=' rounded-lg  overflow-hidden'>
        <div className='h-[50px] bg-[#DDB762] text-center' >غدا</div>
        <div className='bg-[#F9F9F9] dark:bg-slate-400 text-black dark:text-white flex flex-col items-center justify-center gap-3'>
          <span className='bg-[#DDB762] mt-5 p-1 rounded-lg'>10:00 ص</span>
          <span>10:30 ص</span>
          <span>11:00 ص</span>
          <span>11:30 ص</span>
          <span className='mb-3'>12:00 ص</span>
        </div>
      </div>
      <div className=' rounded-lg  overflow-hidden'>
        <div className='h-[50px] bg-[#DDB762] text-center' >الاثنين 02/03</div>
        <div className='bg-[#F9F9F9] dark:bg-slate-400 text-black dark:text-white flex flex-col items-center justify-center gap-3'>
          <span className='bg-[#DDB762] mt-5 p-1 rounded-lg'>10:00 ص</span>
          <span>10:30 ص</span>
          <span>11:00 ص</span>
          <span>11:30 ص</span>
          <span className='mb-3'>12:00 ص</span>
        </div>
      </div>
    </div>
  )
}
