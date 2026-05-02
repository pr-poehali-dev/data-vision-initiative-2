import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const sources = [
  {
    name: "csrep.gg",
    label: "Репутация",
    icon: "Flag",
    getUrl: (nick: string) => `https://csrep.gg/player/${encodeURIComponent(nick)}`,
  },
  {
    name: "csstats.gg",
    label: "Статистика",
    icon: "BarChart2",
    getUrl: (nick: string) => `https://csstats.gg/player/${encodeURIComponent(nick)}`,
  },
  {
    name: "faceitanalyser.com",
    label: "FACEIT",
    icon: "Shield",
    getUrl: (nick: string) => `https://faceitanalyser.com/stats/${encodeURIComponent(nick)}`,
  },
];

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const [nickname, setNickname] = useState("");
  const [opened, setOpened] = useState(false);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  const handleScan = () => {
    const nick = nickname.trim();
    if (!nick) return;
    sources.forEach((s) => window.open(s.getUrl(nick), "_blank", "noopener,noreferrer"));
    setOpened(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleScan();
  };

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Abstract spiral circles"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-black/60 z-[1]" />

      <h3 className="absolute top-12 left-6 text-red-400 uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest font-semibold">
        Проверить игрока
      </h3>

      <div id="check" className="absolute inset-0 flex items-center justify-center z-10 px-6">
        <div className="w-full max-w-xl bg-black/70 border border-neutral-700 p-8 backdrop-blur-sm">
          <p className="text-neutral-400 text-xs uppercase tracking-widest mb-2">
            Steam / FACEIT никнейм
          </p>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={nickname}
              onChange={(e) => { setNickname(e.target.value); setOpened(false); }}
              onKeyDown={handleKeyDown}
              placeholder="Введите никнейм игрока..."
              className="flex-1 bg-neutral-900 border border-neutral-600 text-white px-4 py-3 text-sm outline-none focus:border-red-500 transition-colors placeholder:text-neutral-600"
            />
            <button
              onClick={handleScan}
              disabled={!nickname.trim()}
              className="bg-red-600 hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed text-white uppercase tracking-widest text-sm px-6 py-3 transition-colors duration-300 font-semibold whitespace-nowrap"
            >
              Сканировать
            </button>
          </div>

          <div className="flex gap-3">
            {sources.map((s) => (
              <a
                key={s.name}
                href={nickname.trim() ? s.getUrl(nickname.trim()) : undefined}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => { if (!nickname.trim()) e.preventDefault(); }}
                className={`flex-1 flex flex-col items-center gap-1.5 border py-3 px-2 transition-all duration-300 text-center group ${
                  nickname.trim()
                    ? "border-neutral-600 hover:border-red-500 cursor-pointer"
                    : "border-neutral-800 opacity-40 cursor-not-allowed"
                }`}
              >
                <Icon name={s.icon} fallback="Circle" size={16} className={`transition-colors ${nickname.trim() ? "text-neutral-400 group-hover:text-red-400" : "text-neutral-600"}`} />
                <span className="text-neutral-500 text-[10px] uppercase tracking-wider">{s.label}</span>
                <span className={`text-[11px] transition-colors ${nickname.trim() ? "text-neutral-300 group-hover:text-white" : "text-neutral-700"}`}>{s.name}</span>
              </a>
            ))}
          </div>

          {opened && (
            <p className="text-green-400 text-xs mt-4 flex items-center gap-2">
              <Icon name="CheckCircle" size={13} className="text-green-400" />
              Открыто 3 вкладки — проверьте каждый источник
            </p>
          )}
        </div>
      </div>

      <p className="absolute bottom-12 left-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg z-10 font-bold leading-tight">
        Один никнейм —<br />
        <span className="text-red-500">полный вердикт.</span>
      </p>
    </div>
  );
}
