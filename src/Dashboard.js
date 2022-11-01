import React, { useEffect, useState } from 'react';
import { json } from "react-router-dom";
import { Pages } from "./models/Pages";
import { Link } from "react-router-dom";

const Dashboard = () => {

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

    return <div class="row mt-3">
    {
      Pages.DashboardPages.sort(comparePages)
      .map(page =>
          <div class="col-md-4">             
                <div class="card text-center p-4" 
                id={'page'+page.pageNumber} 
                onClick={()=>onRemoveDashPage(page)}>
                  <div class="class-body">
                    {page.pageName}
                  </div>
                </div>
          </div>
        )
    }
  </div>;
  };
  
  export default Dashboard;