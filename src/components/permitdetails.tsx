import styles from '../styles/permitdetails.module.css';
import { PERMIT_CONTENT, CategoryType, PermitKeyType } from '../data/permitContent';

interface Props {
  category: CategoryType;
  selectedPermit: PermitKeyType | null;
}

export default function PermitDetails({ category, selectedPermit }: Props) {
  if (!selectedPermit) {
    return <p className={styles.placeholder}>Select a permit to see details.</p>;
  }

  const { title, description } = PERMIT_CONTENT[category][selectedPermit];

  return (
    <div className={styles.details}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
