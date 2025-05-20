<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::latest()->paginate(5);

        $user = Auth::user();

        return Inertia::render('PostsPage/Posts', ['posts' => $posts, 'user' => $user]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'body' => ['required', 'min:1'] 
        ]);

        Post::create([...$fields, 'user_id' => Auth::id()]);
        

        return(redirect("/posts"));
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return Inertia::render('PostsPage/Post', ['post' => $post]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        $fields = $request->validate([
            'body' => ['required', 'min:1'] 
        ]);

        if(Auth::user()->id != $post->user_id) {
            return(redirect("/"));
        } else {
            $post->update($fields);
            return(redirect("/posts"));
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        if(Auth::user()->id != $post->user_id) {
            return(redirect("/"));
        } else {
            $post->delete();
            return redirect('/posts');
        }
    }
}
