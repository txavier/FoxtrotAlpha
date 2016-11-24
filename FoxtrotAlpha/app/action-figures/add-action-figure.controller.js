(function () {
    angular
        .module('app')
        .controller('AddActionFigureController', AddActionFigureController);

    AddActionFigureController.$inject = ['$scope', '$routeParams', '$location', 'odataService'];

    function AddActionFigureController($scope, $routeParams, $location, odataService) {
        var vm = this;

        vm.defaultImageUrl = '../s.discogs.com/images/default-release-cd.png';
        vm.actionFigure = {};
        vm.addEntity = addEntity;
        vm.makes = [
            { makeId: 1, name: 'MakeName' },
            { makeId: 2, name: 'MakeName2' }
        ]

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

            searchMakes(makesSearchCriteria);
        }

        function searchMakes(searchCriteria) {
            return odataService.searchEntitiesOData('makes', searchCriteria).then(function (data) {
                vm.makes = data;
            });
        }

        function addEntity(actionFigure) {
            return odataService.addEntityOData('actionFigures', actionFigure).then(function (data) {
                $location.path('/home');
            });
        }

    }

})();