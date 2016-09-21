/*
# Usage in html template:
"xxx | nl2br"
<div ng-bind-html=" YourString | nl2br "></div>
or:
"xxx | nl2br:Boolean"
Boolean( true or flase or just keep null) means is xhtml  or not
if is xhtml, replace with <br/> ; if not , replace with <br>
<div ng-bind-html=" YourString | nl2br:true "></div>
-------------------------
# Example:
//==Analog data===
$scope.items = [
    {"message": "test"},
    {"message": "New\nLine"},
]
//=====
<div class="comment" ng-repeat="item in items">
    <p ng-bind-html=" item.message | nl2br "></p>
</div>
-------------------------
# Output result:
<div class="comment ng-scope" ng-repeat="item in items">
    <p class="ng-binding" ng-bind-html=" item.message | nl2br ">
        test
    </p>
</div>
<div class="comment ng-scope" ng-repeat="item in items">
    <p class="ng-binding" ng-bind-html=" item.message | nl2br ">
        New<br>Line
    </p>
</div>
*/

// Filter nl2br
angular.module('mdEdit.filters')
    .filter('nl2br', nl2br);

nl2br.$inject = ['$sce'];

// function modalSetXmlSrv($http) {
function nl2br($sce) {
    return function(msg, is_xhtml) {
        is_xhtml = is_xhtml || true;
        breakTag = (is_xhtml) ? '<br />' : '<br>';
        msg = (msg + '')
            .replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
        return $sce.trustAsHtml(msg);
    };
}
