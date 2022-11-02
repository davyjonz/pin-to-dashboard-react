import { useEffect, useState } from "react";
import { Page } from "./models/Page";
import { Pages } from "./models/Pages";
import './component-styles.css';

const Page3 = () => {

  let currentPage = new Page(3,"Page 3", "/page3","page3-style");

  let [pageMessage, setPageMessage] = useState("Welcome to Page 3");
  let [isPinned,setIsPinned] = useState(false);

  let onPinToDashboard = () => {
    if(Pages.DashboardPages.find(p => p.pageNumber === currentPage.pageNumber)){
      setPageMessage("Page 3 is pinned");
      return;
    }

    Pages.DashboardPages.push(currentPage);
    setPageMessage("Page 3 is pinned");
    console.log(JSON.stringify(Pages.DashboardPages));
    setIsPinned(true);
  };

  function onRemoveFromDash(){
    const index = Pages.DashboardPages.indexOf(currentPage);
    console.log(index);

    if (index !== -1) {
      Pages.DashboardPages.splice(index, 1);

      setPageMessage("Welcome to Page 3");
      setIsPinned(false);
    }
  };

  useEffect(()=>{
    if(Pages.DashboardPages.find(p => p.pageNumber === currentPage.pageNumber)){
      setPageMessage("Page 3 is pinned");
      return;
    }
  })

    return <div className="row">
    <div className={"card col-8 offset-2 "+currentPage.pageStyle}>
      <div class="card-header">
        <h1 class="float-start">Page 3</h1>
        <button type="button" class="btn btn-secondary float-end" onClick={onPinToDashboard}>Pin</button>
      </div>
      <div id="page1Body" class="card-body">
        {pageMessage}
      </div>
      </div>
    </div>;
  };
  
  export default Page3;