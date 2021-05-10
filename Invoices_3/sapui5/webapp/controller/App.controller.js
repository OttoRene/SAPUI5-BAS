sap.ui.define([
"sap/ui/core/mvc/Controller",

],
/**
 * @param {typeof sap.ui.core.mvc.Controller} Controller
 */ 
function(Controller){
    "use strict";
    
    return Controller.extend("logaligroup.SAPUI5.controller.App", {

        onInit: function(){
            
        },
        onOpenDialogHeader: function() {
            this.getOwnerComponent().openHelloDialog();
        }
        //onShowHello: function() {
            // Read text from i18n model 
            //var oBundle    = this.getView().getModel("i18n").getResourceBundle();
            // Read property from data model 
            //var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            //var sMsg       = oBundle.getText("helloMsg", [sRecipient]); 
            //MessageToast.show(sMsg);
        //}
    });


});