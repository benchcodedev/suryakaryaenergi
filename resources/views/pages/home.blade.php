@extends('layouts.app')

@section('title', 'PT Surya Karya Energi - Reliable Power, Sustainable Future')
@section('meta_description', 'Solusi Terintegrasi EPC & Investasi PLTS Industri, Komersial, dan Utilitas Terdepan di Indonesia. Efisiensi energi berkelanjutan dengan modul Tier-1.')

@section('content')

<!-- HERO SECTION -->
<section class="relative bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 text-white overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
    <!-- Subtle Background Glows -->
    <div class="absolute top-0 right-1/4 w-96 h-96 bg-brown-500/15 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 left-10 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Hero Content -->
            <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
                <!-- Badge Motto -->
                <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brown-500/15 border border-brown-500/30 text-brown-300 text-xs font-semibold tracking-wide uppercase">
                    <span class="w-2 h-2 rounded-full bg-brown-400 animate-pulse"></span>
                    <span>Reliable Power, Sustainable Future</span>
                </div>

                <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                    Solusi Terintegrasi <br class="hidden sm:block">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-brown-400 via-gold-400 to-brown-300">
                        PLTS Industri & Utilitas
                    </span> <br class="hidden sm:block">
                    Terdepan di Indonesia
                </h1>

                <p class="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-justify lg:text-left">
                    PT Surya Karya Energi menyediakan layanan EPC (Engineering, Procurement, Construction) serta pemeliharaan O&M PLTS Atap komersial dan sistem penyimpanan baterai (BESS) berstandar internasional untuk efisiensi listrik fasilitas industri Anda.
                </p>

                <!-- CTA Buttons -->
                <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                    <a href="{{ route('contact') }}" class="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-gradient-to-r from-brown-600 to-brown-500 hover:from-brown-700 hover:to-brown-600 text-white font-bold text-base shadow-xl shadow-brown-600/30 transition-all duration-300 transform hover:-translate-y-0.5">
                        <span>Konsultasi Teknis Gratis</span>
                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                    <a href="{{ route('projects.index') }}" class="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-stone-800/80 hover:bg-stone-800 border border-stone-700 text-stone-200 font-semibold text-base transition-all duration-300 hover:border-brown-500/50">
                        <span>Lihat Project</span>
                        <svg class="w-5 h-5 ml-2 text-brown-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </a>
                </div>

                <!-- Trust Points -->
                <div class="pt-6 border-t border-stone-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-stone-400">
                    <span class="flex items-center space-x-1.5">
                        <svg class="w-4 h-4 text-brown-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Komponen Tier-1 Global</span>
                    </span>
                    <span class="flex items-center space-x-1.5">
                        <svg class="w-4 h-4 text-brown-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Garansi Kinerja 25 Tahun</span>
                    </span>
                    <span class="flex items-center space-x-1.5">
                        <svg class="w-4 h-4 text-brown-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Sertifikasi ISO & SMK3</span>
                    </span>
                </div>
            </div>

            <!-- Right Hero Visual -->
            <div class="lg:col-span-5">
                <div class="relative mx-auto max-w-md lg:max-w-none">
                    <div class="absolute -inset-1.5 bg-gradient-to-r from-brown-500 to-gold-400 rounded-3xl blur-lg opacity-30"></div>
                    <div class="relative bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl p-2">
                        <img src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80" 
                             alt="Instalasi Panel Surya Industri PT Surya Karya Energi" 
                             class="w-full h-80 sm:h-96 object-cover rounded-xl">
                        
                        <!-- Floating Highlight Card -->
                        <div class="absolute bottom-6 left-6 right-6 bg-stone-900/90 backdrop-blur-md border border-brown-500/40 p-4 rounded-xl shadow-lg flex items-center space-x-4">
                            <div class="w-12 h-12 rounded-xl bg-brown-500/20 border border-brown-500 flex items-center justify-center shrink-0">
                                <img src="{{ asset('images/logo-emblem.png') }}" alt="Emblem SKE" class="w-8 h-8 object-contain">
                            </div>
                            <div class="text-xs">
                                <div class="font-bold text-white text-sm">Industrial Rooftop Solar PV</div>
                                <div class="text-brown-300">Efisiensi Biaya Listrik hingga 40%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

<!-- STATS COUNTER STRIP -->
<section class="bg-white border-y border-stone-200 py-10 shadow-sm relative z-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center">
            <div class="p-4 border-r last:border-none border-stone-200">
                <div class="text-3xl sm:text-4xl font-extrabold text-brown-600">{{ $stats['installed_capacity'] }}</div>
                <div class="text-xs sm:text-sm font-semibold text-stone-600 mt-1 uppercase tracking-wider">Kapasitas Terpasang</div>
            </div>
            <div class="p-4 border-r last:border-none border-stone-200">
                <div class="text-3xl sm:text-4xl font-extrabold text-brown-600">{{ $stats['projects_count'] }}</div>
                <div class="text-xs sm:text-sm font-semibold text-stone-600 mt-1 uppercase tracking-wider">Proyek Selesai</div>
            </div>
            <div class="p-4 border-r last:border-none border-stone-200">
                <div class="text-3xl sm:text-4xl font-extrabold text-brown-600">{{ $stats['uptime'] }}</div>
                <div class="text-xs sm:text-sm font-semibold text-stone-600 mt-1 uppercase tracking-wider">Uptime Sistem PLTS</div>
            </div>
            <div class="p-4">
                <div class="text-3xl sm:text-4xl font-extrabold text-brown-600">{{ $stats['co2_reduced'] }} Ton</div>
                <div class="text-xs sm:text-sm font-semibold text-stone-600 mt-1 uppercase tracking-wider">Reduksi CO2 / Tahun</div>
            </div>
        </div>
    </div>
</section>

<!-- CORE SOLUTIONS & SERVICES -->
<section class="py-20 bg-stone-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brown-100 text-brown-800 text-xs font-bold tracking-wide uppercase">
                Layanan Unggulan Kami
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                Solusi Energi Bersih Terintegrasi dari Hulu ke Hilir
            </h2>
            <p class="text-stone-600 text-base leading-relaxed text-justify md:text-center">
                Kami merancang, membangun, dan mengoperasikan sistem tenaga surya komersial dengan standar keandalan tinggi untuk menjaga stabilitas daya bisnis Anda.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Service 1 -->
            <div class="bg-white rounded-2xl p-7 border border-stone-200 hover:border-brown-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                    <div class="w-14 h-14 rounded-xl bg-brown-50 border border-brown-200 text-brown-600 flex items-center justify-center mb-6 group-hover:bg-brown-500 group-hover:text-white transition-colors duration-300">
                        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold text-stone-900 mb-3 group-hover:text-brown-600 transition-colors">PLTS Atap Industri</h3>
                    <p class="text-sm text-stone-600 leading-relaxed text-justify">
                        Pemanfaatan atap pabrik, gudang, dan gedung komersial untuk menekan biaya tagihan listrik PLN dan meningkatkan profil kepatuhan ESG perusahaan.
                    </p>
                </div>
                <div class="mt-6 pt-4 border-t border-stone-100 flex items-center text-xs font-bold text-brown-600 group-hover:translate-x-1 transition-transform">
                    <span>Pelajari Detail</span>
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
            </div>

            <!-- Service 2 -->
            <div class="bg-white rounded-2xl p-7 border border-stone-200 hover:border-brown-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                    <div class="w-14 h-14 rounded-xl bg-brown-50 border border-brown-200 text-brown-600 flex items-center justify-center mb-6 group-hover:bg-brown-500 group-hover:text-white transition-colors duration-300">
                        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold text-stone-900 mb-3 group-hover:text-brown-600 transition-colors">PLTS Skala Utilitas</h3>
                    <p class="text-sm text-stone-600 leading-relaxed text-justify">
                        Pembangunan pembangkit listrik tenaga surya skala besar (Ground-Mounted & Floating Solar) dengan kajian geoteknik dan sinkronisasi gardu induk bertegangan menengah/tinggi.
                    </p>
                </div>
                <div class="mt-6 pt-4 border-t border-stone-100 flex items-center text-xs font-bold text-brown-600 group-hover:translate-x-1 transition-transform">
                    <span>Pelajari Detail</span>
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
            </div>

            <!-- Service 3 -->
            <div class="bg-white rounded-2xl p-7 border border-stone-200 hover:border-brown-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                    <div class="w-14 h-14 rounded-xl bg-brown-50 border border-brown-200 text-brown-600 flex items-center justify-center mb-6 group-hover:bg-brown-500 group-hover:text-white transition-colors duration-300">
                        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold text-stone-900 mb-3 group-hover:text-brown-600 transition-colors">Sistem Baterai (BESS)</h3>
                    <p class="text-sm text-stone-600 leading-relaxed text-justify">
                        Sistem penyimpanan daya baterai lithium canggih untuk peak-shaving, cadangan daya darurat (UPS terpusat), dan stabilisasi frekuensi tegangan jaringan industri.
                    </p>
                </div>
                <div class="mt-6 pt-4 border-t border-stone-100 flex items-center text-xs font-bold text-brown-600 group-hover:translate-x-1 transition-transform">
                    <span>Pelajari Detail</span>
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
            </div>

            <!-- Service 4 -->
            <div class="bg-white rounded-2xl p-7 border border-stone-200 hover:border-brown-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                    <div class="w-14 h-14 rounded-xl bg-brown-50 border border-brown-200 text-brown-600 flex items-center justify-center mb-6 group-hover:bg-brown-500 group-hover:text-white transition-colors duration-300">
                        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold text-stone-900 mb-3 group-hover:text-brown-600 transition-colors">O&M & IoT Monitoring</h3>
                    <p class="text-sm text-stone-600 leading-relaxed text-justify">
                        Layanan operasional menyeluruh, pembersihan panel berkala, inspeksi termografi drone, dan pemantauan sensor performa jarak jauh selama 24/7.
                    </p>
                </div>
                <div class="mt-6 pt-4 border-t border-stone-100 flex items-center text-xs font-bold text-brown-600 group-hover:translate-x-1 transition-transform">
                    <span>Pelajari Detail</span>
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- FEATURED PROJECTS -->
<section class="py-20 bg-white border-t border-stone-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
                <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brown-100 text-brown-800 text-xs font-bold tracking-wide uppercase mb-3">
                    Portofolio Project
                </div>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                    Portofolio Instalasi Unggulan
                </h2>
                <p class="text-stone-600 mt-2 text-base">
                    Bukti nyata keandalan teknik dan kepercayaan mitra industri terkemuka di Indonesia.
                </p>
            </div>
            <div class="mt-4 md:mt-0">
                <a href="{{ route('projects.index') }}" class="inline-flex items-center text-sm font-bold text-brown-600 hover:text-brown-700 transition">
                    <span>Lihat Semua Portofolio</span>
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @forelse($featuredProjects as $project)
                <div class="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 hover:border-brown-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
                    <div class="relative h-56 overflow-hidden bg-stone-200">
                        <img src="{{ $project->cover_image }}" alt="{{ $project->title }}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
                        <div class="absolute top-4 left-4 flex flex-wrap gap-2">
                            <span class="px-2.5 py-1 rounded-lg text-xs font-bold bg-stone-900/80 text-white backdrop-blur-md">
                                {{ $project->category }}
                            </span>
                            <span class="px-2.5 py-1 rounded-lg text-xs font-bold bg-brown-500 text-white shadow">
                                {{ $project->capacity }}
                            </span>
                        </div>
                        <div class="absolute bottom-4 right-4">
                            <span class="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-600 text-white">
                                {{ $project->status }}
                            </span>
                        </div>
                    </div>
                    <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div>
                            <div class="flex items-center space-x-2 text-xs text-stone-500 mb-2">
                                <span>{{ $project->location }}</span>
                                <span>&bull;</span>
                                <span>{{ $project->year }}</span>
                            </div>
                            <h3 class="text-lg font-bold text-stone-900 group-hover:text-brown-600 transition-colors line-clamp-2">
                                <a href="{{ route('projects.show', $project->slug) }}">{{ $project->title }}</a>
                            </h3>
                            <p class="text-xs text-stone-600 mt-2 font-medium">Klien: {{ $project->client }}</p>
                            <p class="text-xs text-stone-500 mt-2 line-clamp-2 leading-relaxed text-justify">
                                {{ $project->description }}
                            </p>
                        </div>
                        <div class="pt-4 border-t border-stone-200 flex items-center justify-between text-xs">
                            <a href="{{ route('projects.show', $project->slug) }}" class="font-bold text-brown-600 hover:text-brown-700 inline-flex items-center">
                                <span>Lihat Spesifikasi</span>
                                <svg class="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            </a>
                            <span class="text-stone-400">EPC Certified</span>
                        </div>
                    </div>
                </div>
            @empty
                <div class="col-span-3 text-center py-12 text-stone-500">
                    Belum ada proyek unggulan yang ditampilkan.
                </div>
            @endforelse
        </div>
    </div>
</section>

<!-- WHY CHOOSE US / COMPETITIVE ADVANTAGES -->
<section class="py-20 bg-stone-900 text-white relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brown-500/20 text-brown-300 text-xs font-bold tracking-wide uppercase">
                Keunggulan Kompetitif
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Mengapa Bermitra dengan PT Surya Karya Energi?
            </h2>
            <p class="text-stone-400 text-base leading-relaxed text-justify md:text-center">
                Kami menggabungkan rekayasa teknik tingkat tinggi, jaminan komponen internasional, dan komitmen keselamatan tanpa kompromi.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="bg-stone-800/80 border border-stone-700/80 p-6 rounded-2xl space-y-3">
                <div class="w-12 h-12 rounded-xl bg-brown-500/20 border border-brown-500/40 text-brown-400 flex items-center justify-center font-bold text-xl">
                    01
                </div>
                <h3 class="text-lg font-bold text-white">Tier-1 PV & Inverter</h3>
                <p class="text-xs sm:text-sm text-stone-300 leading-relaxed text-justify">
                    Hanya mengaplikasikan modul fotovoltaik dan inverter berperingkat BloombergNEF Tier-1 untuk efisiensi konversi daya optimal.
                </p>
            </div>

            <div class="bg-stone-800/80 border border-stone-700/80 p-6 rounded-2xl space-y-3">
                <div class="w-12 h-12 rounded-xl bg-brown-500/20 border border-brown-500/40 text-brown-400 flex items-center justify-center font-bold text-xl">
                    02
                </div>
                <h3 class="text-lg font-bold text-white">Garansi 25 Tahun</h3>
                <p class="text-xs sm:text-sm text-stone-300 leading-relaxed text-justify">
                    Jaminan kinerja output daya hingga 25 tahun dengan komitmen penggantian dan kompensasi degradasi yang transparan.
                </p>
            </div>

            <div class="bg-stone-800/80 border border-stone-700/80 p-6 rounded-2xl space-y-3">
                <div class="w-12 h-12 rounded-xl bg-brown-500/20 border border-brown-500/40 text-brown-400 flex items-center justify-center font-bold text-xl">
                    03
                </div>
                <h3 class="text-lg font-bold text-white">Monitoring IoT 24/7</h3>
                <p class="text-xs sm:text-sm text-stone-300 leading-relaxed text-justify">
                    Akses dashboard telemetri real-time yang memantau performa kilowatt-hour, radiasi surya, dan peringatan preventif otomatis.
                </p>
            </div>

            <div class="bg-stone-800/80 border border-stone-700/80 p-6 rounded-2xl space-y-3">
                <div class="w-12 h-12 rounded-xl bg-brown-500/20 border border-brown-500/40 text-brown-400 flex items-center justify-center font-bold text-xl">
                    04
                </div>
                <h3 class="text-lg font-bold text-white">Zero Accident & K3</h3>
                <p class="text-xs sm:text-sm text-stone-300 leading-relaxed text-justify">
                    Penerapan standar keselamatan kerja bertaraf ISO 45001 dan sertifikasi personil teknis bersertifikasi BNSP & ESDM.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- CALL TO ACTION BANNER -->
<section class="py-16 bg-gradient-to-r from-brown-600 via-brown-500 to-gold-600 text-white relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Siap Mengurangi Beban Biaya Listrik Industri Anda?
        </h2>
        <p class="text-brown-100 text-base max-w-2xl mx-auto leading-relaxed">
            Dapatkan studi kelayakan teknis (Feasibility Study) dan simulasi penghematan investasi PLTS tanpa biaya untuk fasilitas Anda.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a href="{{ route('contact') }}" class="px-8 py-3.5 rounded-xl bg-stone-950 hover:bg-stone-900 text-white font-bold text-sm shadow-xl transition transform hover:-translate-y-0.5">
                Hubungi Tim Enjiniring Kami
            </a>
            <a href="https://wa.me/6281234567890?text=Halo%20PT%20Surya%20Karya%20Energi,%20saya%20tertarik%20konsultasi%20solusi%20PLTS%20industri" 
               target="_blank" 
               class="px-8 py-3.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-white font-bold text-sm transition">
                Chat WhatsApp Langsung
            </a>
        </div>
    </div>
</section>

@endsection
