import Link from 'next/link';

export default function FourOhFour() {
  return (
    <div style={{width: '100vw', textAlign: 'center'}}>
      <h4 style={{textTransform: 'lowercase'}}>
        Ne znamo otkud vam link na ovu stranicu ni što bi trebalo biti ovdje.
        Nema ničega.
      </h4>
      <Link href="/">
        <a>Idite na naslovnicu</a>
      </Link>
    </div>
  );
}
