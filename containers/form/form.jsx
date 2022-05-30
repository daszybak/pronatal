import contactFormSchema from '../../validation/contactFormSchema';
import {Formik, Form as FForm} from 'formik';
import Input from '../../components/input/input';
import styles from './form.module.scss';

const initialValues = {
  name: '',
  phone: '',
  subject: '',
  message: '',
};

const Form = () => {
  const handleOnFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={styles.form}>
      <h3>Naručite se</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={contactFormSchema}
        onSubmit={handleOnFormSubmit}
      >
        <FForm autoComplete="off">
          <Input text="Ime i prezime*" name="name" />
          <Input text="Telefon*" name="phone" />
          <Input text="Naslov*" name="subject" />
          <Input text="Poruka*" name="message" />
          <button className={styles['submit-btn']} type="submit">
            Pošalji
          </button>
        </FForm>
      </Formik>
    </div>
  );
};

export default Form;
