(function () {
    angular
        .module('app')
        .controller('UpdateMakeController', UpdateMakeController);

    UpdateMakeController.$inject = ['$scope', '$routeParams', '$location', 'odataService'];

    function UpdateMakeController($scope, $routeParams, $location, odataService) {
        var vm = this;

        vm.make = {};
        vm.makeId = null;

        activate();

        function activate() {
            vm.makeId = $routeParams.makeId;

            if (vm.makeId) {
                var makeSearchCriteria = {
                    page: 1,
                    perPage: 30,
                    sort: null,
                    search: null,
                    searchFields: null,
                    expand: null,
                    q: 'makeId eq ' + vm.makeId,
                    fields: null
                };

                searchMakes(makeSearchCriteria);
            }
        }

        function searchMakes(searchCriteria) {
            return odataService.searchEntitiesOData('makes', searchCriteria).then(function (data) {
                vm.make = data[0];

                return vm.make;
            });
        }

        function updateEntity(make) {
            return odataService.updateEntityOData('makes', make.makeId, make).then(function (data) {
                $location.path('/makes');
            });
        }

    }

})();