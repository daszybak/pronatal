import ListItem from '../listItem/listItem';

import styles from './list.module.scss';

const List = ({items}) => {
    const ListItems = items.map(item => {
        return <ListItem item={item} key={item}/>
    });

    return (
        <ul className={styles.list}>
            {ListItems}
        </ul>
    );
}

export default List