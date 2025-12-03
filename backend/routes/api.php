<?php

use App\Http\Controllers\Api\TodoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/test', function () {
    return response()->json(['message' => 'API is working!']);
});

// Todo API routes
Route::apiResource('todos', TodoController::class);
Route::patch('todos/{todo}/toggle', [TodoController::class, 'toggle']);
