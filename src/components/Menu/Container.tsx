/*
______      ________ _____            _      _        _____ _      ____  _    _ _____  
/ __ \ \    / /  ____|  __ \     /\   | |    | |      / ____| |    / __ \| |  | |  __ \ 
| |  | \ \  / /| |__  | |__) |   /  \  | |    | |     | |    | |   | |  | | |  | | |  | |
| |  | |\ \/ / |  __| |  _  /   / /\ \ | |    | |     | |    | |   | |  | | |  | | |  | |
| |__| | \  /  | |____| | \ \  / ____ \| |____| |____ | |____| |___| |__| | |__| | |__| |
\____/   \/   |______|_|  \_\/_/    \_\______|______(_)_____|______\____/ \____/|_____/ 
overall.cloud
*/ 

'use client';

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div 
        className="
            max-w-[2520px]
            mx-auto
            xl:px-20
            md:px-10
            sm:px-2
            px-4
        ">
            {children}
        </div>
    )
}

export default Container;