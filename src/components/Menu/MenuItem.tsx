/*
______      ________ _____            _      _        _____ _      ____  _    _ _____  
/ __ \ \    / /  ____|  __ \     /\   | |    | |      / ____| |    / __ \| |  | |  __ \ 
| |  | \ \  / /| |__  | |__) |   /  \  | |    | |     | |    | |   | |  | | |  | | |  | |
| |  | |\ \/ / |  __| |  _  /   / /\ \ | |    | |     | |    | |   | |  | | |  | | |  | |
| |__| | \  /  | |____| | \ \  / ____ \| |____| |____ | |____| |___| |__| | |__| | |__| |
\____/   \/   |______|_|  \_\/_/    \_\______|______(_)_____|______\____/ \____/|_____/ 
overall.cloud
*/ 
import React, { ReactNode } from "react";

interface MenuItemProps {
  onClick: () => void;
  children: ReactNode;
  isActive?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  onClick,
  children,
  isActive = false,
}) => {
  return (
    <div
      onClick={onClick}
      className={`px-5 py-5 hover:bg-fundo-hover transition font-semibold ${
        isActive ? "text-[#a255f0]" : ""
      }`}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {children}
      </div>
    </div>
  );
};

export default MenuItem;
