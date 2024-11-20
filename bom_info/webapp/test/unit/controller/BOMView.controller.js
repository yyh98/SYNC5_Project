/*global QUnit*/

sap.ui.define([
	"cl3syncyoungppbom/bom_info/controller/BOMView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("BOMView Controller");

	QUnit.test("I should test the BOMView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
