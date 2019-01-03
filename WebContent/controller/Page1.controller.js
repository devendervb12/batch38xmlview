sap.ui.controller("controller.Page1", {
	
	gotoPage2 : function(){
		var oapp = this.getView().getParent();
		oapp.to("idview2");
	}
});