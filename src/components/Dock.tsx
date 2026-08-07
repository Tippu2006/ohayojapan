import { Link } from "@tanstack/react-router";
import { Home, CalendarDays, Ticket, PenLine, Sparkles } from "lucide-react";
import { useLang } from "@/lib/lang";
import { ui } from "@/content/site";

const items = [
  { to: "/", label: ui.home, Icon: Home },
  { to: "/schedule", label: ui.schedule, Icon: CalendarDays },
  { to: "/events", label: ui.events, Icon: Ticket },
  { to: "/register", label: ui.registration, Icon: PenLine },
  { to: "/updates", label: ui.updates, Icon: Sparkles },
] as const;

/** Always-visible floating dock. */
export function Dock() {
  const { t } = useLang();

  return (
    <nav className="fixed inset-x-0 bottom-3 sm:bottom-4 z-40 flex justify-center px-2 sm:px-4">
      <div className="glass flex items-center gap-0.5 sm:gap-2 rounded-full p-1 sm:p-1.5 shadow-[var(--shadow-crimson)] max-w-full overflow-x-auto">
        {items.map(({ to, label, Icon }) => (
          <Link
            key={to}
            to={to}
            activeOptions={{ exact: to === "/" }}
            className="group relative flex items-center gap-1 sm:gap-2 rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs tracking-wide text-cream/75 transition-colors hover:text-cream shrink-0 data-[status=active]:text-ink"
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full"
                    style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-glow)" }}
                  />
                )}
                <Icon className="relative h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                <span className="relative font-bold text-[10px] sm:text-xs">{t(label)}</span>
              </>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}
