<?php namespace Bsquared\Http\Controllers;

use Illuminate\Routing\Controller;

class WorksController extends Controller {

	/**
	 * Display a listing of the resource.
	 * GET /works
	 *
	 * @return Response
	 */
	public function index()
	{
		//
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /works/create
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /works
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 * GET /works/{id}
	 *
	 * @param $username
	 * @return Response
	 * @internal param int $id
	 */
	public function show($username)
	{
		return view('members.works');
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /works/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /works/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /works/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}