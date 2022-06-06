import styles from './accordion.module.scss';
import {
  Accordion as MUIAccordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {BiChevronDown} from 'react-icons/bi';

const Accordion = ({title, children}) => {
  return (
    <MUIAccordion className={styles.accordion}>
      <AccordionSummary expandIcon={<BiChevronDown />}>
        {title}
      </AccordionSummary>
      <AccordionDetails className={styles.accordion}>
        {children}
      </AccordionDetails>
    </MUIAccordion>
  );
};

export default Accordion;
