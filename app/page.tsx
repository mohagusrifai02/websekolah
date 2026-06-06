'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  initial: {},
  animate: { 
    transition: { staggerChildren: 0.2 } 
  }
};

export default function SchoolLandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">W</div>
              <span className="text-2xl font-bold tracking-tight text-blue-900">WebSchool</span>
            </div>
            <div className="hidden md:flex space-x-8 font-medium">
              <a href="#beranda" className="text-blue-600">Beranda</a>
              <a href="#profil" className="hover:text-blue-600 transition">Profil</a>
              <a href="#akademik" className="hover:text-blue-600 transition">Akademik</a>
              <a href="#fasilitas" className="hover:text-blue-600 transition">Fasilitas</a>
              <a href="#kontak" className="hover:text-blue-600 transition">Kontak</a>
            </div>
            <Link href='https://wa.me/6289516589293' className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:grid lg:grid-cols-2 lg:gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="mb-12 lg:mb-0">
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold mb-6 tracking-wide uppercase">
                Terakreditasi A
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Membentuk Generasi <span className="text-blue-600">Cerdas</span> & Berakhlak
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                WebSchool berkomitmen memberikan pendidikan berkualitas dunia dengan kurikulum inovatif yang mempersiapkan siswa menghadapi tantangan global di masa depan.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/services" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition transform hover:-translate-y-1">
                  Daftar Sekarang
                </Link>
                <Link href="/news" className="border-2 border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition">
                  Artikel dan Kegiatan kami
                </Link>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative">
              <div className="bg-blue-600/10 absolute -inset-4 rounded-3xl rotate-3"></div>
              <div className="relative h-[400px] lg:h-[500px] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  {/* Placeholder for Hero Image */}
                  [Gambar Aktivitas Siswa]
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white"
          >
            <motion.div variants={fadeInUp}>
              <div className="text-4xl font-bold mb-2">1200+</div>
              <div className="text-blue-200 text-sm uppercase tracking-widest">Siswa Aktif</div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-4xl font-bold mb-2">85+</div>
              <div className="text-blue-200 text-sm uppercase tracking-widest">Tenaga Pengajar</div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-blue-200 text-sm uppercase tracking-widest">Ekstrakurikuler</div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-blue-200 text-sm uppercase tracking-widest">Penghargaan</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="profil" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Visi & Misi Kami</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Visi</h3>
              <p className="text-slate-600 leading-relaxed italic">
                "Menjadi lembaga pendidikan unggul yang menghasilkan lulusan berdaya saing global, berintegritas tinggi, dan adaptif terhadap perkembangan teknologi informasi."
              </p>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Misi</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-3">
                  <span className="text-green-500 font-bold">✓</span> Mengembangkan kurikulum berbasis kompetensi digital.
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500 font-bold">✓</span> Menyelenggarakan pendidikan karakter yang holistik.
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500 font-bold">✓</span> Membangun ekosistem belajar yang kolaboratif dan kreatif.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Educational Programs */}
      <section id="akademik" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Program Unggulan</h2>
              <p className="text-slate-600 max-w-xl text-lg">Jenjang pendidikan yang kami tawarkan dengan kurikulum yang dirancang khusus untuk kesuksesan siswa.</p>
            </div>
            <a href="#" className="text-blue-600 font-bold hover:underline">Lihat Semua Kurikulum →</a>
          </motion.div>
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: 'Elementary School', desc: 'Fokus pada pembangunan fondasi literasi, numerasi, dan karakter dasar.', icon: '🎓' },
              { title: 'Junior High School', desc: 'Eksplorasi minat dan bakat dengan pendekatan project-based learning.', icon: '🔬' },
              { title: 'Senior High School', desc: 'Persiapan matang menuju perguruan tinggi ternama baik dalam maupun luar negeri.', icon: '🚀' },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="group p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition">{item.title}</h3>
                <p className="text-slate-600 mb-6">{item.desc}</p>
                <button className="text-sm font-bold text-slate-400 group-hover:text-blue-600 flex items-center gap-2 transition">
                  SELENGKAPNYA 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Facilities */}
      <section id="fasilitas" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="h-48 bg-slate-800 rounded-2xl overflow-hidden flex items-center justify-center text-xs text-slate-500 italic">[Perpustakaan Digital]</div>
                <div className="h-64 bg-slate-800 rounded-2xl overflow-hidden flex items-center justify-center text-xs text-slate-500 italic">[Lab Komputer]</div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 bg-slate-800 rounded-2xl overflow-hidden flex items-center justify-center text-xs text-slate-500 italic">[Studio Musik]</div>
                <div className="h-48 bg-slate-800 rounded-2xl overflow-hidden flex items-center justify-center text-xs text-slate-500 italic">[Lapangan Sport]</div>
              </div>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Fasilitas Modern & Lengkap</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Kami percaya bahwa lingkungan yang mendukung adalah kunci kreativitas. WebSchool menyediakan infrastruktur terkini untuk mendukung eksplorasi tanpa batas bagi setiap siswa.
              </p>
              <motion.div 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-6"
              >
                {[
                  { label: 'Smart Classroom', detail: 'Kelas interaktif dengan teknologi AI dan IoT.' },
                  { label: 'Science Center', detail: 'Laboratorium modern untuk eksperimen Fisika, Kimia, & Biologi.' },
                  { label: 'Auditorium Utama', detail: 'Kapasitas 500 orang untuk seni pertunjukan dan seminar.' },
                ].map((f, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="flex gap-4">
                    <div className="mt-1 w-5 h-5 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-lg">{f.label}</h4>
                      <p className="text-slate-400">{f.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Apa Kata Mereka?</h2>
            <p className="text-slate-500">Kesan dari orang tua dan alumni tentang pendidikan di WebSchool.</p>
          </motion.div>
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { name: 'Siti Rahma', role: 'Orang Tua Siswa', text: 'WebSchool memberikan perhatian personal yang luar biasa pada perkembangan anak saya. Kurikulum IT-nya sangat relevan.' },
              { name: 'Andi Wijaya', role: 'Alumni 2021', text: 'Berkat bimbingan guru di sini, saya bisa lolos seleksi beasiswa luar negeri. Fasilitas lab-nya juara!' },
              { name: 'Budi Santoso', role: 'Praktisi IT', text: 'Lulusan WebSchool memiliki dasar logika pemrograman yang sangat kuat dibandingkan sekolah lainnya.' },
            ].map((t, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-slate-600 mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">Siap Menjadi Bagian dari Kami?</h2>
              <p className="text-blue-100 mb-10 text-lg max-w-2xl mx-auto">
                Pendaftaran siswa baru tahun ajaran 2024/2025 telah dibuka. Dapatkan potongan biaya pendaftaran untuk pendaftar gelombang pertama.
              </p>
              <Link href='/services' className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold hover:bg-blue-50 transition transform hover:scale-105">
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer id="kontak" className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">W</div>
                <span className="text-xl font-bold tracking-tight text-blue-900">WebSchool</span>
              </div>
              <p className="text-slate-500 leading-relaxed">
                Jl. Pendidikan No. 123, Jakarta Selatan, Indonesia 12345
              </p>
              <div className="flex gap-4 mt-6">
                <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:text-blue-600 cursor-pointer">IG</div>
                <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:text-blue-600 cursor-pointer">FB</div>
                <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:text-blue-600 cursor-pointer">YT</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-slate-900 uppercase text-sm tracking-widest">Tautan Cepat</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-blue-600 transition">Sejarah Sekolah</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Struktur Organisasi</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Kalender Akademik</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Info Beasiswa</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-slate-900 uppercase text-sm tracking-widest">Kontak</h4>
              <ul className="space-y-4 text-slate-500">
                <li className="flex items-center gap-3">
                  <span>📧</span> info@webschool.sch.id
                </li>
                <li className="flex items-center gap-3">
                  <span>📞</span> (021) 1234-5678
                </li>
                <li className="flex items-center gap-3">
                  <span>💬</span> +62 812-3456-7890
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-slate-900 uppercase text-sm tracking-widest">Jam Operasional</h4>
              <ul className="space-y-2 text-slate-500">
                <li className="flex justify-between"><span>Senin - Jumat</span> <span>07.00 - 15.00</span></li>
                <li className="flex justify-between"><span>Sabtu</span> <span>08.00 - 12.00</span></li>
                <li className="flex justify-between text-red-400"><span>Minggu</span> <span>Tutup</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} WebSchool Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}