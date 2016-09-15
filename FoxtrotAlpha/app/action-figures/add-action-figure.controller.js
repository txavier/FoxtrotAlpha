﻿(function () {
    angular
        .module('app')
        .controller('AddActionFigureController', AddActionFigureController);

    AddActionFigureController.$inject = ['$scope', '$routeParams', 'dataService'];

    function AddActionFigureController($scope, $routeParams, dataService) {
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
            return dataService.searchEntities('actionFigures', searchCriteria).then(function (data) {
                vm.actionFigures = data;

                return vm.actionFigures;
            });
        }

    }

})();