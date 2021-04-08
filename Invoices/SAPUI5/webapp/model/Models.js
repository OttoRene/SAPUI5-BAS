sap.ui.define([
    "sap/ui/model/json/JSONModel"

],
    /**
     * @param {typeof sap.ui.model.jason.JSONModel} JSONModel
     */
    function (JSONModel) {
        "use strict";

        return {
            createrecipient: function () {
                var oData = {
                    recipient: {
                        name: "World"
                    }
                };

                return new JSONModel(oData);
            }
        }
    })