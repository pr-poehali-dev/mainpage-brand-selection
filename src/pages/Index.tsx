import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

// Логотип — круглый знак с храмом, рекой и деревьями (первый набор, нижний)
const LOGO_URL = "https://cdn.poehali.dev/projects/9db809e0-ec1e-4403-aadb-488ac19bbf13/bucket/8733e7df-f1cd-44ea-abf2-0c58cdf73223.png";
// Знак-ключ как дополнительный символ
const KEY_SIGN_URL = "https://cdn.poehali.dev/projects/9db809e0-ec1e-4403-aadb-488ac19bbf13/bucket/63fce88d-d1a2-472e-88ec-6477fded8aaf.png";

const C = {
  bg: "hsl(44,35%,95%)",
  bgDark: "hsl(44,25%,88%)",
  green: "hsl(138,35%,18%)",
  greenMid: "hsl(130,28%,30%)",
  greenLight: "hsl(120,22%,50%)",
  beige: "hsl(42,38%,90%)",
  text: "hsl(100,20%,18%)",
  textLight: "hsl(100,12%,42%)",
};

const navLinks = ["История", "Новости", "Природа", "Контакты"];

const facts = [
  { icon: "Trees", value: "1782", label: "год основания" },
  { icon: "Users", value: "860", label: "жителей" },
  { icon: "Droplets", value: "3", label: "родника" },
  { icon: "MapPin", value: "68 км", label: "от Екатеринбурга" },
];

const highlights = [
  {
    icon: "Leaf",
    title: "Природа и родники",
    desc: "Живописные леса, чистые ключи и речки — сердце нашей деревни",
  },
  {
    icon: "Church",
    title: "История и культура",
    desc: "Старинный храм, народные промыслы и богатое наследие предков",
  },
  {
    icon: "Sun",
    title: "Активный отдых",
    desc: "Рыбалка, пешие прогулки, сбор грибов и ягод круглый год",
  },
];

const Index = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => { clearTimeout(t); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden font-golos" style={{ background: C.bg, color: C.text }}>

      {/* ═══ НАВИГАЦИЯ ═══ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? `rgba(245,240,228,0.97)`
            : "transparent",
          boxShadow: scrolled ? "0 1px 24px rgba(30,50,20,0.08)" : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* ЛОГОТИП — блок */}
          <div className="flex items-center gap-3">
            {/* Знак-ключ как пиктограмма */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border-2 transition-all duration-300"
              style={{ borderColor: C.greenMid, background: C.beige }}
            >
              <img
                src={KEY_SIGN_URL}
                alt="Знак Ключи"
                className="w-7 h-7 object-contain"
                style={{ filter: "brightness(0.3) sepia(1) saturate(2) hue-rotate(80deg)" }}
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className="font-cormorant text-xl font-semibold tracking-wider"
                style={{ color: C.green }}
              >
                Деревня
              </span>
              <span
                className="font-cormorant text-2xl font-bold tracking-[0.12em] uppercase"
                style={{ color: C.greenMid }}
              >
                Ключи
              </span>
            </div>
          </div>

          {/* Меню */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm tracking-widest uppercase font-medium transition-all duration-300 relative group"
                style={{ color: C.textLight }}
              >
                {link}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: C.greenLight }}
                />
              </a>
            ))}
          </div>

          <button
            className="text-sm tracking-widest uppercase font-medium px-5 py-2 rounded-full transition-all duration-300 hover:scale-105"
            style={{ background: C.green, color: C.beige }}
          >
            Написать нам
          </button>
        </div>
      </nav>

      {/* ═══ ГЕРОЙ ═══ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">

        {/* Текстурный фон — деликатный орнамент */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(${C.greenMid} 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Мягкие цветовые пятна */}
        <div
          className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: C.greenLight }}
        />
        <div
          className="absolute bottom-20 left-0 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: "hsl(90,40%,60%)" }}
        />

        {/* ГЛАВНЫЙ ЛОГОТИП — крупно по центру */}
        <div
          className={`relative z-10 flex flex-col items-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Круглый знак */}
          <div
            className="relative mb-8"
            style={{ filter: "drop-shadow(0 8px 32px rgba(30,70,20,0.18))" }}
          >
            {/* Декоративное кольцо */}
            <div
              className="absolute inset-0 rounded-full border-2 opacity-30 scale-110"
              style={{ borderColor: C.greenMid }}
            />
            <div
              className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4"
              style={{ borderColor: C.green, background: C.beige }}
            >
              {/* Используем правый нижний вариант из второго набора — круг с рекой и домами */}
              <img
                src="https://cdn.poehali.dev/projects/9db809e0-ec1e-4403-aadb-488ac19bbf13/bucket/8733e7df-f1cd-44ea-abf2-0c58cdf73223.png"
                alt="Логотип деревни Ключи"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: "100% 100%",
                  transform: "scale(1.8) translate(-18%, -18%)",
                }}
              />
            </div>
          </div>

          {/* Надпись */}
          <p
            className="font-cormorant italic text-lg tracking-[0.35em] mb-1 uppercase"
            style={{ color: C.greenLight }}
          >
            Добро пожаловать в
          </p>
          <h1
            className="font-cormorant text-7xl md:text-8xl lg:text-9xl font-light tracking-tight mb-2 text-center"
            style={{ color: C.green, lineHeight: 0.95 }}
          >
            Ключи
          </h1>
          <div className="flex items-center gap-4 my-4">
            <div className="h-px w-16 opacity-30" style={{ background: C.greenMid }} />
            <div className="w-2 h-2 rounded-full opacity-40" style={{ background: C.greenMid }} />
            <div className="h-px w-16 opacity-30" style={{ background: C.greenMid }} />
          </div>
          <p
            className="text-base md:text-lg tracking-widest uppercase text-center max-w-md"
            style={{ color: C.textLight }}
          >
            Сысертского муниципального округа
            <br />
            Свердловской области
          </p>

          <div className="flex items-center gap-4 mt-10">
            <button
              className="px-8 py-3 rounded-full text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ background: C.green, color: C.beige }}
            >
              О деревне
            </button>
            <button
              className="px-8 py-3 rounded-full text-sm tracking-widest uppercase font-medium border-2 transition-all duration-300 hover:scale-105"
              style={{ borderColor: C.greenMid, color: C.greenMid }}
            >
              Новости
            </button>
          </div>
        </div>

        {/* Волнистый разделитель снизу */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
              fill={C.bgDark}
            />
          </svg>
        </div>
      </section>

      {/* ═══ ФАКТЫ ═══ */}
      <section style={{ background: C.bgDark }} className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {facts.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 rounded-2xl group hover:scale-105 transition-all duration-300"
              style={{ background: C.bg }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                style={{ background: C.beige, border: `1.5px solid ${C.greenLight}` }}
              >
                <Icon name={f.icon} fallback="Star" size={20} style={{ color: C.greenMid }} />
              </div>
              <p
                className="font-cormorant text-4xl font-semibold mb-1"
                style={{ color: C.green }}
              >
                {f.value}
              </p>
              <p className="text-xs tracking-widest uppercase" style={{ color: C.textLight }}>
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ О ДЕРЕВНЕ ═══ */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="font-cormorant italic text-lg tracking-widest uppercase mb-3"
              style={{ color: C.greenLight }}
            >
              Наша деревня
            </p>
            <h2
              className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight"
              style={{ color: C.green }}
            >
              Живая история
              <br />
              <span className="italic">среди природы</span>
            </h2>
            <div className="w-12 h-0.5 mb-6" style={{ background: C.greenLight }} />
            <p className="text-base leading-relaxed mb-4" style={{ color: C.textLight }}>
              Деревня Ключи раскинулась среди живописных лесов и лугов Сысертского района. Своё название она получила от многочисленных родников — ключей, которые и сегодня поят жителей чистой студёной водой.
            </p>
            <p className="text-base leading-relaxed" style={{ color: C.textLight }}>
              Здесь сохранился старинный храм, народные промыслы и особый уклад жизни, в котором каждый сезон — праздник.
            </p>
            <button
              className="mt-8 flex items-center gap-2 text-sm tracking-widest uppercase font-medium group"
              style={{ color: C.greenMid }}
            >
              Читать историю
              <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Декоративный блок-коллаж */}
          <div className="relative">
            <div
              className="w-full aspect-square rounded-3xl overflow-hidden"
              style={{ background: C.bgDark, border: `2px solid ${C.bgDark}` }}
            >
              <img
                src="https://cdn.poehali.dev/projects/9db809e0-ec1e-4403-aadb-488ac19bbf13/bucket/8733e7df-f1cd-44ea-abf2-0c58cdf73223.png"
                alt="Природа деревни Ключи"
                className="w-full h-full object-cover"
                style={{ objectPosition: "0% 0%", transform: "scale(2) translate(25%, 25%)" }}
              />
            </div>
            {/* Плашка поверх */}
            <div
              className="absolute -bottom-5 -left-5 px-6 py-4 rounded-2xl shadow-lg"
              style={{ background: C.green }}
            >
              <p className="font-cormorant text-3xl font-light" style={{ color: C.beige }}>240+</p>
              <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(245,240,228,0.65)" }}>
                лет истории
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HIGHLIGHTS ═══ */}
      <section className="py-20 px-6" style={{ background: C.bgDark }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="font-cormorant italic text-lg tracking-widest uppercase mb-2"
              style={{ color: C.greenLight }}
            >
              Что нас отличает
            </p>
            <h2
              className="font-cormorant text-5xl font-light"
              style={{ color: C.green }}
            >
              Гордость деревни
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl group hover:scale-[1.02] transition-all duration-400 cursor-pointer"
                style={{ background: C.bg, border: `1.5px solid transparent` }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.greenLight)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: C.beige }}
                >
                  <Icon name={h.icon} fallback="Leaf" size={24} style={{ color: C.greenMid }} />
                </div>
                <h3
                  className="font-cormorant text-2xl font-semibold mb-2"
                  style={{ color: C.green }}
                >
                  {h.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: C.textLight }}>
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${C.green} 0%, hsl(130,28%,22%) 100%)`,
          }}
        />
        {/* Декоративный орнамент */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(hsl(42,38%,90%) 1.5px, transparent 1.5px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white/30">
            <img
              src={KEY_SIGN_URL}
              alt="Ключи"
              className="w-full h-full object-contain p-2"
              style={{ filter: "brightness(10)" }}
            />
          </div>
          <h2
            className="font-cormorant text-5xl md:text-6xl font-light mb-4 leading-tight"
            style={{ color: C.beige }}
          >
            Приезжайте в{" "}
            <span className="italic">Ключи</span>
          </h2>
          <p className="text-base mb-10 opacity-70 tracking-wide" style={{ color: C.beige }}>
            Узнайте больше о жизни деревни, её событиях и истории
          </p>
          <button
            className="px-10 py-4 rounded-full text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105"
            style={{ background: C.beige, color: C.green }}
          >
            Связаться с администрацией
          </button>
        </div>
      </section>

      {/* ═══ ФУТЕР ═══ */}
      <footer className="py-12 px-8 border-t" style={{ background: C.green, borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full overflow-hidden border-2 border-white/30 flex items-center justify-center"
              style={{ background: C.beige }}
            >
              <img
                src={KEY_SIGN_URL}
                alt="Ключи"
                className="w-6 h-6 object-contain"
                style={{ filter: "brightness(0.3) sepia(1) saturate(2) hue-rotate(80deg)" }}
              />
            </div>
            <div>
              <p className="font-cormorant text-lg font-semibold tracking-wider" style={{ color: C.beige }}>
                Деревня Ключи
              </p>
              <p className="text-xs opacity-50 tracking-wide" style={{ color: C.beige }}>
                © 2024 Все права защищены
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm tracking-widest uppercase opacity-60">
            {navLinks.map((l) => (
              <a
                key={l}
                href="#"
                className="hover:opacity-100 transition-opacity duration-200"
                style={{ color: C.beige }}
              >
                {l}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm opacity-50" style={{ color: C.beige }}>
            <Icon name="MapPin" size={14} />
            <span>Сысертский р-н, Свердловская обл.</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;
