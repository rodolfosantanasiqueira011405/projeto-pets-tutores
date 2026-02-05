import { useNavigate } from "react-router-dom";
import { PawPrint } from "lucide-react";
import { authStore } from "../../features/auth/state/auth.store";
import { useObservableState } from "../../lib/useObservableState";

export function Topbar() {
  const nav = useNavigate();
  const a = useObservableState(authStore.state$, authStore.snapshot);

  function onLogout() {'+'
    authStore.logout();
    nav("/login");
  }

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6">
      {/* Logo e Nome do Sistema */}
      <div className="flex items-center gap-2">
        <PawPrint className="h-6 w-6 text-teal-600" />
        <span className="text-lg font-semibold text-slate-800">Pet Manager - Sistema de Gestão de Pets e Tutores</span>
      </div>

      {/* Usuário e Logout */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-slate-700">{a.user?.username ?? "—"}</span>

        <button
          onClick={onLogout}
          className="px-3 py-2 rounded-xl border bg-white hover:bg-slate-50 text-sm transition-colors"
          type="button"
        >
          Sair
        </button>
      </div>
    </header>
  );
}