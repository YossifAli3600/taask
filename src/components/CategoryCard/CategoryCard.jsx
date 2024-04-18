import React from 'react';
import styles from './CategoryCard.module.css';
import { Link } from 'react-router-dom';

export const CategoryCard = ({ category }) => {
    return (
        <Link to={`category/${category.id}`} className={`${styles.CategoryCard}  flex justify-center items-center text-center rounded-2xl shadow-lg border dark:bg-slate-400`}>
            <div>
                <div className={`${styles.innerCircle} rounded-full flex items-center justify-center p-3 m-auto`}>
                    <img src={category.image} className='w-full h-full rounded-full' alt="Image" />
                </div>
                <h3 className=' dark:text-white font-bold leading-5	py-5 opacity-75 duration-500'>{category.title}</h3>
                <span className='text-[#6F6863] font-thin duration-500'>متوفر عدد : {category.lawyers_count}</span>
            </div>
        </Link>
    );
};
