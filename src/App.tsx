/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  BookOpen, 
  Scroll, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle,
  Timer,
  Flame,
  ShieldCheck,
  ArrowRight,
  Sword,
  Search,
  Globe,
  Zap,
  Lock,
  Plus
} from "lucide-react";

const ChristianCross = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 3v18M7 9h10" />
  </svg>
);

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function App() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const checkoutUrl = "https://pay.cakto.com.br/3ba47md_870528";

  return (
    <div className="min-h-screen font-sans bg-wine-dark text-white selection:bg-brand selection:text-white">
      {/* Header Countdown (Fixo Pequeno - Mais Chamativo) */}
      <div className="fixed top-0 w-full z-50 bg-brand py-3 md:py-4 shadow-[0_4px_25px_rgba(220,38,38,0.6)] animate-pulse-subtle">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2 md:gap-6">
          <div className="flex items-center gap-2 text-white font-black text-[10px] md:text-lg uppercase tracking-tighter text-center">
            <Zap size={20} className="fill-white animate-bounce shrink-0" />
            O DESCONTO ESPECIAL TERMINA EM:
          </div>
          <div className="flex items-center gap-2 text-white font-mono font-black text-[13px] md:text-2xl bg-black/30 px-4 py-1 rounded-full border border-white/30 shadow-inner">
            <Timer size={24} className="text-white shrink-0" />
            {formatTime(timeLeft)}
          </div>
        </div>
      </div>

      {/* Hero Section (Restructured) */}
      <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden border-b border-white/5">
        {/* Imagem Responsiva (Full Width) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full mb-10"
        >
          <a href={checkoutUrl} className="block w-full cursor-pointer">
            {/* VERSÃO MOBILE: Imagem vertical/quadrada */}
            <img 
              src="https://i.ibb.co/3YdxDgwS/BANNER-SITE-1.webp" 
              alt="Apocalipse Mobile" 
              className="block md:hidden w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            
            {/* VERSÃO DESKTOP: Imagem horizontal */}
            <img 
              src="https://i.ibb.co/p6pDyDKm/BANNER-SITE-PC.webp" 
              alt="Apocalipse Desktop" 
              className="hidden md:block w-full h-auto max-h-[600px] object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </a>
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* HEADLINE MOBILE (Estilo Referência) */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:hidden font-sans text-6xl font-black mb-6 leading-[0.95] tracking-tighter uppercase"
          >
            3 <span className="text-brand">livros</span>
          </motion.h1>

          {/* HEADLINE DESKTOP (Estilo Referência) */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block font-sans text-8xl font-black mb-10 leading-[0.9] tracking-tighter uppercase"
          >
            <span className="text-brand">Apocalipse</span> revelado <br />
            em 3 livros
          </motion.h1>

          {/* SUBHEADLINE MOBILE (Estilo Referência) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:hidden mb-8 space-y-1"
          >
            <p className="text-2xl text-white font-bold leading-tight">
              Explicado direto da Bíblia
            </p>
            <p className="text-brand font-black text-lg uppercase">
              Sem linguagem difícil
            </p>
          </motion.div>

          {/* SUBHEADLINE DESKTOP (Estilo Referência) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block mb-12"
          >
            <p className="text-3xl text-white font-bold leading-tight max-w-2xl mx-auto">
              Aprenda a forma correta de entender as profecias e <span className="text-brand">DOMINE</span> o Livro de Revelação de uma vez por todas!
            </p>
          </motion.div>

          {/* Bullets */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-start gap-3 mb-12 max-w-fit mx-auto"
          >
            {[
              "O verdadeiro significado dos 4 Cavaleiros",
              "O que realmente são as 7 Trombetas",
              "Quem é o Anticristo segundo a Bíblia"
            ].map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-2 text-base md:text-xl font-bold text-white/90">
                <ChristianCross size={18} className="text-brand shrink-0" />
                {bullet}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a 
              href={checkoutUrl}
              className="inline-flex flex-col items-center justify-center gap-1 px-12 py-6 bg-brand hover:bg-brand-hover text-white rounded-2xl aggressive-shadow transition-all transform hover:scale-105 active:scale-95 text-center"
            >
              <div className="flex items-center gap-2 text-xl md:text-2xl font-black uppercase tracking-tighter">
                ACESSAR AGORA POR R$19,90
                <ArrowRight size={24} className="shrink-0" />
              </div>
              <div className="text-xs md:text-sm font-medium opacity-90">Pagamento Único • Acesso Vitalício</div>
            </a>

          </motion.div>
        </div>
      </section>

      {/* Ideal para você checklist (Estilo Referência) */}
      <section className="py-12 md:py-20 px-4 bg-black/40 border-b border-white/5">
        <div className="max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-12 text-center leading-tight"
          >
            Esse material é <span className="text-brand">ideal</span> para você que...
          </motion.h2>
          
          <div className="space-y-10">
            {[
              "Tem dificuldade para entender a Bíblia, especialmente o livro de Apocalipse",
              "É líder ou estudioso e quer material organizado para ensinar ou se aprofundar",
              "Busca a verdade bíblica sobre o fim dos tempos, sem conspirações",
              "Sente necessidade de se preparar espiritualmente para a volta de Cristo",
              "Prefere conteúdo direto, claro e objetivo"
            ].map((text, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 items-center"
              >
                <div className="w-7 h-7 shrink-0 bg-brand rounded flex items-center justify-center text-white shadow-lg shadow-brand/20">
                  <ChristianCross size={14} />
                </div>
                <p className="text-lg md:text-xl font-normal text-white/90 leading-tight">{text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 pt-10 border-t border-white/5"
          >
            <a 
              href={checkoutUrl}
              className="w-full inline-flex flex-col items-center justify-center gap-1 px-8 py-6 bg-brand hover:bg-brand-hover text-white rounded-2xl aggressive-shadow transition-all transform hover:scale-105 active:scale-95 text-center"
            >
              <div className="flex items-center gap-2 text-xl md:text-2xl font-black uppercase tracking-tighter">
                ACESSAR AGORA POR R$19,90
                <ArrowRight size={24} className="shrink-0" />
              </div>
              <div className="text-xs md:text-sm font-medium opacity-90">Pagamento Único • Acesso Vitalício</div>
            </a>
          </motion.div>
        </div>
      </section>


      {/* Countdown Promo Section (Matching Reference Style) */}
      <section className="py-12 md:py-20 px-4 bg-black/40 border-b border-white/5 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Não deixe essa <span className="text-brand">oportunidade passar</span>
            </h2>
            
            <div className="text-6xl md:text-9xl font-black text-brand tracking-tighter animate-pulse-subtle">
              {formatTime(timeLeft)}
            </div>

            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs md:text-base tracking-tight">
              {[
                "Explicação simples e direta",
                "Base bíblica",
                "Conexão com o que acontece no mundo",
                "Conteúdo organizado para leitura fácil"
              ].map((txt, i) => (
                <div key={i} className="flex items-center gap-1.5 whitespace-nowrap">
                  <div className="w-4 h-4 bg-accent-green rounded flex items-center justify-center text-white shrink-0">
                    <CheckCircle2 size={10} strokeWidth={4} />
                  </div>
                  <span className="text-white/90">{txt}</span>
                  {i < 3 && <span className="text-white/20 ml-2">|</span>}
                </div>
              ))}
            </div>

            <div className="pt-8">
              <a 
                href={checkoutUrl}
                className="inline-flex flex-col items-center justify-center gap-1 px-12 py-6 bg-brand hover:bg-brand-hover text-white rounded-2xl aggressive-shadow transition-all transform hover:scale-105 active:scale-95 text-center max-w-full"
              >
                <div className="flex items-center gap-2 text-xl md:text-3xl font-black uppercase tracking-tighter">
                  ACESSAR AGORA POR R$19,90 
                  <ArrowRight size={24} className="shrink-0" />
                </div>
                <div className="text-xs md:text-sm font-medium opacity-90">Pagamento Único • Acesso Vitalício</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final Offer Summary (Structure based on image_69403e.png references) */}
      <section className="py-12 md:py-20 px-4 relative overflow-hidden" id="oferta">
        <div className="absolute inset-0 wine-glow opacity-10 pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Visual Column */}
            <div className="space-y-4 md:sticky md:top-24">
              <a href={checkoutUrl} className="block group">
                <div className="wine-card p-1 relative overflow-hidden border-brand/50 aggressive-shadow group">
                  <img 
                    src="https://i.ibb.co/3YdxDgwS/BANNER-SITE-1.webp" 
                    alt="Mockup Apocalipse" 
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </a>
              <div className="wine-card p-4 flex flex-col items-center justify-center gap-1 border-brand/20">
                <div className="text-accent-green font-black uppercase text-[10px] tracking-widest animate-pulse">● Acesso Imediato</div>
                <div className="text-white/30 text-[9px] font-bold uppercase tracking-widest">Envio via e-mail após confirmação</div>
              </div>
            </div>

            {/* List and Pricing Column */}
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="font-serif text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-[0.9]">
                  TUDO QUE VOCÊ <br /><span className="text-brand">VAI LEVAR HOJE:</span>
                </h2>
              </div>

              <div className="space-y-2">
                {[
                  { name: "Livro: Os 4 Cavaleiros do Apocalipse", old: "37" },
                  { name: "Livro: As 7 Trombetas do Fim", old: "37" },
                  { name: "Livro: A Revelação do Anticristo", old: "37" },
                  { name: "Acesso Imediato e Vitalício", status: "Incluso" },
                  { name: "Leitura Simples e Direta", status: "Incluso" },
                  { name: "Conteúdo 100% Baseado na Bíblia", status: "Incluso" }
                ].map((item, i) => (
                  <div key={i} className="wine-card p-4 flex items-center justify-between group transition-all hover:translate-x-1 border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/5 border border-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all">
                        <ChristianCross size={14} />
                      </div>
                      <span className="font-bold uppercase tracking-tight text-white/80 group-hover:text-white transition-colors text-xs md:text-sm">
                        {item.name}
                      </span>
                    </div>
                    {item.old ? (
                      <div className="text-white font-black italic text-xs">R$ {item.old}</div>
                    ) : (
                      <div className="text-[9px] font-black text-accent-green uppercase tracking-widest bg-accent-green/10 px-2 py-1 rounded border border-accent-green/20">
                        {item.status}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Price Reveal */}
              <div className="wine-card p-8 bg-linear-to-b from-brand/10 to-transparent border-brand/50 aggressive-shadow text-center">
                <div className="space-y-1 mb-6">
                  <div className="text-white text-lg font-black italic">De <span className="line-through decoration-brand">R$ 111,00</span> por apenas:</div>
                  <div className="text-brand text-7xl md:text-8xl font-black font-display tracking-tighter drop-shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                    <span className="text-3xl align-middle mr-1">R$</span>
                    19<span className="text-4xl text-brand/80">,90</span>
                  </div>
                  <div className="text-white/50 text-xs font-bold uppercase tracking-widest mt-1 italic font-serif">
                    Pague no Pix, Cartão ou Boleto
                  </div>
                </div>

                <a 
                  href={checkoutUrl}
                  className="w-full inline-flex flex-col items-center justify-center gap-1 px-6 py-5 bg-brand hover:bg-brand-hover text-white rounded-2xl aggressive-shadow transition-all transform hover:scale-[1.02] active:scale-[0.98] text-center"
                >
                  <div className="flex items-center gap-2 text-xl md:text-2xl font-black uppercase tracking-tighter">
                    ACESSAR AGORA
                    <ArrowRight size={24} className="shrink-0" />
                  </div>
                  <div className="text-xs font-medium opacity-90">Pagamento Único · Acesso Vitalício</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 md:py-16 px-4 border-t border-white/5 bg-black/60 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-brand/5 blur-[100px] -z-10" />
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="font-serif font-black italic text-brand text-3xl uppercase tracking-tighter leading-none">
            Apocalipse <br /> Revelado
          </div>
          <div className="space-y-4">
            <p className="text-white/70 text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed border-b border-white/5 pb-10 mb-6 italic">
              Você não está comprando teoria complicada <br className="hidden md:block" />
              Está adquirindo um material direto ao ponto para entender o Apocalipse sem dificuldade
            </p>
            <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em] leading-relaxed max-w-2xl mx-auto">
              PRODUTO DIGITAL EXTRAÍDO DE ESTUDOS BÍBLICOS NÃO GARANTIMOS EVENTOS FUTUROS APENAS INTERPRETAÇÕES DAS ESCRITURAS SAGRADAS TODA COMPRA É PROTEGIDA COM 7 DIAS DE GARANTIA INCONDICIONAL
            </p>
          </div>
          <p className="text-[9px] text-white/10 font-black uppercase tracking-[0.4em]">© 2024 TODOS OS DIREITOS RESERVADOS</p>
        </div>
      </footer>
    </div>
  );
}
