import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

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
        Как работает анализ
      </h3>

      <div id="check" className="absolute inset-0 flex items-center justify-center z-10 px-6">
        <div className="w-full max-w-xl bg-black/70 border border-neutral-700 p-8 backdrop-blur-sm">
          <p className="text-neutral-400 text-xs uppercase tracking-widest mb-2">Steam / FACEIT никнейм или ссылка</p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Введите никнейм игрока..."
              className="flex-1 bg-neutral-900 border border-neutral-600 text-white px-4 py-3 text-sm outline-none focus:border-red-500 transition-colors placeholder:text-neutral-600"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white uppercase tracking-widest text-sm px-6 py-3 transition-colors duration-300 font-semibold whitespace-nowrap">
              Сканировать
            </button>
          </div>
          <p className="text-neutral-600 text-xs mt-3">
            Проверяем по csrep.gg · csstats.gg · faceitanalyser.com
          </p>
        </div>
      </div>

      <p className="absolute bottom-12 left-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg z-10 font-bold leading-tight">
        Один никнейм —<br />
        <span className="text-red-500">полный вердикт.</span>
      </p>
    </div>
  );
}