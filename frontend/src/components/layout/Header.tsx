import { LogOut } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-end gap-3">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-violet-600 text-sm font-bold text-white">
          U
        </div>
        <span className="font-semibold text-white">User Name</span>
      </div>
      <button
        type="button"
        aria-label="ログアウト"
        className="rounded-md bg-violet-500 p-2 text-white transition hover:bg-violet-600"
      >
        <LogOut className="h-5 w-5" />
      </button>
    </header>
  );
}
