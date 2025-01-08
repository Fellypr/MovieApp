import React, { createContext, useState, useContext } from 'react';

// Criação do contexto
const AuthContext = createContext();

// Provedor de contexto
export const AuthProvider = ({ children }) => {
    const [email, setEmail] = useState(''); // aqui vamos armazena o email cujo o usuario colocou no login

    const login = (userEmail) => {
        setEmail(userEmail); // Atualiza o email no contexto
    };

    const logout = () => {
        setEmail(''); // Limpa o email ao fazer logout
    };

    return (
        <AuthContext.Provider value={{ email, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para acessar o contexto
export const useAuth = () => useContext(AuthContext);
    