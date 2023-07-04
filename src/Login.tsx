import { useState } from 'react';
import { IoLogInOutline } from 'react-icons/io5';
import { BiSolidErrorCircle } from 'react-icons/bi'
import Rodape from '../src/components/Rodape';
import { login } from '../src/services/login_service';
import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await login(email, senha);
      navigate('/dashboard');
    } catch (error: any) {
      setErro('Falha ao fazer login. Verifique suas credenciais.');
      if (error.response && error.response.data) {
        setErro(error.response.data.error);
      }
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center mx-4">
        <Player
          autoplay
          loop
          src="https://assets6.lottiefiles.com/packages/lf20_ibmd3e7f.json"
          style={{ height: '200px' }}
        />

        <h2 className="text-xl font-bold text-white">Login</h2>
        <p className="text-sm text-[#5B85AA] mb-5">Acesso restrito:</p>

        <form className="flex flex-col w-72 md:w-96" onSubmit={handleSubmit}>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Informe o e-mail"
            required
            className="input-field mb-2 p-3 rounded-md text-[#8f7fac] bg-[#1f172e] border-2 border-[#372248]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="senha"
            name="senha"
            required
            placeholder="Informe a senha"
            className="input-field mb-2 p-3 rounded-md text-[#8f7fac] bg-[#1f172e] border-2 border-[#372248]"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white text-center font-semibold py-4 mt-4 rounded-md hover:bg-blue-900 flex items-center justify-center"
          >
            <IoLogInOutline className="mr-2" /> Entrar
          </button>
        </form>

        {erro && (
          <div className="flex align-middle justify-center gap-5 mt-5 w-full rounded-sm p-3 h-full text-white bg-red-600 items-center text-center text-sm errorContainer">
            <span className='text-3xl'><BiSolidErrorCircle /></span>
            <span className='text-sm'>{erro}</span>
          </div>
        )}
        <Rodape />
      </div>
    </div>
  );
}

export default Login;
