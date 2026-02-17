import { Link } from 'react-router-dom';
import '../css/not-found.css';

export default function Not_found() {

    return (
        <main className='not-found' >
            <h1>Page introuvable</h1>
            <img src="/assets/img/not_found.jpg" alt="Robot gris bleu qui ne fonctionne plus, sur fond bleu foncé avec 404 écrit en orange derrière le robot." />
            <p>La page demandée n&apos;existe pas, veuillez revenir à la page d&apos;accueil.</p>
            <Link to='/'>Revenir à la page d&apos;accueil</Link>
        </main>
    );
}