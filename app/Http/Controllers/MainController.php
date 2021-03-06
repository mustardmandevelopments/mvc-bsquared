<?php

namespace Bsquared\Http\Controllers;

use Bsquared\Http\Controllers\AboutController;
use Bsquared\Label;
use Bsquared\Path;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Bsquared\User;
use Bsquared\Http\Controllers\ContactController;
use Illuminate\Support\Facades\File;
use PhpSpec\Exception\Exception;

class MainController extends Controller
{

	/**
	 * Display a listing of the resource.
	 * GET /main
	 *
	 * @return Response
	 */

	public function index()
	{
		return view('welcome');
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /main/create
	 *
	 * @param $username
	 * @return Response
	 */
	public function createUserContactMessage($username)
	{
		//
	}
    
	/**
	 * Display the specified resource.
	 * GET /main/{id}
	 * Returns the associated model for a portfolio to the portfolio view.
	 * @param $username
	 * @return Response
	 * @internal param int $id
	 */
	public function showPortfolio($username)
	{
		$member = User::where('username', '=', $username)->first();
		$userID = $member->user_id;
		$portfolio = User::getUserPortfolio($userID);
        
        $resumePath = Path::where('user_id', $userID)
            ->where('destination_id', 35)->first();
        
        $aboutLabels = AboutController::getLabels();
        
        
		return view('portfolio', compact('portfolio', 'resumePath', 'aboutLabels'));
	}

}