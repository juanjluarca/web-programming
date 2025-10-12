import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export interface HideSecretResponse {
    key: string;
    message: string;
}

export interface RevealSecretResponse {
    content: string;
    message: string;
}

export interface ErrorResponse {
    error: string;
}

export const secretService = {
    hide: async (content: string): Promise<HideSecretResponse> => {
        const response = await api.post<HideSecretResponse>('/secrets/hide/', {
            content,
        });
        return response.data;
    },

    reveal: async (key: string): Promise<RevealSecretResponse> => {
        const response = await api.post<RevealSecretResponse>('/secrets/reveal/', {
            key,
        });
        return response.data;
    },
};