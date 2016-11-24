﻿(function () {
    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$routeParams', 'odataService'];

    function HomeController($scope, $routeParams, odataService) {
        var vm = this;

        vm.defaultImageUrl = '../s.discogs.com/images/default-release-cd.png';
        vm.actionFigure = {};

        activate();

        function activate() {
            var actionFigureSearchCriteria = {
                page: 1,
                perPage: 30,
                sort: null,
                search: null,
                searchFields: null,
                expand: null,
                q: null,
                fields: null
            };

            getActionFigures(actionFigureSearchCriteria);
        }

        function getActionFigures(searchCriteria) {
            return odataService.searchEntitiesOData('actionFigures', searchCriteria).then(function (data) {
                vm.actionFigures = data.value;

                return vm.actionFigures;
            });
        }

    }

})();