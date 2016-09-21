/**
 * [dataTitleDirective description]
 * @param  {[type]} mdchangeLocalesTemplateurl [description]
 * @return {[type]}                            [description]
 */
function uploadFileDirective(AppDataSrv) {
    return {
        restrict: 'EA',
        link: link,
        scope: {
            modal: '='
        }
    };

    /**
     * [link description]
     * @param  {[type]} scope   [description]
     * @param  {[type]} element [description]
     * @param  {[type]} attrs   [description]
     * @return {[type]}         [description]
     */
    function link(scope, element, attrs) {
        
        console.log(1);
        scope.xml = '';
        
        element.on('change', function() {
            console.log(2);
            var reader = new FileReader();
            reader.onload = function(e) {
                scope.modal.getFileContent(reader.result);
            };
            reader.readAsText(element[0].files[0]);
            
        });
    }
}


/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('modalSetXml.directives')
    .directive('uploadFile', uploadFileDirective);

uploadFileDirective.$inject = ['AppDataSrv'];
