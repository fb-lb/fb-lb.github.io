import '../css/portfolio.css';
import { PropTypes } from 'prop-types';

Project.propTypes = {
    srcImg: PropTypes.string,
    altImg: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    linkTitle: PropTypes.string,
    link: PropTypes.string,
    technology: PropTypes.string
  };

function Project(props) {
    return (
        <div className='portfolio__achievement col'>
            <article className="card text-center">
                <img src={props.srcImg} className="card-img-top" alt={props.altImg}/>
                <div className="card-body">
                    <h2 className="portfolio__achievement-title card-title">{props.title}</h2>
                    <p className="portfolio__achievement-text card-text mb-3">{props.description}</p>
                    <a className="btn btn-outline-primary" title={"Accéder au site web du projet " + props.linkTitle} href={props.link} target="_blank" rel="noreferrer nofollow">Voir</a>     
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
                    link="https://fb-lb.github.io/CEF_devoirs_knowledge-front/"
                    technology="Site réalisé avec Angular, Express et MySQL"
                />
                <Project
                    srcImg="/assets/img/portfolio/stubborn.jpg"
                    altImg="Screenshot du site stubborn. On y voit en haut à gauche le logo du site sur fond gris. En-dessous, il y a les trois pulls mis en avant sur la page d'accueil."
                    title="Stubborn"
                    description="Réalisation d'une application e-commerce."
                    linkTitle="Stubborn"
                    link="https://hyle.alwaysdata.net/"
                    technology="Site réalisé avec Symfony (fullstack) et MySQL"
                />
                <Project
                    srcImg="/assets/img/portfolio/mediatheque.jpg"
                    altImg="Screenshot du site de la médiathèque. On y voit le texte présent sur la page d'accueil."
                    title="Médiathèque"
                    description="Réalisation d'une application pour des réservations de médias."
                    linkTitle="Médiathèque"
                    link="https://cef-devoirs-mediatheque.onrender.com/"
                    technology="Site réalisé avec Django et MySQL"
                />
                <Project
                    srcImg="/assets/img/portfolio/catway.jpg"
                    altImg="Screenshot du site catway. On y voit le texte présent sur la page d'accueil."
                    title="Catway API"
                    description="Réalisation d'une API pour des réservations de quai d'amarrage dans un port."
                    linkTitle="Catway API"
                    link="https://catway-api.onrender.com/"
                    technology="Site réalisé avec Express et EJS (+ SwaggerHub)"
                />
                <Project
                    srcImg="/assets/img/portfolio/trouve-ton-artisan.jpg"
                    altImg="Screenshot du site Trouve ton artisan. On y voit en haut l'en-tête contenant une barre de recherche et les différentes catégories des artisans. Sous l'en-tête, on peut voir la photo d'un paysage avec un lac au premier plan et des montagnes au second plan. Sous l'image il y a un schéma des étapes pour trouver son artisan sur le site."
                    title="Trouve ton artisan !"
                    description="Réalisation d'une plateforme pour trouver et contacter un artisan."
                    linkTitle="Trouve ton artisan !"
                    link="https://fb-lb.github.io/CEF_devoirs_trouve-ton-artisan/"
                    technology="Site réalisé avec Angular (+ Tailwind CSS, Sentry, EmailJS)"
                />
                <Project
                    srcImg="/assets/img/portfolio/au-petit-village.jpg"
                    altImg="Screenshot du site au petit village. On y voit de haut en bas le logo du site, la phrase d'accueil du site, les personnages du village d'Astérix. En-dessous à gauche, il y a un texte et à droite une image du village d'Astérix entourée d'un halo vert."
                    title="Au Petit Village"
                    description="Réalisation du front-end d'une application e-commerce."
                    linkTitle="Au Petit Village"
                    link="https://fb-lb.github.io/CEF_devoirs_au-petit-village/"
                    technology="Site réalisé avec Angular"
                />
                <Project
                    srcImg="/assets/img/portfolio/portfolio.jpg"
                    altImg="Screenshot du site du portfolio initial. On y voit une photo d'un homme brun. Les couleurs du fonds sont des teintes bleues."
                    title="Portfolio initial"
                    description="Réalisation d'un site One Page."
                    linkTitle="Portfolio initial"
                    link="https://fb-lb.github.io/CEF_devoirs_portfolio/"
                    technology="Site réalisé avec Vue.js"
                />
                <Project
                    srcImg="/assets/img/portfolio/cv.jpg"
                    altImg="Screenshot du site contenant le CV. On y voit une photo d'un homme brun. Les couleurs du fonds sont blanc et rouge."
                    title="Curriculum Vitæ"
                    description="Réalisation d'un CV en HTML et CSS."
                    linkTitle="CV"
                    link="https://fb-lb.github.io/CEF_devoirs_cv/"
                    technology="Site réalisé en HTML/CSS"
                />
            </div>
        </main>
    );
}