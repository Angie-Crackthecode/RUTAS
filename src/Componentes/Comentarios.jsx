import { useState } from "react";
import { comentariosUsuarios } from "../assets/comentarios";

export function Comentarios() {
  const [Comentarios] = useState(comentariosUsuarios);

  return (
    <div className="grid grid-cols-2 gap-4">
      {Comentarios.map((comentario) => (
        <div
          key={comentario.id}
          className="p-4 bg-gray-100 rounded-2xl shadow hover:shadow-md"
        >
          <h4 className="font-bold text-blue-600">{comentario.nombreUsuario}</h4>
          <p className="text-gray-700 mt-2">{comentario.mensaje}</p>
        </div>
      ))}
    </div>
  );
}
