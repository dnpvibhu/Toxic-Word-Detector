sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/wipro/ToxicWordDetector/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("com.wipro.ToxicWordDetector.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
			init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			this.renderRecastChatbot();

		},
		renderRecastChatbot: function () {
			if (!document.getElementById("cai-webchat")) {
				var s = document.createElement("script");
				s.setAttribute("id", "cai-webchat");
				s.setAttribute("src", "https://cdn.cai.tools.sap/webchat/webchat.js");
				document.body.appendChild(s);
			}
			s.setAttribute("channelId", "5adc026e-92f5-41f5-9629-6f5b9560e846");
			s.setAttribute("token", "ea39180a88494a4de493d940da741a26");
		}
	});
});