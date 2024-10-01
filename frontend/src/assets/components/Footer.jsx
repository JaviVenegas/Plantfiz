
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-footer my-5">
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <Link className="btn btn-outline-light btn-floating m-1" to="#!">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link className="btn btn-outline-light btn-floating m-1" to="#!">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link className="btn btn-outline-light btn-floating m-1" to="#!">
              <i className="fab fa-google"></i>
            </Link>
            <Link className="btn btn-outline-light btn-floating m-1" to="#!">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link className="btn btn-outline-light btn-floating m-1" to="#!">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </section>
        </div>
        <div className="franja-footer text-center p-3">
          © 2020 Copyright:
          <Link className="text-white" to="/"> Planfiz</Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
