// (function() {
// "use strict";

// Controller
angular.module('modalGetXml').controller('modalGetXmlCtrl', modalGetXmlCtrl);
modalGetXmlCtrl.$inject = ['$scope', '$uibModalInstance', 'scopeParent', 'md'];

function modalGetXmlCtrl($scope, $uibModalInstance, scopeParent, md) {
    $scope.scopeParent = scopeParent;
    $scope.md = md;

    // Close modal window button
    $scope.close = closeModal;

    $scope.downloadXML = downloadXML;

    $scope.downloadJSON = downloadJSON;

    ////////////////////////////////////////////////////////////////////////////

    function closeModal() {
        // Call cancel function.
        $uibModalInstance.dismiss('cancel');
    }

    function downloadXML() {
        window.open('data:text/xml,' + encodeURIComponent($scope.md.xml));
        $uibModalInstance.close();
    }

    function downloadJSON() {
        //window.open('data:text/json,' + encodeURIComponent($scope.md.xml));
        //$uibModalInstance.close();
    }

}

// })();
