(function () {
    angular
        .module('app')
        .controller('AddMakeController', AddMakeController);

    AddMakeController.$inject = ['$scope', '$routeParams', '$location', 'odataService'];

    function AddMakeController($scope, $routeParams, $location, odataService) {
        var vm = this;

        vm.make = {};
        vm.addEntity = addEntity;

        activate();

        function activate() {
        }

        function addEntity(make) {
            return odataService.addEntityOData('makes', make).then(function (data) {
                $location.path('/makes');
            });
        }

    }

})();