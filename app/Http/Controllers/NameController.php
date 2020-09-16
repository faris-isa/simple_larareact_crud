<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Name as NameResource;
use App\Models\Name;

class NameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return NameResource::collection(Name::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    // public function create()
    // {
    //     //
    // }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'question' => 'required',
        ]);
        $name = new Name ([
            'name' => $request->name,
            'question' => $request->question,
        ]);
        $name->save();
        return response()->json([
            'data' => 'Name Created!'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return new NameResource(Name::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'question' => 'required',
        ]);
        $name = Name::findOrFail($id);
        $name->name = $request->name;
        $name->question = $request->question;
        $name->save();


        return response()->json([
            'data' => 'Name updated!'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $name =  Name::findOrFail($id);
        $name->delete();

        return response()->json([
            'data' => 'Name deleted!'
        ]);
    }
}
