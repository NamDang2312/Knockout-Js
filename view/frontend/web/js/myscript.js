define(['jquery', 'uiComponent', 'ko','Magento_Ui/js/modal/confirm'], function ($, Component, ko,confirmation) {
    'use strict';
    return Component.extend({
        defaults: {
            template: 'DCKAP_PopUp/knockout-template'
        },
        initialize: function () {
            this._super();
        },
        confirmButton: function(){
            confirmation({
                title: $.mage.__('Knockout confirmation Popup'),
                content: $.mage.__('Are you sure you wanna do this?'),
                actions: {
                    confirm: function(){},
                    cancel: function(){},
                    always: function(){}
                }
            });
        },
    })
});