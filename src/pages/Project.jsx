import '../css/project.css';
import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";

export default function Project() {
    const { projectSlug } = useParams();
    const project = projects[projectSlug];

    return(
        <main className=" m-0 m-sm-2 mt-sm-0 m-lg-5 mt-lg-0 p-4 pt-3 p-sm-5 pt-sm-3 p-lg-5 pt-lg-3">
            <div className="breadcrumb-trail d-flex gap-2">
                <Link to='/portfolio' className="breadcrumb-trail__link text-primary">Retour à la liste des projets</Link>
                <span className='breadcrumb-trail__junction'>{'>'}</span>
                <p className='breadcrumb-trail__project'>{project.name}</p>
            </div>
            <div className="project">
                <h1 className="project__title">Présentation du projet &quot;{project.name}&quot;</h1>
                <div className='project__line'></div>
                <div className='project__container'>
                    <picture className="project__picture">
                        <source srcSet={project.image.sourcePortrait} media="(min-width: 993px)"/>
                        <img className="project__image" src={project.image.sourceLandscape} alt={project.image.alternative}/>
                    </picture>
                    <section className="project__info"> 
                        <section className="info__section description">
                            <h2 className="description__title">Description</h2>
                                {project.descriptions.map((d, index) => {
                                    const contents = [];
                                for (let i=0; i<d.length; i++) {
                                    if (d[i].type === 'text') contents.push(d[i].content);
                                    if (d[i].type === 'link') contents.push(
                                        <a
                                            key={i}
                                            href={d[i].source}
                                            target={d[i].target}
                                            rel={ d[i].target === "_blank" ? "noopener noreferrer" : undefined }
                                            className="description__link"
                                        >
                                            {d[i].content}
                                        </a>
                                    )
                                }
                                return<p key={index} className="description__paragraph">{contents}</p>
                                })}
                        </section>
                        <section className="info__section technology">
                            <h3 className="technology__title">Liste des technologies / services utilisées</h3>
                            <ul className="technology__list">
                                {project.technologies.map((t, index) => (
                                    <li key={index} className="technology__item">{t}</li>
                                ))}
                            </ul>
                        </section>
                        <section className="info__section note">
                            <h3 className="note__title">Remarques</h3>
                            <ul className="note__list">
                                {project.notes.map((n, index) => {
                                    const contents = [];

                                    for (let i=0; i<n.length; i++) {
                                        if(n[i].type === 'text') contents.push(n[i].content);
                                        if (n[i].type==='link') contents.push(
                                            <a 
                                                key={i} 
                                                href={n[i].source} 
                                                target={n[i].target} 
                                                rel={n[i].target === '_blank' ? "noopener noreferrer" : undefined}
                                                className="note__link"
                                            >
                                                {n[i].content}
                                            </a>
                                        );
                                    }
                                    return <li key={index} className="note__item">{contents}</li>
                                })}
                            </ul>
                        </section>
                        <div className="links">
                            <a href={project.links.github} className="links__link" target="_blank" rel="noopener noreferrer">Voir le dépôt GitHub</a>
                            <a href={project.links.website} className="links__link" target="_blank" rel="noopener noreferrer">Accéder au site web</a>
                        </div>
                    </section>
                </div> 
            </div>
        </main>
    );
}