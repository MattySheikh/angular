(function() {
	var app = angular.module('store', ['store-products']);

	app.controller('StoreController', [ '$http', function($http) {
		var that = this;
		that.products = [];
		$http.get('/products.json').success(function(data) {
			that.products = data;
		});
	}]);

	app.controller('ReviewController', function() {
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});

})();