/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"cl3syncyoungppbom/bom_info/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
