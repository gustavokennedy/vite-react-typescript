/*
______      ________ _____            _      _        _____ _      ____  _    _ _____  
/ __ \ \    / /  ____|  __ \     /\   | |    | |      / ____| |    / __ \| |  | |  __ \ 
| |  | \ \  / /| |__  | |__) |   /  \  | |    | |     | |    | |   | |  | | |  | | |  | |
| |  | |\ \/ / |  __| |  _  /   / /\ \ | |    | |     | |    | |   | |  | | |  | | |  | |
| |__| | \  /  | |____| | \ \  / ____ \| |____| |____ | |____| |___| |__| | |__| | |__| |
\____/   \/   |______|_|  \_\/_/    \_\______|______(_)_____|______\____/ \____/|_____/ 
overall.cloud
*/ 
const Logo = () => {
    
  
    return (
      <>
      
      <a href="/dashboard">
        <h1
          className="
            md:block
            font-bold
            text-xl
            text-white
            cursor-pointer
            hover:opacity-80
          "
        >
          <span className="efeito-piscar">💻</span>Painel
        </h1>
      </a>
      </>

    );
  };

export default Logo;