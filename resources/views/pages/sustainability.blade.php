@extends('layouts.app')

@section('title', 'Keberlanjutan & ESG - PT Surya Karya Energi')
@section('meta_description', 'Komitmen ESG dan strategi dekarbonisasi industri PT Surya Karya Energi menuju target Net Zero Emission Indonesia 2060.')

@section('content')

<!-- HEADER HERO -->
<section class="bg-gradient-to-b from-stone-900 to-stone-950 text-white py-20 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Environmental, Social & Governance
        </div>
        <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Komitmen Keberlanjutan & <span class="text-brown-400">Dampak ESG</span>
        </h1>
        <p class="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Menghubungkan target dekarbonisasi korporasi dengan solusi energi surya nyata yang terukur, transparan, dan berdampak positif bagi bumi.
        </p>
    </div>
</section>

<!-- IMPACT COUNTERS -->
<section class="py-12 bg-white border-b border-stone-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div class="p-6 rounded-2xl bg-stone-50 border border-stone-200">
                <div class="text-3xl sm:text-4xl font-extrabold text-emerald-600">68.000+ Ton</div>
                <div class="text-xs sm:text-sm font-semibold text-stone-600 mt-1 uppercase tracking-wider">CO2 Dihindari Setiap Tahun</div>
                <p class="text-xs text-stone-500 mt-2">Dihitung dari kumulatif energi bersih yang dihasilkan instalasi PLTS aktif kami.</p>
            </div>
            <div class="p-6 rounded-2xl bg-stone-50 border border-stone-200">
                <div class="text-3xl sm:text-4xl font-extrabold text-brown-600">1.200.000+</div>
                <div class="text-xs sm:text-sm font-semibold text-stone-600 mt-1 uppercase tracking-wider">Pohon Setara Ditanam</div>
                <p class="text-xs text-stone-500 mt-2">Dampak ekologis langsung terhadap penyerapan emisi karbon dioksida.</p>
            </div>
            <div class="p-6 rounded-2xl bg-stone-50 border border-stone-200">
                <div class="text-3xl sm:text-4xl font-extrabold text-brown-600">58.000+ MWh</div>
                <div class="text-xs sm:text-sm font-semibold text-stone-600 mt-1 uppercase tracking-wider">Energi Hijau Bersih Dihasilkan</div>
                <p class="text-xs text-stone-500 mt-2">Mengurangi ketergantungan industri terhadap bahan bakar fosil batu bara.</p>
            </div>
        </div>
    </div>
</section>

<!-- 3 PILAR ESG -->
<section class="py-20 bg-stone-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brown-100 text-brown-800 text-xs font-bold uppercase">
                Kerangka Kerja ESG
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-900">
                Tiga Pilar Keberlanjutan Kami
            </h2>
            <p class="text-stone-600 text-sm sm:text-base">
                Pendekatan komprehensif PT Surya Karya Energi dalam menciptakan nilai tambah lingkungan, sosial, dan tata kelola berintegritas.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Environmental -->
            <div class="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4 flex flex-col justify-between">
                <div>
                    <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg mb-4">
                        E
                    </div>
                    <h3 class="text-xl font-bold text-stone-900">Environmental (Lingkungan)</h3>
                    <ul class="space-y-2.5 text-xs sm:text-sm text-stone-600 mt-4 leading-relaxed">
                        <li class="flex items-start space-x-2">
                            <span class="text-emerald-500 font-bold">&check;</span>
                            <span>Akselerasi penggantian energi fosil dengan radiasi surya bersih.</span>
                        </li>
                        <li class="flex items-start space-x-2">
                            <span class="text-emerald-500 font-bold">&check;</span>
                            <span>Manajemen limbah fotovoltaik bersertifikasi dan daur ulang material.</span>
                        </li>
                        <li class="flex items-start space-x-2">
                            <span class="text-emerald-500 font-bold">&check;</span>
                            <span>Penerapan standar ISO 14001:2015 dalam seluruh tahapan EPC.</span>
                        </li>
                    </ul>
                </div>
                <div class="pt-4 border-t border-stone-100 text-xs text-emerald-700 font-semibold">
                    Target NZE Indonesia 2060
                </div>
            </div>

            <!-- Social -->
            <div class="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4 flex flex-col justify-between">
                <div>
                    <div class="w-12 h-12 rounded-xl bg-brown-100 text-brown-700 flex items-center justify-center font-bold text-lg mb-4">
                        S
                    </div>
                    <h3 class="text-xl font-bold text-stone-900">Social (Sosial & K3)</h3>
                    <ul class="space-y-2.5 text-xs sm:text-sm text-stone-600 mt-4 leading-relaxed">
                        <li class="flex items-start space-x-2">
                            <span class="text-brown-500 font-bold">&check;</span>
                            <span>Komitmen Zero Accident dengan sertifikasi ISO 45001 & SMK3.</span>
                        </li>
                        <li class="flex items-start space-x-2">
                            <span class="text-brown-500 font-bold">&check;</span>
                            <span>Pemberdayaan teknisi lokal melalui pelatihan instalasi surya bersertifikasi.</span>
                        </li>
                        <li class="flex items-start space-x-2">
                            <span class="text-brown-500 font-bold">&check;</span>
                            <span>Program CSR elektrifikasi fasilitas pendidikan dan publik daerah terpencil.</span>
                        </li>
                    </ul>
                </div>
                <div class="pt-4 border-t border-stone-100 text-xs text-brown-700 font-semibold">
                    Inklusivitas & Keselamatan Tenaga Kerja
                </div>
            </div>

            <!-- Governance -->
            <div class="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4 flex flex-col justify-between">
                <div>
                    <div class="w-12 h-12 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center font-bold text-lg mb-4">
                        G
                    </div>
                    <h3 class="text-xl font-bold text-stone-900">Governance (Tata Kelola)</h3>
                    <ul class="space-y-2.5 text-xs sm:text-sm text-stone-600 mt-4 leading-relaxed">
                        <li class="flex items-start space-x-2">
                            <span class="text-stone-700 font-bold">&check;</span>
                            <span>Kepatuhan 100% terhadap regulasi teknis ESDM dan interkoneksi PLN.</span>
                        </li>
                        <li class="flex items-start space-x-2">
                            <span class="text-stone-700 font-bold">&check;</span>
                            <span>Kebijakan Anti-Korupsi dan transparansi rantai pasok komponen Tier-1.</span>
                        </li>
                        <li class="flex items-start space-x-2">
                            <span class="text-stone-700 font-bold">&check;</span>
                            <span>Pelaporan audit keuangan dan operasional berkala yang dapat dipertanggungjawabkan.</span>
                        </li>
                    </ul>
                </div>
                <div class="pt-4 border-t border-stone-100 text-xs text-stone-700 font-semibold">
                    Transparansi & Akuntabilitas Penuh
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CALL TO ACTION -->
<section class="py-16 bg-stone-900 text-white text-center">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 class="text-2xl sm:text-3xl font-bold">Wujudkan Laporan Keberlanjutan Korporasi Anda</h2>
        <p class="text-stone-300 text-sm sm:text-base leading-relaxed">
            Konsultasikan rencana transisi energi hijau fasilitas industri Anda bersama tim teknis PT Surya Karya Energi untuk penghitungan Sertifikat Energi Terbarukan (REC) dan reduksi emisi resmi.
        </p>
        <div class="pt-2">
            <a href="{{ route('contact') }}" class="inline-flex items-center px-6 py-3 rounded-xl bg-brown-500 hover:bg-brown-600 text-white font-bold text-sm shadow-lg transition">
                <span>Hubungi Tim Konsultan ESG Kami</span>
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
        </div>
    </div>
</section>

@endsection
