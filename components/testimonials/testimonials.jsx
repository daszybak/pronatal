import styles from './testimonials.module.scss';
import {FaStar, FaGoogle} from 'react-icons/fa';

const testimonials = [
  {
    name: 'Ana M.',
    rating: 5,
    text: 'Izuzetno profesionalan pristup i topla atmosfera. Prof. Ivanišević je divna i stručna. Preporučujem svima!',
    date: '2025',
  },
  {
    name: 'Marija K.',
    rating: 5,
    text: 'Cijelu trudnoću sam bila pod njihovom skrbi. Osjećala sam se sigurno i zbrinuto. Hvala vam na svemu!',
    date: '2025',
  },
  {
    name: 'Ivana P.',
    rating: 5,
    text: 'Konačno sam pronašla kliniku gdje me slušaju i razumiju. Stručnost na najvišoj razini.',
    date: '2024',
  },
];

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Što kažu naši pacijenti</h3>
        <div className={styles.rating}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={styles.star} />
            ))}
          </div>
          <span className={styles.score}>5.0</span>
          <a
            href="https://www.google.com/maps/place/Poliklinika+ProNatal"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.googleLink}
          >
            <FaGoogle /> Pogledajte recenzije na Google
          </a>
        </div>
      </div>

      <div className={styles.testimonialGrid}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.avatar}>
                {testimonial.name.charAt(0)}
              </div>
              <div className={styles.info}>
                <span className={styles.name}>{testimonial.name}</span>
                <div className={styles.cardStars}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className={styles.starSmall} />
                  ))}
                </div>
              </div>
            </div>
            <p className={styles.text}>&ldquo;{testimonial.text}&rdquo;</p>
            <span className={styles.date}>{testimonial.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
