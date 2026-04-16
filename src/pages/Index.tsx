import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

// Выбранный знак: первый — круглый с церковью, рекой и надписью КЛЮЧИ (самодостаточный, читаемый)
const EMBLEM_URL = "https://cdn.poehali.dev/projects/9db809e0-ec1e-4403-aadb-488ac19bbf13/bucket/ac588a06-d1ff-41fe-be30-fc79ac053dec.png";

const navLinks = [
  "Главная", "Администрация", "История", "Образование",
  "Предприятия", "Культура", "Религия", "Транспорт", "Природа", "Магазины",
];

const news = [
  {
    tag: "Событие",
    date: "Дата публикации",
    title: "Региональный Сабантуй — 31 мая в Кадниково",
    text: "Губернатор Свердловской области Денис Пасвер подписал распоряжение: 31 мая в селе Кадниково Сысертского муниципального округа состоится региональный Сабантуй. В программе — свыше 25 национальных подворий, выставка-ярмарка народных промыслов, дегустация татарских и башкирских блюд, выступления творческих коллективов из Татарстана и Башкортостана, а также свердловских городов, скачки, армрестлинг и множество народных забав.",
  },
];

const photoReports = [
  { icon: "❄️", label: "" },
  { icon: "🌿", label: "" },
  { icon: "☀️", label: "" },
  { icon: "🍂", label: "" },
];

const adminContacts = [
  {
    role: "Глава сельской администрации",
    name: "Полоханова Татьяна Фёдоровна",
    phone: "8(343) 227-07-67 доб. 222",
    email: "adm.klyuchi@sysert.ru",
  },
  {
    role: "Заместитель Главы администрации",
    name: "Губенко Татьяна Владимировна",
    phone: "8(343) 227-07-67 доб. 295",
    email: "",
  },
];

const Index = () => {
  const [activeNews, setActiveNews] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-golos">

      {/* ═══ ШАПКА С ЛОГОТИПОМ ═══ */}
      <header
        className="border-b border-gray-200 transition-shadow duration-300"
        style={{ boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.07)" : "none" }}
      >
        {/* Верхняя полоска — логотип + название */}
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-5">
          {/* Фирменный знак */}
          <div className="flex-shrink-0">
            <img
              src={EMBLEM_URL}
              alt="Деревня Ключи — фирменный знак"
              className="w-20 h-20 object-contain"
              style={{ imageRendering: "crisp-edges" }}
            />
          </div>

          {/* Текстовый блок рядом со знаком */}
          <div className="border-l border-gray-200 pl-5">
            <p className="text-xs text-gray-400 tracking-widest uppercase mb-0.5">
              Сысертского муниципального округа Свердловской области
            </p>
            <h1
              className="font-cormorant text-4xl md:text-5xl font-light leading-none"
              style={{ color: "#2d4a2d" }}
            >
              Деревня <span className="font-semibold">Ключи</span>
            </h1>
          </div>
        </div>

        {/* Навигационная полоса */}
        <nav className="border-t border-gray-100" style={{ background: "#f7f6f3" }}>
          <div className="max-w-6xl mx-auto px-6">
            <ul className="flex flex-wrap items-center gap-0 text-xs">
              {navLinks.map((link, i) => (
                <li key={link}>
                  <a
                    href="#"
                    className={`inline-block px-3 py-2.5 tracking-wide transition-colors duration-200 hover:text-green-800 ${
                      i === 0
                        ? "font-semibold text-green-800 border-b-2 border-green-700"
                        : "text-gray-500"
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li className="ml-auto">
                <a href="#" className="inline-block px-3 py-2.5 text-gray-400 hover:text-gray-600 transition-colors">
                  <Icon name="Search" size={14} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* ═══ ЗАГОЛОВОК РАЗДЕЛА ═══ */}
      <section className="max-w-6xl mx-auto px-6 pt-8 pb-8">
        {/* Метка раздела */}
        <p className="text-xs text-gray-400 tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
          <span className="w-4 h-px bg-gray-300 inline-block" />
          История
        </p>

        <div className="flex items-end justify-between gap-6">
          <div className="relative">
            {/* Фоновое крупное слово */}
            <span
              className="font-cormorant font-light select-none pointer-events-none block leading-none"
              style={{
                fontSize: "clamp(72px, 14vw, 140px)",
                color: "#ede9e0",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              Ключи
            </span>
            {/* Подпись поверх снизу */}
            <p className="text-sm text-gray-400 mt-1 tracking-wide">
              34 км к юго-востоку от Екатеринбурга, на левом притоке реки Исет
            </p>
          </div>

          {/* Знак справа — естественно вписан */}
          <img
            src={EMBLEM_URL}
            alt=""
            className="hidden md:block flex-shrink-0 w-24 h-24 object-contain opacity-60 mb-6"
          />
        </div>
      </section>

      {/* ═══ НОВОСТИ ═══ */}
      <section className="max-w-6xl mx-auto px-6 py-6 border-t border-gray-100">
        <p className="text-xs text-gray-400 tracking-widest uppercase mb-3">Актуально</p>
        <h4 className="text-lg font-semibold text-gray-800 mb-5">Новости деревни</h4>

        {/* Карточка новости */}
        <div className="border border-gray-200 rounded-lg p-5 bg-white">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs bg-gray-800 text-white px-3 py-1 rounded-full tracking-wide uppercase">
              Событие
            </span>
            <span className="text-xs text-gray-400 border border-gray-200 px-3 py-1 rounded-full">
              Дата публикации
            </span>
            <span className="ml-auto text-xs text-gray-400">1/4 ● ● ● ●</span>
          </div>
          <h5 className="text-lg font-semibold text-gray-800 mb-3 leading-snug">
            Региональный Сабантуй — 31 мая в Кадниково
          </h5>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            Губернатор Свердловской области Денис Пасвер подписал распоряжение: 31 мая в селе Кадниково Сысертского муниципального округа состоится региональный Сабантуй. В программе — свыше 25 национальных подворий, выставка-ярмарка народных промыслов, дегустация татарских и башкирских блюд, выступления творческих коллективов из Татарстана и Башкортостана, а также свердловских городов, скачки, армрестлинг и множество народных забав.
          </p>
          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Читать далее &gt;
            </a>
            <div className="flex gap-2">
              <button className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50 transition-colors">
                <Icon name="ChevronLeft" size={14} className="text-gray-400" />
              </button>
              <button className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50 transition-colors">
                <Icon name="ChevronRight" size={14} className="text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ФОТОРЕПОРТАЖИ ═══ */}
      <section className="max-w-6xl mx-auto px-6 py-8 border-t border-gray-100">
        <h4 className="text-center text-base font-medium text-gray-700 mb-1">фоторепортажи</h4>
        <p className="text-center text-xs text-gray-400 mb-5">нажмите на карточку — и откроется фоторепортаж этого времени года</p>
        <div className="grid grid-cols-4 gap-3">
          {photoReports.map((p, i) => (
            <button
              key={i}
              className="aspect-square rounded-lg border-2 border-gray-200 bg-gray-50 flex flex-col items-center justify-center gap-2 hover:border-green-400 hover:bg-green-50 transition-all duration-200 group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-200">{p.icon}</span>
              <Icon name="Camera" size={20} className="text-gray-300 group-hover:text-green-400 transition-colors" />
            </button>
          ))}
        </div>
      </section>

      {/* ═══ РАСПОЛОЖЕНИЕ ═══ */}
      <section className="max-w-6xl mx-auto px-6 py-8 border-t border-gray-100">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Расположение</h4>
        <div
          className="w-full h-48 rounded-lg flex items-center justify-center"
          style={{ background: "#e8e5df" }}
        >
          <div className="text-center text-gray-400">
            <Icon name="Map" size={32} className="mx-auto mb-2 opacity-40" />
            <p className="text-sm">Карта деревни</p>
          </div>
        </div>
      </section>

      {/* ═══ КОНТАКТЫ АДМИНИСТРАЦИИ ═══ */}
      <section className="max-w-6xl mx-auto px-6 py-8 border-t border-gray-100">
        <h4 className="text-lg font-semibold text-gray-800 mb-1">Контакты</h4>
        <h5 className="text-base text-gray-600 mb-5">Администрации</h5>
        <div className="grid md:grid-cols-2 gap-6">
          {adminContacts.map((c, i) => (
            <div key={i} className="text-sm text-gray-600 space-y-1">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">{c.role}</p>
              <p className="font-medium text-gray-800">{c.name}</p>
              <p className="text-gray-500">{c.phone}</p>
              {c.email && <p className="text-green-700">{c.email}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ═══ ФУТЕР ═══ */}
      <footer className="border-t border-gray-200 mt-8 py-5" style={{ background: "#f7f6f3" }}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-3">
            <img src={EMBLEM_URL} alt="" className="w-8 h-8 object-contain opacity-60" />
            <span>Деревня Ключи — официальный сайт</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600 transition-colors">Паблик ВКонтакте →</a>
            <a href="#" className="hover:text-gray-600 transition-colors">https://vk.com/placeofklyuchi</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;