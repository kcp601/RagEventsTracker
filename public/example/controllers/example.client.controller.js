angular.module('example').controller('ExampleController', ['$scope', 'Authentication',
    function($scope, Authentication) {
        $scope.authentication = Authentication;

        $scope.showParticipantDiv = false;
      
        $scope.goToParticipants = function(){
        	window.location = "/#!/participants"
        }
        
        $scope.goToEvents = function(){
        	window.location = "/#!/events"
        }
        
        $scope.goToActivities = function(){
        	window.location = "/#!/activities"
        }

        $scope.simplePDF = function() {
            //    console.log("button clicked");
            //  $scope.order.showPopupAddedToCart = !$scope.order.showPopupAddedToCart;
            var doc = new jsPDF();
            doc.text(20, 20, 'Hello world!');
            doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
            doc.addPage();
            doc.text(20, 20, 'Do you like that?');

            // Save the PDF
            doc.save('Test.pdf');




        };


    }
]);