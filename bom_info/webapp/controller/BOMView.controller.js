sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
function (Controller, MessageToast, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("cl3.syncyoung.pp.bom.bominfo.controller.BOMView", {
        onInit: function () {

        },

        onItem: function (oEvent) {

            let oData = oEvent.getParameter("rowBindingContext").getObject(), // 선택된 행의 모든 정보 받아옴
                oTable = this.getView().byId("item"), // 이벤트를 적용할 Element를 읽어옴
                oBinding = oTable.getBinding("rows"), // EntitySet 정보
                oFilter = null,
                aFilter = [];

            oFilter = new Filter({
                path: "Bomid",
                operator: FilterOperator.EQ,
                value1: oData.Bomid
            });

            aFilter.push(oFilter); // 검색조건을 배열에 담아준다
            oBinding.filter(aFilter); // 검색조건을 실행

        },

        onSearch: function () {

            let oTable = this.getView().byId("header"),
                oBinding = oTable.getBinding("rows"),
                aFilter = [],
                oFilter = null;
            
            var vBomid = this.getView().byId("IBomid").getValue(),
                vMatnr = this.getView().byId("IMatnr").getValue();

            if(vBomid != '') {

                oFilter = new Filter({
                    path: "Bomid",
                    operator: FilterOperator.EQ,
                    value1: vBomid
                });

                aFilter.push(oFilter);
                oFilter = null;

            };

            if (vMatnr != '') {
                oFilter = new Filter({
                    path: "Matnr",
                    operator: FilterOperator.EQ,
                    value1: vMatnr
                });

                aFilter.push(oFilter);
                oFilter = null;

            };

            oBinding.filter(aFilter);

        }

    });
});
