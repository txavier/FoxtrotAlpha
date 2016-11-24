(function () {
    angular
        .module('app')
        .controller('MakesController', MakesController);

    MakesController.$inject = ['$scope', '$routeParams', 'odataService'];

    function MakesController($scope, $routeParams, odataService) {
        var vm = this;

        vm.defaultImageUrl = '../s.discogs.com/images/default-release-cd.png';
        vm.makes = [];

        activate();

        function activate() {
            var makesSearchCriteria = {
                page: 1,
                perPage: 30,
                sort: null,
                search: null,
                searchFields: null,
                expand: null,
                q: null,
                fields: null
            };

            getMakes(makesSearchCriteria);
        }

        function getMakes(searchCriteria) {
            return odataService.searchEntitiesOData('makes', searchCriteria).then(function (data) {
                vm.makes = data;

                return vm.makes;
            });
        }

    }

})();