import {TextField} from '@mui/material';
import {Field} from 'formik';
import styles from './input.module.scss';

const Input = ({name, text}) => {
  return (
    <>
      {/* <Field
        type="text"
        name={name}
        id={name}
        as={name === 'message' ? 'textarea' : ''}
      /> */}
      <Field name={name}>
        {/* {({field, form, meta}) => (
          <>
            <label
              htmlFor={name}
              className={`${
                meta.touched && meta.error ? styles['label-error'] : ''
              }`}
            >
              {text}
            </label>
            {name === 'message' ? (
              <textarea
                {...field}
                {...form}
                className={`${
                  meta.touched && meta.error ? styles['input-error'] : ''
                }`}
              />
            ) : (
              <input
                type="text"
                {...field}
                className={`${
                  meta.touched && meta.error ? styles['input-error'] : ''
                }`}
              /> */}
        {/* )}
          </> */}
        {/* )} */}
        {({field, form, meta}) => (
          <TextField
            id={name}
            name={name}
            label={text}
            {...field}
            variant="outlined"
            error={meta.touched && meta.error}
            helperText={meta.touched && meta.error}
            multiline={name === 'message'}
            rows={name === 'message' ? 4 : 1}
          />
        )}
      </Field>
      {/* <ErrorMessage name={name} className="error" component="p" /> */}
    </>
  );
};

export default Input;
