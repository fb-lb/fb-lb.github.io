import { Link } from 'react-router-dom';
import '../css/home.css';
import user from '../data/user';

export default function Home() {
    return (
        <main className="home">
            <div className='principal'>
                <div className='principal__filter'>
                    <h1 className='principal__h1'>Bonjour, je suis {user.firstName} {user.lastName}</h1>
                    <h2 className='principal__h2'>Développeur web full stack</h2>
                    <Link to='/#about' className="principal__link btn btn-primary">En savoir plus</Link>
                </div>
            </div>
            <div className='about'>
                <div className='about__block'>
                    <h3 className='about__h3' id='about'>À propos</h3>
                    <p className='about__text'>Bienvenue sur mon portfolio. Vous trouverez ici les projets web que j&apos;ai personnellement développé.</p>
                    <p className='about__text'>Passionné par l&apos;informatique et les nouvelles technologies, j&apos;ai suivi
                        une formation de <strong className='about__strong-text'>développeur et web mobile</strong> au CEF (Centre Européen de Formation).
                        Au cours de cette formation, j&apos;ai pu acquérir des compétences solides pour
                        travailler dans le domaine du <strong className='about__strong-text'>développement web</strong>.
                    </p>
                    <p className='about__text'>Basé aux alentours de Rennes, je suis en recherche d&apos;un stage d&apos;une agence 
                        digitale pour concrétiser ma formation de <strong className='about__strong-text'>développeur web full stack</strong>.
                    </p>
                    <p className='about__text'>J&apos;accorde une attention particulière à la qualité du code que j&apos;écris 
                        et je respecte les bonnes pratiques du web.
                    </p>
                </div>
                <div className='about__block'>
                    <img className='about__image' alt="Homme d'environ 30 ans chatain clair avec de la barbe assis dans un bureau." src="/assets/img/about.jpg"/>
                    <h4 className='about__h4'>Mes compétences</h4>
                    <section className='about__skill'>
                        <h5 className='about__h5'>HTML 90%</h5>
                        <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-danger" style={{width: '90%'}}></div>
                        </div>
                    </section>
                    <section className='about__skill'>
                        <h5 className='about__h5'>CSS 90%</h5>
                        <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-info" style={{width: '90%'}}></div>
                        </div>
                    </section>
                    <section className='about__skill'>
                        <h5 className='about__h5'>JAVASCRIPT 85% (React, Angular, Vue.js)</h5>
                        <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-warning" style={{width: '85%'}}></div>
                        </div>
                    </section>
                    <section className='about__skill'>
                        <h5 className='about__h5'>PHP 80% (Symfony)</h5>
                        <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-success" style={{width: '80%'}}></div>
                        </div>
                    </section>
                    <section className='about__skill'>
                        <h5 className='about__h5'>PYTHON 80% (Django)</h5>
                        <div className="progress" role="progressbar" aria-label="Primary example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-primary" style={{width: '80%'}}></div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}