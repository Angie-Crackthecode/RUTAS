import { useState } from "react"
import { usersData } from "../assets/usuarios"
import { useUser } from "../Context/UserContext"

export function LoginForm({ onSuccess }) {
    const { login } = useUser(); //Estado del login
    const [form, setForm] = useState({ correo: "", password: "" }); //Valores del Formulario
    const [error, setError] = useState(""); //Error de llenado del Formulario

    //LLena los valores del formulario cuando escribes
    const handleChange = (e) =>
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

    //Envia el formulario y en caso de error lo muestra
    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        // Buscar usuario por correo y password
        const found = usersData.find(
            (u) => u.email === form.correo.trim() && u.password === form.password
        );
        // Verifica si el usuario existe
        if (!found) {
            setError("Credenciales inválidas. Verifica tu correo y contraseña.");
            return;
        }

        // Guardar en contexto y cerrar modal
        login(found);
        onSuccess?.();

    }


    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
                <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                    {error}
                </div>
            )}

            <div className="space-y-1">
                <label htmlFor="correo" className="text-sm font-medium text-gray-700">
                    Correo
                </label>
                <input
                    id="correo"
                    name="correo"
                    type="email"
                    value={form.correo}
                    onChange={handleChange}
                    className="w-full rounded-md border px-3 py-2 outline-none ring-0 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    placeholder="ana@example.com"
                    required
                />
            </div>

            <div className="space-y-1">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Contraseña
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full rounded-md border px-3 py-2 outline-none ring-0 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    placeholder="••••••"
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700"
            >
                Entrar
            </button>

        </form>
    )
}