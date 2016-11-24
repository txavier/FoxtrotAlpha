(function () {
    'use strict';

    angular
        .module('app')
        .factory('odataService', odataService);

    odataService.$inject = ['$http', '$log', '$q', 'toaster', 'errorService'];

    // Version 1.0.3
    // Added ../ to the odata url so that if we are in the login controller page then 
    // the odata calls will be made to the root.
    function odataService($http, $log, $q, toaster, errorService) {
        var odataUrl = '../odata/';

        var service = {
            addEntityOData: addEntityOData,
            updateEntityOData: updateEntityOData,
            deleteEntity: deleteEntity,
            softDeleteEntity: softDeleteEntity,
            getEntityOData: getEntityOData,
            getEntitiesOData: getEntitiesOData,
            searchEntitiesOData: searchEntitiesOData,
            searchEntitiesCountOData: searchEntitiesCountOData,
        };

        return service;

        function addEntityOData(entityDataStore, entity, showToaster, successMessage, failureMessage) {
            return $http.post(odataUrl + entityDataStore, entity).then(addEntityComplete, addEntityFailed);

            function addEntityComplete(response) {
                if (showToaster == undefined ? false : showToaster) {
                    toaster.pop('success', 'Saved', successMessage || 'Saved successfully.');
                }

                return response.data;
            }

            function addEntityFailed(error) {
                errorService.handleError(error, showToaster || true, entityDataStore, failureMessage);

                // If there is a failure method the below line will have it called.
                // http://stackoverflow.com/questions/28076258/reject-http-promise-on-success
                return $q.reject(error);
            }
        }

        function updateEntityOData(entityDataStore, id, entity, showToaster, successMessage, failureMessage, ignoreLoadingBar) {
            return $http.put(odataUrl + entityDataStore + '(' + id + ')', entity)
                            .then(updateEntityComplete, updateEntityFailed);

            function updateEntityComplete(response) {
                if (showToaster == undefined ? false : showToaster) {
                    toaster.pop('success', 'Saved', successMessage || 'Saved successfully.');
                }

                return response.data;
            }

            function updateEntityFailed(error) {
                errorService.handleError(error, showToaster || true, entityDataStore, failureMessage);

                // If there is a failure method the below line will have it called.
                // http://stackoverflow.com/questions/28076258/reject-http-promise-on-success
                return $q.reject(error);
            }
        }

        function deleteEntity(entityDataStore, id) {
            return $http.delete(apiUrl + entityDataStore + '/' + id, {
                params: {
                    softDelete: false,
                },
            }).then(deleteComplete, deleteFailed);

            function deleteComplete(response) {
                return response.data;
            }

            function deleteFailed(error) {
                errorService.handleError(error, showToaster || true, entityDataStore, failureMessage);

                // If there is a failure method the below line will have it called.
                // http://stackoverflow.com/questions/28076258/reject-http-promise-on-success
                return $q.reject(error);
            }
        }

        function softDeleteEntity(entityDataStore, id) {
            return $http.delete(apiUrl + entityDataStore + '/' + id, {
                params: {
                    softDelete: true,
                },
            })
            .then(softDeleteComplete, softDeleteFailed);

            function softDeleteComplete(response) {
                return response.data;
            }

            function softDeleteFailed(error) {
                errorService.handleError(error, showToaster || true, entityDataStore, failureMessage);

                // If there is a failure method the below line will have it called.
                // http://stackoverflow.com/questions/28076258/reject-http-promise-on-success
                return $q.reject(error);
            }
        }

        function getEntityOData(entityDataStore, id, includeProperties) {
            if (includeProperties) {
                return $http.get(odataUrl + entityDataStore + (id ? '(' + id + ')' : '') + '?$expand=' + includeProperties)
                            .then(getComplete, getFailed);
            }
            else {
                return $http.get(odataUrl + entityDataStore + (id ? '(' + id + ')': ''))
                                       .then(getComplete)
                                       .catch(getFailed);
            }
            function getComplete(response) {
                return response.data;
            }

            function getFailed(error) {
                errorService.handleError(error, showToaster || true, entityDataStore, failureMessage);

                // If there is a failure method the below line will have it called.
                // http://stackoverflow.com/questions/28076258/reject-http-promise-on-success
                return $q.reject(error);
            }
        }

        function getEntitiesOData(entityDataStore, includeProperties) {
            return $http.get(odataUrl + entityDataStore, { params: includeProperties })
                        .then(getEntitiesComplete, getEntitiesFailed);

            function getEntitiesComplete(response) {
                return response.data.value;
            }

            function getEntitiesFailed(error) {
                errorService.handleError(error);

                return $q.reject(error);
            }
        }

        // Replace all $values with ''.
        // OData SearchEntities.
        function searchEntitiesOData(entityDataStore, searchCriteria, cache) {
            return $http.get(odataUrl + entityDataStore, {
                params:
                         {
                             $skip: searchCriteria == undefined || searchCriteria.currentPage == undefined ? null : (searchCriteria.currentPage - 1) * searchCriteria.itemsPerPage,
                             $top: searchCriteria == undefined ? null : searchCriteria.itemsPerPage,
                             $orderby: searchCriteria == undefined ? null : searchCriteria.orderBy,
                             $search: searchCriteria == undefined ? null : searchCriteria.searchText,
                             searchFields: searchCriteria == undefined ? null : searchCriteria.searchTextFields,
                             $expand: searchCriteria == undefined ? null : searchCriteria.includeProperties,
                             $filter: searchCriteria == undefined || searchCriteria.q == undefined ? null : searchCriteria.q.replace('=', ' eq '),
                             $select: searchCriteria == undefined ? null : searchCriteria.fields
                         },
                cache: cache == undefined ? false : cache
            })
            .then(searchComplete, searchFailed);

            function searchComplete(response) {
                return response.data.value;
            }

            function searchFailed(error) {
                errorService.handleError(error);

                return $q.reject(error);
            }
        }

        function searchEntitiesCountOData(entityDataStore, searchCriteria, cache) {
            return $http.get(odataUrl + entityDataStore, {
                params:
                        {
                            $count: true,
                            $search: searchCriteria == undefined ? null : searchCriteria.searchText,
                            searchFields: searchCriteria == undefined ? null : searchCriteria.searchTextFields,
                            $filter: searchCriteria == undefined ? null : searchCriteria.q
                        },
                cache: cache == undefined ? false : cache
            })
            .then(searchCountComplete, searchCountFailed);

            function searchCountComplete(response) {
                return response.data['@odata.count'];
            }

            function searchCountFailed(error) {
                errorService.handleError(error);

                return $q.reject(error);
            }
        }
    }
})();
