import styles from './anchor.module.scss';

const Anchor = ({id}) => {
    return <div className={styles.anchor} id={id ?? null}></div>
}

export default Anchor