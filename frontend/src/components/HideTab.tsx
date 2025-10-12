'use client';

import { useState } from 'react';
import { secretService } from '../services/api';
import CopyButton from './CopyButton';
import styles from '../app/styles/HideTab.module.css';

export default function HideTab() {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<{ key: string; message: string } | null>(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!content.trim()) {
            setError('Por favor ingresa un secreto');
            return;
        }

        setLoading(true);
        setError('');
        setResult(null);

        try {
            const response = await secretService.hide(content);
            setResult(response);
            setContent('');
        } catch (err: any) {
            setError(err.response?.data?.error || 'Error al guardar el secreto');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.tabContent}>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="secret-content">Escribe tu secreto</label>
                    <textarea
                        id="secret-content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Ingresa el mensaje que deseas compartir de forma segura..."
                        disabled={loading}
                    />
                </div>

                <button type="submit" className={styles.btn} disabled={loading}>
                    {loading ? (
                        <>
                            <span className={styles.loading}></span> Ocultando...
                        </>
                    ) : (
                        'Ocultar Secreto'
                    )}
                </button>
            </form>

            {error && (
                <div className={`${styles.message} ${styles.error}`}>
                    {error}
                </div>
            )}

            {result && (
                <div className={styles.resultBox}>
                    <h3>Secreto guardado exitosamente</h3>
                    <div className={styles.keyDisplay}>
                        <div className={styles.keyValue}>{result.key}</div>
                        <CopyButton text={result.key} />
                    </div>
                    <div className={`${styles.message} ${styles.info}`}>
                        Esta clave podrá ser revelada UNA vez.
                    </div>
                </div>
            )}
        </div>
    );
}