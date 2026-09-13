@extends('layouts.admin')

@section('title', 'Dashboard')
@section('header_title', 'Ringkasan Dashboard')

@section('content')

<div class="space-y-8">
    
    <!-- METRICS CARDS -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Total Projects -->
        <div class="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex items-center justify-between">
            <div>
                <p class="text-xs font-bold text-stone-500 uppercase tracking-wider">Total Proyek</p>
                <p class="text-3xl font-extrabold text-stone-900 mt-1">{{ $metrics['total_projects'] }}</p>
                <a href="{{ route('admin.projects.index') }}" class="text-xs text-brown-600 hover:text-brown-700 font-semibold mt-2 inline-block">
                    Kelola Proyek &rarr;
                </a>
            </div>
            <div class="w-12 h-12 rounded-xl bg-brown-50 text-brown-600 flex items-center justify-center">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </div>
        </div>

        <!-- Featured Projects -->
        <div class="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex items-center justify-between">
            <div>
                <p class="text-xs font-bold text-stone-500 uppercase tracking-wider">Proyek Unggulan</p>
                <p class="text-3xl font-extrabold text-amber-600 mt-1">{{ $metrics['featured_projects'] }}</p>
                <span class="text-xs text-stone-400 mt-2 inline-block">Tampil di Beranda</span>
            </div>
            <div class="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
            </div>
        </div>

        <!-- Unread Messages -->
        <div class="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex items-center justify-between">
            <div>
                <p class="text-xs font-bold text-stone-500 uppercase tracking-wider">Pesan Baru</p>
                <p class="text-3xl font-extrabold text-red-600 mt-1">{{ $metrics['unread_messages'] }}</p>
                <a href="{{ route('admin.messages.index', ['status' => 'unread']) }}" class="text-xs text-red-600 hover:text-red-700 font-semibold mt-2 inline-block">
                    Lihat Belum Dibaca &rarr;
                </a>
            </div>
            <div class="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
        </div>

        <!-- Total Messages -->
        <div class="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex items-center justify-between">
            <div>
                <p class="text-xs font-bold text-stone-500 uppercase tracking-wider">Total Pesan</p>
                <p class="text-3xl font-extrabold text-stone-900 mt-1">{{ $metrics['total_messages'] }}</p>
                <a href="{{ route('admin.messages.index') }}" class="text-xs text-stone-500 hover:text-stone-700 font-semibold mt-2 inline-block">
                    Semua Pesan &rarr;
                </a>
            </div>
            <div class="w-12 h-12 rounded-xl bg-stone-100 text-stone-600 flex items-center justify-center">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
            </div>
        </div>

    </div>

    <!-- RECENT PROJECTS & RECENT MESSAGES -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <!-- Recent Projects (8 cols) -->
        <div class="lg:col-span-8 bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
            <div class="p-6 border-b border-stone-100 flex justify-between items-center">
                <div>
                    <h3 class="font-bold text-stone-900 text-base">Proyek Terbaru</h3>
                    <p class="text-xs text-stone-500">Daftar instalasi yang baru ditambahkan ke sistem.</p>
                </div>
                <a href="{{ route('admin.projects.create') }}" class="inline-flex items-center text-xs font-bold text-brown-600 hover:text-brown-700">
                    + Tambah Proyek
                </a>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full text-left text-xs">
                    <thead class="bg-stone-50 text-stone-500 border-b border-stone-100">
                        <tr>
                            <th class="py-3 px-4 font-semibold">Proyek</th>
                            <th class="py-3 px-4 font-semibold">Kategori</th>
                            <th class="py-3 px-4 font-semibold">Kapasitas</th>
                            <th class="py-3 px-4 font-semibold">Status</th>
                            <th class="py-3 px-4 font-semibold text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-stone-100">
                        @forelse($recentProjects as $p)
                            <tr class="hover:bg-stone-50/80 transition">
                                <td class="py-3 px-4">
                                    <div class="flex items-center space-x-3">
                                        <img src="{{ $p->cover_image }}" alt="{{ $p->title }}" class="w-10 h-10 rounded-lg object-cover bg-stone-100 shrink-0">
                                        <div class="truncate max-w-xs">
                                            <div class="font-bold text-stone-900 truncate">{{ $p->title }}</div>
                                            <div class="text-stone-500 text-[11px] truncate">{{ $p->client }}</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="py-3 px-4 text-stone-600">{{ $p->category }}</td>
                                <td class="py-3 px-4 font-bold text-brown-600">{{ $p->capacity }}</td>
                                <td class="py-3 px-4">
                                    <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                                        {{ $p->status }}
                                    </span>
                                </td>
                                <td class="py-3 px-4 text-right space-x-2">
                                    <a href="{{ route('admin.projects.edit', $p->id) }}" class="text-stone-600 hover:text-brown-600 font-semibold">Edit</a>
                                    <a href="{{ route('projects.show', $p->slug) }}" target="_blank" class="text-stone-400 hover:text-stone-700">Lihat</a>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="5" class="py-8 text-center text-stone-400">Belum ada proyek.</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>

            <div class="p-4 bg-stone-50 border-t border-stone-100 text-center">
                <a href="{{ route('admin.projects.index') }}" class="text-xs font-bold text-brown-600 hover:text-brown-700">
                    Lihat Semua Proyek ({{ $metrics['total_projects'] }}) &rarr;
                </a>
            </div>
        </div>

        <!-- Recent Inquiries (4 cols) -->
        <div class="lg:col-span-4 bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden flex flex-col justify-between">
            <div>
                <div class="p-6 border-b border-stone-100 flex justify-between items-center">
                    <div>
                        <h3 class="font-bold text-stone-900 text-base">Pesan Masuk Terbaru</h3>
                        <p class="text-xs text-stone-500">Permintaan konsultasi klien.</p>
                    </div>
                    <a href="{{ route('admin.messages.index') }}" class="text-xs text-brown-600 hover:text-brown-700 font-bold">Semua</a>
                </div>

                <div class="divide-y divide-stone-100">
                    @forelse($recentMessages as $msg)
                        <div class="p-4 hover:bg-stone-50 transition space-y-1 {{ !$msg->is_read ? 'bg-amber-50/40' : '' }}">
                            <div class="flex items-center justify-between">
                                <span class="font-bold text-stone-900 text-xs truncate">{{ $msg->name }}</span>
                                @if(!$msg->is_read)
                                    <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-500 text-stone-950">BARU</span>
                                @endif
                            </div>
                            <div class="text-[11px] text-stone-500">{{ $msg->company ?? 'Individu' }} &bull; {{ $msg->created_at->diffForHumans() }}</div>
                            <div class="text-xs text-stone-600 font-medium truncate">{{ $msg->service ?? 'Konsultasi Umum' }}</div>
                            <p class="text-xs text-stone-500 line-clamp-2">{{ $msg->message }}</p>
                        </div>
                    @empty
                        <div class="py-8 text-center text-stone-400 text-xs">Belum ada pesan masuk.</div>
                    @endforelse
                </div>
            </div>

            <div class="p-4 bg-stone-50 border-t border-stone-100 text-center">
                <a href="{{ route('admin.messages.index') }}" class="text-xs font-bold text-brown-600 hover:text-brown-700">
                    Buka Kotak Masuk Lengkap &rarr;
                </a>
            </div>
        </div>

    </div>

</div>

@endsection
