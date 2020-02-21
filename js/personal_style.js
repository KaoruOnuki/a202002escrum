function tabManageContents(selectedTab) {
  let tabs = document.getElementById( "tabManagement" );
  let tabInners = document.getElementById( "tabInners" );
// let allTabs = Array.from(tabs.children); not supported in IE
  let allTabs = [];
  for (i = 0; i < tabs.children.length; i++) {
    allTabs.push( tabs.children[i] ) ;
  }

  let allTabInners = [];
  for (i = 0; i < tabInners.children.length; i++) {
    allTabs.push( tabInners.children[i] ) ;
  }

  let targetTab = selectedTab;
  let targetTabInner = document.getElementById( selectedTab.id + "_inner" );

  addClassOnSelectedElement(allTabs, selectedTab);
  addClassOnSelectedElement(allTabInners, targetTabInner);

//クリックされた要素をarrayから削除する
      function addClassOnSelectedElement(allElements, selectedElement) {
        allElements.some(function(v, n){
          if (v==selectedElement) allElements.splice(n,1);
        });

        for (i = 0; i < allElements.length; i++) {
          if($(allElements[i]).hasClass('clicked')) {
            $(allElements[i]).removeClass('clicked');
          }
        }
        $(selectedElement).addClass('clicked');
      }

};
