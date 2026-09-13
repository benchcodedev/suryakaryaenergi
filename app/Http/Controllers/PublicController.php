<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\ContactMessage;
use Illuminate\Http\Request;

class PublicController extends Controller
{
    /**
     * Display the Homepage.
     */
    public function home()
    {
        $featuredProjects = Project::where('is_featured', true)
            ->orderBy('year', 'desc')
            ->orderBy('id', 'desc')
            ->take(6)
            ->get();

        // High-level company statistics
        $stats = [
            'installed_capacity' => '45+ MWp',
            'projects_count' => '120+',
            'uptime' => '99.4%',
            'co2_reduced' => '68.000+',
        ];

        return view('pages.home', compact('featuredProjects', 'stats'));
    }

    /**
     * Display the About Us page.
     */
    public function about()
    {
        return view('pages.about');
    }

    /**
     * Display the Sustainability / ESG page.
     */
    public function sustainability()
    {
        return view('pages.sustainability');
    }

    /**
     * Display the Contact Us page.
     */
    public function contact()
    {
        return view('pages.contact');
    }
}