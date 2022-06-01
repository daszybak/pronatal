export default function handler(req, res) {
  console.log('req.body:', req.body);

  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'kdjelmis@hotmail.com',
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: 'kdjelmis@hotmail.com',
    to: 'pronatal@pronatal.hr',
    subject,
    text: `
    Ime i prezime: ${name}
    Telefon: ${phone}
    Poruka: ${message}
    `,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200).send('OK');
  console.log('Email sent');
}
