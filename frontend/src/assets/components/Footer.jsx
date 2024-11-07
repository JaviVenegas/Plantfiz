
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-footer my-5">
      <footer className="morado text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <Link className="btn btn-outline-light btn-floating" to="https://www.instagram.com/plantfiz/"> <FaInstagram size={28}/>
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
