import { usersData } from "../assets/usuarios"
import { UserCard } from "../Componentes/UserCard"
import { Comentarios } from "../Componentes/Comentarios";
import { useTheme }  from "../Context/ThemeContext";
import { useUser } from "../Context/UserContext";
import { Link } from "react-router-dom";

export function Inicio() {
    const { isAuthenticated } = useUser();
    const {theme} = useTheme();
    return (
        <div className={theme === "dark" ? "min-h-dvh bg-gray-900 text-white" : "min-h-dvh bg-white text-gray-900"}>
            <h1 className="text-3xl font-bold text-blue-500/60 my-[200px] hover:text-violet-200">Bienvenido a mi Pagina</h1>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima obcaecati, blanditiis voluptate modi animi voluptatibus magni nostrum ipsum. Alias numquam iste itaque est, tenetur atque labore voluptatem ex nostrum laudantium!</p>
<br />
<br />
            {isAuthenticated ? (
            <div className="users-list">
                {usersData.map((user) => (
                <UserCard key={user.id} {...user} />
            ))}
            </div>
            ):
            (
                <div>
                    Debes loguearte para ver el contenido.
                </div>
            )}
            <Link to="Especial" target="_blank">
                Encuesta
            </Link>

            {/* Aquí se muestran los comentarios */}
            <div className="comentarios-section mt-10">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                Comentarios
                </h2>
                <Comentarios />
            </div>
            
        </div>
    )
}