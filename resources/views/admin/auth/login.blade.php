<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Admin - PT Surya Karya Energi</title>
    
    <link rel="icon" type="image/png" href="{{ asset('images/favicon.png') }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- Tailwind CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
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
                        }
                    },
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-stone-950 text-stone-200 font-sans antialiased min-h-screen flex items-center justify-center p-4 relative overflow-hidden">

    <!-- Ambient Glow -->
    <div class="absolute -top-40 -left-40 w-96 h-96 bg-brown-500/20 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-40 -right-40 w-96 h-96 bg-gold-500/15 rounded-full blur-3xl pointer-events-none"></div>

    <div class="w-full max-w-md relative z-10">
        
        <!-- Brand Header -->
        <div class="text-center mb-8 space-y-3">
            <a href="{{ route('home') }}" class="inline-block group">
                <img src="{{ asset('images/logo-emblem.png') }}" alt="PT Surya Karya Energi" class="h-16 w-auto mx-auto object-contain transition transform group-hover:scale-105">
            </a>
            <div>
                <h1 class="text-2xl font-extrabold text-white tracking-tight">PORTAL ADMIN SKE</h1>
                <p class="text-xs text-brown-400 font-semibold tracking-wider uppercase mt-1">PT Surya Karya Energi &bull; Content Management System</p>
            </div>
        </div>

        <!-- Login Card -->
        <div class="bg-stone-900/90 backdrop-blur-xl border border-stone-800 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
            
            @if(session('success'))
                <div class="p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs text-center font-medium">
                    {{ session('success') }}
                </div>
            @endif

            @if($errors->any())
                <div class="p-3.5 rounded-xl bg-red-950/80 border border-red-800 text-red-300 text-xs text-center font-medium">
                    {{ $errors->first() }}
                </div>
            @endif

            <form action="{{ route('admin.login.post') }}" method="POST" class="space-y-4">
                @csrf

                <!-- Email Input -->
                <div>
                    <label class="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1.5">Email Administrator</label>
                    <input type="email" 
                           name="email" 
                           value="{{ old('email', 'admin@suryakaryaenergi.com') }}" 
                           required 
                           autocomplete="email"
                           class="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-brown-500 transition">
                </div>

                <!-- Password Input -->
                <div>
                    <label class="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1.5">Kata Sandi</label>
                    <input type="password" 
                           name="password" 
                           required 
                           placeholder="????????" 
                           class="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-brown-500 transition">
                </div>

                <!-- Remember Me -->
                <div class="flex items-center justify-between text-xs pt-1">
                    <label class="flex items-center text-stone-400 cursor-pointer">
                        <input type="checkbox" name="remember" class="w-4 h-4 rounded bg-stone-950 border-stone-800 text-brown-500 focus:ring-brown-500 focus:ring-offset-stone-900">
                        <span class="ml-2">Ingat sesi saya</span>
                    </label>
                    <span class="text-stone-500 text-[11px]">Sistem Terenkripsi SSL</span>
                </div>

                <!-- Submit Button -->
                <button type="submit" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-brown-600 to-brown-500 hover:from-brown-700 hover:to-brown-600 text-white font-bold text-sm shadow-lg shadow-brown-600/30 transition transform hover:-translate-y-0.5">
                    Masuk ke Panel Admin
                </button>
            </form>

            <!-- Default Credential Notice -->
            <div class="pt-4 border-t border-stone-800 text-center text-xs text-stone-500 space-y-1">
                <p class="font-medium text-stone-400">Akun Pengelola Default:</p>
                <p class="font-mono text-[11px] text-brown-400">admin@suryakaryaenergi.com / SuryaKarya2026!</p>
            </div>
        </div>

        <!-- Back to Website Link -->
        <div class="mt-6 text-center">
            <a href="{{ route('home') }}" class="text-xs text-stone-400 hover:text-brown-400 transition inline-flex items-center">
                <svg class="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                <span>Kembali ke Halaman Beranda Publik</span>
            </a>
        </div>

    </div>

</body>
</html>
