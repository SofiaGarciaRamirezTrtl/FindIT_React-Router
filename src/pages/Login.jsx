import { Link, useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/dashboard");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-8">
        <p className="font-bold text-indigo-700">FindIT</p>
        <h1 className="mt-2 text-3xl font-bold">Iniciar sesión</h1>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <label className="grid gap-1">
            Correo electrónico
            <input
              type="email"
              placeholder="alumno@ejemplo.com"
              className="rounded-lg border border-slate-300 px-3 py-2"
            />
          </label>

          <label className="grid gap-1">
            Contraseña
            <input
              type="password"
              className="rounded-lg border border-slate-300 px-3 py-2"
            />
          </label>

          <button
            type="submit"
            className="rounded-lg bg-indigo-700 px-4 py-2 font-semibold text-white hover:bg-indigo-800"
          >
            Entrar al Dashboard
          </button>
        </form>

        <Link to="/" className="mt-5 inline-block text-indigo-700 hover:underline">
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}