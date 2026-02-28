import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Shield, Zap, CheckCircle2 } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-950 text-slate-50 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full bg-slate-900/50 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-sm"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-emerald-500/10 rounded-2xl">
            <Shield className="w-8 h-8 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">TESTE 2: AMBIENTE RESTAURADO</h1>
            <p className="text-slate-400">Ambiente React + Tailwind + Motion ativo.</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 bg-slate-800/30 rounded-2xl border border-slate-700/50">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold">Conexão Estável</h3>
              <p className="text-sm text-slate-400">O servidor está entregando os arquivos corretamente.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-slate-800/30 rounded-2xl border border-slate-700/50">
            <Zap className="w-6 h-6 text-amber-400 mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold">Performance Otimizada</h3>
              <p className="text-sm text-slate-400">O motor Vite está processando o código em tempo real.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-slate-800/30 rounded-2xl border border-slate-700/50">
            <Terminal className="w-6 h-6 text-blue-400 mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold">Pronto para Codar</h3>
              <p className="text-sm text-slate-400">Você pode começar a descrever o que deseja construir.</p>
            </div>
          </div>
        </div>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-2xl transition-colors shadow-lg shadow-emerald-500/20"
          onClick={() => alert('Sistema pronto!')}
        >
          INICIAR PROJETO
        </motion.button>
      </motion.div>

      <p className="mt-8 text-slate-500 text-sm font-mono">
        v2.0.0-stable | build: {new Date().toLocaleTimeString()}
      </p>
    </div>
  );
};

export default App;
