<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\Admin\AuthController as AdminAuthController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Admin\ProjectController as AdminProjectController;
use App\Http\Controllers\Admin\MessageController as AdminMessageController;

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

Route::get('/', [PublicController::class, 'home'])->name('home');
Route::get('/about-us', [PublicController::class, 'about'])->name('about');
Route::get('/sustainability', [PublicController::class, 'sustainability'])->name('sustainability');
Route::get('/contact-us', [PublicController::class, 'contact'])->name('contact');
Route::post('/contact-us', [ContactController::class, 'store'])->name('contact.store');

Route::get('/project', [ProjectController::class, 'index'])->name('projects.index');
Route::get('/project/{slug}', [ProjectController::class, 'show'])->name('projects.show');

/*
|--------------------------------------------------------------------------
| Admin Authentication Routes
|--------------------------------------------------------------------------
*/

// Direct /admin route (e.g. suryakaryaenergi.com/admin)
Route::get('/admin', function () {
    if (auth()->check()) {
        return redirect()->route('admin.dashboard');
    }
    return redirect()->route('admin.login');
})->name('admin');

Route::get('/admin/login', [AdminAuthController::class, 'showLogin'])->name('admin.login');
Route::post('/admin/login', [AdminAuthController::class, 'login'])->name('admin.login.post');
Route::post('/admin/logout', [AdminAuthController::class, 'logout'])->name('admin.logout');

/*
|--------------------------------------------------------------------------
| Protected Admin Routes
|--------------------------------------------------------------------------
*/

Route::prefix('admin')->middleware(['auth'])->group(function () {
    Route::get('/', function () {
        return redirect()->route('admin.dashboard');
    });

    Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('admin.dashboard');

    // Projects CRUD
    Route::get('/projects', [AdminProjectController::class, 'index'])->name('admin.projects.index');
    Route::get('/projects/create', [AdminProjectController::class, 'create'])->name('admin.projects.create');
    Route::post('/projects', [AdminProjectController::class, 'store'])->name('admin.projects.store');
    Route::get('/projects/{id}/edit', [AdminProjectController::class, 'edit'])->name('admin.projects.edit');
    Route::put('/projects/{id}', [AdminProjectController::class, 'update'])->name('admin.projects.update');
    Route::delete('/projects/{id}', [AdminProjectController::class, 'destroy'])->name('admin.projects.destroy');

    // Messages Management
    Route::get('/messages', [AdminMessageController::class, 'index'])->name('admin.messages.index');
    Route::patch('/messages/{id}/toggle-read', [AdminMessageController::class, 'toggleRead'])->name('admin.messages.toggle');
    Route::delete('/messages/{id}', [AdminMessageController::class, 'destroy'])->name('admin.messages.destroy');
});
