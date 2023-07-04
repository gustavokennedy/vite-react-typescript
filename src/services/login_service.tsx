import { post } from './api_service';

export const login = async (email: string, senha: string): Promise<string> => {
  try {
    const response = await post('/logar', { email, senha });
    const token = response.data.token;
    localStorage.setItem('token', token);
    return token;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};