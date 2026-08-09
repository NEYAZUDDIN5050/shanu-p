import axios from 'axios';
import { API_URL } from './api.js';

export const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export async function fetchCertifications() {
  const { data } = await api.get('/certifications');
  return data.data ?? [];
}
