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
        <div className='portfolio__achievement col'>
            <article className="card text-center">
                <img src={props.srcImg} className="card-img-top" alt={props.altImg}/>
                <div className="card-body">
                    <h2 className="portfolio__achievement-title card-title">{props.title}</h2>
                    <p className="portfolio__achievement-text card-text mb-4">{props.description}</p>
                    <div className='d-flex justify-content-evenly mb-3 gap-3'>
                        <Link className="btn btn-outline-primary" title={"En savoir plus sur le projet " + props.linkTitle} to={props.projectLink}>En savoir plus</Link>
                        <a className="btn btn-outline-primary" title={"Accéder au dépôt GitHub du projet " + props.linkTitle} href={props.githubLink} target="_blank" rel="noreferrer nofollow">Dépôt GitHub</a>
                    </div>
                    <a className="btn btn-outline-primary" title={"Accéder au site web du projet " + props.linkTitle} href={props.websiteLink} target="_blank" rel="noreferrer nofollow">Site</a>     
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
            <p className='portoflio__principal-text'>Voici quelques-unes de mes réalisations.</p>
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