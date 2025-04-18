import { useState } from 'react';
import PermitTabs from './permittabs';
import PermitSidebar from './permitsidebar';
import PermitDetails from './permitdetails';
import { CategoryType, PermitKeyType } from '../data/permitContent';
import styles from '../styles/permittabs.module.css';

export default function PermitSection() {
    const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null);
    const [selectedPermit, setSelectedPermit] = useState<PermitKeyType | null>(null);

    function handleCategorySelect(category: CategoryType) {
        setSelectedCategory(category);
        setSelectedPermit(null);
    }

    return (
        <section className={styles.container}>
            <PermitTabs selected={selectedCategory} onSelect={handleCategorySelect} />
            {selectedCategory && (
                <div className={styles.layout}>
                    <PermitSidebar
                        category={selectedCategory}
                        selectedPermit={selectedPermit}
                        onSelect={setSelectedPermit}
                    />
                    <PermitDetails
                        category={selectedCategory}
                        selectedPermit={selectedPermit}
                    />
                </div>
            )}
        </section>
    );
}
