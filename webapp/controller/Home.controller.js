sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.wipro.ToxicWordDetector.controller.Home", {
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("Home").attachPatternMatched(function(oEvent){
				
			},this);
		},
		
		onLoginPress:function(oEvent){
			// var sContext = oEvent.getSource().getBindingContext().sPath;
			// sContext = btoa(sContext);
			// sap.ui.core.UIComponent.getRouterFor(this).navTo("Detail",{context:sContext});
			sap.ui.core.UIComponent.getRouterFor(this).navTo("Detail");
		}
	});

});