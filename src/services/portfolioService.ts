import axios from 'axios';
import { getToken } from './authService';
import type { TPortfolioInfo } from '../interfaces/portfolioInfo.interface';

const API_BASE = import.meta.env.VITE_PORFOLIO_API;

export const fetchPortfolio = async (): Promise<TPortfolioInfo | null> => {
  try {
    const token = await getToken()
    if (!token) return null

    const { data } = await axios.get(`${API_BASE}/api/portfolios/latest`, {
      headers: {
        Authorization: token,
      },
    });
    if (!data) return null

    return data.portfolioInfo
  } catch (error) {
    return null
  }
};

