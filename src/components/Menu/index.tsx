/*
______      ________ _____            _      _        _____ _      ____  _    _ _____  
/ __ \ \    / /  ____|  __ \     /\   | |    | |      / ____| |    / __ \| |  | |  __ \ 
| |  | \ \  / /| |__  | |__) |   /  \  | |    | |     | |    | |   | |  | | |  | | |  | |
| |  | |\ \/ / |  __| |  _  /   / /\ \ | |    | |     | |    | |   | |  | | |  | | |  | |
| |__| | \  /  | |____| | \ \  / ____ \| |____| |____ | |____| |___| |__| | |__| | |__| |
\____/   \/   |______|_|  \_\/_/    \_\______|______(_)_____|______\____/ \____/|_____/ 
overall.cloud
*/ 
import Container from "./Container";
import Logo from "./Logo"
import MenuUsuario from "./MenuUsuario";

const Menu = () => {
    return (
        <div className="bg-[#0e0620] fixed w-full z-10 shadow-sm">
            <div
                className="
                py-4
                border-b-[1px]
                border-blue-900
                "
            >
                <Container>
                    <div
                        className="
                            flex
                            flex-row
                            items-center
                            justify-between
                            gap-3
                            md:gap-0
                        ">
                            <Logo />
                            <MenuUsuario />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Menu;