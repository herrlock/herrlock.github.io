sap.ui.jsfragment("pages.app", {
    createContent: function(){
        console.group("pages.app > createContent");
        
        var toPage1Function = function() {
            app.toDetail("page-page1");
        }, toPage2Function = function() {
            app.toDetail("page-page2");
        };
        var masterPage = new sap.m.Page("page-master", {
            showHeader: false,
            content: new sap.m.List({
                items: {
                    path: "items>/",
                    template: new sap.m.StandardListItem({
                        type: sap.m.ListType.Navigation,
                        icon: "{items>icon}",
                        title: "{items>title}",
                        description: "{items>description}",
                        info: "{items>info}"
                    })
                }
            })
        });
        masterPage.setModel(new sap.ui.model.json.JSONModel([{
                title: "title1",
                description: "description1",
                info: "info1"
            }, {
                title: "title2",
                description: "description2",
                info: "info2"
            }]), "items");
        var page1 = new sap.m.Page("page-page1", {
            content: new sap.m.VBox({
                items: [
                    new sap.m.Button({
                        icon: "sap-icon://employee",
                        text: "Some Button",
                        press: toPage2Function
                    }), new sap.m.Button({
                        icon: "sap-icon://doctor",
                        text: "Some other Button",
                        press: toPage2Function
                    }) 
                ]
            })
        });
        var page2 = new sap.m.Page("page-page2", {
            content: new sap.m.VBox({
                items: [
                    new sap.m.Button({
                        icon: "sap-icon://doctor",
                        text: "Some Button 2",
                        press: toPage1Function
                    }), new sap.m.Button({
                        icon: "sap-icon://employee",
                        text: "Some other Button 2",
                        press: toPage1Function
                    }) 
                ]
            })
        });
        var app = new sap.m.SplitApp({
            mode: sap.m.SplitAppMode.ShowHideMode,
            backgroundColor: "light grey",
            masterPages: [
                masterPage
            ],
            detailPages: [
                page1, page2
            ],
            detailNavigate: function(nav){
                var params = nav.getParameters();
                console.group("detailNavigate");
                console.log("from:", params.fromId, "to:", params.toId);
                console.log("isTo:", params.isTo, "isBack:", params.isBack);
                console.groupEnd();
            }
        });
        
        console.log("pages.app > createContent (end)");
        console.groupEnd();
        return app;
    }
});