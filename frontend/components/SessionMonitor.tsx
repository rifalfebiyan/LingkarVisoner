"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { LogOut, AlertCircle, Clock } from "lucide-react";

const TIMEOUT_DURATION = 5 * 60 * 1000; // 5 Menit dalam milidetik

export default function SessionMonitor() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const supabase = createClient();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleLogout = useCallback(async () => {
    await supabase.auth.signOut();
    setIsOpen(true);
  }, [supabase]);

  const resetTimer = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    // Hanya aktifkan timer di halaman dashboard
    if (pathname?.startsWith('/dashboard')) {
      timeoutRef.current = setTimeout(handleLogout, TIMEOUT_DURATION);
    }
  }, [handleLogout, pathname]);

  useEffect(() => {
    // Monitor auth state changes dari Supabase juga (sebagai backup)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        if (pathname?.startsWith('/dashboard')) {
          setIsOpen(true);
        }
      }
    });

    // Setup Inactivity Listeners
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    
    if (pathname?.startsWith('/dashboard')) {
      resetTimer();
      events.forEach(event => document.addEventListener(event, resetTimer));
    }

    return () => {
      subscription.unsubscribe();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      events.forEach(event => document.removeEventListener(event, resetTimer));
    };
  }, [supabase, pathname, resetTimer]);

  const handleRedirect = () => {
    setIsOpen(false);
    router.push("/login");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="border-8 border-slate-900 bg-white p-0 dark:border-slate-100 dark:bg-slate-900 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] dark:shadow-[12px_12px_0px_0px_rgba(241,245,249,1)] sm:max-w-[425px]">
        <div className="bg-amber-400 p-6 dark:bg-amber-600 border-b-4 border-slate-900 dark:border-slate-100 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-slate-900 flex items-center justify-center dark:bg-slate-100">
                <AlertCircle className="h-6 w-6 text-amber-400" />
            </div>
            <DialogTitle className="text-2xl font-black uppercase tracking-tight text-slate-900 dark:text-white">
                Sesi Berakhir!
            </DialogTitle>
        </div>
        
        <div className="p-8 space-y-4">
          <DialogDescription className="text-lg font-bold text-slate-700 dark:text-slate-300">
            Anda telah tidak aktif selama 5 menit. Sesi telah ditiadakan demi keamanan akun Anda.
          </DialogDescription>
          
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
            <Clock className="h-4 w-4" />
            <span>Sesi berakhir secara otomatis</span>
          </div>
        </div>

        <DialogFooter className="p-6 bg-slate-50 dark:bg-slate-800 border-t-4 border-slate-900 dark:border-slate-100">
          <button
            onClick={handleRedirect}
            className="w-full border-4 border-slate-900 bg-slate-900 px-6 py-4 text-lg font-black uppercase tracking-widest text-white shadow-[6px_6px_0px_0px_rgba(251,191,36,1)] transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(251,191,36,1)] dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900"
          >
            Masuk Kembali Sekarang
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
