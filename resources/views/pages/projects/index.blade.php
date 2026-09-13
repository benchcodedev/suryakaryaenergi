@extends('layouts.app')

@section('title', 'Portofolio Proyek - PT Surya Karya Energi')
@section('meta_description', 'Katalog instalasi PLTS Atap, Ground-Mounted, dan BESS yang berhasil dibangun dan dioperasikan oleh PT Surya Karya Energi di berbagai kawasan industri Indonesia.')

@section('content')

<!-- HEADER HERO -->
<section class="bg-gradient-to-b from-stone-900 to-stone-950 text-white py-16 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brown-500/20 border border-brown-500/30 text-brown-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Rekam Jejak Enjiniring
        </div>
        <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Portofolio <span class="text-brown-400">Proyek Unggulan</span>
        </h1>
        <p class="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Eksplorasi portofolio instalasi sistem pembangkit listrik tenaga surya dan baterai penyimpanan skala industri kami di seluruh wilayah Indonesia.
        </p>
    </div>
</section>

<!-- FILTER & SEARCH STRIP -->
<section class="py-8 bg-white border-b border-stone-200 sticky top-20 z-30 shadow-sm backdrop-blur-md bg-white/90">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <form method="GET" action="{{ route('projects.index') }}" class="flex flex-col lg:flex-row items-center justify-between gap-4">
            <!-- Category Pills -->
            <div class="flex items-center overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 space-x-2 scrollbar-none">
                @foreach($categories as $key => $label)
                    <a href="{{ route('projects.index', ['category' => $key, 'search' => request('search')]) }}" 
                       class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all {{ ($category === $key || (!$category && $key === 'all')) ? 'bg-brown-500 text-white shadow-md shadow-brown-500/25' : 'bg-stone-100 text-stone-700 hover:bg-stone-200' }}">
                        {{ $label }}
                    </a>
                @endforeach
            </div>

            <!-- Search Bar -->
            <div class="w-full lg:w-80 relative flex items-center">
                @if($category && $category !== 'all')
                    <input type="hidden" name="category" value="{{ $category }}">
                @endif
                <input type="text" 
                       name="search" 
                       value="{{ $search }}" 
                       placeholder="Cari proyek, klien, lokasi..." 
                       class="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border border-stone-300 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-brown-500 bg-stone-50">
                <svg class="w-4 h-4 text-stone-400 absolute left-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                @if($search)
                    <a href="{{ route('projects.index', ['category' => $category]) }}" class="absolute right-3 text-stone-400 hover:text-stone-600 text-xs">Reset</a>
                @endif
            </div>
        </form>
    </div>
</section>

<!-- PROJECTS GRID -->
<section class="py-16 bg-stone-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        @if($projects->isEmpty())
            <div class="text-center py-20 bg-white rounded-3xl border border-stone-200 max-w-2xl mx-auto p-8 shadow-sm">
                <div class="w-16 h-16 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 class="text-lg font-bold text-stone-800">Tidak ada proyek yang ditemukan</h3>
                <p class="text-stone-500 text-sm mt-1 mb-6">Coba ganti filter kategori atau kata kunci pencarian Anda.</p>
                <a href="{{ route('projects.index') }}" class="px-5 py-2.5 rounded-xl bg-brown-500 text-white font-semibold text-sm shadow">
                    Tampilkan Semua Proyek
                </a>
            </div>
        @else
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                @foreach($projects as $project)
                    <div class="bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-brown-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
                        <div class="relative h-60 overflow-hidden bg-stone-200">
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
                                    <span class="flex items-center">
                                        <svg class="w-3.5 h-3.5 text-stone-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
                                        {{ $project->location }}
                                    </span>
                                    <span>&bull;</span>
                                    <span>{{ $project->year }}</span>
                                </div>
                                <h3 class="text-lg font-bold text-stone-900 group-hover:text-brown-600 transition-colors line-clamp-2">
                                    <a href="{{ route('projects.show', $project->slug) }}">{{ $project->title }}</a>
                                </h3>
                                <div class="text-xs text-stone-600 mt-2 font-medium">
                                    <span class="text-stone-400">Klien:</span> {{ $project->client }}
                                </div>
                                <p class="text-xs text-stone-500 mt-2 line-clamp-3 leading-relaxed">
                                    {{ $project->description }}
                                </p>
                            </div>
                            <div class="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                                <a href="{{ route('projects.show', $project->slug) }}" class="font-bold text-brown-600 hover:text-brown-700 inline-flex items-center">
                                    <span>Lihat Detail Spesifikasi</span>
                                    <svg class="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                </a>
                                @if($project->is_featured)
                                    <span class="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-bold">Unggulan</span>
                                @endif
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>

            <!-- Pagination -->
            <div class="mt-12 flex justify-center">
                {{ $projects->links() }}
            </div>
        @endif
    </div>
</section>

@endsection
