import contactFormSchema from '../../validation/contactFormSchema';
import {Formik, Form as FForm, Field} from 'formik';
import Input from '../../components/input/input';
import styles from './form.module.scss';
import axios from 'axios';
import {useState} from 'react';
import useResize from '../../hooks/useResize';
import Link from 'next/link';

const initialValues = {
  name: '',
  phone: '',
  subject: '',
  message: '',
  consent: false,
};

const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const {width} = useResize();

  const handleOnFormSubmit = async (values, actions) => {
    try {
      const response = await axios.post('/api/contact', values, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        actions.setSubmitting(false);
        actions.resetForm();
        setSubmitted(true);
      } else {
        throw new Error('Nešto je pošlo po krivu, pokušajte ponovo.');
      }
    } catch (error) {
      alert('Nešto je pošlo po krivu, pokušajte ponovo.');
    }
  };

  if (submitted) {
    return (
      <div className={styles.form}>
        <div style={{textAlign: 'center', padding: '2rem 0'}}>
          <h3 style={{color: 'var(--green-dark)', marginBottom: '1rem'}}>
            Hvala vam na upitu!
          </h3>
          <p style={{marginBottom: '1rem'}}>
            Zaprimili smo vašu poruku i javit ćemo vam se u najkraćem mogućem roku.
          </p>
          <p style={{color: 'var(--grey-500)', fontSize: '0.9rem'}}>
            Obično odgovaramo unutar 2 radna sata.
          </p>
          <button
            className={styles['submit-btn']}
            style={{marginTop: '1.5rem', textTransform: 'uppercase'}}
            onClick={() => setSubmitted(false)}
          >
            Pošalji novi upit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.form}>
      <>
        <h3>Naručite se</h3>
        <h4 style={{marginBottom: '2rem'}}>
          Odmah ćemo vam{width < 381 ? <br /> : null} se javiti
        </h4>
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
            <Field name="consent">
              {({field, meta}) => (
                <div className={styles.consent}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      {...field}
                      checked={field.value}
                      className={styles.checkbox}
                    />
                    <span>
                      Pristajem na obradu osobnih podataka u skladu s{' '}
                      <Link href="/privatnost">
                        <a target="_blank" rel="noopener noreferrer">
                          Izjavom o privatnosti
                        </a>
                      </Link>
                      *
                    </span>
                  </label>
                  {meta.touched && meta.error && (
                    <div className={styles.error}>{meta.error}</div>
                  )}
                </div>
              )}
            </Field>
            <Field>
              {({field, form, meta}) => (
                <button
                  style={{textTransform: 'uppercase'}}
                  className={styles['submit-btn']}
                  type="submit"
                  disabled={form.isSubmitting}
                >
                  Zatražite termin
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
