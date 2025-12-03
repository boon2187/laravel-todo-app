<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $todos = Todo::orderBy('created_at', 'desc')->get();

        return response()->json($todos);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'due_date' => 'nullable|date',
        ]);

        $todo = Todo::create([
            'user_id' => null, // 認証実装後に変更
            'title' => $validated['title'],
            'due_date' => $validated['due_date'] ?? null,
            'is_completed' => false,
        ]);

        return response()->json($todo, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Todo $todo): JsonResponse
    {
        return response()->json($todo);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Todo $todo): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'due_date' => 'nullable|date',
            'is_completed' => 'sometimes|boolean',
        ]);

        $todo->update($validated);

        return response()->json($todo);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Todo $todo): JsonResponse
    {
        $todo->delete();

        return response()->json(null, 204);
    }

    /**
     * Toggle the completion status of the todo.
     */
    public function toggle(Todo $todo): JsonResponse
    {
        $todo->update([
            'is_completed' => !$todo->is_completed,
        ]);

        return response()->json($todo);
    }
}
