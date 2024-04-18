import React, { Fragment, useMemo, useRef, useState, useEffect } from 'react';
import { TextInput } from '../TextInput/TextInput';
import { useCitiesData, useCountriesData, useDistrictsData } from '../../../queries/queries';
import SelectField from '../SelectField/SelectField';
import useStaticSelectOptions from '../../../hooks/useStaticSelectOptions';
import { useStore } from '../../../zustand/store';
import { useNavigate } from 'react-router';

export const SearchInput = ({ values, name }) => {
    const [searchOpened, setSearchOpened] = useState(false);
    const { data: countries } = useCountriesData();
    const { data: cities } = useCitiesData();
    const searchRef = useRef(null);
    const iconRef = useRef(null);
    const { genderOptions } = useStaticSelectOptions();
    const searchData = useStore((state) => state.SearchData)



    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target) &&
                iconRef.current && !iconRef.current.contains(event.target)) {
                setSearchOpened(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    const countriesOptions = useMemo(() => {
        if (!countries) return [];
        return countries.Countries.map((option) => ({
            value: option.id,
            label: option.name,
        }));
    }, [countries]);

    const citiesOptions = useMemo(() => {
        if (!cities) return [];
        return cities.Cities.map((option) => ({
            value: option.id,
            label: option.title,
        }));
    }, [cities]);

    return (
        <Fragment>
            <div className="relative w-[50%] mx-auto my-8">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none cursor-pointer">
                    <svg width="25" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="15.5722" cy="14.8295" rx="13.8378" ry="13.5035" stroke="#B0B0B0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M25.0859 24.8862L33.7346 33.326" stroke="#B0B0B0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                {searchOpened ?
                    <div ref={searchRef} className="absolute top-14 w-full bg-white shadow-2xl p-5 z-20 rounded-lg">
                        <SelectField
                            title="اختر الدولة"
                            placeholder="اختر الدولة"
                            name="country_id"
                            options={countriesOptions}
                            className="label-fit w-100"
                            id={"country_id"}
                            type="select"
                        />
                        <SelectField
                            title="اختر المدينة"
                            placeholder="اختر المدينة"
                            name="city_id"
                            options={citiesOptions}
                            className="label-fit w-100"
                            id={"city_id"}
                            type="select"
                        />
                        <SelectField
                            title="اختر الجنس"
                            placeholder="اختر الجنس"
                            name="gender"
                            options={genderOptions}
                            className="label-fit w-100"
                            id={"gender"}
                            type="select"
                        />
                    </div>
                    :
                    null
                }
                <TextInput
                    id="search"
                    name={name}
                    as="field"
                />
                <span ref={iconRef} onClick={() => setSearchOpened(!searchOpened)} className="text-white cursor-pointer absolute end-2.5 bottom-3"><svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.73307 2.99269C6.37945 2.99269 6.04031 3.13316 5.79026 3.38321C5.54022 3.63326 5.39974 3.9724 5.39974 4.32602C5.39974 4.67964 5.54022 5.01878 5.79026 5.26883C6.04031 5.51888 6.37945 5.65935 6.73307 5.65935C7.0867 5.65935 7.42583 5.51888 7.67588 5.26883C7.92593 5.01878 8.06641 4.67964 8.06641 4.32602C8.06641 3.9724 7.92593 3.63326 7.67588 3.38321C7.42583 3.13316 7.0867 2.99269 6.73307 2.99269ZM2.95974 2.99269C3.23521 2.21198 3.74606 1.53593 4.42187 1.05774C5.09769 0.579548 5.90519 0.322754 6.73307 0.322754C7.56096 0.322754 8.36846 0.579548 9.04427 1.05774C9.72009 1.53593 10.2309 2.21198 10.5064 2.99269H20.0664C20.42 2.99269 20.7592 3.13316 21.0092 3.38321C21.2593 3.63326 21.3997 3.9724 21.3997 4.32602C21.3997 4.67964 21.2593 5.01878 21.0092 5.26883C20.7592 5.51888 20.42 5.65935 20.0664 5.65935H10.5064C10.2309 6.44007 9.72009 7.11611 9.04427 7.5943C8.36846 8.07249 7.56096 8.32929 6.73307 8.32929C5.90519 8.32929 5.09769 8.07249 4.42187 7.5943C3.74606 7.11611 3.23521 6.44007 2.95974 5.65935H1.39974C1.04612 5.65935 0.706979 5.51888 0.456931 5.26883C0.206882 5.01878 0.0664062 4.67964 0.0664062 4.32602C0.0664062 3.9724 0.206882 3.63326 0.456931 3.38321C0.706979 3.13316 1.04612 2.99269 1.39974 2.99269H2.95974ZM14.7331 10.9927C14.3795 10.9927 14.0403 11.1332 13.7903 11.3832C13.5402 11.6333 13.3997 11.9724 13.3997 12.326C13.3997 12.6796 13.5402 13.0188 13.7903 13.2688C14.0403 13.5189 14.3795 13.6594 14.7331 13.6594C15.0867 13.6594 15.4258 13.5189 15.6759 13.2688C15.9259 13.0188 16.0664 12.6796 16.0664 12.326C16.0664 11.9724 15.9259 11.6333 15.6759 11.3832C15.4258 11.1332 15.0867 10.9927 14.7331 10.9927ZM10.9597 10.9927C11.2352 10.212 11.7461 9.53593 12.4219 9.05774C13.0977 8.57955 13.9052 8.32275 14.7331 8.32275C15.561 8.32275 16.3685 8.57955 17.0443 9.05774C17.7201 9.53593 18.2309 10.212 18.5064 10.9927H20.0664C20.42 10.9927 20.7592 11.1332 21.0092 11.3832C21.2593 11.6333 21.3997 11.9724 21.3997 12.326C21.3997 12.6796 21.2593 13.0188 21.0092 13.2688C20.7592 13.5189 20.42 13.6594 20.0664 13.6594H18.5064C18.2309 14.4401 17.7201 15.1161 17.0443 15.5943C16.3685 16.0725 15.561 16.3293 14.7331 16.3293C13.9052 16.3293 13.0977 16.0725 12.4219 15.5943C11.7461 15.1161 11.2352 14.4401 10.9597 13.6594H1.39974C1.04612 13.6594 0.706979 13.5189 0.456931 13.2688C0.206882 13.0188 0.0664062 12.6796 0.0664062 12.326C0.0664062 11.9724 0.206882 11.6333 0.456931 11.3832C0.706979 11.1332 1.04612 10.9927 1.39974 10.9927H10.9597ZM6.73307 18.9927C6.37945 18.9927 6.04031 19.1332 5.79026 19.3832C5.54022 19.6333 5.39974 19.9724 5.39974 20.326C5.39974 20.6796 5.54022 21.0188 5.79026 21.2688C6.04031 21.5189 6.37945 21.6594 6.73307 21.6594C7.0867 21.6594 7.42583 21.5189 7.67588 21.2688C7.92593 21.0188 8.06641 20.6796 8.06641 20.326C8.06641 19.9724 7.92593 19.6333 7.67588 19.3832C7.42583 19.1332 7.0867 18.9927 6.73307 18.9927ZM2.95974 18.9927C3.23521 18.212 3.74606 17.5359 4.42187 17.0577C5.09769 16.5795 5.90519 16.3228 6.73307 16.3228C7.56096 16.3228 8.36846 16.5795 9.04427 17.0577C9.72009 17.5359 10.2309 18.212 10.5064 18.9927H20.0664C20.42 18.9927 20.7592 19.1332 21.0092 19.3832C21.2593 19.6333 21.3997 19.9724 21.3997 20.326C21.3997 20.6796 21.2593 21.0188 21.0092 21.2688C20.7592 21.5189 20.42 21.6594 20.0664 21.6594H10.5064C10.2309 22.4401 9.72009 23.1161 9.04427 23.5943C8.36846 24.0725 7.56096 24.3293 6.73307 24.3293C5.90519 24.3293 5.09769 24.0725 4.42187 23.5943C3.74606 23.1161 3.23521 22.4401 2.95974 21.6594H1.39974C1.04612 21.6594 0.706979 21.5189 0.456931 21.2688C0.206882 21.0188 0.0664062 20.6796 0.0664062 20.326C0.0664062 19.9724 0.206882 19.6333 0.456931 19.3832C0.706979 19.1332 1.04612 18.9927 1.39974 18.9927H2.95974Z" fill="#B0B0B0" />
                </svg></span>
            </div>
            <button className='bg-yellow-500 py-3 px-5 rounded-lg my-5' type='submit'>بحث</button>
        </Fragment>

    )
}
