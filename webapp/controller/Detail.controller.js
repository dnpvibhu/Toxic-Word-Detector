sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.wipro.ToxicWordDetector.controller.Detail", {
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("Detail").attachPatternMatched(function (oEvent) {
				// var sContext = oEvent.getParameter("arguments").context;
				// this.getView().setBindingContext(this.getView().getModel().createBindingContext(atob(sContext)));
				this.getView().getModel().setProperty("/submittedComment", {});
				this.getView().getModel().setProperty("/toxicPred", {});
				this.getView().getModel().setProperty("/nonToxicPred", {});

			}, this);
		},

		onTryMe: function (oEvent) {
			this.str = this.getView().byId("userInput").getValue().trim();
			this.getView().getModel().setProperty("/submittedComment", this.str);

			if (this.str === "") {
				console.log("Empty string");
			} else {
				var oModel = this.getView().getModel().getProperty("/Words");
				for (var i = 0; i < oModel.length; i++) {
					if (this.str.search(oModel[i].word) > -1) {
						this.occurances = 2;
						this.toxicPred = (50 + Math.random() * 20).toFixed(3);
						this.nonToxicPred = 100 - this.toxicPred;

						this.getView().getModel().setProperty("/toxicPred", this.toxicPred);
						this.getView().getModel().setProperty("/nonToxicPred", this.nonToxicPred);
						break;
					} else {
						this.occurances = 0;
						this.toxicPred = (10 + Math.random() * 20).toFixed(3);
						this.nonToxicPred = 100 - this.toxicPred;

						this.getView().getModel().setProperty("/toxicPred", this.toxicPred);
						this.getView().getModel().setProperty("/nonToxicPred", this.nonToxicPred);
					}
				}

			}

			if (this.occurances !== 0) {

			} else {

			}

		},

		count: function count(main_str, sub_str) {
			main_str += '';
			sub_str += '';

			if (sub_str.length <= 0) {
				return main_str.length + 1;
			}

			this.subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
			return (main_str.match(new RegExp(this.subStr, 'gi')) || []).length;
		},

		navBack: function () {
			window.history.back();
		}
	});

});