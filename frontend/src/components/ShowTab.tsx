'use client';

import { useState } from 'react';
import { secretService } from '@/services/api';
import styles from '../app/styles/ShowTab.module.css';

export default function RevealTab() {
    const [key, setKey] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<{ content: string; message: string } | null>(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!key.trim()) {
            setError('Por favor ingresa una clave');
            return;
        }

        if (key.length !== 12) {
            setError('La clave debe tener 12 caracteres');
            return;
        }

        setLoading(true);
        setError('');
        setResult(null);

        try {
            const response = await secretService.reveal(key);
            setResult(response);
            setKey('');
        } catch (err: any) {
            if (err.response?.status === 404) {
                setError('El secreto no existe o ya fue revelado');
            } else if (err.response?.status === 400) {
                setError('Formato de clave inválido');
            } else {
                setError(err.response?.data?.error || 'Error al revelar el secreto');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.tabContent}>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="secret-key">Clave del secreto</label>
                    <input
                        id="secret-key"
                        type="text"
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                        placeholder="Ej: a3f9k2m8x7pq"
                        maxLength={12}
                        disabled={loading}
                    />
                    <small className={styles.helperText}>
                        Ingresa la clave de 12 caracteres
                    </small>
                </div>

                <button type="submit" className={styles.btn} disabled={loading}>
                    {loading ? (
                        <>
                            <span className={styles.loading}></span> Revelando...
                        </>
                    ) : (
                        'Revelar Secreto'
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
                    <h3>Secreto revelado</h3>
                    <div className={styles.secretContent}>
                        {result.content}
                    </div>
                    <div className={`${styles.message} ${styles.info}`}>
                        {result.message}
                    </div>
                </div>
            )}
        </div>
    );
}