import * as yup from 'yup';

import 'yup-phone';

const contactFormSchema = yup.object().shape({
  name: yup.string().min(3, 'Ime je prekratko').required('Ime je obavezno'),
  phone: yup
    .string()
    // .phone(undefined, undefined, 'Unesen neispravan broj mobitela')
    .required('Broj telefona je obavezan'),
  subject: yup.string().required('Naslov je obavezan'),
  message: yup.string().required('Poruka je obavezna'),
});

export default contactFormSchema;
