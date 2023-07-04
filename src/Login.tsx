import { Player } from "@lottiefiles/react-lottie-player";
import { IoLogInOutline } from "react-icons/io5";

function Login() {
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

        <form className="flex flex-col w-72 md:w-96">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Informe o e-mail"
            className="input-field mb-2 p-3 rounded-md bg-[#1f172e] border-2 border-[#372248]"
          />
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Informe a senha"
            className="input-field mb-2 p-3 rounded-md bg-[#1f172e] border-2 border-[#372248]"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white text-center font-semibold py-4 mt-4 rounded-md hover:bg-blue-900 flex items-center justify-center" // Adicionado justify-center aqui
          >
            <IoLogInOutline className="mr-2" /> Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
