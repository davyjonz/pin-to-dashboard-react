import { useState } from "react";
import { Page } from "./models/Page";
import { Pages } from "./models/Pages";

const Page1 = () => {
  let currentPage = new Page(1,"Page 1", "/page1","red");  

  const [pageMessage, setPageMessage] = useState("Welcome to Page 1");

  let onPinToDashboard = () => {
    if(Pages.DashboardPages.find(p => p.pageNumber === currentPage.pageNumber)){
      setPageMessage("Page 1 is already pinned");
      return;
    }

    Pages.DashboardPages.push(currentPage);
    setPageMessage("Page 1 is pinned");
    console.log(JSON.stringify(Pages.DashboardPages));
  };

    return <div class="row">
    <div class="card col-8 offset-2">
    <div class="card-header">
      <h1 class="float-start">Page 1</h1>
      <button type="button" class="btn btn-secondary float-end" onClick={onPinToDashboard}>Pin</button>
    </div>
    <div id="page1Body" class="card-body">
      {pageMessage}
    </div>
    </div>
  </div>;
  };
  
  export default Page1;