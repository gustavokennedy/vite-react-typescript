import { post, get } from './api_service';

export const login = async (email: string, senha: string): Promise<string> => {
  try {
    const response = await post('/logar', { email, senha });
    const token = response.data.token;
    localStorage.setItem('APP_TOKEN', token);
    return token;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

export async function DadosUsuarioLogado() {
  
  const authToken = localStorage.getItem('APP_TOKEN');
  
  const headers = {
    Authorization: authToken ? `Bearer ${authToken}` : '',
    'Content-Type': 'application/json',
  };

  try {
    const response = await get('/profile', {
      headers: headers,
    });
    return response;
  } catch (error) {
    throw error;
  }
}