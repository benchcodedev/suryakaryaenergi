@extends('layouts.app')

@section('title', 'Hubungi Kami - PT Surya Karya Energi')
@section('meta_description', 'Hubungi tim konsultan dan enjiniring PT Surya Karya Energi untuk konsultasi gratis, studi kelayakan PLTS, atau penawaran sistem energi bersih industri.')

@section('content')

<!-- HEADER HERO -->
<section class="bg-gradient-to-b from-stone-900 to-stone-950 text-white py-16 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brown-500/20 border border-brown-500/30 text-brown-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Layanan Pelanggan & Enjiniring
        </div>
        <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Hubungi Tim <span class="text-brown-400">Surya Karya Energi</span>
        </h1>
        <p class="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Mulai langkah efisiensi energi fasilitas bisnis Anda bersama tim konsultan teknik bersertifikasi kami.
        </p>
    </div>
</section>

<!-- MAIN CONTACT CONTENT -->
<section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            <!-- LEFT: Contact Details & Office info -->
            <div class="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                <div>
                    <h2 class="text-2xl font-extrabold text-stone-900 mb-2">Kantor Pusat & Operasional</h2>
                    <p class="text-stone-600 text-sm leading-relaxed">
                        Kami siap melayani kebutuhan konsultasi, survei teknis lokasi, dan pengajuan studi kelayakan PLTS di seluruh kepulauan Indonesia.
                    </p>
                </div>

                <!-- Contact Info Cards - Equal Height Grid -->
                <div class="grid grid-cols-1 gap-4 flex-1 auto-rows-fr">
                    <!-- Address -->
                    <div class="h-full flex items-center space-x-4 p-5 rounded-2xl bg-stone-50 border border-stone-200 hover:border-brown-400 hover:shadow-sm transition-all duration-200">
                        <div class="w-11 h-11 rounded-xl bg-brown-100 text-brown-600 flex items-center justify-center shrink-0">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                        <div class="min-w-0 flex-1">
                            <h4 class="font-bold text-stone-900 text-sm">Alamat Kantor Pusat</h4>
                            <p class="text-stone-600 text-xs mt-0.5 leading-relaxed">
                                Menara Palma Lt. 12, Jl. H.R. Rasuna Said Blok X-2 Kav. 6, Kuningan, Setiabudi, Jakarta Selatan 12950
                            </p>
                            <p class="text-stone-500 text-[11px] mt-0.5 italic">Workshop: Kawasan Industri MM2100 Cikarang Barat, Bekasi</p>
                        </div>
                    </div>

                    <!-- WhatsApp & Phone -->
                    <div class="h-full flex items-center space-x-4 p-5 rounded-2xl bg-stone-50 border border-stone-200 hover:border-brown-400 hover:shadow-sm transition-all duration-200">
                        <div class="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        </div>
                        <div class="min-w-0 flex-1">
                            <h4 class="font-bold text-stone-900 text-sm">Telepon & WhatsApp Cepat</h4>
                            <p class="text-stone-600 text-xs mt-0.5">Telepon Kantor: +62 21 8990 1234</p>
                            <div class="flex items-center space-x-2 mt-0.5 flex-wrap">
                                <span class="text-stone-600 text-xs">Hotline: +62 812-3456-7890</span>
                                <a href="https://wa.me/6281234567890?text=Halo%20PT%20Surya%20Karya%20Energi,%20saya%20tertarik%20konsultasi%20solusi%20PLTS%20industri" 
                                   target="_blank" 
                                   class="inline-flex items-center text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline">
                                    &rarr; Chat WhatsApp Langsung
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="h-full flex items-center space-x-4 p-5 rounded-2xl bg-stone-50 border border-stone-200 hover:border-brown-400 hover:shadow-sm transition-all duration-200">
                        <div class="w-11 h-11 rounded-xl bg-brown-100 text-brown-600 flex items-center justify-center shrink-0">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </div>
                        <div class="min-w-0 flex-1">
                            <h4 class="font-bold text-stone-900 text-sm">Email Resmi</h4>
                            <p class="text-stone-600 text-xs mt-0.5">
                                <a href="mailto:info@suryakaryaenergi.com" class="hover:text-brown-600 hover:underline">info@suryakaryaenergi.com</a>
                            </p>
                            <p class="text-stone-600 text-xs mt-0.5">
                                <a href="mailto:proyek@suryakaryaenergi.com" class="hover:text-brown-600 hover:underline">proyek@suryakaryaenergi.com</a>
                            </p>
                        </div>
                    </div>

                    <!-- Hours -->
                    <div class="h-full flex items-center space-x-4 p-5 rounded-2xl bg-stone-50 border border-stone-200 hover:border-brown-400 hover:shadow-sm transition-all duration-200">
                        <div class="w-11 h-11 rounded-xl bg-stone-200 text-stone-700 flex items-center justify-center shrink-0">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div class="min-w-0 flex-1">
                            <h4 class="font-bold text-stone-900 text-sm">Jam Kerja Operasional</h4>
                            <p class="text-stone-600 text-xs mt-0.5">Senin - Jumat: 08.00 - 17.00 WIB</p>
                            <p class="text-stone-500 text-[11px] mt-0.5 italic">Tim O&M & Darurat: Siaga 24 Jam</p>
                        </div>
                    </div>
                </div>

            </div>

            <!-- RIGHT: Contact Form -->
            <div class="lg:col-span-7">
                <div class="bg-stone-50 rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-sm h-full flex flex-col justify-between">
                    <div>
                        <h3 class="text-2xl font-extrabold text-stone-900 mb-2">Kirim Formulir Permintaan</h3>
                        <p class="text-stone-600 text-xs sm:text-sm mb-6 leading-relaxed">
                            Isi data fasilitas Anda untuk menerima kalkulasi potensi penghematan listrik dan rekomendasi kapasitas PLTS gratis dari tim engineering kami.
                        </p>

                        @if($errors->any())
                            <div class="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs space-y-1">
                                @foreach($errors->all() as $error)
                                    <div>&bull; {{ $error }}</div>
                                @endforeach
                            </div>
                        @endif

                        <form action="{{ route('contact.store') }}" method="POST" class="space-y-4">
                            @csrf

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <!-- Name -->
                                <div>
                                    <label class="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">Nama Lengkap <span class="text-red-500">*</span></label>
                                    <input type="text" name="name" value="{{ old('name') }}" required placeholder="Contoh: Ir. Budi Santoso" class="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-brown-500 focus:border-brown-500 bg-white">
                                </div>

                                <!-- Email -->
                                <div>
                                    <label class="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">Email Bisnis <span class="text-red-500">*</span></label>
                                    <input type="email" name="email" value="{{ old('email') }}" required placeholder="budi@perusahaan.co.id" class="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-brown-500 focus:border-brown-500 bg-white">
                                </div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <!-- Phone -->
                                <div>
                                    <label class="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">No. Telepon / WhatsApp</label>
                                    <input type="tel" name="phone" value="{{ old('phone') }}" placeholder="0812-xxxx-xxxx" class="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-brown-500 focus:border-brown-500 bg-white">
                                </div>

                                <!-- Company -->
                                <div>
                                    <label class="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">Nama Perusahaan / Pabrik</label>
                                    <input type="text" name="company" value="{{ old('company') }}" placeholder="PT Manufaktur Maju" class="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-brown-500 focus:border-brown-500 bg-white">
                                </div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <!-- Service Interest -->
                                <div>
                                    <label class="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">Layanan yang Diminati</label>
                                    <select name="service" class="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-brown-500 focus:border-brown-500 bg-white">
                                        <option value="PLTS Atap Industri (Rooftop)">PLTS Atap Industri (Rooftop Solar)</option>
                                        <option value="PLTS Ground-Mounted Skala Utilitas">PLTS Skala Utilitas (Ground-Mounted)</option>
                                        <option value="Battery Energy Storage System (BESS)">Sistem Baterai (BESS)</option>
                                        <option value="O&M & Pemeliharaan Panel Surya">Operasi & Pemeliharaan (O&M)</option>
                                        <option value="Audit Energi & Konsultasi ESG">Audit Energi & Dekarbonisasi ESG</option>
                                        <option value="Lainnya">Lainnya</option>
                                    </select>
                                </div>

                                <!-- Subject -->
                                <div>
                                    <label class="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">Subjek</label>
                                    <input type="text" name="subject" value="{{ old('subject') }}" placeholder="Konsultasi Pemasangan PLTS 1 MWp" class="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-brown-500 focus:border-brown-500 bg-white">
                                </div>
                            </div>

                            <!-- Message -->
                            <div>
                                <label class="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">Rincian Pertanyaan / Kebutuhan Fasilitas <span class="text-red-500">*</span></label>
                                <textarea name="message" rows="4" required placeholder="Tuliskan estimasi tagihan listrik bulanan, luas atap/lahan, dan lokasi fasilitas Anda..." class="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-brown-500 focus:border-brown-500 bg-white">{{ old('message') }}</textarea>
                            </div>

                            <!-- Submit Button -->
                            <div class="pt-2">
                                <button type="submit" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-brown-600 to-brown-500 hover:from-brown-700 hover:to-brown-600 text-white font-bold text-sm shadow-lg shadow-brown-500/25 transition duration-300">
                                    Kirim Pesan & Permintaan Konsultasi
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    </div>
</section>

@endsection