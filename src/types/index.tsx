type Usuario = {
    id: string;
    nome: string;
    email: string;
    senha: string;
    documento: string;
    telefone: string;
    cidade: string;
    perfil_id: string;
    perfil: {
      id: string;
      descricao: string;
      created_at: string;
      updated_at: string;
      deleted_at: string;
    };
    created_at: string;
    updated_at: string;
    deleted_at: string;
    usuarios: {
      id: string;
      nome: string;
    };
  };
  
  type Perfil = {
    id: string;
    descricao: string;
  };

  
  type RespostaUsuario = {
    total_usuarios: number;
    usuarios: Usuario[];
  };
    
  export type {
    Usuario,
    Perfil,
    RespostaUsuario,
  };  