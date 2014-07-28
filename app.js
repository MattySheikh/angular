(function() {
	var app = angular.module('store', []);

	app.controller('StoreController', function() {
		this.products = gems;
	});

	app.controller('ReviewController', function() {
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});

    app.directive('productTitle', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-title.html'
        };
    });

    app.directive('productPanels', function() {
    	return {
    		restrict: 'E',
    		templateUrl: 'product-panels.html',
    		controller: function() {
    			this.tab = 1;

    			this.selectTab = function(setTab) {
    				this.tab = setTab;
    			};

    			this.isSelected = function(checkTab) {
    				return this.tab === checkTab;
    			}
    		},
    		controllerAs: 'panels'
    	}

    });

	var gems = [
	{
		name: 'Dodecahedron',
		price: 2,
		description: 'This is a Dodecahedron!',
		canPurchase: false,
		soldOut: true,
		images: [
			{
				full: 'dodecahedron.jpg',
				thumb: 'dodecahedronThumb.jpg'
			}
		],
		reviews: [
			{
				stars: 4,
				body: 'Neat gem',
				author: 'Person 1'
			},
			{
				stars: 5,
				body: 'Neater gem',
				author: 'Person 2'
			}
		]
	},
	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: 'This is a Pentagonal Gem!',
		'canPurchase': false,
		images: [
			{
				full: 'pentagonal.jpg',
				thumb: 'pentagonalThumb.jpg'
			}
		],
		reviews: [
			{
				stars: 1,
				body: 'Neeeeat gem',
				author: 'Person 3'
			},
			{
				stars: 2,
				body: 'Neateeeer gem',
				author: 'Person 4'
			}
		]
	}
	];
})();