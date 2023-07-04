import { useEffect, useState } from 'react';
import { FiUsers } from 'react-icons/fi';
import { MdDashboard } from 'react-icons/md'
import { BsChevronCompactDown } from 'react-icons/bs'
import { DadosUsuarioLogado } from '../../services/login_service';
import { LoadingComponente } from '../Loading';
import { useNavigate } from 'react-router-dom';
import {
  Usuario,
} from "../../types";


const MenuUsuario = () => {

  const [usuarioLogado, setUsuarioLogado] = useState<Usuario | null>(null);
  const navigate = useNavigate();

  useEffect(() => {

    const fetchProfile = async () => {
      try {
        const response = await DadosUsuarioLogado();
        console.log(response.data)
        setUsuarioLogado(response.data);
      } catch (error) {
        navigate('/login');
      }
    };
    fetchProfile();
  }, []);

  if (!usuarioLogado) {
    return <LoadingComponente />
  }

  const nomeSplit = usuarioLogado.nome.split(' ');
  const primeiroNome = nomeSplit[0];

  return (
    <div className="relative">
      <div className="flex flex-row items-center text-white gap-3">
        <a href="/dashboard">
        <div
            className="hidden
            md:flex
            flex-row
            items-center
            text-sm
            font-semibold
            py-3 px-4
            rounded-md 
            hover:text-blue-300
             transition cursor-pointer" >
          <MdDashboard className="mr-2" />
          Dashboard
</div>
        </a>

        <a href="/usuarios">
        <div
            className="hidden
            md:flex
            flex-row
            items-center
            text-sm
            font-semibold
            py-3 px-4
            rounded-md 
            hover:text-blue-300
             transition cursor-pointer" >
          <FiUsers className="mr-2" />
          Usuários
          </div>
        </a>

        <div
            className="hidden
            md:flex
            flex-row
            items-center
            text-sm
            font-semibold
            py-3 px-4
            rounded-md 
            hover:text-blue-300
             transition cursor-pointer" >
        {primeiroNome} <BsChevronCompactDown />
      </div>

      </div>
    </div>
  );
};

export default MenuUsuario;
