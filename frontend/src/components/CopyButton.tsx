'use client';

import { useState } from 'react';
import styles from '../app/styles/CopyButton.module.css';

interface CopyButtonProps {
    text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Error al copiar:', err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className={`${styles.copyBtn} ${copied ? styles.copied : ''}`}
        >
            {copied ? 'Copiado' : 'Copiar'}
        </button>
    );
}