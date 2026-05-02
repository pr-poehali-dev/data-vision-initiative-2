import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Target",
    title: "csrep.gg",
    desc: "Репутация и жалобы от сообщества. Сколько раз игрока репортили за читы — видим сразу.",
  },
  {
    icon: "BarChart2",
    title: "csstats.gg",
    desc: "Аномальная статистика: headshot%, K/D, точность — выбиваются ли показатели за пределы нормы.",
  },
  {
    icon: "Shield",
    title: "faceitanalyser.com",
    desc: "Поведение на FACEIT: резкие скачки рейтинга, смена аккаунтов, подозрительные матчи.",
  },
];

export default function Featured() {
  return (
    <div id="how" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-neutral-950">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2 relative">
        <img
          src="/images/mountain-landscape.jpg"
          alt="CS2 gameplay"
          className="w-full h-full object-cover grayscale opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-red-500 text-[120px] font-black leading-none opacity-20 select-none">
              VAC
            </div>
            <div className="text-white text-6xl font-black leading-none opacity-10 select-none -mt-4">
              BANNED
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-widest text-red-500 font-semibold">Три источника данных</h3>
        <p className="text-2xl lg:text-4xl mb-10 text-white leading-tight font-bold">
          Анализируем игрока со всех сторон — репутация, статистика и поведение на FACEIT.
        </p>
        <div className="flex flex-col gap-6">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <div className="w-10 h-10 bg-red-600/20 border border-red-600/40 flex items-center justify-center shrink-0 mt-0.5">
                <Icon name={f.icon} fallback="Circle" size={18} className="text-red-500" />
              </div>
              <div>
                <div className="text-white font-bold uppercase tracking-wide text-sm mb-1">{f.title}</div>
                <div className="text-neutral-400 text-sm leading-relaxed">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}