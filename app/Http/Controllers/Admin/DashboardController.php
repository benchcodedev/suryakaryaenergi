<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\ContactMessage;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $metrics = [
            'total_projects' => Project::count(),
            'featured_projects' => Project::where('is_featured', true)->count(),
            'unread_messages' => ContactMessage::where('is_read', false)->count(),
            'total_messages' => ContactMessage::count(),
        ];

        $recentProjects = Project::orderBy('created_at', 'desc')->take(5)->get();
        $recentMessages = ContactMessage::orderBy('created_at', 'desc')->take(5)->get();

        return view('admin.dashboard', compact('metrics', 'recentProjects', 'recentMessages'));
    }
}
