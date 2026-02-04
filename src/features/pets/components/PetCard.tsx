import { Link } from "react-router-dom";
import type { Pet } from "../types/pet.types";

type Props = {
  pet: Pet;
  onDelete?: (id: number) => void;
  isDeleting?: boolean;
};

export function PetCard({ pet, onDelete, isDeleting }: Props) {
  return (
    <div className="flex flex-col rounded-2xl border bg-white overflow-hidden shadow-sm hover:shadow transition">
      
      {/* 🔗 ÁREA DO LINK (Somente Foto e Info) */}
      <Link to={`/pets/${pet.id}`} className="block flex-1 group">
        <div className="h-36 bg-slate-50 flex items-center justify-center overflow-hidden">
          {pet.foto?.url ? (
            <img
              src={pet.foto.url}
              alt={pet.nome}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="text-slate-400 text-sm italic">Sem foto</div>
          )}
        </div>

        <div className="p-4">
          <div className="font-semibold text-slate-800 truncate">{pet.nome}</div>
          <div className="text-sm text-slate-500 truncate">{pet.raca || "—"}</div>

          <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
            <span className="px-2 py-1 rounded-full bg-slate-100 font-medium">Pet</span>
            <span className="px-2 py-1 rounded-full bg-slate-100">{pet.idade} ano(s)</span>
          </div>
        </div>
      </Link>

      <div className="px-4 pb-4">
        <button
          type="button"
          disabled={!!isDeleting}
          onClick={() => {
            // Verificação para não dar erro caso onDelete não tenha sido passado
            if (!onDelete) {
              alert("A função de excluir ainda não foi conectada na Store!");
              return;
            }
            
            const ok = window.confirm(`Excluir o pet "${pet.nome}" (ID #${pet.id})?`);
            if (ok) onDelete(pet.id);
          }}
          className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-600 hover:bg-red-50 hover:border-red-200 hover:text-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {isDeleting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="h-3 w-3 animate-spin rounded-full border-2 border-red-700 border-t-transparent"></span>
              Excluindo...
            </span>
          ) : (
            "Excluir Registro"
          )}
        </button>
      </div>
    </div>
  );
}