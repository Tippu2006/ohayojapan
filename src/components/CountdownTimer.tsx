import { useEffect, useState } from "react";
import { festival } from "@/content/site";
import { Clock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ targetDate = festival.startsAt }: { targetDate?: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = new Date(targetDate).getTime();

    const calculate = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (!mounted) return null;

  const units = [
    { label: "DAYS", jp: "日", value: timeLeft.days },
    { label: "HOURS", jp: "時間", value: timeLeft.hours },
    { label: "MINUTES", jp: "分", value: timeLeft.minutes },
    { label: "SECONDS", jp: "秒", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl glass p-6 sm:p-10 border border-gold/40 shadow-[0_0_60px_rgba(200,16,46,0.35),0_0_35px_rgba(255,215,0,0.3)] backdrop-blur-xl">
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-crimson/20 via-gold/30 to-crimson/20 blur-xl opacity-70" />
        
        <div className="relative z-10 space-y-6">
          <div className="flex items-center justify-center gap-2">
            <Clock className="h-4 w-4 text-gold animate-spin-slow" />
            <span className="inline-block rounded-full bg-crimson/30 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-gold border border-gold/40 shadow-sm">
              FESTIVAL COUNTDOWN
            </span>
          </div>

          <h3 className="font-display text-2xl sm:text-4xl font-extrabold gold-text tracking-widest uppercase drop-shadow-[0_4px_20px_rgba(200,16,46,0.5)]">
            SEPTEMBER 16 & 17, 2026
          </h3>

          {/* Countdown Boxes */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 pt-2">
            {units.map((unit) => (
              <div
                key={unit.label}
                className="flex flex-col items-center justify-center rounded-2xl bg-black/60 border border-gold/30 p-3 sm:p-5 shadow-[0_0_20px_rgba(0,0,0,0.6)] backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:border-gold/60"
              >
                <span className="font-display text-2xl sm:text-5xl font-black text-cream drop-shadow-[0_0_12px_rgba(255,215,0,0.5)]">
                  {String(unit.value).padStart(2, "0")}
                </span>
                <span className="mt-1 font-jp text-[10px] sm:text-xs text-gold/90 font-semibold tracking-widest">
                  {unit.jp}
                </span>
                <span className="text-[9px] sm:text-[11px] font-bold text-cream/60 tracking-wider uppercase">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          <p className="font-jp text-xs sm:text-sm text-cream/70 font-medium tracking-wider pt-1">
            KL University Campus · ２日間の日本文化没入体験
          </p>
        </div>
      </div>
    </div>
  );
}
