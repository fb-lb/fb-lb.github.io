const projects = {
    knowledge: {
        name: "Knowledge",
        slug: "knowledge",
        projectImage: {
            sourcePortrait: "/assets/img/project/knowledge/knowledge-portrait.webp",
            sourceLandscape: "/assets/img/project/knowledge/knowledge-landscape.webp",
            alternative: "Capture d'écran de la page d'accueil du site web du projet knowledge.",
        },
        portfolioImage: {
            source: "/assets/img/portfolio/knowledge.jpg",
            alternative: "Screenshot du site knowledge. On y voit en haut l'en-tête sur fond bleu clair avec le logo de l'entreprise dans la partie supérieure et le menu de navigation sur la partie basse. Sous l'en-tête, on peut voir le texte du contenu de la page d'accueil.",
        },
        shortDescription: "Réalisation d'une plateforme d'e-learning.",
        longDescription: [
            [
                { type: "text", content : "Le site Knowledge est une plateforme d'e-learning où il est possible de créer un compte, de simuler l'achat de cours (via une version sandbox du module de paiement Stripe). A partir de là, il est possible d'accéder aux cours 'achetés' et de valider les leçons au fur et à mesure." },
            ],
            [
                { type: "text", content: "Par défaut l'identifiant et le mot de passe renseignés dans le formulaire de connexion permettent d'accéder à un compte administrateur (car c'est une version de présentation). Cet accès administrateur permet d'accéder à plusieurs interfaces back-offices qui sont des CRUD permettant de gérer les utilisateurs, les cours et les achats (= les accès que les utilisateurs ont à ces cours)." },
            ],
            [
                { type: "text", content: "Chaque partie et tout le fonctionnement du site est expliquée sur sa page d'accueil, vous pouvez accéder au site ainsi qu'au repository GitHub via les liens ci-dessous." },
            ],
            [
                { type: "text", content: "Les CRUD sont accès libre pour que vous puissiez les tester. Si besoin, je peux rétablir la base de données avec mes fixtures." },
            ],
        ],
        stack : ["Angular", "Express (TS)", "MariaDB"],
        technologies: [
            "Angular",
            "Express (en TypeScript)",
            "MariaDB",
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
        slug: "stubborn",
        projectImage: {
            sourcePortrait: "/assets/img/project/stubborn/stubborn-portrait.webp",
            sourceLandscape: "/assets/img/project/stubborn/stubborn-landscape.webp",
            alternative: "Capture d'écran de la page d'accueil du site web du projet stubborn.",
        },
        portfolioImage: {
            source: "/assets/img/portfolio/stubborn.jpg",
            alternative: "Screenshot du site stubborn. On y voit en haut à gauche le logo du site sur fond gris. En-dessous, il y a les trois pulls mis en avant sur la page d'accueil.",
        },
        shortDescription: "Réalisation d'une application e-commerce.",
        longDescription: [
            [
                { type: "text", content : "Le site Stubborn est un site e-commerce de sweat. Il est possible de créer un compte, de consulter la liste des sweats ainsi que les pages produits associées. Sur ces pages, on peut sélectionner la taille du sweat et l'ajouter à son panier. Ensuite on peut modifier son panier ou finaliser sa commande." },
            ],
            [
                { type: "text", content: "Par défaut l'identifiant et le mot de passe renseignés dans le formulaire de connexion permettent d'accéder à un compte administrateur (car c'est une version de présentation). Cet accès administrateur permet d'accéder à l'interface back-office qui sont des CRUD permettant de gérer les sweats, on peut y modifier les informations relatives aux sweats comme la photo du sweat, son prix, le stock selon les tailles ainsi que le fait de l'afficher ou non sur la page d'accueil." },
            ],
            [
                { type: "text", content: "N'hésitez pas à tester les CRUD de l'application, je possède des fixtures pour rétablir la base de données si besoin." },
            ],
        ],
        stack : ["Symfony", "MariaDB"],
        technologies: [
            "Symfony",
            "Twig template",
            "MariaDB",
            "Stripe",
        ],
        notes: [
            [
                { type : "text", content : "Application et base de données hébergées via Alwaysdata." },
            ],
        ],
        links: {
            github: "https://github.com/fb-lb/CEF_devoirs_stubborn",
            website: "https://hyle.alwaysdata.net/",
        }
    },
    mediatheque: {
        name: "Médiathèque",
        slug: "mediatheque",
        projectImage: {
            sourcePortrait: "/assets/img/project/mediatheque/mediatheque-portrait.webp",
            sourceLandscape: "/assets/img/project/mediatheque/mediatheque-landscape.webp",
            alternative: "Capture d'écran de la page d'accueil du site web du projet médiathèque.",
        },
        portfolioImage: {
            source: "/assets/img/portfolio/mediatheque.jpg",
            alternative: "Screenshot du site de la médiathèque. On y voit le texte présent sur la page d'accueil.",
        },
        shortDescription: "Réalisation d'une application pour des réservations de médias.",
        longDescription: [
            [
                { type: "text", content : "Le site de la Médiathèque est une plateforme de réservation de média (CD, DVD, livres, jeux de plateau)." },
            ],
            [
                { type: "text", content: "Sur le site, les emprunteurs peuvent consulter la liste des médias, voir s'ils sont disponibles ou non." },
            ],
            [
                { type: "text", content: "Quant aux bibliothécaires, ils peuvent se connecter via la page de connexion (identifiant et mot de passe renseignés par défaut dans cette version de présentation). Une fois connectés, ils accèdent aux interfaces back-offices qui sont des CRUD permettant de gérer les médias, les emprunteurs et les emprunts." },
            ],
            [
                { type: "text", content: "Il y a certaines conditions aux emprunts :\n- une personne ne peut emprunter que 3 médias à la fois,\n- un emprunt ne peut pas excéder une semaine, si cela arrive, l'utilisateur est interdit d'emprunt tant qu'il n'a pas retourné le média en retard,\n- les jeux de plateau ne peuvent pas être empruntés." },
            ],
            [
                { type: "text", content: "Ici je me suis concentré plutôt sur l'aspect back-end / contraintes métiers de l'application plutôt que sur la partie front-end." },
            ],
            [
                { type: "text", content: "Vous pouvez accéder au site ainsi qu'au repository GitHub via les liens ci-dessous." },
            ],
            [
                { type: "text", content: "N'hésitez pas à utiliser les CRUD pour tester l'application, j'ai des fixtures pour rétablir la base de données si besoin." },
            ],
        ],
        stack : ["Django", "MariaDB"],
        technologies: [
            "Django",
            "MariaDB",
        ],
        notes: [
            [
                { type : "text", content : "Application hébergée via Render." },
            ],
            [
                { type : "text", content : "Base de données hébergée via Aiven." },
            ],
        ],
        links: {
            github: "https://github.com/fb-lb/CEF_devoirs_mediatheque",
            website: "https://cef-devoirs-mediatheque.onrender.com/",
        }
    },
    "catway-api": {
        name: "Catway API",
        slug: "catway-api",
        projectImage: {
            sourcePortrait: "/assets/img/project/catway-api/catway-api-portrait.webp",
            sourceLandscape: "/assets/img/project/catway-api/catway-api-landscape.webp",
            alternative: "Capture d'écran de la page d'accueil du site web du projet catway api.",
        },
        portfolioImage: {
            source: "/assets/img/portfolio/catway.jpg",
            alternative: "Screenshot du site catway. On y voit le texte présent sur la page d'accueil.",
        },
        shortDescription: "Réalisation d'une API pour des réservations de quai d'amarrage dans un port.",
        longDescription: [
            [
                { type: "text", content : "Le site du projet Catway-API est une plateforme de réservation de ponton d'amarrage dans un port." },
            ],
            [
                { type: "text", content : "Ce site est réservé aux personnes travaillant à la capitainerie d'où l'interface de connexion (un nom d'utilisateur et un mot de passe sont renseignés par défaut pour cette version de présentation)." },
            ],
            [
                { type: "text", content : "Une fois connecté, il est possible d'accéder au tableau de bord où l'on peut ajouter / modifier / supprimer des utilisateurs, des pontons d'amarrage (= catway) et les réservations. Il y a aussi des pages pour consulter la liste des pontons d'amarrage et la liste des réservations." },
            ],
            [
                { type: "text", content : "N'hésitez pas à ajouter / modifier / supprimer des catways et des réservations. Des fixtures me permettent de rétablir la base de données si besoin." },
            ],
        ],
        stack : ["Express", "EJS Template"],
        technologies: [
            "Express",
            "EJS Template",
            "MongoDB",
            "SwaggerHub",
        ],
        notes: [
            [
                { type : "text", content : "Application hébergée via Render." },
            ],
            [
                { type : "text", content : "Base de données hébergée via MongoDB Atlas." },
            ],
        ],
        links: {
            github: "https://github.com/fb-lb/CEF_devoirs_catway-api/",
            website: "https://catway-api.onrender.com/",
        }
    },
    "trouve-ton-artisan": {
        name: "Trouve ton artisan !",
        slug: "trouve-ton-artisan",
        projectImage: {
            sourcePortrait: "/assets/img/project/trouve-ton-artisan/trouve-ton-artisan-portrait.webp",
            sourceLandscape: "/assets/img/project/trouve-ton-artisan/trouve-ton-artisan-landscape.webp",
            alternative: "Capture d'écran de la page d'accueil du site web du projet trouve ton artisan.",
        },
        portfolioImage: {
            source: "/assets/img/portfolio/trouve-ton-artisan.jpg",
            alternative: "Screenshot du site Trouve ton artisan. On y voit en haut l'en-tête contenant une barre de recherche et les différentes catégories des artisans. Sous l'en-tête, on peut voir la photo d'un paysage avec un lac au premier plan et des montagnes au second plan. Sous l'image il y a un schéma des étapes pour trouver son artisan sur le site.",
        },
        shortDescription: "Réalisation d'une plateforme de mise en relation entre artisans et particuliers.",
        longDescription: [
            [
                { type: "text", content : "Le site \"Trouve ton artisan !\" est une plateforme de mise en relation entre particuliers et artisans." },
            ],
            [
                { type: "text", content : "Il est possible de retrouver un artisan en sélectionnant une catégorie (Bâtiment, Services, Fabrication, Alimentation) ou via une barre de recherche." },
            ],
            [
                { type: "text", content : "Chaque artisan possède une fiche de description avec un accès vers son site web ainsi qu'un formulaire de contact." },
            ],
            [
                { type: "text", content : "Ici je me suis concentré sur la partie front-end de l'application qui est une Single Page Application. Il n'y a pas de back-end, les informations relatives aux artisans sont stockées dans un fichier json." },
            ],
        ],
        stack : ["Angular"],
        technologies: [
            "Angular",
            "Tailwind CSS",
            "EmailJS",
            "Sentry",
            "FontAwesome",
        ],
        notes: [
            [
                { type : "text", content : "Front-end hébergé via GitHub Pages." },
            ],
            [
                { type : "text", content : "Tous les noms d'entreprise, les e-mails et les sites web des artisans sont fictifs." },
            ],
        ],
        links: {
            github: "https://github.com/fb-lb/CEF_devoirs_trouve-ton-artisan",
            website: "https://fb-lb.github.io/CEF_devoirs_trouve-ton-artisan/",
        }
    },
    "au-petit-village": {
        name: "Au petit village",
        slug: "au-petit-village",
        projectImage: {
            sourcePortrait: "/assets/img/project/au-petit-village/au-petit-village-portrait.webp",
            sourceLandscape: "/assets/img/project/au-petit-village/au-petit-village-landscape.webp",
            alternative: "Capture d'écran de la page d'accueil du site web du projet au petit village.",
        },
        portfolioImage: {
            source: "/assets/img/portfolio/au-petit-village.jpg",
            alternative: "Screenshot du site au petit village. On y voit de haut en bas le logo du site, la phrase d'accueil du site, les personnages du village d'Astérix. En-dessous à gauche, il y a un texte et à droite une image du village d'Astérix entourée d'un halo vert.",
        },
        shortDescription: "Réalisation du front-end d'une application e-commerce.",
        longDescription: [
            [
                { type: "text", content : "Le site \"Au petit village\" est la partie front-end (en Single Page Application) d'un site e-commerce de figurines d'Astérix et Obélix." },
            ],
            [
                { type: "text", content : "Sur la page d'accueil on peut voir toutes les figurines vendues. Il est possible de trier les figurines selon leur prix ou via une barre de recherche." },
            ],
            [
                { type: "text", content : "Une fiche produit est disponible pour chacune des figurines avec une description et la possibilité de spécifier la quantité voulue avant d'ajouter au panier." },
            ],
            [
                { type: "text", content : "En réalité il n'y a pas de panier sur cette application car je me suis focalisé sur la partie front-end. Il n'y a donc pas de back-end et les informations relatives aux figurines sont stockées dans un service Angular." },
            ],
        ],
        stack : ["Angular"],
        technologies: [
            "Angular",
            "FontAwesome",
        ],
        notes: [
            [
                { type : "text", content : "Front-end hébergé via GitHub Pages." },
            ],
        ],
        links: {
            github: "https://github.com/fb-lb/CEF_devoirs_au-petit-village",
            website: "https://fb-lb.github.io/CEF_devoirs_au-petit-village/",
        }
    },
    "portfolio-2": {
        name: "Portfolio actuel",
        slug: "portfolio-2",
        projectImage: {
            sourcePortrait: "/assets/img/project/portfolio-2/portfolio-2-portrait.webp",
            sourceLandscape: "/assets/img/project/portfolio-2/portfolio-2-landscape.webp",
            alternative: "Capture d'écran de la page d'accueil du site web du projet portfolio 2.",
        },
        portfolioImage: {
            source: "/assets/img/portfolio/portfolio-2.jpg",
            alternative: "Screenshot du site du portfolio actuel. On y voit en haut une illustration sombre d'un homme assis sur une chaise avec un casque et devant un écran d'ordinateur. En dessous à gauche, on voit le texte présent sur la page d'accueil du portfolio et à droite, la tête d'un homme de profil regardant vers la gauche.",
        },
        shortDescription: "Réalisation d'un site vitrine.",
        longDescription: [
            [
                { type: "text", content : "Le site du portfolio actuel est le site sur lequel vous vous trouvez. Il s'agit uniquement d'une Single Page Application, les informations relatives aux projets sont présentes dans un fichier js." },
            ],
        ],
        stack : ["React"],
        technologies: [
            "React",
            "Bootstrap",
            "EmailJS",
            "FontAwesome",
        ],
        notes: [
            [
                { type : "text", content : "Front-end hébergé via GitHub Pages." },
            ],
        ],
        links: {
            github: "https://github.com/fb-lb/fb-lb.github.io",
            website: "https://fb-lb.github.io/",
        }
    },
    "portfolio-1": {
        name: "Premier Portfolio",
        slug: "portfolio-1",
        projectImage: {
            sourcePortrait: "/assets/img/project/portfolio-1/portfolio-1-portrait.webp",
            sourceLandscape: "/assets/img/project/portfolio-1/portfolio-1-landscape.webp",
            alternative: "Capture d'écran de la page d'accueil du site web du projet portfolio 1.",
        },
        portfolioImage: {
            source: "/assets/img/portfolio/portfolio-1.jpg",
            alternative: "Screenshot du site du premier portfolio. On y voit une photo d'un homme brun. Les couleurs du fonds sont des teintes bleues.",
        },
        shortDescription: "Réalisation d'un site One Page.",
        longDescription: [
            [
                { type: "text", content : "Le site du portfolio initial est un site One Page qui me permettait de présenter mes travaux en lien avec le développement web. Il a depuis été remplacé par le portfolio actuel, plus adapté à la présentation de mes projets web." },
            ],
        ],
        stack : ["Vue.js"],
        technologies: [
            "Vue.js",
        ],
        notes: [
            [
                { type : "text", content : "Front-end hébergé via GitHub Pages." },
            ],
        ],
        links: {
            github: "https://github.com/fb-lb/CEF_devoirs_portfolio",
            website: "https://fb-lb.github.io/CEF_devoirs_portfolio/",
        }
    },
    cv: {
        name: "Curriculum Vitæ",
        slug: "cv",
        projectImage: {
            sourcePortrait: "/assets/img/project/cv/cv-portrait.webp",
            sourceLandscape: "/assets/img/project/cv/cv-landscape.webp",
            alternative: "Capture d'écran de la page d'accueil du site web du curriculum vitae.",
        },
        portfolioImage: {
            source: "/assets/img/portfolio/cv.jpg",
            alternative: "Screenshot du site contenant le CV. On y voit une photo d'un homme brun. Les couleurs du fonds sont blanc et rouge.",
        },
        shortDescription: "Réalisation d'un CV en HTML et CSS.",
        longDescription: [
            [
                { type: "text", content : "Le site de mon CV représente mon premier projet HTML/CSS." },
            ],
        ],
        stack : ["HTML5", "CSS3"],
        technologies: [
            "HTML5",
            "CSS3",
        ],
        notes: [
            [
                { type : "text", content : "Front-end hébergé via GitHub Pages." },
            ],
            [
                { type : "text", content : "Merci de ne pas prendre en compte les informations présentes sur ce projet et de vous référer au CV que je vous ai transmis par mail." },
            ],
        ],
        links: {
            github: "https://github.com/fb-lb/CEF_devoirs_cv",
            website: "https://fb-lb.github.io/CEF_devoirs_cv/",
        }
    },
}

export default projects;