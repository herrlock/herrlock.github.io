sap.ui.jsfragment("pages.app", {
    createContent: function(){
        console.group("pages.app > createContent");
        
        var iframe = new sap.ui.core.HTML("detailIFrame", {
            content: "<iframe style='height: 100%; width: 100%' frameborder='0' />"
        });
        
        var masterPage = new sap.m.Page("page-master", {
            showHeader: false,
            content: new sap.m.List({
                items: {
                    path: "repos>/",
                    template: new sap.m.StandardListItem({
                        type: sap.m.ListType.Navigation,
                        icon: "{= ${repos>fork} ? 'sap-icon://duplicate' : 'sap-icon://group' }",
                        title: "{repos>name}",
                        description: "{repos>language}",
                        info: "{= ${repos>pushed_at}.substring(0,10) }",
                        press: function(oEvent) {
                            var source = oEvent.getSource();
                            console.log(source.getTitle());
                            iframe.$().attr("src", "/" + source.getTitle() + "/index.html");
                        }
                    })
                }
            })
        });
        var detailPage = new sap.m.Page("page-detailPage", {
            content: iframe
        });
        var app = new sap.m.SplitApp({
            mode: sap.m.SplitAppMode.ShowHideMode,
            backgroundColor: "light grey",
            masterPages: masterPage,
            detailPages: detailPage,
            detailNavigate: function(nav){
                var params = nav.getParameters();
                console.group("detailNavigate");
                console.log("from:", params.fromId, "to:", params.toId);
                console.log("isTo:", params.isTo, "isBack:", params.isBack);
                console.groupEnd();
            }
        });
        
        console.groupEnd();
        return app;
    }
});