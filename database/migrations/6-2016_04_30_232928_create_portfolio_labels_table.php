<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePortfolioLabelsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('portfolio_labels', function(Blueprint $table)
		{
			$table->increments('label_id');
			$table->integer('label_id');
			$table->integer('user_id')->unsigned()->index();
			$table->string('label', 48)->nullable();
			$table->integer('destination_id')->nullable()->index('destination_id');
			$table->timestamps();
			$table->unique(['label_id','user_id']);
			$table->foreign('user_id')->references('user_id')->on('users');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('portfolio_labels');
	}

}
