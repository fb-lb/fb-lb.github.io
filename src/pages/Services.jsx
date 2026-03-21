import '../css/services.css';

export default function Services() {

    // Change icon color while hovering corresponding service
    
    function hover(e) {
        let path = document.getElementById(e.target.children[0].children[0].id);
        path.setAttribute('fill', "#cde1f8");
    }

    function noHover(e) {
        let path = document.getElementById(e.target.children[0].children[0].id);
        path.setAttribute('fill', "#0d6efd");
    }

    return (
        <main className="services">
            <div className='services__banner'></div>
            <h1 className='services__h1 text-uppercase'>Mon offre de services</h1>
            <p className='services__principal-text'>Voici les domaines sur lesquels je peux intervenir.</p>
            <div className='services__line'></div>
            <div className='services__list'>
                <section className='services__service' onMouseEnter={hover} onMouseLeave={noHover}>
                    <svg className='services__icon-service' xmlns="http://www.w3.org/2000/svg" height="40" width="45" viewBox="0 0 576 512">
                        {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                        <path id='1' fill="#0d6efd" d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 288L64 352 64 64l448 0z"/>
                    </svg>
                    <h2 className='services__h2 text-uppercase'>UX Design</h2>
                    <p className='services__text-service'>J&apos;ai réalisé des <strong>wireframes</strong> et des <strong>prototypes</strong> à l&apos;aide de <span className='services__underline-text'>Figma</span>.</p>
                </section>
                <section className='services__service' onMouseEnter={hover} onMouseLeave={noHover}>
                    <svg className='services__icon-service' xmlns="http://www.w3.org/2000/svg" height="40" width="31" viewBox="0 0 384 512">
                        {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                        <path id='2' fill="#0d6efd" d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM153 289l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L71 337c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM265 255l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/>
                    </svg>
                    <h2 className='services__h2 text-uppercase'>Front-end</h2>
                    <p className='services__text-service'>Pour le front-end, je peux utiliser du <span className='services__underline-text'>HTML/CSS/JS</span> classique ainsi que des <strong>frameworks front-end</strong> tel que <span className='services__underline-text'>React</span>, <span className='services__underline-text'>Angular</span> et <span className='services__underline-text'>Vue.js</span>.</p>
                </section>
                <section className='services__service' onMouseEnter={hover} onMouseLeave={noHover}>
                    <svg className='services__icon-service' xmlns="http://www.w3.org/2000/svg" height="40" width="41" viewBox="0 0 640 640">
                        {/* <!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--> */}
                        <path id='3' fill="#0d6efd" d="M160 96C124.7 96 96 124.7 96 160L96 224C96 259.3 124.7 288 160 288L480 288C515.3 288 544 259.3 544 224L544 160C544 124.7 515.3 96 480 96L160 96zM376 168C389.3 168 400 178.7 400 192C400 205.3 389.3 216 376 216C362.7 216 352 205.3 352 192C352 178.7 362.7 168 376 168zM432 192C432 178.7 442.7 168 456 168C469.3 168 480 178.7 480 192C480 205.3 469.3 216 456 216C442.7 216 432 205.3 432 192zM160 352C124.7 352 96 380.7 96 416L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 416C544 380.7 515.3 352 480 352L160 352zM376 424C389.3 424 400 434.7 400 448C400 461.3 389.3 472 376 472C362.7 472 352 461.3 352 448C352 434.7 362.7 424 376 424zM432 448C432 434.7 442.7 424 456 424C469.3 424 480 434.7 480 448C480 461.3 469.3 472 456 472C442.7 472 432 461.3 432 448z"/>
                    </svg>
                    <h2 className='services__h2 text-uppercase'>Back-end</h2>
                    <p className='services__text-service'>Concernant le back-end, j&apos;ai réalisé des <strong>SSR (Server-Side-Rendering)</strong> en <span className='services__underline-text'>PHP (Symfony)</span> et <span className='services__underline-text'>Python (Django)</span> ainsi que des <strong>API</strong> <span className='services__underline-text'>NodeJS (Express)</span>.</p>
                </section>
                <section className='services__service' onMouseEnter={hover} onMouseLeave={noHover}>
                    <svg className='services__icon-service' xmlns="http://www.w3.org/2000/svg" height="40" width="41" viewBox="0 0 640 640">
                        {/* <!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--> */}
                        <path id='4' fill="#0d6efd" d="M544 269.8C529.2 279.6 512.2 287.5 494.5 293.8C447.5 310.6 385.8 320 320 320C254.2 320 192.4 310.5 145.5 293.8C127.9 287.5 110.8 279.6 96 269.8L96 352C96 396.2 196.3 432 320 432C443.7 432 544 396.2 544 352L544 269.8zM544 192L544 144C544 99.8 443.7 64 320 64C196.3 64 96 99.8 96 144L96 192C96 236.2 196.3 272 320 272C443.7 272 544 236.2 544 192zM494.5 453.8C447.6 470.5 385.9 480 320 480C254.1 480 192.4 470.5 145.5 453.8C127.9 447.5 110.8 439.6 96 429.8L96 496C96 540.2 196.3 576 320 576C443.7 576 544 540.2 544 496L544 429.8C529.2 439.6 512.2 447.5 494.5 453.8z"/>
                    </svg>
                    <h2 className='services__h2 text-uppercase'>Base de données</h2>
                    <p className='services__text-service'>Pour la conservation des informations, j&apos;ai eu l&apos;occasion d&apos;utiliser des bases de données <strong>relationnelles</strong> (<span className='services__underline-text'>MariaDB</span>) et <strong>non-relationnelles</strong> (<span className='services__underline-text'>MongoDB</span>).</p>
                </section>
            </div>
        </main>
    )
};