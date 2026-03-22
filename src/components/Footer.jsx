import "../css/footer.css";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import user from "../data/user.js";

export default function Footer() {
  const projectsArray = Object.entries(projects);

  return (
    <footer>
      <div>
        <section>
          <h4>
            {user.firstName} {user.lastName}
          </h4>
          <address>
            <p>
              {user.address.number} {user.address.street}
              <br />
              {user.address.postalCode} {user.address.city},{" "}
              {user.address.country}
            </p>
            <p>Téléphone : <a href={"tel:" + user.internationalPhone.join("")}>{user.phone.join(" ")}</a></p>
            <p>Mail : <a href={"mailto:" + user.mail}>{user.mail}</a></p>
          </address>
          <div className="footer__social-networks">
            <a
              title="GitHub"
              href={user.accounts.github}
              target="_blank"
              rel="noreferrer nofollow"
            >
              <i
                className="fa-brands fa-github fa-2xl"
                style={{ color: "#444444" }}
              ></i>
            </a>
            {/* <a title="Twitter" href="https://x.com/?lang=fr" target="_blank" rel="noreferrer nofollow"><i className="fa-brands fa-square-twitter fa-2xl" style={{color: '#444444'}}></i></a>
                        <a title="Linkedin" href="https://fr.linkedin.com/" target="_blank" rel="noreferrer nofollow"><i className="fa-brands fa-linkedin fa-2xl" style={{color: '#444444'}}></i></a> */}
          </div>
        </section>
        <section>
          <h4>Liens utiles</h4>
          <ul className="footer__link-list fa-ul">
            <li>
              <span className="footer__icon-list fa-li">
                <i
                  className="fa-solid fa-angle-right"
                  style={{ color: "#0d6efd" }}
                ></i>
              </span>
              <Link className="footer__link" to="/">
                Accueil
              </Link>
            </li>
            <li>
              <span className="footer__icon-list fa-li">
                <i
                  className="fa-solid fa-angle-right"
                  style={{ color: "#0d6efd" }}
                ></i>
              </span>
              <Link className="footer__link" to="/#about">
                A propos
              </Link>
            </li>
            <li>
              <span className="footer__icon-list fa-li">
                <i className="fa-solid fa-angle-right" style={{color: '#0d6efd'}}></i>
              </span>
              <Link className='footer__link' to="/services/">
                Services
              </Link>
            </li>
            <li>
              <span className="footer__icon-list fa-li">
                <i
                  className="fa-solid fa-angle-right"
                  style={{ color: "#0d6efd" }}
                ></i>
              </span>
              <Link className="footer__link" to="/contact/">
                Me contacter
              </Link>
            </li>
            <li>
              <span className="footer__icon-list fa-li">
                <i
                  className="fa-solid fa-angle-right"
                  style={{ color: "#0d6efd" }}
                ></i>
              </span>
              <Link className="footer__link" to="/mentions-legales/">
                Mentions légales
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h4>Mes dernières réalisations</h4>
          <ul className="footer__link-list fa-ul">
            {projectsArray.slice(0, 5).map((project, index) => (
              <li key={index}>
                <span className="footer__icon-list fa-li">
                  <i
                    className="fa-solid fa-angle-right"
                    style={{ color: "#0d6efd" }}
                  ></i>
                </span>
                <Link
                  className="footer__link"
                  to={"/projet/" + project[1].slug}
                >
                  {project[1].name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <small className="footer__copyright">
        &copy; Coded by {user.firstName} {user.lastName}
      </small>
    </footer>
  );
}
