'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('reguler');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const payload = {
        name,
        email,
        phone,
        message,
        service: currentService.title,
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Gagal mengirim pesan');

      setSuccess('Pesan berhasil dikirim. Terima kasih!');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err: any) {
      setError(err?.message || 'Terjadi kesalahan');
    } finally {
      setLoading(false);
    }
  }

  const services = {
    reguler: {
      title: 'Kelas Reguler',
      description: 'Program pembelajaran intensif untuk pengembangan keterampilan dan pengetahuan',
      features: [
        'Materi lengkap dan terstruktur',
        'Pengajar berpengalaman',
        'Sertifikat kelulusan',
        'Akses ke komunitas belajar',
        'Proyek akhir untuk portofolio',
        'Dukungan karir dan bimbingan kerja'
      ],
      price: 'Harga terjangkau dengan berbagai pilihan paket'
    },
    asrama: {
      title: 'Kelas Asrama',
      description: 'Program pembelajaran dengan fasilitas asrama untuk pengalaman belajar yang lebih intensif dan fokus',
      features: [
        'Fasilitas asrama nyaman dan aman',
        'Pembelajaran 24/7 dengan bimbingan intensif',
        'Kegiatan ekstrakurikuler dan pengembangan diri',
        'Akses ke fasilitas belajar lengkap',
        'Pembinaan karakter dan kepemimpinan',
        'Lingkungan belajar yang mendukung dan kolaboratif'
      ],
      price: 'Paket lengkap dengan fasilitas asrama untuk pengalaman belajar optimal'
    },
    pindahan: {
      title: 'Kelas Pindahan',
      description: 'Program pembelajaran untuk siswa yang ingin melanjutkan pendidikan dari sekolah lain dengan penyesuaian kurikulum yang fleksibel',
      features: [
        'Penyesuaian kurikulum sesuai kebutuhan siswa',
        'Bimbingan akademik untuk transisi yang mulus',
        'Akses ke materi pembelajaran yang relevan',
        'Pendampingan dalam proses administrasi sekolah',
        'Konsultasi dengan orang tua untuk mendukung perkembangan siswa',
        'Fasilitas belajar yang mendukung keberhasilan akademik'
      ],
      price: 'Paket lengkap untuk siswa pindahan'
    },
    beasiswa: {
      title: 'Beasiswa Pendidikan',
      description: 'Program beasiswa untuk mendukung pendidikan siswa berprestasi dengan kebutuhan finansial',
      features: [
        'Beasiswa penuh untuk biaya pendidikan',
        'Bimbingan akademik dan pengembangan diri',
        'Akses ke fasilitas belajar lengkap',
        'Pendampingan karir dan pengembangan kepemimpinan',
        'Syarat pengajuan yang mudah dan transparan',
        'Dukungan untuk siswa berprestasi dengan kebutuhan finansial'
      ],
      price: 'Beasiswa berprestasi dan siswa kurang mampu'
    }
  };

  const currentService = services[activeTab as keyof typeof services];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4">
            <Link href="/" className="text-white hover:text-green-200">
              ← Kembali ke Beranda
            </Link>
          <h1 className="text-4xl font-bold mb-2">Layanan Kami</h1>
          <p className="text-green-100">Berbagai layanan berkualitas untuk kemajuan bersama</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Service Tabs */}
        <div className="flex gap-4 mb-12 flex-wrap scroll-reveal scroll-reveal-delay-100">
          {Object.entries(services).map(([key, service]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === key
                  ? 'bg-green-700 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {service.title.includes('Kelas Reguler') ? '💻 Reguler'
                : service.title.includes('Kelas Asrama') ? '🎨 Asrama'
                : service.title.includes('Kelas Pindahan') ? '📖 Pindahan'
                : service.title.includes('Beasiswa Pendidikan') ? '🎓 Beasiswa'
                : '🔧 Layanan'}
            </button>
          ))}
        </div>

        {/* Service Details */}
        <div className="grid md:grid-cols-2 gap-12 scroll-reveal scroll-reveal-delay-200">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {currentService.title}
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              {currentService.description}
            </p>
            <h3 className="text-xl font-semibold text-green-700 mb-4">Fitur Utama:</h3>
            <ul className="space-y-3">
              {currentService.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-green-50 rounded-lg">
              <p className="text-gray-700">
                <strong>Harga:</strong> {currentService.price}
              </p>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-green-800 mb-6">Hubungi Kami</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {success && <div className="p-3 bg-green-100 text-green-800 rounded">{success}</div>}
              {error && <div className="p-3 bg-red-100 text-red-800 rounded">{error}</div>}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nama</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Email Anda"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nomor Telepon</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="No. Telepon"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Pesan</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Jelaskan kebutuhan Anda"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800 transition disabled:opacity-60"
              >
                {loading ? 'Mengirim...' : 'Kirim Pertanyaan'}
              </button>
            </form>
          </div>
        </div>
      </div>

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
