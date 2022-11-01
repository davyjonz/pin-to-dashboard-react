import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" class="nav-link">Dashboard</Link>
            </li>
            <li class="nav-item">
              <Link to="/page1" class="nav-link">Page 1</Link>
            </li>
            <li class="nav-item">
              <Link to="/page2" class="nav-link">Page 2</Link>
            </li>
            <li class="nav-item">
              <Link to="/page3" class="nav-link">Page 3</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

      <Outlet />
    </>
  )
};

export default Layout;