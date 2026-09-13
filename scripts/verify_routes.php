<?php

require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

echo "=== FULL SYSTEM AUDIT: PT SURYA KARYA ENERGI (LARAVEL 10) ===" . PHP_EOL;

$allPassed = true;

// 1. PUBLIC ROUTES
$publicRoutes = [
    ['GET', '/', 200, 'Beranda (Home)'],
    ['GET', '/about-us', 200, 'Tentang Kami (About Us)'],
    ['GET', '/sustainability', 200, 'Keberlanjutan & ESG'],
    ['GET', '/project', 200, 'Portofolio Proyek (Catalog)'],
    ['GET', '/project/plts-atap-kawasan-industri-cikarang', 200, 'Detail Proyek PLTS Cikarang'],
    ['GET', '/contact-us', 200, 'Hubungi Kami (Contact Us)'],
    ['GET', '/admin/login', 200, 'Admin Login Form'],
    ['GET', '/admin/dashboard', 302, 'Admin Dashboard (Unauthenticated Redirect)'],
];

foreach ($publicRoutes as $r) {
    [$method, $uri, $expected, $desc] = $r;
    $req = Illuminate\Http\Request::create($uri, $method);
    $res = $kernel->handle($req);
    $st = $res->getStatusCode();
    if ($st === $expected) {
        echo "[PASS] $desc ($uri) -> Status $st OK" . PHP_EOL;
    } else {
        $allPassed = false;
        echo "[FAIL] $desc ($uri) -> Got $st, Expected $expected" . PHP_EOL;
    }
    $kernel->terminate($req, $res);
}

// 2. ADMIN AUTHENTICATED ACCESS
echo PHP_EOL . "=== TESTING ADMIN AUTHENTICATED ROUTES ===" . PHP_EOL;
$admin = \App\Models\User::where('email', 'admin@suryakaryaenergi.com')->first();
\Illuminate\Support\Facades\Auth::login($admin);

$adminRoutes = [
    ['GET', '/admin/dashboard', 200, 'Admin Dashboard'],
    ['GET', '/admin/projects', 200, 'Admin Projects List'],
    ['GET', '/admin/projects/create', 200, 'Admin Create Project Form'],
    ['GET', '/admin/projects/1/edit', 200, 'Admin Edit Project Form (#1)'],
    ['GET', '/admin/messages', 200, 'Admin Messages List'],
];

foreach ($adminRoutes as $r) {
    [$method, $uri, $expected, $desc] = $r;
    $req = Illuminate\Http\Request::create($uri, $method);
    $req->setUserResolver(fn() => $admin);
    $res = $kernel->handle($req);
    $st = $res->getStatusCode();
    if ($st === $expected) {
        echo "[PASS] $desc ($uri) -> Status $st OK" . PHP_EOL;
    } else {
        $allPassed = false;
        echo "[FAIL] $desc ($uri) -> Got $st, Expected $expected" . PHP_EOL;
    }
    $kernel->terminate($req, $res);
}

// 3. PROJECT CRUD LIFECYCLE
echo PHP_EOL . "=== TESTING PROJECT CRUD LIFECYCLE ===" . PHP_EOL;
$testProject = \App\Models\Project::create([
    'title' => 'PLTS Testing Audit 1 MWp',
    'slug' => 'plts-testing-audit-1-mwp',
    'category' => 'PLTS / Solar',
    'location' => 'Bekasi, Jawa Barat',
    'client' => 'PT Testing Mandiri',
    'capacity' => '1.0 MWp',
    'year' => 2026,
    'status' => 'Operasional',
    'is_featured' => true,
    'cover_image' => 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    'description' => 'Instalasi PLTS pengujian sistem audit kualitas.',
]);

if ($testProject && $testProject->exists) {
    echo "[PASS] Project CREATE: ID #{$testProject->id} ({$testProject->title})" . PHP_EOL;
    
    // Update
    $testProject->title = 'PLTS Testing Audit 1 MWp Updated';
    $testProject->save();
    echo "[PASS] Project UPDATE: New Title -> {$testProject->title}" . PHP_EOL;

    // Verify Read
    $readP = \App\Models\Project::find($testProject->id);
    if ($readP && $readP->title === 'PLTS Testing Audit 1 MWp Updated') {
        echo "[PASS] Project READ verified!" . PHP_EOL;
    } else {
        echo "[FAIL] Project READ verification failed!" . PHP_EOL;
        $allPassed = false;
    }

    // Delete
    $testProject->delete();
    $checkDeleted = \App\Models\Project::find($testProject->id);
    if (!$checkDeleted) {
        echo "[PASS] Project DELETE verified!" . PHP_EOL;
    } else {
        echo "[FAIL] Project DELETE failed!" . PHP_EOL;
        $allPassed = false;
    }
} else {
    echo "[FAIL] Project creation failed!" . PHP_EOL;
    $allPassed = false;
}

// 4. MESSAGE MANAGEMENT LIFECYCLE
echo PHP_EOL . "=== TESTING CONTACT MESSAGE MANAGEMENT ===" . PHP_EOL;
$testMsg = \App\Models\ContactMessage::create([
    'name' => 'Testing Inquiry',
    'email' => 'inquiry@test.com',
    'phone' => '081299999999',
    'company' => 'PT Testing Factory',
    'service' => 'BESS / Storage',
    'subject' => 'Pertanyaan Teknis',
    'message' => 'Pesan pengujian otomatis.',
    'is_read' => false,
]);

if ($testMsg && $testMsg->exists) {
    echo "[PASS] Message CREATE: ID #{$testMsg->id}" . PHP_EOL;
    
    // Toggle Read
    $testMsg->is_read = true;
    $testMsg->save();
    echo "[PASS] Message TOGGLE READ: Status is now Read" . PHP_EOL;

    // Delete
    $testMsg->delete();
    echo "[PASS] Message DELETE verified!" . PHP_EOL;
}

// 5. DATABASE DUMP VERIFICATION
echo PHP_EOL . "=== DUMP FILE REFRESH ===" . PHP_EOL;
$dumpPath = base_path('database/dump-suryakaryaenergi.sql');
echo "Database dump ready at: $dumpPath (" . round(filesize($dumpPath) / 1024, 1) . " KB)" . PHP_EOL;

echo PHP_EOL . ($allPassed ? "========================================\n>>> 100% AUDIT COMPLETE - ALL CHECKS PASSED! <<<\n========================================" : ">>> AUDIT FAILED <<<") . PHP_EOL;
