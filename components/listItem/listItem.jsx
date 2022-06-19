import {ImDiamonds} from 'react-icons/im';

import styles from './listItem.module.scss';

const ListItem = ({item}) => {
    return <li>
        <ImDiamonds/> <span>{item ?? 'text'}</span>
    </li>
}

export default ListItem;