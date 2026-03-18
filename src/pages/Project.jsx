import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";

export default function Project() {
    const { projectSlug } = useParams();
    const project = projects[projectSlug];

    return(
        <main>
            <div>
                <Link to='/portfolio'>Retour à la liste des projets</Link>
                <p>{'>'}</p>
                <p>{project.name}</p>
            </div>
            <div>
                <img src={project.image.source} alt={project.image.alternative}/>
                <section>
                    <h1>Présentation du projet {project.name}</h1>
                    <section>
                        <h2>Description</h2>
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
                                    >
                                        {d[i].content}
                                    </a>
                                )
                            }
                            return<li key={index}>{contents}</li>
                        })}
                        
                    </section>
                    <section>
                        <h3>Liste des technologies utilisées :</h3>
                        <ul>
                            {project.technologies.map((t, index) => (
                                <li key={index}>{t}</li>
                            ))}
                        </ul>
                    </section>
                    <section>
                        <h3>Remarques :</h3>
                        <ul>
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
                                        >
                                            {n[i].content}
                                        </a>
                                    );
                                }
                                return <li key={index}>{contents}</li>
                            })}
                        </ul>
                    </section>
                    <div>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">Voir le dépôt GitHub</a>
                        <a href={project.links.website} target="_blank" rel="noopener noreferrer">Accéder au site web</a>
                    </div>
                </section>
            </div>
        </main>
    );
}