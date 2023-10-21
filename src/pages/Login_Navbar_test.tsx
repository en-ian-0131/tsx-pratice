import { Outlet, Link } from "react-router-dom";

function Login_Navbar_test() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">Home</li>
              <li className="nav-item">Link</li>
            </ul>
            <form className="d-flex  align-items-center" role="search">
              <span className="me-4">Name</span>

              <Link to="/login">
                <button className="btn btn-outline-success" type="submit">
                  登入
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Login_Navbar_test;
