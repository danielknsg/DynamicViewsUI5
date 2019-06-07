sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("DynamicView.App", {
        onInit: function() {
            
        },
        onAfterRendering: function(){
            const inputElem = new sap.m.Input();
            const listItem = new sap.ui.core.ListItem(null, 
                {"attributes": {
                "key": "{Kunnr}",
                "text": "{Name1}",
                "additionalText": "{Kunnr}"
                }
            });
            inputElem.setStartSuggestion(0);

            const bindInfo = {
                path: "http://localhost:5000/api/srep/soldtoparties",
                templateShareable: "false",
                template: listItem
            };
            inputElem.bindAggregation("suggestionItems", bindInfo);



            this.getView().byId('page').addContent(inputElem);
        }
    });
});