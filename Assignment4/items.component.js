(function() {
    'use strict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'items.component.template.html',
            bindings: {
                items: '<'
            }
        });
}());
