/**
 * Modal sencillo con Tailwind.
 * - Se muestra centrado, con fondo oscuro semitransparente.
 * - Renderiza children (en nuestro caso el <LoginForm />).
 */
export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  // Evita que el clic dentro del contenido cierre el modal
  const stop = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
        onClick={stop}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Iniciar sesión</h2>
          <button
            onClick={onClose}
            className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100"
            aria-label="Cerrar modal"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}