/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BarChart3, Database, ArrowRight, CheckCircle2, LineChart, Waves, FileSpreadsheet, Phone, Mail, Globe2, Calendar as CalendarIcon, Clock } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Mock data for charts
const dataPerformance = [
  { name: 'Ene', value: 2000 }, { name: 'Feb', value: 3500 }, { name: 'Mar', value: 2800 },
  { name: 'Abr', value: 4200 }, { name: 'May', value: 3800 }, { name: 'Jun', value: 5500 },
];

const dataPie = [
  { name: 'Ventas', value: 45 }, { name: 'Marketing', value: 25 },
  { name: 'Operaciones', value: 20 }, { name: 'TI', value: 10 },
];
const COLORS = ['#f6c85f', '#2ad0ff', '#6ee7b7', '#8b5cf6'];

export default function App() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [scheduleData, setScheduleData] = useState({
    name: '',
    email: '',
    service: 'Excel',
    date: '',
    time: ''
  });

  // Countdown Timer Logic
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 10);
    targetDate.setHours(23, 59, 59, 999);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleScheduleSubmit = () => {
    // Simulate Meet generation by creating a WhatsApp message with the details
    const message = `Hola Fractal Waves, soy ${scheduleData.name}. Me gustaría agendar una sesión de ${scheduleData.service} para el día ${scheduleData.date} a las ${scheduleData.time}. Mi correo es ${scheduleData.email}. ¡Quedo atento al enlace de Google Meet!`;
    const whatsappUrl = `https://wa.me/525620974773?text=${encodeURIComponent(message)}`;
    
    setIsScheduleOpen(false);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen font-sans text-slate-50 selection:bg-[#f6c85f]/30 overflow-x-hidden relative z-10">
      
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-[#07122c]/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#0b1f4f] to-[#123b91] border border-[#2ad0ff]/30 shadow-[0_0_15px_rgba(42,208,255,0.5)]">
                <svg className="w-7 h-7 text-[#f6c85f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12h4l3-9 5 18 3-9h5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl md:text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-[#c8d6ff] leading-none">
                  BUSINESS INTELLIGENCE
                </span>
                <span className="text-[0.65rem] md:text-xs font-bold text-[#f6c85f] tracking-[0.2em] uppercase mt-1">
                  FW • Fractal Waves
                </span>
              </div>
            </div>
            <div className="hidden md:flex space-x-10">
              {['Cursos', 'Dashboards', 'Beneficios', 'Contacto'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-[#c8d6ff] hover:text-[#f6c85f] font-bold text-sm tracking-wide uppercase transition-colors">
                  {item}
                </a>
              ))}
            </div>
            <div className="flex items-center">
              <Button 
                onClick={() => setIsScheduleOpen(true)}
                className="bg-gradient-to-r from-[#f6c85f] to-[#ffb400] text-[#081226] hover:scale-105 font-extrabold px-8 h-12 rounded-full shadow-[0_14px_30px_rgba(255,190,0,0.3)] transition-all duration-300 border-0"
              >
                Inscríbete hoy
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Copy */}
            <div>
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#c8d6ff] font-bold text-sm tracking-wide backdrop-blur-md">
                Cursos premium de análisis de datos
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase leading-[0.95] drop-shadow-2xl">
                Domina <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f6c85f] to-[#ffb400]">
                  Excel y Power BI
                </span>
                <br /> en pocas semanas
              </h1>
              <p className="text-lg md:text-xl text-[#c8d6ff] mb-8 font-light leading-relaxed max-w-xl">
                Lleva tus habilidades al siguiente nivel con clases prácticas, enfoque aplicado y acompañamiento real. Aprende a crear reportes, dashboards e insights que sí generan valor.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="h-14 px-8 text-lg font-extrabold bg-gradient-to-r from-[#f6c85f] to-[#ffb400] text-[#081226] rounded-full shadow-[0_14px_30px_rgba(255,190,0,0.3)] border-0 transition-all duration-300 hover:scale-105" onClick={() => setIsScheduleOpen(true)}>
                  Quiero apartar mi lugar <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold bg-white/5 border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300" onClick={() => document.getElementById('dashboards')?.scrollIntoView({ behavior: 'smooth' })}>
                  Ver Dashboards
                </Button>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {['Clases prácticas + certificado', 'Cupos limitados', 'Formato intensivo'].map((tag, i) => (
                  <span key={i} className="bg-white/5 border border-white/20 rounded-full px-4 py-2 text-sm text-[#ecf1ff] font-bold">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Countdown */}
              <div className="flex gap-4 flex-wrap">
                {[
                  { label: 'Días', value: timeLeft.days },
                  { label: 'Horas', value: timeLeft.hours },
                  { label: 'Min', value: timeLeft.minutes },
                  { label: 'Seg', value: timeLeft.seconds }
                ].map((time, i) => (
                  <div key={i} className="min-w-[90px] p-3 rounded-2xl bg-white/5 border border-white/10 shadow-xl text-center backdrop-blur-sm">
                    <div className="text-3xl font-black text-[#f6c85f]">{time.value}</div>
                    <div className="text-xs text-[#c8d6ff] font-bold uppercase tracking-wider">{time.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual (Dashboard Simulation) */}
            <div className="relative">
              <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/20 rounded-[28px] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,190,0,0.15),transparent_30%)] pointer-events-none"></div>
                
                {/* Window Controls */}
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-white/50"></div>
                  <div className="w-3 h-3 rounded-full bg-white/50"></div>
                  <div className="w-3 h-3 rounded-full bg-white/50"></div>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Panel 1: Area Chart */}
                  <div className="bg-[#071430]/80 border border-white/10 rounded-2xl p-4 h-40">
                    <h4 className="text-xs font-bold text-[#c8d6ff] mb-2 uppercase">Tendencia</h4>
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={dataPerformance}>
                        <defs>
                          <linearGradient id="colorGold" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#f6c85f" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#f6c85f" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="value" stroke="#f6c85f" strokeWidth={3} fillOpacity={1} fill="url(#colorGold)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Panel 2: Pie Chart */}
                  <div className="bg-[#071430]/80 border border-white/10 rounded-2xl p-4 h-40 flex flex-col">
                    <h4 className="text-xs font-bold text-[#c8d6ff] mb-2 uppercase">Segmentación</h4>
                    <div className="flex-1">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie data={dataPie} cx="50%" cy="50%" innerRadius={25} outerRadius={40} paddingAngle={5} dataKey="value" stroke="none">
                            {dataPie.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Panel 3: Stats */}
                  <div className="col-span-2 bg-[#071430]/80 border border-white/10 rounded-2xl p-4">
                    <h4 className="text-xs font-bold text-[#c8d6ff] mb-3 uppercase">Resultados</h4>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { val: '+85%', label: 'Práctica' },
                        { val: '2', label: 'Cursos' },
                        { val: '100%', label: 'Enfocado' },
                        { val: 'Top', label: 'Tools' }
                      ].map((stat, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-2 text-center">
                          <div className="text-lg font-black text-[#f6c85f]">{stat.val}</div>
                          <div className="text-[10px] text-[#c8d6ff] uppercase">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="hidden md:block absolute -bottom-10 -right-10 bg-[#0b1f4f]/95 border border-[#2ad0ff]/40 p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl max-w-[280px] z-20">
                <strong className="block text-[#f6c85f] text-lg mb-2">Aprende haciendo</strong>
                <p className="text-sm text-[#c8d6ff] leading-relaxed">
                  Desde fórmulas, tablas dinámicas y dashboards hasta visualización estratégica y métricas para negocio.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section id="beneficios" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase mb-4">¿Por qué elegir Fractal Waves?</h2>
            <p className="text-lg text-[#c8d6ff] leading-relaxed">
              Diseño profesional, enfoque de negocio y contenidos útiles para estudiantes, emprendedores y equipos que quieren mejores decisiones con datos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'Enfoque práctico', desc: 'Aprende con ejercicios aplicados, ejemplos reales y una ruta clara para dominar cada herramienta.' },
              { icon: '🏆', title: 'Valor profesional', desc: 'Desarrolla habilidades útiles para reportes, análisis, automatización y visualización de información.' },
              { icon: '📈', title: 'Orientado a resultados', desc: 'El objetivo es que termines sabiendo usar Excel y Power BI para resolver problemas reales.' }
            ].map((item, i) => (
              <Card key={i} className="bg-white/5 border-white/10 backdrop-blur-xl hover:-translate-y-2 transition-transform duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ffc85f]/20 to-[#2ad0ff]/20 border border-white/10 flex items-center justify-center text-2xl mb-6 shadow-inner">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-[#c8d6ff] leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos Section */}
      <section id="cursos" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase mb-4">Cursos disponibles</h2>
            <p className="text-lg text-[#c8d6ff] leading-relaxed">
              Dos rutas de formación diseñadas para generar impacto rápido y convertir interés en inscripción.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Excel */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              <CardContent className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-white">Curso de Excel</h3>
                  <span className="bg-gradient-to-r from-[#f6c85f] to-[#ffb400] text-[#081226] text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider">Más solicitado</span>
                </div>
                <p className="text-[#c8d6ff] mb-6 leading-relaxed">
                  Domina Excel desde funciones esenciales hasta herramientas de análisis para uso académico y empresarial.
                </p>
                <ul className="space-y-4">
                  {['Fórmulas y funciones clave', 'Tablas dinámicas y filtros avanzados', 'Gráficos e indicadores', 'Organización y limpieza de datos', 'Casos prácticos orientados a negocio'].map((item, i) => (
                    <li key={i} className="flex items-start text-[#c8d6ff]">
                      <CheckCircle2 className="w-5 h-5 text-[#7CFFB2] mr-3 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Power BI */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              <CardContent className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-white">Curso de Power BI</h3>
                  <span className="bg-gradient-to-r from-[#f6c85f] to-[#ffb400] text-[#081226] text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider">Alta demanda</span>
                </div>
                <p className="text-[#c8d6ff] mb-6 leading-relaxed">
                  Aprende a modelar datos y construir dashboards modernos para análisis visual y toma de decisiones.
                </p>
                <ul className="space-y-4">
                  {['Conexión y transformación de datos', 'Modelado básico y relaciones', 'Visualizaciones efectivas', 'Medidas e indicadores clave', 'Creación de dashboards impactantes'].map((item, i) => (
                    <li key={i} className="flex items-start text-[#c8d6ff]">
                      <CheckCircle2 className="w-5 h-5 text-[#7CFFB2] mr-3 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboards Portfolio Section */}
      <section id="dashboards" className="py-24 relative z-10 bg-[#07122c]/80 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase mb-4">Portafolio Corporativo</h2>
            <p className="text-lg text-[#c8d6ff] leading-relaxed">
              Explora algunos de los dashboards de Business Intelligence que hemos diseñado para marcas líderes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { brand: 'Abbott', color: 'from-blue-600/80 to-blue-900/90', text: 'text-blue-300', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', desc: 'Análisis de ventas farmacéuticas y distribución global.' },
              { brand: 'Pascual', color: 'from-red-600/80 to-blue-900/90', text: 'text-red-300', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', desc: 'Dashboard de producción y logística de bebidas.' },
              { brand: 'Monster Energy', color: 'from-green-600/80 to-black/90', text: 'text-green-400', img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80', desc: 'Métricas de marketing y rendimiento de campañas.' },
              { brand: 'Convermex', color: 'from-blue-500/80 to-green-700/90', text: 'text-cyan-300', img: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=800&q=80', desc: 'Control de inventarios y cadena de suministro.' },
              { brand: 'Norma', color: 'from-yellow-600/80 to-blue-900/90', text: 'text-yellow-400', img: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=800&q=80', desc: 'Rendimiento editorial y distribución escolar.' }
            ].map((item, i) => (
              <Card key={i} className="group overflow-hidden bg-[#0b1f4f] border-white/10 hover:border-[#2ad0ff]/50 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.35)] relative h-64 cursor-pointer" onClick={() => setIsScheduleOpen(true)}>
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${item.img})` }}></div>
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} mix-blend-multiply`}></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                
                <CardContent className="relative h-full p-6 flex flex-col justify-end z-10">
                  <h3 className={`text-3xl font-black uppercase tracking-wider mb-2 ${item.text} drop-shadow-lg`}>{item.brand}</h3>
                  <p className="text-white text-sm font-medium leading-relaxed drop-shadow-md opacity-90 group-hover:opacity-100 transition-opacity">
                    {item.desc}
                  </p>
                  <div className="mt-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Button size="sm" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-full backdrop-blur-md">
                      Ver Dashboard <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & QR Section */}
      <section id="contacto" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase mb-4">Inscríbete hoy</h2>
            <p className="text-lg text-[#c8d6ff] leading-relaxed">
              Cupos limitados. Escanea el código QR para agendar tu demo o contáctanos directo para apartar tu lugar.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              
              {/* Profile Card */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10 pb-10 border-b border-white/10">
                <div className="relative w-32 h-32 shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#f6c85f] to-[#2ad0ff] rounded-full animate-spin-slow blur-md opacity-50"></div>
                  {/* Sube tu foto al panel de archivos y nómbrala "profile.png" */}
                  <img 
                    src="/profile.png" 
                    alt="René Torres" 
                    className="relative w-full h-full object-cover rounded-full border-4 border-[#0b1f4f] shadow-2xl filter contrast-125 saturate-110 drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
                    onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Rene+Torres&background=0b1f4f&color=f6c85f&size=256' }}
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-3xl font-black text-white mb-1">René Torres</h3>
                  <p className="text-[#2ad0ff] font-bold tracking-wide uppercase text-sm mb-4">Lead Data Scientist & BI Expert</p>
                  <p className="text-[#c8d6ff] text-sm leading-relaxed max-w-md">
                    Especialista en transformación de datos y automatización. Te guiaré paso a paso para que domines Excel y Power BI con casos reales de negocio.
                  </p>
                </div>
              </div>

              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl">📞</div>
                  <div>
                    <strong className="block text-white mb-1">Teléfono</strong>
                    <a href="tel:+525620974773" className="text-[#c8d6ff] hover:text-[#f6c85f] text-lg font-mono">5620-97-4773</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl">✉️</div>
                  <div>
                    <strong className="block text-white mb-1">Correo</strong>
                    <a href="mailto:business.analyst.fw@zohomail.com" className="text-[#c8d6ff] hover:text-[#f6c85f]">business.analyst.fw@zohomail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl">🌐</div>
                  <div>
                    <strong className="block text-white mb-1">Sitio web</strong>
                    <a href="https://businessintelligencefw.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-[#c8d6ff] hover:text-[#f6c85f]">businessintelligencefw.netlify.app</a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-[#f6c85f] to-[#ffb400] text-[#081226] hover:scale-105 font-bold px-8 h-14 rounded-full shadow-[0_14px_30px_rgba(255,190,0,0.3)] transition-all duration-300 border-0" onClick={() => window.open('https://wa.me/525620974773', '_blank')}>
                  Hablar por WhatsApp
                </Button>
                <Button variant="outline" className="bg-white/5 border-white/20 text-white hover:bg-white/10 font-bold px-8 h-14 rounded-full transition-all duration-300" onClick={() => setIsScheduleOpen(true)}>
                  Agendar Demo / Curso
                </Button>
              </div>
            </div>

            {/* QR Code Box */}
            <div className="lg:col-span-5 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.35)] flex flex-col items-center justify-center text-center">
              <div className="bg-white p-4 rounded-2xl shadow-[0_14px_34px_rgba(0,0,0,0.26)] mb-8">
                {/* QR Code linking to the scheduling modal anchor */}
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=https%3A%2F%2Fbusinessintelligencefw.netlify.app%2F%23agendar" alt="QR Agendar" className="w-full max-w-[240px] h-auto" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Escanea para Agendar</h3>
              <p className="text-[#c8d6ff] leading-relaxed">
                Al escanear el código, podrás seleccionar el día y la hora para tu demo o curso y generar tu enlace de Google Meet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-[#c8d6ff] border-t border-white/10 relative z-10">
        <p className="font-medium">© {new Date().getFullYear()} Business Intelligence FW · Cursos de Excel y Power BI</p>
      </footer>

      {/* Scheduling Dialog */}
      <Dialog open={isScheduleOpen} onOpenChange={setIsScheduleOpen}>
        <DialogContent className="sm:max-w-[500px] bg-[#0b1f4f] border-[#f6c85f]/30 text-white shadow-[0_0_50px_rgba(0,0,0,0.8)] rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-black text-[#f6c85f] uppercase tracking-tight">Agendar Sesión</DialogTitle>
            <DialogDescription className="text-[#c8d6ff] text-base">
              Selecciona el día y la hora. Te enviaremos el enlace de Google Meet automáticamente vía WhatsApp.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-5 py-6">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-white font-bold">Nombre completo</Label>
              <Input 
                id="name" 
                value={scheduleData.name}
                onChange={(e) => setScheduleData({...scheduleData, name: e.target.value})}
                placeholder="Ej. María Pérez" 
                className="bg-[#07122c]/50 border-white/20 text-white placeholder:text-slate-500 focus-visible:ring-[#f6c85f] h-12 rounded-xl" 
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-white font-bold">Correo electrónico</Label>
              <Input 
                id="email" 
                type="email" 
                value={scheduleData.email}
                onChange={(e) => setScheduleData({...scheduleData, email: e.target.value})}
                placeholder="correo@empresa.com" 
                className="bg-[#07122c]/50 border-white/20 text-white placeholder:text-slate-500 focus-visible:ring-[#f6c85f] h-12 rounded-xl" 
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="service" className="text-white font-bold">Servicio de interés</Label>
              <select 
                id="service" 
                value={scheduleData.service}
                onChange={(e) => setScheduleData({...scheduleData, service: e.target.value})}
                className="flex h-12 w-full items-center justify-between rounded-xl border border-white/20 bg-[#07122c]/50 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#f6c85f]"
              >
                <option value="Excel">Curso de Excel</option>
                <option value="Power BI">Curso de Power BI</option>
                <option value="Demo Dashboards">Demo de Dashboards / BI</option>
                <option value="Desarrollo Software">Desarrollo de Software</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="date" className="text-white font-bold flex items-center gap-2"><CalendarIcon className="w-4 h-4 text-[#f6c85f]"/> Fecha</Label>
                <Input 
                  id="date" 
                  type="date" 
                  value={scheduleData.date}
                  onChange={(e) => setScheduleData({...scheduleData, date: e.target.value})}
                  className="bg-[#07122c]/50 border-white/20 text-white focus-visible:ring-[#f6c85f] h-12 rounded-xl [color-scheme:dark]" 
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="time" className="text-white font-bold flex items-center gap-2"><Clock className="w-4 h-4 text-[#f6c85f]"/> Hora</Label>
                <Input 
                  id="time" 
                  type="time" 
                  value={scheduleData.time}
                  onChange={(e) => setScheduleData({...scheduleData, time: e.target.value})}
                  className="bg-[#07122c]/50 border-white/20 text-white focus-visible:ring-[#f6c85f] h-12 rounded-xl [color-scheme:dark]" 
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-2">
            <Button variant="outline" className="border-white/20 text-[#c8d6ff] hover:bg-white/10 hover:text-white h-12 px-6 rounded-xl font-bold" onClick={() => setIsScheduleOpen(false)}>Cancelar</Button>
            <Button className="bg-gradient-to-r from-[#f6c85f] to-[#ffb400] text-[#081226] hover:scale-105 h-12 px-8 rounded-xl font-extrabold shadow-[0_10px_20px_rgba(255,190,0,0.3)] border-0 transition-all" onClick={handleScheduleSubmit}>
              Agendar y Generar Meet
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
