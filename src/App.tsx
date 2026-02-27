/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, Flame, Star, Shield, Lock, Instagram, Twitter, MessageCircle, Heart, Play } from 'lucide-react';

const PLANS = [
  {
    id: 'monthly',
    name: '30 DIAS',
    price: '9,90',
    popular: true,
    bonus: '+ CHAMADA DE VÍDEO COMIGO HOJE!',
    link: 'https://pay.risepay.com.br/Pay/5ed4ccc92a1f4e8e9aecab93cb07685d'
  },
  {
    id: 'quarterly',
    name: '3 MESES',
    price: '14,90',
    popular: false,
    badge: 'Economia',
    link: 'https://pay.risepay.com.br/Pay/a3476d093c5d45a09c188e2b758270ff'
  },
  {
    id: 'yearly',
    name: '1 ANO',
    price: '29,90',
    popular: false,
    badge: 'Melhor oferta',
    link: 'https://pay.risepay.com.br/Pay/e5c0236d2d8c447bb658a5da5143259e'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0502] text-white font-sans selection:bg-rose-500/30">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-rose-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-900/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-md mx-auto px-6 py-12 flex flex-col items-center">
        {/* Profile Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="relative mb-4">
            <div className="w-32 h-32 rounded-full border-2 border-rose-500 p-1 overflow-hidden">
              <img 
                src="https://picsum.photos/seed/duda/400/400" 
                alt="Eduarda Oficial" 
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-1 right-1 bg-rose-500 p-1.5 rounded-full border-2 border-[#0a0502]">
              <Check className="w-3 h-3 text-white" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold tracking-tight mb-1">Eduarda Oficial 💋</h1>
          <p className="text-rose-500 font-medium text-sm">@eduardaoficial1_</p>
        </motion.div>

        {/* Bio Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-10"
        >
          <p className="text-gray-300 leading-relaxed text-sm">
            Oi, meu amor! 🔥💦 Sou a Duda, e hoje vou revelar um lado meu que vai te deixar sem fôlego… vídeos gozando com meus ficantes, trisal com amigas safadas e momentos íntimos onde me entrego de corpo e alma. 😏 Cada centímetro do meu corpo é pura tentação e minhas fotos peladas são um convite exclusivo para você explorar seus desejos mais secretos tudo sem censura! Se você tem coragem de se perder nessa paixão sem limites, vem comigo... Estou te esperando para uma experiência única e irresistível.😈💋
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-3 gap-4 w-full mb-10 py-4 border-y border-white/5"
        >
          <div className="text-center">
            <span className="block text-lg font-bold">142</span>
            <span className="text-[10px] text-gray-500 uppercase tracking-wider">Fotos</span>
          </div>
          <div className="text-center border-x border-white/5">
            <span className="block text-lg font-bold">86</span>
            <span className="text-[10px] text-gray-500 uppercase tracking-wider">Vídeos</span>
          </div>
          <div className="text-center">
            <span className="block text-lg font-bold">12.4k</span>
            <span className="text-[10px] text-gray-500 uppercase tracking-wider">Curtidas</span>
          </div>
        </motion.div>

        {/* Media Feed Section */}
        <div className="w-full mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">Mídia Exclusiva</h2>
            <div className="flex items-center gap-1 text-[10px] text-rose-500 font-bold">
              <Lock className="w-3 h-3" />
              CONTEÚDO BLOQUEADO
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            {[
              { type: 'video', seed: 'v1' },
              { type: 'image', seed: 'i1' },
              { type: 'image', seed: 'i2' },
              { type: 'video', seed: 'v2' },
              { type: 'image', seed: 'i3' },
              { type: 'video', seed: 'v3' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="relative aspect-square rounded-lg overflow-hidden bg-white/5 group cursor-pointer"
              >
                <img 
                  src={`https://picsum.photos/seed/${item.seed}/300/300?blur=10`} 
                  alt="Exclusive Media" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  {item.type === 'video' ? (
                    <div className="bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20">
                      <Play className="w-4 h-4 text-white fill-white" />
                    </div>
                  ) : (
                    <Lock className="w-4 h-4 text-white/50" />
                  )}
                </div>
                {item.type === 'video' && (
                  <span className="absolute bottom-1 right-1 text-[8px] bg-black/60 px-1 rounded font-mono">
                    0:42
                  </span>
                )}
              </motion.div>
            ))}
          </div>
          
          <p className="text-center text-[10px] text-gray-600 mt-4 italic">
            Assine agora para desbloquear todo o feed de mídia
          </p>
        </div>

        {/* Plans Section */}
        <div className="w-full space-y-4 mb-12">
          <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-6 text-center">Assinaturas</h2>
          
          {PLANS.map((plan, index) => (
            <motion.a
              key={plan.id}
              href={plan.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`relative block w-full p-5 rounded-2xl border transition-all duration-300 group ${
                plan.popular 
                  ? 'bg-rose-600 border-rose-500 shadow-lg shadow-rose-900/20 scale-[1.02]' 
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-rose-600 text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Flame className="w-3 h-3" />
                  MAIS POPULAR 🔥🔥
                </div>
              )}
              
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`font-bold text-lg ${plan.popular ? 'text-white' : 'text-gray-100'}`}>
                      {plan.name}
                    </span>
                    {plan.badge && (
                      <span className="text-[10px] bg-rose-500/20 text-rose-400 px-2 py-0.5 rounded-md font-semibold">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  {plan.bonus && (
                    <p className="text-[11px] text-rose-100 mt-1 font-medium italic">
                      {plan.bonus}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <span className="text-xs opacity-70 block">R$</span>
                  <span className="text-2xl font-black leading-none">{plan.price}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-4 gap-4 w-full mb-12">
          {[
            { icon: Instagram, label: 'Instagram' },
            { icon: Twitter, label: 'Twitter' },
            { icon: MessageCircle, label: 'Telegram' },
            { icon: Heart, label: 'OnlyFans' }
          ].map((social, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10"
            >
              <social.icon className="w-5 h-5 text-rose-500" />
              <span className="text-[10px] text-gray-400 font-medium">{social.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center gap-8 mb-12 opacity-40">
          <div className="flex flex-col items-center gap-1">
            <Shield className="w-5 h-5" />
            <span className="text-[9px] uppercase tracking-wider">Seguro</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Lock className="w-5 h-5" />
            <span className="text-[9px] uppercase tracking-wider">Privado</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Star className="w-5 h-5" />
            <span className="text-[9px] uppercase tracking-wider">Premium</span>
          </div>
        </div>

        {/* Main CTA */}
        <motion.a
          href={PLANS[0].link}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-4 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-full text-center shadow-xl shadow-rose-900/40 transition-colors mb-8 flex items-center justify-center gap-2"
        >
          VEJA TUDO POR APENAS R$ 9,90
        </motion.a>

        {/* Footer */}
        <footer className="w-full pt-8 border-t border-white/5 text-center space-y-4">
          <div className="flex justify-center gap-6 text-[11px] text-gray-500 font-medium">
            <a href="#" className="hover:text-rose-500 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-rose-500 transition-colors">Política de Privacidade</a>
          </div>
          <p className="text-[10px] text-gray-600">
            © 2026 Eduarda Oficial. Todos os direitos reservados.
          </p>
        </footer>
      </main>
    </div>
  );
}

