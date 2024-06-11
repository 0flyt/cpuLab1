import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import SomeContext from '../context/SomeContext';
import SearchHistory from './SearchHistory';
import { Field, ErrorMessage, Form, Formik } from 'formik';

const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
`;

const StyledInput = styled(Field)`
  padding: 8px;
  font-size: 1em;
  border: 1px solid #3f8fff57;
  border-radius: 4px;
  margin-right: 10px;
`;

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 1em;
  background-color: #3f8fffce;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #3f8fff;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 1em;
  color: #3f8fffce;
  justify-content: center;
`;

const StyledCheckbox = styled.input`
  margin-right: 10px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

function SomeComponent() {
  const { someValue, setSomeValue } = useContext(SomeContext);
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    console.log('someValue:', someValue);
  }, [someValue]);

  function handleSubmit(values, { setSubmitting }) {
    const inputValue = values.searchCity;
    console.log(inputValue);
    setSomeValue(inputValue.toLowerCase());
    setSubmitting(false);
  }

  return (
    <>
      <Formik
        initialValues={{ searchCity: '' }}
        onSubmit={handleSubmit}
        validate={(values) => {
          const errors = {};

          if (values.searchCity.trim() === '') {
            errors.searchCity = 'Du måste ange en stad ';
          }

          return errors;
        }}
      >
        {({ dirty, isSubmitting, isValid, errors, touched }) => (
          <StyledForm>
            <label>
              <StyledInput
                name="searchCity"
                placeholder="Ange stad"
                style={{
                  borderColor:
                    errors.searchCity && touched.searchCity
                      ? 'red'
                      : '#3f8fff57',
                }}
              />
            </label>
            <ErrorMessage component="span" name="searchCity" />
            <StyledButton
              type="submit"
              disabled={!dirty || isSubmitting || !isValid}
            >
              Sök
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
      <CheckboxLabel>
        <StyledCheckbox
          type="checkbox"
          checked={checked}
          onChange={handleChecked}
        />{' '}
        Visa sökhistorik
      </CheckboxLabel>
      {checked && <SearchHistory cityName={someValue} />}
    </>
  );
}

export default SomeComponent;
