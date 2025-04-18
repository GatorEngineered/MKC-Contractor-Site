import styles from '../styles/PermitTabs.module.css';
import { CategoryType } from '../data/permitContent';

interface Props {
  selected: CategoryType | null;
  onSelect: (category: CategoryType) => void;
}

export default function PermitTabs({ selected, onSelect }: Props) {
  return (
    <div className={styles.tabs}>
      <button
        onClick={() => onSelect('commercial')}
        className={selected === 'commercial' ? styles.active : ''}
      >
        Commercial
      </button>
      <button
        onClick={() => onSelect('residential')}
        className={selected === 'residential' ? styles.active : ''}
      >
        Residential
      </button>
    </div>
  );
}
