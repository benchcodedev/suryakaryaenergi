<?php

namespace Tests\Feature;

use App\Models\Project;
use App\Models\ContactMessage;
use App\Models\User;
use Tests\TestCase;

class SuryaKaryaEnergiTest extends TestCase
{
    /**
     * Test public pages return HTTP 200.
     */
    public function test_public_pages_load_successfully(): void
    {
        $response = $this->get('/');
        $response->assertStatus(200);
        $response->assertSee('SURYA KARYA');
        $response->assertSee('Reliable Power, Sustainable Future');

        $response = $this->get('/about-us');
        $response->assertStatus(200);
        $response->assertSee('PT Surya Karya Energi');

        $response = $this->get('/sustainability');
        $response->assertStatus(200);
        $response->assertSee('Komitmen Keberlanjutan');

        $response = $this->get('/project');
        $response->assertStatus(200);
        $response->assertSee('Portofolio');

        $firstProject = Project::first();
        if ($firstProject) {
            $response = $this->get('/project/' . $firstProject->slug);
            $response->assertStatus(200);
            $response->assertSee($firstProject->title);
        }

        $response = $this->get('/contact-us');
        $response->assertStatus(200);
        $response->assertSee('Hubungi Tim');
    }

    /**
     * Test contact form submission.
     */
    public function test_contact_form_submission(): void
    {
        $response = $this->post('/contact-us', [
            'name' => 'Budi Santoso',
            'email' => 'budi.phpunit@factory.co.id',
            'phone' => '081234567890',
            'company' => 'PT Manufaktur Baja Perkasa',
            'service' => 'PLTS Atap Industri (Rooftop)',
            'subject' => 'Konsultasi Pemasangan PLTS 2 MWp',
            'message' => 'Mohon informasi estimasi biaya dan kelayakan atap untuk pabrik kami di Karawang.',
        ]);

        $response->assertSessionHas('success');
        $this->assertDatabaseHas('contact_messages', [
            'email' => 'budi.phpunit@factory.co.id',
        ]);

        // Cleanup
        ContactMessage::where('email', 'budi.phpunit@factory.co.id')->delete();
    }

    /**
     * Test admin authentication and dashboard access.
     */
    public function test_admin_authentication_and_dashboard(): void
    {
        // 1. Guest redirected from dashboard to login
        $response = $this->get('/admin/dashboard');
        $response->assertRedirect('/admin/login');

        // 2. Admin login page loads
        $response = $this->get('/admin/login');
        $response->assertStatus(200);

        // 3. Admin login successfully
        $response = $this->post('/admin/login', [
            'email' => 'admin@suryakaryaenergi.com',
            'password' => 'SuryaKarya2026!',
        ]);
        $response->assertRedirect('/admin/dashboard');

        // 4. Authenticated admin can view dashboard, projects, and messages
        $admin = User::where('email', 'admin@suryakaryaenergi.com')->first();
        $response = $this->actingAs($admin)->get('/admin/dashboard');
        $response->assertStatus(200);
        $response->assertSee('Ringkasan Dashboard');

        $response = $this->actingAs($admin)->get('/admin/projects');
        $response->assertStatus(200);
        $response->assertSee('Daftar Portofolio Proyek');

        $response = $this->actingAs($admin)->get('/admin/messages');
        $response->assertStatus(200);
        $response->assertSee('Kotak Pesan');
    }
}
