import React from 'react'
import { SearchComponent } from '../SearchComponent/SearchComponent'

export const SectionLayout = ({ title , children }) => {

    return (
        <div className='custom_container my-7 dark:text-white '>
            <h3 className='  text-2xl text-center font-bold'>{title}</h3>
            <SearchComponent name={"name"} />
            {children}
        </div>
    )
}
