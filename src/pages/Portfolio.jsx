import { Link } from 'react-router-dom';
import '../css/portfolio.css';
import { PropTypes } from 'prop-types';

Project.propTypes = {
    srcImg: PropTypes.string,
    altImg: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    linkTitle: PropTypes.string,
    projectLink: PropTypes.string,
    githubLink: PropTypes.string,
    websiteLink: PropTypes.string,
    technology: PropTypes.string
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
                <p className="portfolio__achievement-text card-footer">{props.technology}</p>
            </article>
        </div>
    ); 
}

export default function Portfolio() {
    return (
        <main className="portfolio">
            <div className='portfolio__banner'></div>
            <h1 className='portfolio__title text-uppercase'>Portfolio</h1>
            <p className='portoflio__principal-text'>Voici quelques-unes de mes réalisations.</p>
            <div className='portfolio__line'></div>
            <div className='portfolio__achievement-list row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'>
                <Project
                    srcImg="/assets/img/portfolio/knowledge.jpg"
                    altImg="Screenshot du site knowledge. On y voit en haut l'en-tête sur fond bleu clair avec le logo de l'entreprise dans la partie supérieure et le menu de navigation sur la partie basse. Sous l'en-tête, on peut voir le texte du contenu de la page d'accueil."
                    title="Knowledge"
                    description="Réalisation d'une plateforme d'e-learning."
                    linkTitle="Knowledge"
                    projectLink="/projet/knowledge/"
                    githubLink="https://github.com/fb-lb/CEF_devoirs_knowledge-front"
                    websiteLink="https://fb-lb.github.io/CEF_devoirs_knowledge-front/"
                    technology="Site réalisé avec Angular, Express et MySQL"
                />
                <Project
                    srcImg="/assets/img/portfolio/stubborn.jpg"
                    altImg="Screenshot du site stubborn. On y voit en haut à gauche le logo du site sur fond gris. En-dessous, il y a les trois pulls mis en avant sur la page d'accueil."
                    title="Stubborn"
                    description="Réalisation d'une application e-commerce."
                    linkTitle="Stubborn"
                    projectLink="/projet/stubborn/"
                    githubLink="https://github.com/fb-lb/CEF_devoirs_stubborn"
                    websiteLink="https://hyle.alwaysdata.net/"
                    technology="Site réalisé avec Symfony (fullstack) et MySQL"
                />
                <Project
                    srcImg="/assets/img/portfolio/mediatheque.jpg"
                    altImg="Screenshot du site de la médiathèque. On y voit le texte présent sur la page d'accueil."
                    title="Médiathèque"
                    description="Réalisation d'une application pour des réservations de médias."
                    linkTitle="Médiathèque"
                    projectLink="/projet/mediatheque/"
                    githubLink="https://github.com/fb-lb/CEF_devoirs_mediatheque"
                    websiteLink="https://cef-devoirs-mediatheque.onrender.com/"
                    technology="Site réalisé avec Django et MySQL"
                />
                <Project
                    srcImg="/assets/img/portfolio/catway.jpg"
                    altImg="Screenshot du site catway. On y voit le texte présent sur la page d'accueil."
                    title="Catway API"
                    description="Réalisation d'une API pour des réservations de quai d'amarrage dans un port."
                    linkTitle="Catway API"
                    projectLink="/projet/catway-api/"
                    githubLink="https://github.com/fb-lb/CEF_devoirs_catway-api"
                    websiteLink="https://catway-api.onrender.com/"
                    technology="Site réalisé avec Express et EJS (+ SwaggerHub)"
                />
                <Project
                    srcImg="/assets/img/portfolio/trouve-ton-artisan.jpg"
                    altImg="Screenshot du site Trouve ton artisan. On y voit en haut l'en-tête contenant une barre de recherche et les différentes catégories des artisans. Sous l'en-tête, on peut voir la photo d'un paysage avec un lac au premier plan et des montagnes au second plan. Sous l'image il y a un schéma des étapes pour trouver son artisan sur le site."
                    title="Trouve ton artisan !"
                    description="Réalisation d'une plateforme pour trouver et contacter un artisan."
                    linkTitle="Trouve ton artisan !"
                    projectLink="/projet/trouve-ton-artisan/"
                    githubLink="https://github.com/fb-lb/CEF_devoirs_trouve-ton-artisan"
                    websiteLink="https://fb-lb.github.io/CEF_devoirs_trouve-ton-artisan/"
                    technology="Site réalisé avec Angular (+ Tailwind CSS, Sentry, EmailJS)"
                />
                <Project
                    srcImg="/assets/img/portfolio/au-petit-village.jpg"
                    altImg="Screenshot du site au petit village. On y voit de haut en bas le logo du site, la phrase d'accueil du site, les personnages du village d'Astérix. En-dessous à gauche, il y a un texte et à droite une image du village d'Astérix entourée d'un halo vert."
                    title="Au Petit Village"
                    description="Réalisation du front-end d'une application e-commerce."
                    linkTitle="Au Petit Village"
                    projectLink="/projet/au-petit-village/"
                    githubLink="https://github.com/fb-lb/CEF_devoirs_au-petit-village"
                    websiteLink="https://fb-lb.github.io/CEF_devoirs_au-petit-village/"
                    technology="Site réalisé avec Angular"
                />
                <Project
                    srcImg="/assets/img/portfolio/portfolio-2.jpg"
                    altImg="Screenshot du site du portfolio actuel. On y voit en haut une illustration sombre d'un homme assis sur une chaise avec un casque et devant un écran d'ordinateur. En dessous à gauche, on voit le texte présent sur la page d'accueil du portfolio et à droite, la tête d'un homme de profil regardant vers la gauche."
                    title="Portfolio actuel"
                    description="Réalisation d'un vitrine."
                    linkTitle="Portfolio actuel"
                    projectLink="/projet/portfolio-2/"
                    githubLink="https://github.com/fb-lb/fb-lb.github.io"
                    websiteLink="https://fb-lb.github.io/"
                    technology="Site réalisé avec React"
                />
                <Project
                    srcImg="/assets/img/portfolio/portfolio-1.jpg"
                    altImg="Screenshot du site du premier portfolio. On y voit une photo d'un homme brun. Les couleurs du fonds sont des teintes bleues."
                    title="Premier portfolio"
                    description="Réalisation d'un site One Page."
                    linkTitle="premier Portfolio"
                    projectLink="/projet/portfolio-1/"
                    githubLink="https://github.com/fb-lb/CEF_devoirs_portfolio"
                    websiteLink="https://fb-lb.github.io/CEF_devoirs_portfolio/"
                    technology="Site réalisé avec Vue.js"
                />
                <Project
                    srcImg="/assets/img/portfolio/cv.jpg"
                    altImg="Screenshot du site contenant le CV. On y voit une photo d'un homme brun. Les couleurs du fonds sont blanc et rouge."
                    title="Curriculum Vitæ"
                    description="Réalisation d'un CV en HTML et CSS."
                    linkTitle="CV"
                    projectLink="/projet/cv/"
                    githubLink="https://github.com/fb-lb/CEF_devoirs_cv"
                    websiteLink="https://fb-lb.github.io/CEF_devoirs_cv/"
                    technology="Site réalisé en HTML/CSS"
                />
            </div>
        </main>
    );
}