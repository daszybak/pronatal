import contactFormSchema from '../../validation/contactFormSchema';
import {Formik, Form as FForm, Field} from 'formik';
import Input from '../../components/input/input';
import styles from './form.module.scss';
import pronatal from 'axios';
import {useState} from 'react';
import axios from 'axios';

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
      const response = await pronatal.post('/api/contact', values, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        actions.setSubmitting(false);
        actions.resetForm();
        setSubmitted(true);
      } else {
        throw new Error('Nešto je pošlo ka krivu, pokušajte ponovo.');
      }
    } catch (error) {
      alert('Nešto je pošlo ka krivu, pokušajte ponovo.');
    }
  };

  return (
    <div className={styles.form}>
      <>
        <h3>Naručite se</h3>
        <h4 style={{marginBottom: '2rem'}}>Odmah ćemo vam se javiti</h4>
        <Formik
          initialValues={initialValues}
          validationSchema={contactFormSchema}
          onSubmit={handleOnFormSubmit}
        >
          <FForm autoComplete="off" name="upit">
            <Input text="Ime i prezime*" name="name" />
            <Input text="Telefon*" name="phone" />
            <Input text="Naslov*" name="subject" />
            <Input text="Poruka*" name="message" />
            <Field>
              {({field, form, meta}) => (
                <button
                  style={{textTransform: 'uppercase'}}
                  className={styles['submit-btn']}
                  type="submit"
                  disabled={form.isSubmitting}
                >
                  Pošalji
                </button>
              )}
            </Field>
          </FForm>
        </Formik>
      </>
    </div>
  );
};

export default Form;
