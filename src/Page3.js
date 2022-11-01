import { Page } from "./models/Page";
import { Pages } from "./models/Pages";

const Page3 = () => {

  let currentPage = new Page(3,"Page 3", "/page3","blue");

  let onPinToDashboard = () => {
    Pages.DashboardPages.push(currentPage);
    console.log(JSON.stringify(Pages.DashboardPages));
  };

  return <div class="row">
  <div class="card col-8 offset-2">
  <div class="card-header">
    <h1 class="float-start">Page 3</h1>
    <button type="button" class="btn btn-secondary float-end" onClick={onPinToDashboard}>Pin to Dashboard</button>
  </div>
  <div class="card-body">
    Welcome to page 3
  </div>
  </div>
</div>;
  };
  
  export default Page3;