import '../css/contact.css';
import { useState } from 'react';
import user from '../data/user';

export default function Contact() {

    const mailAddress = import.meta.env.VITE_EMAIL;

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [tel, setTel] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    // Validity fields checking on form submission
    function handleSubmit(e){
        e.preventDefault();

        setName(name.trim());
        setMail(mail.trim());
        setSubject(subject.trim());
        setTel(tel.trim());
        setMessage(message.trim());

        if (name == "" || mail == "" || subject == "" || tel == "" || message == "") {
            alert("Merci de bien vouloir remplir tous les champs")
        } else if (!mail.includes('@')) {
            alert("L'E-mail doit contenir le caractère '@'");;
        } else if (mail.startsWith('@')) {
            alert("L'E-mail doit contenir une partie précédent le caractère '@'");
        } else if (mail.endsWith('@')) {
            alert("L'E-mail doit contenir une partie suivant le caractère '@'");
        } else if (mail.indexOf('@') != mail.lastIndexOf('@')) {
            alert("L'E-mail doit contenir un seul caractère '@'");
        } else {
            setName('');
            setMail('');
            setTel('');
            setSubject('');
            setMessage('');
            alert("Merci, votre mail a bien été envoyé à " + mailAddress);
        };
    }

    return(
        <main className="contact">
            <div className='contact__filter'>
                <div className='contact__content'>
                    <h1 className='contact__title text-uppercase'>Me contacter</h1>
                    <p className='contact__text'>Pour me contacter en vue d&apos;un entretien ou d&apos;une future collaboration, merci de remplir le formulaire de contact.</p>
                    <div className='contact__line'></div>
                    <div className='contact__block-sections'>
                        <section className='block-form'>
                            <h2 className='block-form__title'>Formulaire de contact</h2>  
                            <form className='block-form__form' action="#" method='post'>
                                <input className='form-control' name='name' type="text" placeholder='Votre nom' maxLength={70} value={name} onChange={e => setName(e.target.value)}/>
                                <input className='form-control' name='mail' type="email" placeholder='Votre adresse email' maxLength={70} value={mail} onChange={e => setMail(e.target.value)}/>
                                <input className='form-control' name='tel' type="tel" placeholder='Votre numéro de téléphone' maxLength={30} value={tel} onChange={e => setTel(e.target.value)}/>
                                <input className='form-control' name='subject' type="text" placeholder='Sujet' maxLength={100} value={subject} onChange={e => setSubject(e.target.value)}/>
                                <textarea className='block-form__form-message form-control' name="message" id="message" placeholder='Votre message' rows='4' maxLength='1500' value={message} onChange={e => setMessage(e.target.value)}></textarea>
                                <button className='btn btn-primary' type='submit' onClick={handleSubmit}>Envoyer</button>
                            </form>
                        </section>
                        <section className='block-address'>
                            <h2 className='block-address__title'>Mes coordonnées</h2>
                            <address className='block-address__address'>
                                <p className='block-address__address-text'><i className="fa-solid fa-location-dot" style={{color: '#444444'}}></i> {user.address.number} {user.address.street}, {user.address.postalCode} {user.address.city}, {user.address.country}</p>
                                <p className='block-address__address-text'><i className="fa-solid fa-mobile-screen-button" style={{color: '#444444'}}></i> {user.phone.join(' ')}</p>
                                <iframe className='block-address__map' src={user.iframeMapLink} width="100%" height="300" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </address>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}