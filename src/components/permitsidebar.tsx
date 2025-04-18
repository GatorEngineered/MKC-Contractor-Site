import styles from '../styles/permitsidebar.module.css';
import { PERMIT_CONTENT, CategoryType, PermitKeyType } from '../data/permitContent';

interface Props {
  category: CategoryType;
  selectedPermit: PermitKeyType | null;
  onSelect: (key: PermitKeyType) => void;
}

export default function PermitSidebar({ category, selectedPermit, onSelect }: Props) {
  return (
    <ul className={styles.sidebar}>
      {Object.entries(PERMIT_CONTENT[category]).map(([key, value]) => (
        <li key={key}>
          <button
            onClick={() => onSelect(key as PermitKeyType)}
            className={selectedPermit === key ? styles.active : ''}
          >
            {value.title}
          </button>
        </li>
      ))}
    </ul>
  );
}
