import React from 'react';
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import { FormattedMessage } from 'react-intl';
import { TbMoodSad } from "react-icons/tb";

export const RateStars = ({ rate }) => {
    const fullStars = Math.floor(rate);
    const halfStar = rate - fullStars;

    const starElements = [];

    for (let i = 0; i < fullStars; i++) {
        starElements.push(<span className='text-[#fec109]' key={`full-star-${i}`}><FaStar /></span>);
    }

    if (halfStar > 0) {
        starElements.push(
            <span className='text-[#fec109]' key={`half-star`}>
                <FaStarHalf />
            </span>
        );
    }

    return (
        <div className='flex items-center'>
            {starElements.length > 0 ? starElements : <span><TbMoodSad /></span>}
        </div>
    );
};

