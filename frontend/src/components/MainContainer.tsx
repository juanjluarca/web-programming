'use client';

import { useState } from 'react';
import HideTab from './HideTab';
import RevealTab from './ShowTab';
import styles from '../app/styles/MainContainer.module.css';

export default function TabContainer() {
    const [activeTab, setActiveTab] = useState<'hide' | 'reveal'>('hide');

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h1>Secret Share</h1>
                <p>Comparte información sensible de forma segura</p>
            </div>

            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${activeTab === 'hide' ? styles.active : ''}`}
                    onClick={() => setActiveTab('hide')}
                >
                    Ocultar
                </button>
                <button
                    className={`${styles.tab} ${activeTab === 'reveal' ? styles.active : ''}`}
                    onClick={() => setActiveTab('reveal')}
                >
                    Revelar
                </button>
            </div >
            <div className={styles.hideRevealContainer}>
                {activeTab === 'hide' ? <HideTab /> : <RevealTab />}
            </div>
            <div className={styles.footer}>
                Los secretos se eliminan automáticamente después de ser revelados
            </div>
        </div>
    );
}