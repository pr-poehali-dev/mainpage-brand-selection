import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/9db809e0-ec1e-4403-aadb-488ac19bbf13/files/e68b5adb-c813-4f83-8a4c-dcf437ccc298.jpg";

const services = [
  { icon: "Zap", title: "Быстро", desc: "Запускаем проект в сжатые сроки без лишней бюрократии" },
  { icon: "Gem", title: "Качественно", desc: "Каждая деталь проработана до совершенства" },
  { icon: "Shield", title: "Надёжно", desc: "Стабильная работа и поддержка 24/7" },
  { icon: "Sparkles", title: "Современно", desc: "Актуальные технологии и тренды индустрии" },
];

const stats = [
  { value: "150+", label: "Проектов" },
  { value: "8 лет", label: "Опыта" },
  { value: "98%", label: "Довольных клиентов" },
  { value: "24/7", label: "Поддержка" },
];

const Index = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-[hsl(220,20%,7%)] text-[hsl(40,30%,92%)] font-golos overflow-x-hidden">

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{ background: "linear-gradient(to bottom, rgba(10,12,18,0.95) 0%, transparent 100%)" }}
      >
        <span className="font-cormorant text-2xl font-semibold tracking-widest uppercase text-[hsl(42,78%,60%)]">
          STUDIO
        </span>
        <div className="hidden md:flex items-center gap-10 text-sm tracking-widest uppercase opacity-70">
          <a href="#about" className="hover:opacity-100 hover:text-[hsl(42,78%,60%)] transition-all duration-300">О нас</a>
          <a href="#services" className="hover:opacity-100 hover:text-[hsl(42,78%,60%)] transition-all duration-300">Услуги</a>
          <a href="#contact" className="hover:opacity-100 hover:text-[hsl(42,78%,60%)] transition-all duration-300">Контакт</a>
        </div>
        <button className="text-sm tracking-widest uppercase border border-[hsl(42,78%,60%)] text-[hsl(42,78%,60%)] px-5 py-2 hover:bg-[hsl(42,78%,60%)] hover:text-[hsl(220,20%,7%)] transition-all duration-300">
          Связаться
        </button>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(10,12,18,0.88) 0%, rgba(10,12,18,0.5) 50%, rgba(10,12,18,0.78) 100%)" }}
        />

        <div className="absolute left-0 top-0 w-px h-full opacity-20" style={{ background: "linear-gradient(to bottom, transparent, hsl(42,78%,60%), transparent)" }} />
        <div className="absolute right-0 top-0 w-px h-full opacity-20" style={{ background: "linear-gradient(to bottom, transparent, hsl(42,78%,60%), transparent)" }} />

        <div
          className={`relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="font-cormorant text-[hsl(42,78%,60%)] text-lg tracking-[0.4em] uppercase mb-6 italic">
            Добро пожаловать
          </p>
          <h1 className="font-cormorant text-6xl md:text-8xl lg:text-9xl font-light leading-none tracking-tight mb-8">
            Создаём
            <br />
            <span className="italic font-normal" style={{ color: "hsl(42,80%,75%)" }}>будущее</span>
            <br />
            вместе
          </h1>
          <p className="font-golos text-lg md:text-xl font-light opacity-65 max-w-xl mx-auto mb-12 leading-relaxed tracking-wide">
            Превращаем идеи в продукты, которые работают.<br />Профессионально. Элегантно. Без компромиссов.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="px-10 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105"
              style={{ background: "hsl(42,78%,60%)", color: "hsl(220,20%,7%)" }}
            >
              Начать проект
            </button>
            <button className="px-10 py-4 text-sm tracking-widest uppercase font-medium border border-white/30 hover:border-white/70 transition-all duration-300 hover:scale-105">
              Портфолио
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-widest uppercase">Листай вниз</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent animate-pulse" />
        </div>
      </section>

      {/* STATS */}
      <section id="about" className="py-20 border-y border-white/10" style={{ background: "hsl(220,18%,11%)" }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center group">
              <p
                className="font-cormorant text-5xl md:text-6xl font-light mb-2 group-hover:text-[hsl(42,78%,60%)] transition-colors duration-300"
                style={{ color: "hsl(42,80%,75%)" }}
              >
                {s.value}
              </p>
              <p className="text-xs tracking-widest uppercase opacity-50">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-cormorant text-[hsl(42,78%,60%)] text-lg tracking-[0.4em] uppercase italic mb-4">
            Что мы делаем
          </p>
          <h2 className="font-cormorant text-5xl md:text-6xl font-light">
            Наши услуги
          </h2>
          <div className="w-16 h-px mx-auto mt-6" style={{ background: "hsl(42,78%,60%)" }} />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group p-8 border border-white/10 hover:border-[hsl(42,78%,60%)] transition-all duration-500 cursor-pointer"
              style={{ background: "hsl(220,18%,11%)" }}
            >
              <div className="w-12 h-12 flex items-center justify-center mb-6 border border-white/20 group-hover:border-[hsl(42,78%,60%)] transition-colors duration-300">
                <Icon name={s.icon} fallback="Star" size={20} className="opacity-60 group-hover:opacity-100 group-hover:text-[hsl(42,78%,60%)] transition-all duration-300" />
              </div>
              <h3 className="font-cormorant text-2xl font-light mb-3 group-hover:text-[hsl(42,80%,75%)] transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-sm opacity-50 leading-relaxed group-hover:opacity-70 transition-opacity duration-300">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, hsl(42,78%,20%) 0%, hsl(220,20%,7%) 60%)" }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(0deg, hsl(42,78%,60%) 0px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, hsl(42,78%,60%) 0px, transparent 1px, transparent 60px)" }}
        />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="font-cormorant text-5xl md:text-7xl font-light mb-6 leading-tight">
            Готовы к{" "}
            <span className="italic" style={{ color: "hsl(42,80%,75%)" }}>запуску?</span>
          </h2>
          <p className="font-golos opacity-60 text-lg mb-10 tracking-wide">
            Расскажите нам о своём проекте — ответим в течение часа
          </p>
          <button
            className="px-12 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ background: "hsl(42,78%,60%)", color: "hsl(220,20%,7%)" }}
          >
            Обсудить проект
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-16 px-8 border-t border-white/10" style={{ background: "hsl(220,20%,5%)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span
              className="font-cormorant text-2xl font-semibold tracking-widest uppercase"
              style={{ color: "hsl(42,78%,60%)" }}
            >
              STUDIO
            </span>
            <p className="text-xs opacity-40 mt-2 tracking-wider">© 2024 Все права защищены</p>
          </div>
          <div className="flex items-center gap-8 text-sm tracking-widest uppercase opacity-50">
            <a href="#" className="hover:opacity-100 hover:text-[hsl(42,78%,60%)] transition-all duration-300">Telegram</a>
            <a href="#" className="hover:opacity-100 hover:text-[hsl(42,78%,60%)] transition-all duration-300">Instagram</a>
            <a href="#" className="hover:opacity-100 hover:text-[hsl(42,78%,60%)] transition-all duration-300">Email</a>
          </div>
          <div className="flex items-center gap-3 text-sm opacity-50">
            <Icon name="MapPin" size={14} />
            <span className="tracking-wide">Москва, Россия</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;