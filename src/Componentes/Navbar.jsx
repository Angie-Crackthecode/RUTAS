import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../Context/ThemeContext"; // asegúrate de que el path coincida
import { useUser } from "../Context/UserContext";

export function Navbar({ onOpenLogin }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const { theme, toggleTheme } = useTheme();
  const { user, isAuthenticated, logout } = useUser();

  const actionBtn =
    "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium " +
    "hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 transition";

  return (
    <nav className="bg-gradient-to-r from-[#001f4d] to-[#0b3d91] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo / Nombre */}
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <img
            src="https://images.vexels.com/media/users/3/153808/isolated/preview/4876c523fb2612dceba4be0c7031461c-icono-de-trazo-frontal-de-silla-de-oficina.png"
            alt="Logo"
            className="w-8 h-8"
          />
          <span className="font-semibold text-lg tracking-tight">
            La casa de la oficina
          </span>
        </Link>

        {/* Enlaces (desktop) */}
        <div className="hidden md:flex gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `font-semibold hover:text-blue-200 transition-colors ${
                isActive ? "text-blue-300 underline underline-offset-4" : ""
              }`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/nosotros"
            className={({ isActive }) =>
              `font-semibold hover:text-blue-200 transition-colors ${
                isActive ? "text-blue-300 underline underline-offset-4" : ""
              }`
            }
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/productos"
            className={({ isActive }) =>
              `font-semibold hover:text-blue-200 transition-colors ${
                isActive ? "text-blue-300 underline underline-offset-4" : ""
              }`
            }
          >
            Productos
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              `font-semibold hover:text-blue-200 transition-colors ${
                isActive ? "text-blue-300 underline underline-offset-4" : ""
              }`
            }
          >
            Contacto
          </NavLink>
        </div>

        {/* Acciones derechas */}
        <div className="flex items-center gap-2">
          {/* Botón de tema */}
          <button onClick={toggleTheme} className={actionBtn}>
            Cambiar a {theme === "dark" ? "Light" : "Dark"}
          </button>

          {/* Estado de usuario */}
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              {user?.avatar && (
                <img
                  src={user.avatar}
                  alt={user.nombre ?? "Usuario"}
                  referrerPolicy="no-referrer"
                  className="h-8 w-8 rounded-full object-cover"
                />
              )}
              <div className="hidden sm:block leading-4 text-right">
                <p className="text-sm font-medium">{user?.nombre}</p>
                <p className="text-xs text-blue-200">{user?.cargo}</p>
              </div>
              <button onClick={logout} className={actionBtn}>
                Cerrar sesión
              </button>
            </div>
          ) : (
            <button onClick={onOpenLogin} className={actionBtn}>
              Iniciar sesión
            </button>
          )}

          {/* Botón hamburguesa (móvil) */}
          <button
            className="md:hidden text-2xl focus:outline-none ml-1"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-[#0b3d91] flex flex-col items-center space-y-3 py-4">
          <NavLink to="/" end onClick={closeMenu}>
            Inicio
          </NavLink>
          <NavLink to="/nosotros" onClick={closeMenu}>
            Nosotros
          </NavLink>
          <NavLink to="/productos" onClick={closeMenu}>
            Productos
          </NavLink>
          <NavLink to="/contacto" onClick={closeMenu}>
            Contacto
          </NavLink>
        </div>
      )}
    </nav>
  );
}
