import { Formik, Form, Field } from 'formik';
import React from 'react';
import useSearchMutations from '../../hooks/Search/useSearchMutations';
import { SearchInput } from '../Inputs/SearchInput/SearchInput';
import { useNavigate } from 'react-router';

export const SearchComponent = ({ name }) => {
    const { handleSearch } = useSearchMutations(null);
    const navigate = useNavigate()

    return (
        <Formik
            initialValues={{
            }}
            onSubmit={(values, { resetForm }) => {
                handleSearch.mutate({ ...values });
                navigate('/search')
                resetForm();
            }}
        >
            {({ values }) => (
                <Form>
                    <Field
                        as={SearchInput}
                        name={name}
                        values={values}
                    />
                </Form>
            )}
        </Formik>
    );
};
