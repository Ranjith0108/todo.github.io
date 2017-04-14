var app = angular.module("myModule", [])
				 .controller("myCtrl", function($scope){
				 	$scope.tasks = []; // create an empty array to store the input values
				 	$scope.searchEnter = function(){
				 		//console.log(event.which || event.keyCode);
				 		if(event.which == 13 && $scope.task != ""){ /* event.which == 13 means after you type something thn enter, 
				 									once you click enter text will appear below input box and clears 
				 									input that can be done with addTask function.*/
				 			$scope.addTask();
				 		}
				 	};
				 	$scope.addTask = function (){
				 		$scope.tasks.push({'taskMessage': $scope.task, 'status': false});
				 		console.log($scope.tasks);
				 		$scope.task = ""; // this keeps the input field empty as soon as we hit enter
				 	};
				 	$scope.contentEdit = function(){
				 		// event.target.contentEditable = true; // this is one way of doing but you can't untoggle
				 		event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false"; 
				 	};
				 	$scope.enterAgain = function(msg) {
				 		if(event.which == 13 && msg != ""){
				 			$scope.contentEdit();
				 		}
				 	};
				 	$scope.removeItem = function(x) {
				 		$scope.tasks.splice(x,1);
				 	};
				 })