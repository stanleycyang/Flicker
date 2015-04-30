#MaterializeCSS

###Objectives:
- Understand what MaterializeCSS does
- Install MaterializeCSS to a rails app
- Apply MaterializeCSS to a rails app

###Installation

Add in the `Gemfile`:

	gem 'materialize-sass'
	gem 'angularjs-rails'

Bundle it

	$ bundle install

Change application.css to application.scss

	$ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
	
Import Materialize styles in `app/assets/stylesheets/application.scss`:

	@import "materialize";

In the `application.js`:

	//= require jquery
	//= require jquery_ujs
	//= require materialize-sprockets
	//= require angular

Create a StaticPages controller

	$ rails g controller StaticPages index

Set up the routes in `routes.rb`:

	root 'static_pages#index'

Now, in the `application.html.erb` add

	<html ng-app="materialize">
	
	...
	
	<body ng-controller="MoviesController as movie">

Now create app.js and MoviesController.js in `app/assets/javascripts/config/app.js` and `app/assets/javascripts/controllers/MoviesController`

In `app.js`

	(function(){
	  angular
	    .module('materialize', []);
	})();

In `MoviesController.js`

	(function(){

	  angular
	    .module('materialize')
	    .controller('MoviesController', MoviesController);
	
	    function MoviesController(){
	
	    }
	
	})();




