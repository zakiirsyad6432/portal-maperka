import React from 'react';
import { Instagram, MessageCircle, Radio, PenLine, Phone } from 'lucide-react';

/**
 * Komponen App Utama untuk Portal MAPERKA MAN 1 TULUNGAGUNG
 * Diperbarui dengan font formal (Inter) dan penambahan fitur aduan.
 */
export default function App() {
  const links = {
    instagram: "https://www.instagram.com/maperka_mansatu?igsh=NnJ5NnZycmwzanV4",
    whatsappChannel: "https://whatsapp.com/channel/0029Vau97ONGzzKM8WyidV1p",
    // Nomor baru untuk ikon sosmed
    whatsappAdmin: "https://wa.me/6285733066755", 
    formAspirasi: "https://docs.google.com/forms/d/e/1FAIpQLSeu9-2eW-WdEBR5L6MlADaWj2UBVBzVBstuxr1KugvaEC-Z4w/viewform?fbclid=PAb21jcAQlwgRleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafIEw2_hl7ll6nO0v1K_dP75H4NKkEG54HpEYTSCcPAtE6BeoWBDo_uMyNaFA_aem_yf6nuyCfo365bhqW1YRCDw&utm_source=ig&utm_medium=social&utm_content=link_in_bio",
    // Nomor aduan aspirasi (nomor lama ikon sosmed)
    nomorAduan: "https://wa.me/6285757523566"
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 flex flex-col items-center relative overflow-x-hidden">
      {/* Import Font Inter untuk kesan formal */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.8s ease-out forwards;
        }
        .delay-1 { animation-delay: 0.2s; opacity: 0; }
        .delay-2 { animation-delay: 0.4s; opacity: 0; }
        .delay-3 { animation-delay: 0.6s; opacity: 0; }
      `}</style>

      {/* Background Overlay dengan Gradient */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_right,#1e3a8a_0%,transparent_40%),radial-gradient(circle_at_bottom_left,#1e1b4b_0%,#020617_100%)] pointer-events-none" />

      <main className="relative z-10 w-full max-w-[480px] px-5 pt-8 pb-10 flex flex-col items-center flex-grow">
        
        {/* Bingkai Logo */}
        <div className="animate-fade-up w-[130px] h-[130px] rounded-full p-1 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] shadow-[0_10px_30px_-5px_rgba(251,191,36,0.5)] mb-6 transition-all duration-500 hover:scale-105 cursor-pointer">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
            <img 
              src="https://i.imgur.com/21WlqaT.png" 
              alt="Logo MAPERKA" 
              className="w-full h-full object-contain scale-[0.85] -translate-y-[5%]"
            />
          </div>
        </div>

        {/* Nama Portal */}
        <div className="animate-fade-up delay-1 text-center mb-10">
          <h1 className="text-3xl font-extrabold tracking-tight uppercase bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
            Portal MAPERKA
          </h1>
          <p className="text-blue-400 font-semibold text-xs tracking-[0.2em] mt-2 opacity-80">MAN 1 TULUNGAGUNG</p>
        </div>

        {/* Daftar Tombol Utama */}
        <div className="animate-fade-up delay-2 w-full space-y-4">
          {/* Tombol Form Aspirasi */}
          <a 
            href={links.formAspirasi}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-5 px-6 bg-blue-900/20 border border-blue-500/20 rounded-[20px] font-bold text-[0.95rem] backdrop-blur-xl transition-all duration-300 hover:bg-[#fbbf24] hover:text-[#020617] hover:border-[#fbbf24] hover:-translate-y-1 shadow-lg group"
          >
            <span className="mr-3 text-yellow-400 group-hover:text-[#020617] transition-colors">
              <PenLine size={20} />
            </span>
            Form Aspirasi Siswa/i
          </a>

          {/* Tombol Nomor Aduan Aspirasi (Baru) */}
          <a 
            href={links.nomorAduan}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-5 px-6 bg-white/5 border border-white/10 rounded-[20px] font-bold text-[0.95rem] backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-[#020617] hover:border-white hover:-translate-y-1 shadow-lg group"
          >
            <span className="mr-3 text-blue-400 group-hover:text-[#020617] transition-colors">
              <Phone size={20} />
            </span>
            Nomor Aduan Aspirasi
          </a>
        </div>

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Footer Sosmed */}
        <footer className="animate-fade-up delay-3 w-full mt-16 text-center">
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-slate-500 font-black mb-6">Ikuti Kami Pada:</p>
          
          <div className="flex justify-center gap-5">
            <SocialIcon 
              href={links.instagram} 
              icon={<Instagram size={22} />} 
              label="Instagram" 
            />
            <SocialIcon 
              href={links.whatsappChannel} 
              icon={<Radio size={22} />} 
              label="Saluran WhatsApp" 
            />
            <SocialIcon 
              href={links.whatsappAdmin} 
              icon={<MessageCircle size={22} />} 
              label="WhatsApp Admin" 
            />
          </div>
          
          <p className="mt-10 text-[9px] text-slate-600 uppercase tracking-[0.3em] font-bold">
            &copy; 2026 MAPERKA MANSATU
          </p>
        </footer>
      </main>
    </div>
  );
}

/**
 * Komponen pembantu untuk ikon media sosial
 */
function SocialIcon({ href, icon, label }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-[56px] h-[56px] flex items-center justify-center bg-slate-800/20 border border-white/5 rounded-2xl transition-all duration-300 hover:bg-[#fbbf24] hover:text-[#020617] hover:border-[#fbbf24] hover:-translate-y-2 shadow-lg"
      title={label}
    >
      {icon}
    </a>
  );
}
