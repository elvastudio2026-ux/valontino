import React, { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronDown, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Menu, X } from 'lucide-react';

// --- DATA ---
const COLLECTIONS = [
  { title: "Costumes Business", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop" },
  { title: "Costumes Mariage", img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop" },
  { title: "Cérémonie", img: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=800&auto=format&fit=crop" },
  { title: "Vestes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4tSRXiDdiETO-zM0DV_2wpog-P5QzOzoekx39FttgAQ&s=10" },
  { title: "Chemises", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfuK2H7FSo3BoLGYT6qOA5rFNwffgHY55FXY6cvd7Few&s=10" },
  { title: "Accessoires", img: "https://www.modaceremonie.com/public/img/big/elegant10727471920jpg_5ad85871e6800.jpg" },
];

const ALL_REVIEWS = [
  { name: "Alexandre D.", note: 5, category: "Sur-Mesure", text: "Une coupe parfaite et un tissu d'une qualité exceptionnelle. Le service en boutique est digne des plus grandes maisons." },
  { name: "Jean-Baptiste L.", note: 5, category: "Mariage", text: "Mon costume de mariage a été confectionné avec un soin incroyable. Merci à toute l'équipe Valentino." },
  { name: "Marc A.", note: 5, category: "Business", text: "L'élégance intemporelle à son apogée. Je ne porte plus que leurs costumes pour mes rendez-vous d'affaires." },
  { name: "Philippe R.", note: 5, category: "Sur-Mesure", text: "Le souci du détail est impressionnant. Chaque couture, chaque bouton est pensé pour la perfection." },
  { name: "Thomas V.", note: 5, category: "Accessoires", text: "Les cravates en soie sont somptueuses. Une finition vraiment haut de gamme." },
  { name: "Laurent M.", note: 5, category: "Business", text: "Un confort absolu même après une longue journée de réunions. Tissu infroissable exceptionnel." },
  { name: "Éric C.", note: 5, category: "Cérémonie", text: "Le smoking croisé est une œuvre d'art. J'ai reçu d'innombrables compliments." },
  { name: "David S.", note: 5, category: "Sur-Mesure", text: "L'expérience de prise de mesures est fantastique. Le tailleur prend vraiment le temps d'écouter." },
  { name: "Julien B.", note: 5, category: "Mariage", text: "Ils ont su comprendre exactement ce que je voulais pour le plus beau jour de ma vie." },
  { name: "Antoine H.", note: 5, category: "Business", text: "Des costumes durables. Après deux ans, le tissu tombe toujours parfaitement et ne bouge pas." },
  { name: "Nicolas P.", note: 5, category: "Cérémonie", text: "Une élégance rare. La coupe met vraiment en valeur la silhouette." },
  { name: "François G.", note: 5, category: "Sur-Mesure", text: "C'est mon 5ème costume chez Valentino et la qualité ne se dément jamais." }
];

const FAQS = [
  { q: "Proposez-vous du sur-mesure ?", a: "Oui, nous proposons un service de grande mesure dans toutes nos boutiques, avec un choix de plus de 500 tissus premium italiens et anglais." },
  { q: "Quels sont vos délais de confection ?", a: "Pour un costume sur-mesure, il faut compter entre 4 et 6 semaines. Nous proposons également un service express sous 2 semaines pour les urgences absolues." },
  { q: "Où sont fabriqués vos costumes ?", a: "Toutes nos pièces sont confectionnées de manière artisanale dans nos ateliers en Italie, respectant la grande tradition sartoriale." }
];

// --- UTILS ---
const FadeIn = ({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

// --- SECTIONS ---
const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2.5, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] bg-brand-black flex items-center justify-center"
    >
      <motion.h1 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-serif tracking-widest text-brand-white uppercase"
      >
        Valentino
      </motion.h1>
    </motion.div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${scrolled ? 'bg-brand-black/90 backdrop-blur-md py-4 border-b border-white/10 shadow-2xl' : 'bg-transparent py-6 border-b border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-serif tracking-widest uppercase text-brand-white">Valentino</div>
          <div className="hidden md:flex space-x-8 text-xs font-sans tracking-widest uppercase">
            <a href="#histoire" className="text-brand-white hover:text-brand-gold transition-colors">Maison</a>
            <a href="#collections" className="text-brand-white hover:text-brand-gold transition-colors">Collections</a>
            <a href="#galerie" className="text-brand-white hover:text-brand-gold transition-colors">Galerie</a>
            <a href="#contact" className="text-brand-white hover:text-brand-gold transition-colors">Contact</a>
          </div>
          <button className="hidden md:block border border-brand-gold text-brand-gold px-6 py-2 text-xs tracking-widest uppercase hover:bg-brand-gold hover:text-brand-black transition-colors">
            Prendre Rendez-vous
          </button>
          <button className="md:hidden text-brand-white" onClick={() => setIsOpen(true)}>
            <Menu />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-brand-black flex flex-col justify-center items-center"
          >
            <button className="absolute top-6 right-6 text-brand-white" onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex flex-col space-y-8 text-center text-2xl font-serif">
              <a href="#histoire" onClick={() => setIsOpen(false)} className="text-brand-white hover:text-brand-gold transition-colors">Maison</a>
              <a href="#collections" onClick={() => setIsOpen(false)} className="text-brand-white hover:text-brand-gold transition-colors">Collections</a>
              <a href="#galerie" onClick={() => setIsOpen(false)} className="text-brand-white hover:text-brand-gold transition-colors">Galerie</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-brand-white hover:text-brand-gold transition-colors">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <motion.div 
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="absolute inset-0"
    >
      <img src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=2000&auto=format&fit=crop" alt="Classic Suit" className="w-full h-full object-cover opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/20 to-brand-black"></div>
    </motion.div>
    <div className="relative z-10 text-center px-4 mt-20">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-brand-gold uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-medium"
      >
        Timeless Elegance
      </motion.p>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-6xl md:text-8xl lg:text-9xl font-serif text-brand-white tracking-wider mb-10"
      >
        VALENTINO
      </motion.h1>
      <motion.a 
        href="#collections"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="inline-block border border-brand-white/50 px-10 py-4 uppercase tracking-widest text-xs hover:bg-brand-white hover:text-brand-black transition-all duration-500"
      >
        Découvrir la collection
      </motion.a>
    </div>
  </section>
);

const Histoire = () => (
  <section id="histoire" className="py-24 md:py-32 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <FadeIn>
        <p className="text-brand-gold uppercase tracking-widest text-xs mb-4">La Maison</p>
        <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">L'art de l'élégance<br/>sartoriale.</h2>
        <p className="text-gray-400 font-sans leading-relaxed mb-6 font-light text-sm md:text-base">
          Depuis sa fondation, la Maison Valentino incarne l'essence même de l'élégance masculine. 
          Chaque pièce est le fruit d'un savoir-faire ancestral, alliant techniques traditionnelles et vision contemporaine.
        </p>
        <p className="text-gray-400 font-sans leading-relaxed font-light text-sm md:text-base mb-10">
          Nous sélectionnons les étoffes les plus nobles pour créer des costumes qui ne sont pas de simples vêtements, 
          mais de véritables armures de confiance pour l'homme moderne.
        </p>
      </FadeIn>
      <FadeIn delay={0.2} className="relative">
        <div className="aspect-[3/4] overflow-hidden">
          <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAGwnv-RobdaZ7lO2HbhDYjvwWr0URZlk3upH3y97lKwi-qC1xLgWQdwP3ua_-YYM804qUxdOhojz64Sk5iyq-k2bFQyr985-7Xjtu1MFq-WaffIXknlfC4Be_bUYZFzSotvnmDWzQ=w408-h408-k-no" alt="Tailor" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" />
        </div>
        <div className="absolute -bottom-8 -left-8 bg-brand-gray p-8 hidden md:block border border-white/5">
          <p className="font-serif text-3xl text-brand-gold">1984</p>
          <p className="text-xs tracking-widest uppercase text-gray-400 mt-2">Fondation</p>
        </div>
      </FadeIn>
    </div>
  </section>
);

const Collections = () => (
  <section id="collections" className="py-24 md:py-32 bg-brand-gray px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <FadeIn className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Nos Collections</h2>
        <p className="text-gray-400 uppercase tracking-widest text-xs">Des créations pour chaque instant</p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {COLLECTIONS.map((col, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="group relative aspect-[4/5] overflow-hidden cursor-pointer bg-brand-black">
              <img src={col.img} alt={col.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-black/20 to-transparent flex items-end p-8">
                <div className="w-full transform transition-transform duration-500 group-hover:-translate-y-4">
                  <h3 className="font-serif text-2xl mb-2">{col.title}</h3>
                  <div className="h-[1px] w-0 bg-brand-gold transition-all duration-500 group-hover:w-full mb-4"></div>
                  <span className="text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-brand-gold">Découvrir</span>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const Pourquoi = () => {
  const benefits = [
    { title: "Tissus Premium", desc: "Les plus belles étoffes italiennes et anglaises." },
    { title: "Coupe Sur-Mesure", desc: "Un ajustement parfait adapté à votre morphologie." },
    { title: "Fabrication Artisanale", desc: "Plus de 40 heures de travail manuel par costume." },
    { title: "Service Personnalisé", desc: "Un accompagnement dédié en boutique." }
  ];
  return (
    <section className="py-24 md:py-32 px-6 border-y border-white/5 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          {benefits.map((b, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="w-12 h-12 mx-auto border border-brand-gold/30 rounded-full flex items-center justify-center mb-6">
                <div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div>
              </div>
              <h4 className="font-serif text-xl mb-4">{b.title}</h4>
              <p className="text-sm text-gray-400 font-light leading-relaxed">{b.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Galerie = () => {
  const images = [
    "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop"
  ];
  return (
    <section id="galerie" className="py-24 md:py-32 px-6 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-16 md:flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Galerie</h2>
            <p className="text-gray-400 uppercase tracking-widest text-xs">Le sens du détail</p>
          </div>
          <button className="hidden md:block uppercase tracking-widest text-xs border-b border-brand-gold text-brand-gold pb-1 hover:text-brand-white hover:border-brand-white transition-colors mt-6 md:mt-0">
            Voir sur Instagram
          </button>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <FadeIn key={i} delay={i * 0.1} className="overflow-hidden aspect-square">
              <img src={img} alt="Detail" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 cursor-pointer opacity-80 hover:opacity-100" />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Avis = () => {
  const [filter, setFilter] = useState("Tous");
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  const categories = ["Tous", "Sur-Mesure", "Business", "Mariage", "Cérémonie"];
  
  const filtered = filter === "Tous" ? ALL_REVIEWS : ALL_REVIEWS.filter(r => r.category === filter);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const displayed = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  useEffect(() => {
    setPage(1);
  }, [filter]);

  return (
    <section className="py-24 md:py-32 px-6 bg-brand-gray border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">L'expérience Valentino</h2>
          <p className="text-gray-400 uppercase tracking-widest text-xs">Témoignages de nos clients</p>
        </FadeIn>
        
        <FadeIn className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(c => (
            <button 
              key={c}
              onClick={() => setFilter(c)}
              className={`px-6 py-2 text-xs uppercase tracking-widest border transition-colors ${filter === c ? 'border-brand-gold text-brand-gold' : 'border-white/20 text-gray-400 hover:border-white/50 hover:text-white'}`}
            >
              {c}
            </button>
          ))}
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {displayed.map((r, i) => (
              <motion.div 
                key={r.name + i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-brand-black p-8 md:p-10 border border-white/5 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-1 text-brand-gold">
                      {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 border border-white/10 px-2 py-1">{r.category}</span>
                  </div>
                  <p className="text-sm md:text-base font-light text-gray-300 mb-8 leading-relaxed italic">"{r.text}"</p>
                </div>
                <p className="font-serif tracking-wide text-brand-gold">{r.name}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button 
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-10 h-10 border transition-colors flex items-center justify-center text-xs font-serif ${page === i + 1 ? 'border-brand-gold text-brand-gold' : 'border-white/20 text-gray-400 hover:border-white/50 hover:text-white'}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-24 md:py-32 px-6 max-w-3xl mx-auto">
      <FadeIn className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Questions Fréquentes</h2>
        <p className="text-gray-400 uppercase tracking-widest text-xs">Tout ce que vous devez savoir</p>
      </FadeIn>
      <div className="space-y-4">
        {FAQS.map((faq, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div 
              className="border border-white/10 p-6 cursor-pointer hover:border-brand-gold/50 transition-colors bg-brand-gray/50"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-serif text-lg pr-8">{faq.q}</h4>
                <ChevronDown className={`transform transition-transform duration-300 flex-shrink-0 ${open === i ? 'rotate-180 text-brand-gold' : 'text-gray-500'}`} />
              </div>
              <AnimatePresence>
                {open === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-gray-400 font-light text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 md:py-32 px-6 bg-brand-gray border-t border-white/5">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-serif mb-8">Contactez-nous</h2>
        <p className="text-gray-400 font-light mb-12 leading-relaxed">
          Pour toute demande de rendez-vous ou d'information complémentaire, notre équipe d'experts sartoriaux est à votre entière disposition.
        </p>
        <div className="space-y-8">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 border border-white/10 flex items-center justify-center rounded-full text-brand-gold shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <p className="font-serif text-lg mb-1">Boutique Flagship</p>
              <p className="text-sm text-gray-400">15 Rue de la Paix, 75002 Paris</p>
              <p className="text-sm text-gray-400 mt-1">Lundi - Samedi: 10h - 19h</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 border border-white/10 flex items-center justify-center rounded-full text-brand-gold shrink-0">
              <Phone size={20} />
            </div>
            <div>
              <p className="font-serif text-lg mb-1">Téléphone</p>
              <p className="text-sm text-gray-400">+33 1 23 45 67 89</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 border border-white/10 flex items-center justify-center rounded-full text-brand-gold shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <p className="font-serif text-lg mb-1">Email</p>
              <p className="text-sm text-gray-400">contact@valentino-tailor.com</p>
            </div>
          </div>
        </div>
      </FadeIn>
      <FadeIn delay={0.2}>
        <form className="space-y-8 bg-brand-black p-8 md:p-12 border border-white/5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Prénom</label>
              <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-brand-gold transition-colors text-white text-sm" />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Nom</label>
              <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-brand-gold transition-colors text-white text-sm" />
            </div>
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Email</label>
            <input type="email" className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-brand-gold transition-colors text-white text-sm" />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Sujet de la demande</label>
            <div className="relative">
              <select className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-brand-gold transition-colors text-white text-sm appearance-none cursor-pointer">
                <option className="bg-brand-gray text-white">Rendez-vous Sur-Mesure</option>
                <option className="bg-brand-gray text-white">Information Collection</option>
                <option className="bg-brand-gray text-white">Service Après-Vente</option>
                <option className="bg-brand-gray text-white">Autre demande</option>
              </select>
              <ChevronDown className="absolute right-0 top-1 text-gray-500" size={16} />
            </div>
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Message</label>
            <textarea rows={4} className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-brand-gold transition-colors text-white text-sm resize-none"></textarea>
          </div>
          <button className="w-full bg-brand-white text-brand-black py-4 uppercase tracking-widest text-xs font-bold hover:bg-brand-gold hover:text-white transition-colors">
            Envoyer la demande
          </button>
        </form>
      </FadeIn>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-brand-black pt-24 pb-12 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
      <div className="col-span-1 md:col-span-2">
        <h3 className="font-serif text-3xl tracking-widest uppercase mb-6">Valentino</h3>
        <p className="text-gray-400 font-light text-sm max-w-sm leading-relaxed mb-8">
          L'élégance intemporelle pour l'homme moderne. Une tradition sartoriale perpétuée avec passion pour offrir des pièces d'exception.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:text-brand-gold hover:border-brand-gold transition-colors text-gray-400"><Instagram size={16} /></a>
          <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:text-brand-gold hover:border-brand-gold transition-colors text-gray-400"><Facebook size={16} /></a>
          <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:text-brand-gold hover:border-brand-gold transition-colors text-gray-400"><Twitter size={16} /></a>
        </div>
      </div>
      <div>
        <h4 className="font-serif text-lg mb-6">Navigation</h4>
        <ul className="space-y-3 text-sm text-gray-400 font-light">
          <li><a href="#histoire" className="hover:text-brand-gold transition-colors">Notre Histoire</a></li>
          <li><a href="#collections" className="hover:text-brand-gold transition-colors">Nos Collections</a></li>
          <li><a href="#galerie" className="hover:text-brand-gold transition-colors">Galerie Sartoriale</a></li>
          <li><a href="#contact" className="hover:text-brand-gold transition-colors">Nous Contacter</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-serif text-lg mb-6">Newsletter</h4>
        <p className="text-sm text-gray-400 font-light mb-6">Abonnez-vous pour recevoir nos invitations privées et actualités.</p>
        <div className="flex border-b border-white/20 pb-2">
          <input type="email" placeholder="Votre adresse email" className="bg-transparent w-full focus:outline-none text-sm text-white" />
          <button className="text-brand-gold uppercase text-[10px] tracking-widest font-bold ml-2">S'inscrire</button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-600 font-light pt-8 border-t border-white/5">
      <p>&copy; 2026 Valentino Tailor. Tous droits réservés.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <a href="#" className="hover:text-gray-300 transition-colors">Mentions Légales</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Politique de Confidentialité</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>
      <main className="bg-brand-black min-h-screen text-brand-white">
        <Navbar />
        <Hero />
        <Histoire />
        <Collections />
        <Pourquoi />
        <Galerie />
        <Avis />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
