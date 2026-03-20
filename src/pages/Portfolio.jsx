import { Link } from 'react-router-dom';
import '../css/portfolio.css';
import { PropTypes } from 'prop-types';
import projects from '../data/projects';

Project.propTypes = {
    srcImg: PropTypes.string,
    altImg: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    linkTitle: PropTypes.string,
    projectLink: PropTypes.string,
    githubLink: PropTypes.string,
    websiteLink: PropTypes.string,
    stack: PropTypes.string
  };

function Project(props) {
    return (
        <div className='portfolio__achievement'>
            <article className="card text-center">
                <img src={props.srcImg} className="card-img-top" alt={props.altImg}/>
                <div className="card-body d-flex flex-column">
                    <h2 className="portfolio__achievement-title card-title">{props.title}</h2>
                    <p className="portfolio__achievement-text card-text mb-4 flex-grow-1">{props.description}</p>
                    <div className='d-flex justify-content-evenly mb-3 gap-3'>
                        <Link className="btn btn-outline-primary" title={"En savoir plus sur le projet " + props.linkTitle} to={props.projectLink}>En savoir plus</Link>
                        <a className="btn btn-outline-primary" title={"Accéder au dépôt GitHub du projet " + props.linkTitle} href={props.githubLink} target="_blank" rel="noreferrer nofollow">Dépôt GitHub</a>
                    </div>
                    <a className="btn btn-outline-primary mx-auto" title={"Accéder au site web du projet " + props.linkTitle} href={props.websiteLink} target="_blank" rel="noreferrer nofollow">Site</a>     
                </div>
                <p className="portfolio__achievement-text card-footer"><strong>Stack principale</strong><br/>{props.stack}</p>
            </article>
        </div>
    ); 
}

const projectsArray = Object.entries(projects);

export default function Portfolio() {
    return (
        <main className="portfolio">
            <div className='portfolio__banner'></div>
            <h1 className='portfolio__title text-uppercase'>Portfolio</h1>
            <p className='portoflio__principal-text'>Vous trouverez ci-dessous quelques-unes de mes réalisations personnelles.</p>
            <p className='portoflio__principal-text'>Chacun des projets présentés est <strong className='portoflio__principal-text portoflio__principal-text--strong'>hébergé</strong> et donc consultable en ligne. Le <strong className='portoflio__principal-text portoflio__principal-text--strong'>dépôt GitHub</strong> de chacun de ces projets aussi consultable. Une présentation de chaque projet et de sa stack est aussi disponible en cliquant sur &quot;En savoir plus&quot;.</p>
            <p className='portoflio__principal-text mt-3'>L&apos;ensemble des informations présentes dans ces projets sont fictives.</p>
            <p className='portoflio__principal-text'>N&apos;hésitez à intéragir avec les CRUD des comptes administrateurs (quand il y en a) car je peux rétablir les bases de données avec des fixtures en cas de besoin.</p>
            <div className='portfolio__line'></div>
            <div className='portfolio__achievement-list row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'>
                { projectsArray.map((project, index) => (
                    <Project
                        key={ index }
                        srcImg={ project[1].portfolioImage.source }
                        altImg={ project[1].portfolioImage.alternative }
                        title={ project[1].name }
                        description={ project[1].shortDescription }
                        linkTitle={ project[1].name }
                        projectLink={"/projet/" +  project[1].slug + "/"}
                        githubLink={ project[1].links.github }
                        websiteLink={ project[1].links.website }
                        stack={ project[1].stack.join(' / ') }
                    />
                )) }
            </div>
        </main>
    );
}