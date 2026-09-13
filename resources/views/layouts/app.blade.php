<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'PT Surya Karya Energi - Reliable Power, Sustainable Future')</title>
    <meta name="description" content="@yield('meta_description', 'Penyedia solusi terintegrasi EPC & O&M Pembangkit Listrik Tenaga Surya (PLTS) dan Sistem Penyimpanan Energi BESS untuk sektor komersial dan industri terkemuka di Indonesia.')">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="{{ asset('images/favicon.png') }}">
    <link rel="apple-touch-icon" href="{{ asset('images/favicon.png') }}">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- Tailwind CSS (via official CDN for 100% standalone shared-hosting compatibility) -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        brown: {
                            50: '#FBF8F3',
                            100: '#F5EEE4',
                            200: '#ECD3A2',
                            300: '#DEBB7D',
                            400: '#D4A356',
                            500: '#C68E3E',
                            600: '#A9752D',
                            700: '#8A5D22',
                            800: '#644218',
                            900: '#422E17',
                            950: '#2E200F',
                        },
                        gold: {
                            50: '#FCF9EE',
                            100: '#F7F0D4',
                            200: '#EFE0A4',
                            300: '#E4CB6F',
                            400: '#DDB643',
                            500: '#D4A04E',
                            600: '#B8821F',
                            700: '#926117',
                            800: '#6F4815',
                            900: '#4D3110',
                        }
                    },
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body class="bg-stone-50 text-stone-800 font-sans antialiased selection:bg-brown-500 selection:text-white flex flex-col min-h-screen">

    <!-- Flash Message Notification -->
    @if(session('success'))
        <div id="flash-toast" class="fixed top-5 right-5 z-50 max-w-md bg-stone-900 border-l-4 border-brown-500 text-white p-4 rounded-xl shadow-2xl transition-all duration-500 flex items-start space-x-3">
            <svg class="w-6 h-6 text-brown-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div class="flex-1 text-sm leading-relaxed">
                <p class="font-bold text-brown-300">Sukses</p>
                <p class="text-stone-300">{{ session('success') }}</p>
            </div>
            <button onclick="document.getElementById('flash-toast').remove()" class="text-stone-400 hover:text-white transition">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>
        <script>
            setTimeout(() => {
                const toast = document.getElementById('flash-toast');
                if (toast) {
                    toast.style.opacity = '0';
                    toast.style.transform = 'translateY(-10px)';
                    setTimeout(() => toast.remove(), 500);
                }
            }, 6000);
        </script>
    @endif

    <!-- TOP INFORMATION BAR -->
    <div class="bg-stone-900 text-stone-300 text-xs py-2 px-4 border-b border-stone-800 hidden md:block">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <div class="flex items-center space-x-6">
                <span class="flex items-center space-x-1.5 text-stone-400">
                    <svg class="w-3.5 h-3.5 text-brown-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span>Kawasan Industri MM2100 & Jakarta, Indonesia</span>
                </span>
                <span class="flex items-center space-x-1.5 text-stone-400">
                    <svg class="w-3.5 h-3.5 text-brown-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <span>info@suryakaryaenergi.com</span>
                </span>
            </div>
            <div class="flex items-center space-x-4">
                <span class="text-brown-400 font-medium italic tracking-wide">"Reliable Power, Sustainable Future"</span>
                <span class="text-stone-700">|</span>
                <a href="{{ route('admin.login') }}" class="text-stone-400 hover:text-brown-400 transition flex items-center space-x-1">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
                    <span>Admin Portal</span>
                </a>
            </div>
        </div>
    </div>

    <!-- MAIN NAVBAR -->
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-sm transition-all duration-300" id="main-header">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <!-- LOGO & BRAND -->
                <a href="{{ route('home') }}" class="flex items-center space-x-3 group">
                    <img src="{{ asset('images/logo-emblem.png') }}" alt="PT Surya Karya Energi Emblem" class="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105">
                    <div class="flex flex-col">
                        <span class="font-extrabold text-lg sm:text-xl tracking-tight text-stone-900 leading-tight">
                            SURYA KARYA <span class="text-brown-500">ENERGI</span>
                        </span>
                        <span class="text-[10px] sm:text-[11px] font-semibold tracking-wider text-brown-600 uppercase">
                            Reliable Power, Sustainable Future
                        </span>
                    </div>
                </a>

                <!-- DESKTOP NAVIGATION -->
                <nav class="hidden lg:flex items-center space-x-1 font-medium text-sm">
                    <a href="{{ route('home') }}" class="px-4 py-2 rounded-lg transition {{ request()->routeIs('home') ? 'text-brown-600 font-bold bg-brown-50' : 'text-stone-700 hover:text-brown-600 hover:bg-stone-50' }}">
                        Beranda
                    </a>
                    <a href="{{ route('about') }}" class="px-4 py-2 rounded-lg transition {{ request()->routeIs('about') ? 'text-brown-600 font-bold bg-brown-50' : 'text-stone-700 hover:text-brown-600 hover:bg-stone-50' }}">
                        Tentang Kami
                    </a>
                    <a href="{{ route('projects.index') }}" class="px-4 py-2 rounded-lg transition {{ request()->routeIs('projects.*') ? 'text-brown-600 font-bold bg-brown-50' : 'text-stone-700 hover:text-brown-600 hover:bg-stone-50' }}">
                        Portofolio Proyek
                    </a>
                    <a href="{{ route('sustainability') }}" class="px-4 py-2 rounded-lg transition {{ request()->routeIs('sustainability') ? 'text-brown-600 font-bold bg-brown-50' : 'text-stone-700 hover:text-brown-600 hover:bg-stone-50' }}">
                        Keberlanjutan & ESG
                    </a>
                    <a href="{{ route('contact') }}" class="px-4 py-2 rounded-lg transition {{ request()->routeIs('contact') ? 'text-brown-600 font-bold bg-brown-50' : 'text-stone-700 hover:text-brown-600 hover:bg-stone-50' }}">
                        Hubungi Kami
                    </a>
                </nav>

                <!-- CTA BUTTON -->
                <div class="hidden lg:flex items-center space-x-3">
                    <a href="{{ route('contact') }}" class="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-brown-600 to-brown-500 hover:from-brown-700 hover:to-brown-600 text-white font-semibold text-sm shadow-md shadow-brown-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-brown-500/30 transform hover:-translate-y-0.5">
                        <span>Konsultasi Teknis</span>
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                </div>

                <!-- MOBILE HAMBURGER BUTTON -->
                <div class="flex items-center lg:hidden">
                    <button type="button" id="mobile-menu-btn" aria-label="Menu" class="p-2 rounded-lg text-stone-700 hover:text-brown-600 hover:bg-stone-100 focus:outline-none">
                        <svg id="hamburger-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- MOBILE MENU DROPDOWN -->
        <div id="mobile-menu" class="hidden lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl">
            <a href="{{ route('home') }}" class="block px-3 py-2 rounded-lg font-medium text-base {{ request()->routeIs('home') ? 'bg-brown-50 text-brown-600 font-bold' : 'text-stone-800 hover:bg-stone-50' }}">
                Beranda
            </a>
            <a href="{{ route('about') }}" class="block px-3 py-2 rounded-lg font-medium text-base {{ request()->routeIs('about') ? 'bg-brown-50 text-brown-600 font-bold' : 'text-stone-800 hover:bg-stone-50' }}">
                Tentang Kami
            </a>
            <a href="{{ route('projects.index') }}" class="block px-3 py-2 rounded-lg font-medium text-base {{ request()->routeIs('projects.*') ? 'bg-brown-50 text-brown-600 font-bold' : 'text-stone-800 hover:bg-stone-50' }}">
                Portofolio Proyek
            </a>
            <a href="{{ route('sustainability') }}" class="block px-3 py-2 rounded-lg font-medium text-base {{ request()->routeIs('sustainability') ? 'bg-brown-50 text-brown-600 font-bold' : 'text-stone-800 hover:bg-stone-50' }}">
                Keberlanjutan & ESG
            </a>
            <a href="{{ route('contact') }}" class="block px-3 py-2 rounded-lg font-medium text-base {{ request()->routeIs('contact') ? 'bg-brown-50 text-brown-600 font-bold' : 'text-stone-800 hover:bg-stone-50' }}">
                Hubungi Kami
            </a>
            <div class="pt-4 border-t border-stone-100 flex flex-col space-y-2">
                <a href="{{ route('contact') }}" class="w-full text-center py-3 rounded-xl bg-brown-500 text-white font-semibold text-sm shadow-md">
                    Konsultasi Teknis Gratis
                </a>
                <a href="{{ route('admin.login') }}" class="w-full text-center py-2 text-xs text-stone-500 hover:text-brown-600">
                    Masuk ke Admin Portal
                </a>
            </div>
        </div>
    </header>

    <!-- CONTENT -->
    <main class="flex-grow">
        @yield('content')
    </main>

    <!-- FLOATING WHATSAPP BUTTON -->
    <aside aria-label="Kontak Cepat WhatsApp" class="fixed bottom-6 right-6 z-40">
        <a href="https://wa.me/6281234567890?text=Halo%20PT%20Surya%20Karya%20Energi,%20saya%20tertarik%20konsultasi%20solusi%20PLTS%20industri" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="group relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none">
            <span class="absolute -top-1 -right-1 flex h-4 w-4">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
            </span>
            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.3-.778.978-.954 1.179-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.675-2.087-.176-.3-.019-.462.132-.612.136-.135.301-.35.452-.526.15-.175.2-.3.301-.501.1-.2.05-.376-.025-.526-.075-.15-.678-1.636-.928-2.242-.244-.59-.492-.51-.678-.52-.175-.008-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.3-1.053 1.029-1.053 2.509 0 1.48 1.079 2.909 1.229 3.11.15.2 2.124 3.243 5.145 4.548.718.311 1.278.497 1.716.637.723.23 1.38.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.703.25-1.305.176-1.43-.075-.125-.276-.2-.577-.35zM12.04 21.688c-1.74 0-3.447-.463-4.945-1.343l-.354-.21-3.673.963.98-3.58-.23-.366a9.92 9.92 0 0 1-1.523-5.274c0-5.485 4.463-9.948 9.948-9.948 2.657 0 5.155 1.035 7.034 2.914a9.89 9.89 0 0 1 2.914 7.034c0 5.486-4.463 9.95-9.95 9.95zM12.04 0C5.401 0 0 5.401 0 12.04c0 2.12.553 4.19 1.606 6.012L0 24.08l6.19-1.624c1.765.962 3.76 1.47 5.85 1.47 6.638 0 12.04-5.402 12.04-12.04C24.08 5.4 18.678 0 12.04 0z"/>
            </svg>
        </a>
    </aside>

    <!-- FOOTER -->
    <footer class="bg-stone-950 text-stone-400 pt-16 pb-12 border-t border-stone-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800/80">
                <!-- COL 1: Brand & Profile -->
                <div class="lg:col-span-2 space-y-4">
                    <a href="{{ route('home') }}" class="flex items-center space-x-3">
                        <img src="{{ asset('images/logo-emblem.png') }}" alt="PT Surya Karya Energi Emblem" class="h-12 w-auto object-contain">
                        <div>
                            <span class="font-extrabold text-xl tracking-tight text-white leading-tight block">
                                SURYA KARYA <span class="text-brown-400">ENERGI</span>
                            </span>
                            <span class="text-xs text-brown-300 font-semibold tracking-wider uppercase">
                                Reliable Power, Sustainable Future
                            </span>
                        </div>
                    </a>
                    <p class="text-sm leading-relaxed text-stone-400 pr-4">
                        PT Surya Karya Energi adalah perusahaan EPC dan penyedia solusi energi surya (PLTS) industri terintegrasi di Indonesia. Berkomitmen menghadirkan keandalan pasokan listrik hijau berkualitas tinggi, efisiensi investasi jangka panjang, dan akselerasi target Net Zero Emission.
                    </p>
                    <div class="flex items-center space-x-3 pt-2">
                        <span class="px-3 py-1 bg-stone-900 border border-stone-800 rounded-md text-xs font-mono text-brown-400">ISO 9001:2015</span>
                        <span class="px-3 py-1 bg-stone-900 border border-stone-800 rounded-md text-xs font-mono text-brown-400">ISO 14001:2015</span>
                        <span class="px-3 py-1 bg-stone-900 border border-stone-800 rounded-md text-xs font-mono text-brown-400">ISO 45001:2018</span>
                    </div>
                </div>

                <!-- COL 2: Layanan EPC -->
                <div class="space-y-3">
                    <h3 class="text-white text-sm font-bold uppercase tracking-wider">Solusi & Layanan</h3>
                    <ul class="space-y-2 text-sm">
                        <li><a href="{{ route('projects.index', ['category' => 'PLTS / Solar']) }}" class="hover:text-brown-400 transition">PLTS Atap Industri (Rooftop)</a></li>
                        <li><a href="{{ route('projects.index', ['category' => 'PLTS / Solar']) }}" class="hover:text-brown-400 transition">PLTS Ground-Mounted Skala Utilitas</a></li>
                        <li><a href="{{ route('projects.index', ['category' => 'BESS / Storage']) }}" class="hover:text-brown-400 transition">Battery Energy Storage (BESS)</a></li>
                        <li><a href="{{ route('projects.index', ['category' => 'Infrastruktur & Substation']) }}" class="hover:text-brown-400 transition">Substation & Gardu Hubung</a></li>
                        <li><a href="{{ route('projects.index', ['category' => 'O&M / Asset Management']) }}" class="hover:text-brown-400 transition">Operasi & Pemeliharaan (O&M)</a></li>
                        <li><a href="{{ route('contact') }}" class="hover:text-brown-400 transition">Audit Energi & Kelayakan PLTS</a></li>
                    </ul>
                </div>

                <!-- COL 3: Tautan Cepat -->
                <div class="space-y-3">
                    <h3 class="text-white text-sm font-bold uppercase tracking-wider">Perusahaan</h3>
                    <ul class="space-y-2 text-sm">
                        <li><a href="{{ route('about') }}" class="hover:text-brown-400 transition">Profil & Sejarah</a></li>
                        <li><a href="{{ route('about') }}#visi-misi" class="hover:text-brown-400 transition">Visi, Misi & Nilai Inti</a></li>
                        <li><a href="{{ route('projects.index') }}" class="hover:text-brown-400 transition">Portofolio Studi Kasus</a></li>
                        <li><a href="{{ route('sustainability') }}" class="hover:text-brown-400 transition">Komitmen ESG & Dekarbonisasi</a></li>
                        <li><a href="{{ route('contact') }}" class="hover:text-brown-400 transition">Lokasi Kantor & Kontak</a></li>
                        <li><a href="{{ route('admin.login') }}" class="text-stone-500 hover:text-brown-400 transition">Login Admin CMS</a></li>
                    </ul>
                </div>

                <!-- COL 4: Kontak & Operasional -->
                <div class="space-y-3">
                    <h3 class="text-white text-sm font-bold uppercase tracking-wider">Kantor Operasional</h3>
                    <div class="space-y-2.5 text-sm">
                        <div class="flex items-start space-x-2.5">
                            <svg class="w-4 h-4 text-brown-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            <span>Menara Palma Lt. 12, Jl. H.R. Rasuna Said Blok X-2 Kav. 6, Kuningan, Jakarta Selatan 12950</span>
                        </div>
                        <div class="flex items-center space-x-2.5">
                            <svg class="w-4 h-4 text-brown-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            <span>+62 21 8990 1234 / +62 812-3456-7890</span>
                        </div>
                        <div class="flex items-center space-x-2.5">
                            <svg class="w-4 h-4 text-brown-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <span>contact@suryakaryaenergi.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- COPYRIGHT & MOTTO -->
            <div class="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-stone-500 space-y-4 sm:space-y-0">
                <p>&copy; 2026 PT Surya Karya Energi. Seluruh Hak Cipta Dilindungi Undang-Undang.</p>
                <div class="flex items-center space-x-4">
                    <span class="text-brown-400 font-medium">Reliable Power, Sustainable Future</span>
                    <span>&bull;</span>
                    <a href="{{ route('contact') }}" class="hover:text-stone-300">Privasi & Legal</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- MOBILE MENU SCRIPT -->
    <script>
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const hamburgerIcon = document.getElementById('hamburger-icon');
        const closeIcon = document.getElementById('close-icon');

        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                const isHidden = mobileMenu.classList.contains('hidden');
                if (isHidden) {
                    mobileMenu.classList.remove('hidden');
                    hamburgerIcon.classList.add('hidden');
                    closeIcon.classList.remove('hidden');
                } else {
                    mobileMenu.classList.add('hidden');
                    hamburgerIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                }
            });
        }
    </script>
</body>
</html>
