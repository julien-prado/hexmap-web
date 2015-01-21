(function(){
var app = angular.module('editor-charater-sheet',[]);

app.directive('ecsRange', [function() {
	return {
		restrict:'E',
		scope:{name:'@name',value:'=',maximum:'@max'},
		templateUrl: 'editor/ecs-sub-cat.html',
		controller:function($scope){
			$scope.getTimes=function(n){
				return new Array(Number(n));
			};
		}
	};
}]);

app.directive('ecsValue', [function() {
	return {
		restrict:'E',
		scope:{name:'@name',value:'='},
		templateUrl: 'editor/ecs-cat.html',
		controller:function($scope){
			$scope.getTimes=function(n){
				return new Array(n);
			};
		}
	};
}]);

app.directive('ecsAttributs', [function() {
	return {
		restrict:'E',
		scope:{name:'@name',value:'='},
		templateUrl: 'editor/ecs-part.html',
		controller:function($scope){
			$scope.getTimes=function(n){
				return new Array(n);
			};
		}
	};
}]);
app.directive('editorCharacterSheet', [function() {
	return {
		require:['^ecsAttribut','ecsValue','ecsRange'],
		restrict:'E',
		templateUrl: 'editor/editor-character-sheet.html'
	};
}]);
})();