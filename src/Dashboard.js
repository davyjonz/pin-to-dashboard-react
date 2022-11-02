import React, { useEffect, useState } from 'react';
import { Pages } from "./models/Pages";

const Dashboard = () => {
  let [pages,setPages] = useState(new Array());

  function comparePages( a, b ) {
    if ( a.pageName < b.pageName ){
      return -1;
    }
    if ( a.pageName > b.pageName ){
      return 1;
    }
    return 0;
  }

  function onRemoveDashPage (page){
    const index = Pages.DashboardPages.indexOf(page);
    console.log(index);

    if (index !== -1) {
      Pages.DashboardPages.splice(index, 1);

      let pageId = 'page'+page.pageNumber;

      document.getElementById(pageId).remove();
    }
  };
  function showPinnedPages(){
    pages.map(page =>
      <div class="col-md-4">             
            <div className={"card text-center p-4 "+page.pageStyle} 
            id={'page'+page.pageNumber} 
            onClick={()=>onRemoveDashPage(page)}>
              <div class="class-body">
                {page.pageName}
              </div>
            </div>
      </div>
    )
  };
  useEffect(()=>{
    setPages(Pages.DashboardPages.sort(comparePages));

  });

    return(
        <div class="row m-2">
            {
              pages.map(page =>
                <div class="col-md-4">             
                      <div className={"card text-center p-4 "+page.pageStyle} 
                      id={'page'+page.pageNumber} 
                      onClick={()=>onRemoveDashPage(page)}>
                        <div class="class-body">
                          {page.pageName}
                        </div>
                      </div>
                </div>
              )
            }
          </div>
    )  ;
  };
  
  export default Dashboard;