import React, { useEffect, useState } from 'react';
import Button from '../Buttons/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../../redux/filters/filtersSelectors';
import { setFilters } from '../../redux/filters/filtersSlice';
import {
  MileageWrap,
  SelectWrap,
  StyledForm,
  StyledInputFrom,
  StyledInputTo,
  StyledLabel,
  StyledSpanFrom,
  StyledSpanTo,
} from './Filter.styled';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { toast } from 'react-hot-toast';

function FilterForm({ carData }) {
  const [canShowToast, setCanShowToast] = useState(true);
  const showToast = () => {
    if (canShowToast) {
      toast.error('From must be less than To');
      setCanShowToast(false);
      setTimeout(() => {
        setCanShowToast(true);
      }, 5000);
    }
  };
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const validationSchema = Yup.object().shape({
    carBrand: Yup.string(),
    from: Yup.string().test(
      'from-to-validation',
      'From must be less than To',
      function (value) {
        const { to } = this.parent;
        if (value === '' || to === '') {
          return true;
        }

        const numericFrom = parseFloat(value?.replace(/[^0-9]/g, ''));
        const numericTo = parseFloat(to?.replace(/[^0-9]/g, ''));

        if (!isNaN(numericFrom) && !isNaN(numericTo)) {
          if (numericFrom >= numericTo) {
            showToast();
            return false;
          }
        }

        return true;
      }
    ),
    to: Yup.string(),
  });

  const formik = useFormik({
    initialValues: filters,
    validationSchema,
    onSubmit: values => {
      if (values.price === 'To $') {
        values.price = '';
      }
      if (!(values.from === '')) {
        const numericFrom = parseFloat(
          typeof values.from === 'string'
            ? values.from.replace(/[^0-9]/g, '')
            : values.from
        );
        values.from = numericFrom;
      }
      if (!(values.to === '')) {
        const numericTo = parseFloat(
          typeof values.to === 'string'
            ? values.to.replace(/[^0-9]/g, '')
            : values.to
        );
        values.to = numericTo;
      }
      dispatch(setFilters(values));
      toast.success('Filters successfully applied!');
    },
  });
  const [isFormDirty, setIsFormDirty] = useState(false);
  useEffect(() => {
    if (
      formik.values.price !== 'To $' ||
      formik.values.price !== '' ||
      formik.values.carBrand !== filters.carBrand ||
      formik.values.from !== filters.from ||
      formik.values.to !== filters.to
    ) {
      setIsFormDirty(formik.dirty || !formik.isValid);
    }
  }, [
    formik.values,
    formik.dirty,
    formik.isValid,
    filters.carBrand,
    filters.from,
    filters.to,
    filters.price,
  ]);

  const handlePriceChange = option => {
    formik.setFieldValue('price', option.value);
  };
  const priceOptions = [
    '20',
    '30',
    '40',
    '50',
    '60',
    '70',
    '80',
    '90',
    '100',
    '110',
    '120',
    '130',
    '140',
    '150',
    '160',
    '170',
    '180',
    '190',
    '200',
    '210',
    '220',
    '230',
    '240',
    '250',
    '260',
    '270',
    '280',
    '290',
    '300',
  ];

  const uniqueCarMakes = [...new Set(carData.map(car => car.make))];
  const handleReset = () => {
    formik.resetForm();
    formik.setFieldValue('price', '');
    formik.setFieldValue('from', '');
    formik.setFieldValue('to', '');
    formik.handleSubmit();
    toast('Filters reset!', {
      icon: '🗑️',
    });
  };
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <SelectWrap>
        <StyledLabel htmlFor="carBrand">Car brand:</StyledLabel>
        <div className="dropdown-wrapper dropdown-wrapper-brand">
          <Dropdown
            options={uniqueCarMakes.map(carMake => ({
              value: carMake,
              label: carMake,
            }))}
            onChange={selectedOption =>
              formik.setFieldValue('carBrand', selectedOption.value)
            }
            value={formik.values.carBrand}
            placeholder="Enter the text"
          />
        </div>
      </SelectWrap>

      <SelectWrap>
        <StyledLabel htmlFor="price">Price/1 hour:</StyledLabel>
        <div className="dropdown-wrapper">
          <Dropdown
            key={formik.values.price}
            options={priceOptions.map(option => ({
              value: option,
              label: option,
            }))}
            onChange={handlePriceChange}
            value={formik.values.price}
            placeholder="To $"
          />
        </div>
      </SelectWrap>

      <SelectWrap>
        <StyledLabel htmlFor="mileage">Car mileage / km:</StyledLabel>
        <MileageWrap>
          <StyledSpanFrom
            onClick={() => {
              const inputElement = document.getElementById('from');
              if (inputElement) {
                inputElement.focus();
              }
            }}
          >
            From
          </StyledSpanFrom>
          <StyledInputFrom
            type="text"
            id="from"
            name="from"
            onChange={e => {
              const { name, value } = e.target;
              let numericValue = parseFloat(value.replace(/[^0-9]/g, ''));
              if (value === '') {
                numericValue = '';
              }

              if (numericValue === '' || !isNaN(numericValue)) {
                const formattedValue =
                  numericValue === '' ? '' : numericValue.toLocaleString();
                formik.handleChange({
                  ...e,
                  target: { name, value: formattedValue },
                });
              } else {
                formik.setFieldValue(name, formik.values[name] || '');
              }
            }}
            onBlur={formik.handleBlur}
            value={
              formik.values.from.toLocaleString() === ''
                ? ''
                : formik.values.from.toLocaleString()
            }
          />

          <StyledSpanTo
            onClick={() => {
              const inputElement = document.getElementById('to');
              if (inputElement) {
                inputElement.focus();
              }
            }}
          >
            To
          </StyledSpanTo>
          <StyledInputTo
            type="text"
            id="to"
            name="to"
            onChange={e => {
              const { name, value } = e.target;
              let numericValue = parseFloat(value.replace(/[^0-9]/g, ''));
              if (value === '') {
                numericValue = '';
              }

              if (numericValue === '' || !isNaN(numericValue)) {
                const formattedValue =
                  numericValue === '' ? '' : numericValue.toLocaleString();
                formik.handleChange({
                  ...e,
                  target: { name, value: formattedValue },
                });
              } else {
                formik.setFieldValue(name, formik.values[name] || '');
              }
            }}
            onBlur={formik.handleBlur}
            value={
              formik.values.to.toLocaleString() === ''
                ? ''
                : formik.values.to.toLocaleString()
            }
          />
        </MileageWrap>
      </SelectWrap>

      <Button width={136} text="Search" type="submit" disabled={!isFormDirty} />
      <Button width={136} text="Reset" onClick={handleReset} />
    </StyledForm>
  );
}
export default FilterForm;
