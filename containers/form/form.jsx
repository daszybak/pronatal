import contactFormSchema from '../../validation/contactFormSchema';
import {Formik, Form as FForm} from 'formik';
import Input from '../../components/input/input';
import styles from './form.module.scss';
import pronatal from 'axios';
import {useState} from 'react';

const initialValues = {
  name: '',
  phone: '',
  subject: '',
  message: '',
};

const Form = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleOnFormSubmit = async (values, actions) => {
    try {
      await pronatal.post('/', values, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      actions.setSubmitting(false);
      actions.resetForm();
      setSubmitted(true);
    } catch (error) {
      alert('Nešto je pošlo krivo, pokušajte ponovo.');
    }
  };

  return (
    <div className={styles.form}>
      <>
        <h3 style={{textTransform: 'none'}}>Naručite se</h3>
        <h5 style={{textTransform: 'none'}}>Odmah ćemo vam se javiti</h5>
        <Formik
          initialValues={initialValues}
          validationSchema={contactFormSchema}
          onSubmit={handleOnFormSubmit}
        >
          <FForm autoComplete="off" name="upit" netlify>
            <Input text="Ime i prezime*" name="name" />
            <Input text="Telefon*" name="phone" />
            <Input text="Naslov*" name="subject" />
            <Input text="Poruka*" name="message" />
            <button className={styles['submit-btn']} type="submit">
              Pošalji
            </button>
          </FForm>
        </Formik>
      </>
    </div>
  );
};

export default Form;
