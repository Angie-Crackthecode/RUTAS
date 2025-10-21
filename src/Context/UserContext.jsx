/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useMemo } from "react";

const UserContext = createContext(null);

// Hook de conveniencia
export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser debe usarse dentro de <UserProvider>");
  return ctx;
}

export function UserProvider({ children  }) {

  const [user, setUser] = useState(null);
  // Acepta un objeto usuario ya validado (desde el LoginForm)
  const login = (userObject) => setUser(userObject);

  // Limpia la sesión
  const logout = () => setUser(null);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: user? true : false,
      login,
      logout,
    }),
    [user]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}