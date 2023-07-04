/*
______      ________ _____            _      _        _____ _      ____  _    _ _____  
/ __ \ \    / /  ____|  __ \     /\   | |    | |      / ____| |    / __ \| |  | |  __ \ 
| |  | \ \  / /| |__  | |__) |   /  \  | |    | |     | |    | |   | |  | | |  | | |  | |
| |  | |\ \/ / |  __| |  _  /   / /\ \ | |    | |     | |    | |   | |  | | |  | | |  | |
| |__| | \  /  | |____| | \ \  / ____ \| |____| |____ | |____| |___| |__| | |__| | |__| |
\____/   \/   |______|_|  \_\/_/    \_\______|______(_)_____|______\____/ \____/|_____/ 
overall.cloud
*/ 
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DadosUsuarioLogado } from '../services/login_service';
import { LoadingComponente } from '../components/Loading'
import Menu  from '../components/Menu'

interface UsuarioLogado {
    id: number;
    nome: string;
    email: string;
}

function Dashboard() {
    const [usuarioLogado, setUsuarioLogado] = useState<UsuarioLogado | null>(null);
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
        <>
            <Menu />
            <div>
                <h2 className='text-white'>Bem-vindo, {primeiroNome}!</h2>
            </div>
        </>
    );
}

export default Dashboard;
