@extends('layouts.app')

@section('title', 'Tentang Kami - PT Surya Karya Energi')
@section('meta_description', 'Profil, visi, misi, dan nilai-nilai inti PT Surya Karya Energi sebagai mitra EPC PLTS dan solusi energi bersih terdepan di Indonesia.')

@section('content')

<!-- HEADER HERO -->
<section class="bg-gradient-to-b from-stone-900 to-stone-950 text-white py-20 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brown-500/20 border border-brown-500/30 text-brown-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Tentang Perusahaan
        </div>
        <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Profil & Komitmen <span class="text-brown-400">PT Surya Karya Energi</span>
        </h1>
        <p class="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Menghadirkan keandalan pasokan energi surya terintegrasi untuk mendukung pertumbuhan sektor industri dan percepatan transisi energi hijau di Indonesia.
        </p>
    </div>
</section>

<!-- COMPANY OVERVIEW & HISTORY -->
<section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div class="lg:col-span-6 space-y-6">
                <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brown-100 text-brown-800 text-xs font-bold uppercase">
                    Dedikasi Enjiniring Energi
                </div>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
                    Mitra Terpercaya Solusi PLTS Industri & Skala Besar
                </h2>
                <p class="text-stone-600 text-base leading-relaxed">
                    Berdiri dengan tekad mempercepat adopsi energi terbarukan di tanah air, <strong>PT Surya Karya Energi</strong> berkembang menjadi salah satu perusahaan EPC (Engineering, Procurement, Construction) dan pengembang PLTS terkemuka di Indonesia.
                </p>
                <p class="text-stone-600 text-base leading-relaxed">
                    Kami memfokuskan layanan pada instalasi PLTS Atap (Rooftop Solar) kawasan industri, fasilitas manufaktur, pergudangan modern, pusat perbelanjaan, hingga pembangkit listrik tenaga surya skala utilitas (Ground-Mounted & Floating Solar) yang terintegrasi dengan Battery Energy Storage System (BESS).
                </p>
                <div class="grid grid-cols-2 gap-4 pt-4 border-t border-stone-100 text-sm">
                    <div class="flex items-center space-x-2 text-stone-700">
                        <svg class="w-5 h-5 text-brown-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        <span class="font-semibold">Sertifikasi Resmi ESDM</span>
                    </div>
                    <div class="flex items-center space-x-2 text-stone-700">
                        <svg class="w-5 h-5 text-brown-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        <span class="font-semibold">Standar K3 Internasional</span>
                    </div>
                    <div class="flex items-center space-x-2 text-stone-700">
                        <svg class="w-5 h-5 text-brown-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        <span class="font-semibold">Teknisi Tersertifikasi BNSP</span>
                    </div>
                    <div class="flex items-center space-x-2 text-stone-700">
                        <svg class="w-5 h-5 text-brown-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        <span class="font-semibold">Garansi Output 25 Tahun</span>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-6">
                <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
                    <img src="https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1000&q=80" alt="Tim Engineer PT Surya Karya Energi" class="w-full h-[450px] object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-8">
                        <div class="text-white">
                            <div class="text-brown-400 font-bold text-sm uppercase">Standar Keamanan Tinggi</div>
                            <div class="text-lg font-extrabold">Implementasi Enjiniring Presisi & Kepatuhan Regulasi Penuh</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- VISION & MISSION -->
<section id="visi-misi" class="py-20 bg-stone-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <!-- Visi -->
            <div class="bg-stone-800/90 border border-stone-700 p-8 sm:p-10 rounded-3xl space-y-4 relative">
                <div class="w-14 h-14 rounded-2xl bg-brown-500/20 border border-brown-500 text-brown-400 flex items-center justify-center mb-6">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </div>
                <h3 class="text-2xl font-extrabold text-white">Visi Perusahaan</h3>
                <p class="text-stone-300 text-base leading-relaxed">
                    Menjadi pemimpin penyedia solusi energi surya terintegrasi yang paling terpercaya, inovatif, dan berstandar internasional di Indonesia, mendorong kemandirian energi industri yang ramah lingkungan dan bernilai investasi tinggi.
                </p>
            </div>

            <!-- Misi -->
            <div class="bg-stone-800/90 border border-stone-700 p-8 sm:p-10 rounded-3xl space-y-4 relative">
                <div class="w-14 h-14 rounded-2xl bg-brown-500/20 border border-brown-500 text-brown-400 flex items-center justify-center mb-6">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <h3 class="text-2xl font-extrabold text-white">Misi Perusahaan</h3>
                <ul class="space-y-3 text-stone-300 text-sm leading-relaxed">
                    <li class="flex items-start space-x-2">
                        <span class="text-brown-400 font-bold mt-0.5">&bull;</span>
                        <span>Menghadirkan layanan EPC PLTS berkualitas tinggi dengan modul Tier-1 dan garansi performa terukur.</span>
                    </li>
                    <li class="flex items-start space-x-2">
                        <span class="text-brown-400 font-bold mt-0.5">&bull;</span>
                        <span>Membantu sektor komersial dan manufaktur memangkas biaya operasional listrik hingga 40%.</span>
                    </li>
                    <li class="flex items-start space-x-2">
                        <span class="text-brown-400 font-bold mt-0.5">&bull;</span>
                        <span>Menjunjung tinggi standar K3, tata kelola berintegritas, dan kepatuhan regulasi ESDM & PLN.</span>
                    </li>
                    <li class="flex items-start space-x-2">
                        <span class="text-brown-400 font-bold mt-0.5">&bull;</span>
                        <span>Mengakselerasi target Net Zero Emission Indonesia tahun 2060 melalui teknologi energi terbarukan terdepan.</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- CORE VALUES -->
<section class="py-20 bg-stone-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brown-100 text-brown-800 text-xs font-bold uppercase">
                Prinsip Fundamental
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-900">
                Nilai-Nilai Inti (Core Values)
            </h2>
            <p class="text-stone-600 text-sm sm:text-base">
                Prinsip operasional yang memandu seluruh keputusan bisnis, eksekusi lapangan, dan pelayanan klien kami.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-3">
                <div class="text-2xl font-black text-brown-500">01. RELIABILITY</div>
                <h3 class="text-lg font-bold text-stone-900">Keandalan Sistem</h3>
                <p class="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Setiap kilowatt-hour yang dihasilkan dipastikan stabil, aman, dan dapat diandalkan untuk menopang produksi industri 24/7.
                </p>
            </div>

            <div class="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-3">
                <div class="text-2xl font-black text-brown-500">02. SUSTAINABILITY</div>
                <h3 class="text-lg font-bold text-stone-900">Keberlanjutan</h3>
                <p class="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Fokus jangka panjang dalam menjaga kelestarian lingkungan dan membantu mitra bisnis memenuhi standar dekarbonisasi global.
                </p>
            </div>

            <div class="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-3">
                <div class="text-2xl font-black text-brown-500">03. INTEGRITY</div>
                <h3 class="text-lg font-bold text-stone-900">Integritas Bisnis</h3>
                <p class="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Transparansi penuh dalam kalkulasi kapasitas, spesifikasi komponen orisinal, dan pemenuhan seluruh regulasi keselamatan.
                </p>
            </div>

            <div class="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-3">
                <div class="text-2xl font-black text-brown-500">04. INNOVATION</div>
                <h3 class="text-lg font-bold text-stone-900">Inovasi Enjiniring</h3>
                <p class="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Penerapan teknologi solar PV bifacial terbaru, integrasi microgrid cerdas, dan telemetri pemantauan berbasis IoT.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- CERTIFICATIONS & COMPLIANCE -->
<section class="py-16 bg-white border-t border-stone-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div>
            <div class="text-xs font-bold uppercase tracking-wider text-brown-600 mb-2">Standar Internasional</div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-stone-900">Sertifikasi & Kepatuhan Resmi</h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div class="p-6 rounded-2xl bg-stone-50 border border-stone-200 text-center">
                <div class="font-extrabold text-lg text-stone-900">ISO 9001:2015</div>
                <div class="text-xs text-stone-500 mt-1">Sistem Manajemen Mutu</div>
            </div>
            <div class="p-6 rounded-2xl bg-stone-50 border border-stone-200 text-center">
                <div class="font-extrabold text-lg text-stone-900">ISO 14001:2015</div>
                <div class="text-xs text-stone-500 mt-1">Manajemen Lingkungan</div>
            </div>
            <div class="p-6 rounded-2xl bg-stone-50 border border-stone-200 text-center">
                <div class="font-extrabold text-lg text-stone-900">ISO 45001:2018</div>
                <div class="text-xs text-stone-500 mt-1">Keselamatan & K3</div>
            </div>
            <div class="p-6 rounded-2xl bg-stone-50 border border-stone-200 text-center">
                <div class="font-extrabold text-lg text-stone-900">SBU ESDM</div>
                <div class="text-xs text-stone-500 mt-1">Pelaksana Ketenagalistrikan</div>
            </div>
        </div>
    </div>
</section>

@endsection
