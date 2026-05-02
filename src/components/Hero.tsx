import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="CS2 background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <div className="inline-block bg-red-600 text-white text-xs uppercase tracking-widest px-3 py-1 mb-6 font-semibold">
          Бесплатный анализ
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          ЧИТЕР<br />
          <span className="text-red-500">ИЛИ НЕТ?</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-8">
          Анализируем статистику игрока в CS2 по данным csrep.gg, csstats.gg и faceitanalyser.com — и выдаём честный вердикт
        </p>
        <a
          href="#check"
          className="inline-block bg-red-600 hover:bg-red-700 text-white uppercase tracking-widest text-sm px-8 py-3 transition-colors duration-300 font-semibold"
        >
          Проверить игрока
        </a>
      </div>
    </div>
  );
}