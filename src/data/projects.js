const projects = {
    knowledge: {
        name: "Knowledge",
        image: {
            sourcePortrait: "/assets/img/project/knowledge/knowledge-portrait.webp",
            sourceLandscape: "/assets/img/project/knowledge/knowledge-landscape.webp",
            alternative: "une image",
        },
        descriptions: [
            [
                { type: "text", content : "Le site Knowledge est une plateforme d'e-learning où il est possible de créer un compte, de simuler l'achat de cours (via une version sandbox du module de paiement Stripe). A partir de là, il est possible d'accéder aux cours 'achetés' et de valider les leçons au fur et à mesure." },
                
                
            ],
            [
                { type: "text", content: "Par défaut l'identifiant et le mot de passe renseignés dans le formulaire de login permettent d'accéder à un compte administrateur (car c'est une version de présentation). Cet accès administrateur permet d'accéder à plusieurs interfaces back-offices qui sont des CRUD permettant de gérer les utilisateurs, les cours et les achats (= les accès que les utilisateurs ont à ces cours)." },
            ],
            [
                { type: "text", content: "Chaque partie et tout le fonctionnement du site est expliquée sur sa page d'accueil, vous pouvez accéder au site ainsi qu'au repository GitHub via les liens ci-dessous." },
            ],
        ],
        technologies: [
            "Angular",
            "Express (en TypeScript)",
            "MySQL",
            "EmailJS",
            "Stripe",
            "FontAwesome",
        ],
        notes: [
            [
                { type : "text", content : "Front-end hébergé via GitHub Pages." },
            ],
            [
                { type : "text", content : "Back-end hébergé via Render." },
            ],
            [
                { type : "text", content : "Base de données hébergée via Aiven." },
            ],
            [
                { type : "text", content : "Le back-end étant hébergé sur Render avec le plan gratuit. Cela implique qu'il est mis en veille après 5 minutes d'inactivité. Afin de profiter pleinement de l'expérience de l'application merci bien vouloir sortir le back-end de sa veille en cliquant " },
                { type : "link", content : "ici", source: "https://knowledge-back-jrzv.onrender.com/", target: "_blank" },
                { type: "text", content : " et d'attendre que la page affiche le message : \"Le back-end de l'application Knowledge est prêt à recevoir des requêtes.\" avant de vous rendre sur le front-end via le lien ci-dessous." },
            ],
            [
                { type: "text", content : "Le back-end de l'application est sur un repository différent de celui du front-end. Voici donc le lien vers " },
                { type : "link", content : "le dépôt GitHub du back-end", source: "https://github.com/fb-lb/CEF_devoirs_knowledge-back", target: "_blank" },
                { type: "text", content : "." },
            ],
        ],
        links: {
            github: "https://github.com/fb-lb/CEF_devoirs_knowledge-front",
            website: "https://fb-lb.github.io/CEF_devoirs_knowledge-front/",
        }
    },
    stubborn: {
        name: "Stubborn",
    },
    mediatheque: {
        name: "Médiathèque",
    },
    "catway-api": {
        name: "Catway API",
    },
    "trouve-ton-artisan": {
        name: "Trouve ton artisan !",
    },
    "au-petit-village": {
        name: "Au petit village",
    },
    "portfolio-2": {
        name: "Portfolio actuel",
    },
    "portfolio-1": {
        name: "premier Portfolio",
    },
    cv: {
        name: "CV",
    },
    test: {
        name: "Test",
        image: {
            sourcePortrait: "/assets/img/project/knowledge/knowledge-portrait.webp",
            sourceLandscape: "/assets/img/project/knowledge/knowledge-landscape.webp",
            alternative: "une image",
        },
        descriptions: [
            [
                { type: "text", content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida lorem ante, hendrerit euismod ante feugiat in. Proin ut ante tempor, ullamcorper dolor vitae, interdum metus. Nam lobortis nisi id dui interdum laoreet sit amet sed lorem. Class aptent taciti sociosqu ad " },
                { type : "link", content : "ceci est un lien", source: "", target: "" },
                { type: "text", content : " litora torquent per conubia nostra, per inceptos himenaeos. Aenean diam quam, sodales at fermentum nec, aliquet et erat. Morbi volutpat pretium consequat. Nullam accumsan orci justo, et varius libero fringilla a. Phasellus maximus, mi at porttitor tincidunt, tortor turpis feugiat odio, in tincidunt lectus sem ut lorem." },
            ],
            [
                { type: 'text', content: "Vestibulum aliquet mi hendrerit risus tempor egestas. Sed aliquet orci eu magna sagittis interdum eget aliquam tortor. Vestibulum scelerisque et massa quis accumsan. Etiam nunc est, pulvinar id lorem eget, laoreet tempus mauris. Nunc porttitor ornare ex, in dapibus neque sollicitudin luctus. Etiam consectetur efficitur consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus metus fringilla neque dignissim ultrices. Aenean semper laoreet leo nec bibendum." },
            ],
        ],
        technologies: [
            "Angular",
            "Express",
            "MySQL",
        ],
        notes: [
            [
                { type: "text", content : "Début remarque 1 " },
                { type : "link", content : "lien 1 remarque 1", source: "", target: "" },
                { type: "text", content : " " },
                { type : "link", content : "lien 2 remarque 1", source: "", target: "" },
                { type : "text", content : " fin remarque 1" },
            ],
            [
                { type : "text", content : "Début remarque 2 " },
                { type : "link", content : "lien 1 remarque 2", source: "", target: "" },
                { type: "text", content : " " },
                { type : "link", content : "lien 2 remarque 2", source: "", target: "" },
                { type : "text", content : " fin remarque 2" },
            ],
        ],
        links: {
            github: "https://github.com/fb-lb/CEF_devoirs_knowledge-front",
            website: "https://fb-lb.github.io/CEF_devoirs_knowledge-front/",
        }
    },
}

export default projects;