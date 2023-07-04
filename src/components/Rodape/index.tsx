/*
______      ________ _____            _      _        _____ _      ____  _    _ _____  
/ __ \ \    / /  ____|  __ \     /\   | |    | |      / ____| |    / __ \| |  | |  __ \ 
| |  | \ \  / /| |__  | |__) |   /  \  | |    | |     | |    | |   | |  | | |  | | |  | |
| |  | |\ \/ / |  __| |  _  /   / /\ \ | |    | |     | |    | |   | |  | | |  | | |  | |
| |__| | \  /  | |____| | \ \  / ____ \| |____| |____ | |____| |___| |__| | |__| | |__| |
\____/   \/   |______|_|  \_\/_/    \_\______|______(_)_____|______\____/ \____/|_____/ 
overall.cloud
*/

export const Rodape = () => {

    const anoAtual = new Date().getFullYear();
    const versao = atualizarVersao();
    function atualizarVersao() {
        return '1.0';
    }

    return (
        <div className="mt-20 text-center">
            <a href="#" title="💻 Overall.Cloud" target="_blank" style={{ color: '#a85ef1', textDecoration: 'none' }}>
                💻 Overall.Cloud
            </a>
            <br />
            <span className="text-[#a7a5c0] text-xs">Todos direitos reservados © {anoAtual}</span>
            <br />
            <span className="text-[#a7a5c0] text-xs">Versão {versao}</span>
        </div>
    );
}

export default Rodape;