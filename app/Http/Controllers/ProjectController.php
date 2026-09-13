<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index(Request $request)
    {
        $category = $request->query('category', 'all');
        $search = $request->query('search');

        $query = Project::query();

        if ($category && $category !== 'all') {
            $query->where('category', $category);
        }

        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('client', 'like', "%{$search}%")
                  ->orWhere('location', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%");
            });
        }

        $projects = $query->orderBy('year', 'desc')
            ->orderBy('id', 'desc')
            ->paginate(9)
            ->withQueryString();

        $categories = [
            'all' => 'Semua Kategori',
            'PLTS / Solar' => 'PLTS / Solar',
            'BESS / Storage' => 'BESS / Storage',
            'Infrastruktur & Substation' => 'Infrastruktur & Substation',
            'O&M / Asset Management' => 'O&M & Servis',
        ];

        return view('pages.projects.index', compact('projects', 'categories', 'category', 'search'));
    }

    public function show($slug)
    {
        $project = Project::with('images')->where('slug', $slug)->firstOrFail();

        $relatedProjects = Project::where('id', '!=', $project->id)
            ->where(function ($q) use ($project) {
                $q->where('category', $project->category)
                  ->orWhere('status', $project->status);
            })
            ->take(3)
            ->get();

        if ($relatedProjects->isEmpty()) {
            $relatedProjects = Project::where('id', '!=', $project->id)
                ->latest()
                ->take(3)
                ->get();
        }

        return view('pages.projects.show', compact('project', 'relatedProjects'));
    }
}
