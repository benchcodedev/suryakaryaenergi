@extends('layouts.app')

@section('title', $project->title . ' - PT Surya Karya Energi')
@section('meta_description', 'Spesifikasi teknis, kapasitas, dan galeri foto proyek ' . $project->title . ' oleh PT Surya Karya Energi.')

@section('content')

<!-- BREADCRUMBS -->
<div class="bg-stone-100 border-b border-stone-200 py-3">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center space-x-2 text-xs text-stone-500">
            <a href="{{ route('home') }}" class="hover:text-brown-600 transition">Beranda</a>
            <span>&rsaquo;</span>
            <a href="{{ route('projects.index') }}" class="hover:text-brown-600 transition">Portofolio Proyek</a>
            <span>&rsaquo;</span>
            <span class="text-stone-900 font-semibold truncate">{{ $project->title }}</span>
        </nav>
    </div>
</div>

<!-- PROJECT DETAIL MAIN SECTION -->
<section class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Title & Badges Header -->
        <div class="space-y-4 mb-8">
            <div class="flex flex-wrap items-center gap-2">
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-brown-100 text-brown-800">
                    {{ $project->category }}
                </span>
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-brown-500 text-white">
                    {{ $project->capacity }}
                </span>
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                    {{ $project->status }}
                </span>
                @if($project->is_featured)
                    <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                        Proyek Unggulan
                    </span>
                @endif
            </div>

            <h1 class="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
                {{ $project->title }}
            </h1>

            <div class="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-stone-500">
                <span class="flex items-center">
                    <svg class="w-4 h-4 text-brown-500 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    <strong>Klien:</strong>&nbsp;{{ $project->client }}
                </span>
                <span class="flex items-center">
                    <svg class="w-4 h-4 text-brown-500 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
                    <strong>Lokasi:</strong>&nbsp;{{ $project->location }}
                </span>
                <span class="flex items-center">
                    <svg class="w-4 h-4 text-brown-500 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <strong>Tahun:</strong>&nbsp;{{ $project->year }}
                </span>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <!-- Left: Gallery & Narrative -->
            <div class="lg:col-span-8 space-y-8">
                
                <!-- Main Image Display -->
                <div class="rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-stone-100">
                    <img id="main-view-image" src="{{ $project->cover_image }}" alt="{{ $project->title }}" class="w-full h-80 sm:h-[450px] object-cover transition-opacity duration-300">
                </div>

                <!-- Gallery Thumbnails if available -->
                @if($project->images && $project->images->count() > 0)
                    <div>
                        <h3 class="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">Galeri Foto Instalasi Lapangan</h3>
                        <div class="grid grid-cols-3 sm:grid-cols-4 gap-3">
                            <!-- Cover Thumbnail -->
                            <button type="button" onclick="changeImage('{{ $project->cover_image }}')" class="h-20 rounded-xl overflow-hidden border-2 border-brown-500 focus:outline-none hover:opacity-90 transition">
                                <img src="{{ $project->cover_image }}" alt="Cover" class="w-full h-full object-cover">
                            </button>
                            <!-- Additional Gallery Images -->
                            @foreach($project->images as $img)
                                <button type="button" onclick="changeImage('{{ $img->image_url }}')" class="h-20 rounded-xl overflow-hidden border-2 border-transparent hover:border-brown-400 focus:border-brown-500 focus:outline-none hover:opacity-90 transition">
                                    <img src="{{ $img->image_url }}" alt="{{ $img->caption ?? 'Gallery' }}" class="w-full h-full object-cover">
                                </button>
                            @endforeach
                        </div>
                    </div>
                @endif

                <!-- Narrative & Description -->
                <div class="space-y-4 pt-4 border-t border-stone-200">
                    <h2 class="text-xl font-extrabold text-stone-900">Deskripsi & Ruang Lingkup Enjiniring</h2>
                    <div class="text-stone-700 text-sm sm:text-base leading-relaxed space-y-4">
                        {!! nl2br(e($project->description)) !!}
                    </div>
                </div>

                <!-- Engineering Highlights -->
                <div class="bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-3">
                    <h3 class="text-sm font-bold text-stone-900 uppercase tracking-wider">Jaminan Mutu & Keamanan Proyek</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-600">
                        <div class="flex items-center space-x-2">
                            <svg class="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span>Standar Keselamatan Kerja OHSAS/SMK3</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <svg class="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span>Sertifikat Laik Operasi (SLO) Terverifikasi</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <svg class="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span>Interkoneksi Jaringan PLN Resmi & Aman</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <svg class="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span>Integrasi Monitoring Telemetri IoT 24/7</span>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Right: Technical Specs Sidebar -->
            <div class="lg:col-span-4 space-y-6">
                
                <!-- Specs Card -->
                <div class="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
                    <h3 class="text-lg font-extrabold text-stone-900 pb-3 border-b border-stone-200">
                        Spesifikasi Proyek
                    </h3>

                    <div class="space-y-4 text-sm">
                        <div class="flex justify-between py-2 border-b border-stone-200/60">
                            <span class="text-stone-500">Kapasitas Sistem</span>
                            <span class="font-bold text-stone-900">{{ $project->capacity }}</span>
                        </div>
                        <div class="flex justify-between py-2 border-b border-stone-200/60">
                            <span class="text-stone-500">Kategori Instalasi</span>
                            <span class="font-bold text-stone-900">{{ $project->category }}</span>
                        </div>
                        <div class="flex justify-between py-2 border-b border-stone-200/60">
                            <span class="text-stone-500">Klien / Fasilitas</span>
                            <span class="font-bold text-stone-900 text-right">{{ $project->client }}</span>
                        </div>
                        <div class="flex justify-between py-2 border-b border-stone-200/60">
                            <span class="text-stone-500">Lokasi</span>
                            <span class="font-bold text-stone-900 text-right">{{ $project->location }}</span>
                        </div>
                        <div class="flex justify-between py-2 border-b border-stone-200/60">
                            <span class="text-stone-500">Tahun Selesai</span>
                            <span class="font-bold text-stone-900">{{ $project->year }}</span>
                        </div>
                        <div class="flex justify-between py-2 border-b border-stone-200/60">
                            <span class="text-stone-500">Status Operasi</span>
                            <span class="font-bold text-emerald-700">{{ $project->status }}</span>
                        </div>
                        <div class="flex justify-between py-2 border-b border-stone-200/60">
                            <span class="text-stone-500">Jaminan Kinerja</span>
                            <span class="font-bold text-brown-600">25 Tahun Output</span>
                        </div>
                    </div>

                    <!-- Consultation Box inside Specs -->
                    <div class="pt-4 border-t border-stone-200">
                        <a href="{{ route('contact') }}" class="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl bg-brown-500 hover:bg-brown-600 text-white font-bold text-sm shadow-md transition">
                            Konsultasikan Proyek Serupa
                        </a>
                        <a href="https://wa.me/6281234567890?text=Halo%20SKE,%20saya%20tertarik%20dengan%20proyek%20{{ urlencode($project->title) }}" 
                           target="_blank" 
                           class="w-full mt-2.5 inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-stone-300 hover:border-emerald-500 text-stone-700 hover:text-emerald-700 font-semibold text-xs transition">
                            Tanya via WhatsApp Langsung
                        </a>
                    </div>
                </div>

            </div>

        </div>

        <!-- RELATED PROJECTS -->
        @if($relatedProjects && $relatedProjects->count() > 0)
            <div class="mt-20 pt-12 border-t border-stone-200">
                <div class="mb-8">
                    <h2 class="text-2xl font-extrabold text-stone-900">Proyek Terkait Lainnya</h2>
                    <p class="text-stone-500 text-sm mt-1">Studi kasus instalasi serupa di kawasan industri lainnya.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    @foreach($relatedProjects as $rel)
                        <div class="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 hover:border-brown-400 shadow-sm transition group">
                            <div class="relative h-48 overflow-hidden bg-stone-200">
                                <img src="{{ $rel->cover_image }}" alt="{{ $rel->title }}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
                                <div class="absolute top-3 left-3">
                                    <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-stone-900/80 text-white">
                                        {{ $rel->capacity }}
                                    </span>
                                </div>
                            </div>
                            <div class="p-5 space-y-2">
                                <div class="text-[11px] text-stone-500">{{ $rel->location }} &bull; {{ $rel->year }}</div>
                                <h4 class="font-bold text-stone-900 text-sm group-hover:text-brown-600 transition-colors line-clamp-2">
                                    <a href="{{ route('projects.show', $rel->slug) }}">{{ $rel->title }}</a>
                                </h4>
                                <a href="{{ route('projects.show', $rel->slug) }}" class="text-xs font-semibold text-brown-600 hover:text-brown-700 inline-flex items-center pt-2">
                                    <span>Lihat Detail</span>
                                    <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                </a>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        @endif

    </div>
</section>

<!-- SCRIPT IMAGE SWITCHER -->
<script>
    function changeImage(url) {
        const main = document.getElementById('main-view-image');
        if (main) {
            main.style.opacity = '0.4';
            setTimeout(() => {
                main.src = url;
                main.style.opacity = '1';
            }, 150);
        }
    }
</script>

@endsection
