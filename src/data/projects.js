const projects = {
    knowledge: {
        name: "Knowledge",
        image: {
            source: "",
            alternative: "une image",
        },
        descriptions: [
            [
                {type: "text", content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida lorem ante, hendrerit euismod ante feugiat in. Proin ut ante tempor, ullamcorper dolor vitae, interdum metus. Nam lobortis nisi id dui interdum laoreet sit amet sed lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean diam quam, sodales at fermentum nec, aliquet et erat. Morbi volutpat pretium consequat. Nullam accumsan orci justo, et varius libero fringilla a. Phasellus maximus, mi at porttitor tincidunt, tortor turpis feugiat odio, in tincidunt lectus sem ut lorem." },
            ],
            [
                {type: 'text', content: "Vestibulum aliquet mi hendrerit risus tempor egestas. Sed aliquet orci eu magna sagittis interdum eget aliquam tortor. Vestibulum scelerisque et massa quis accumsan. Etiam nunc est, pulvinar id lorem eget, laoreet tempus mauris. Nunc porttitor ornare ex, in dapibus neque sollicitudin luctus. Etiam consectetur efficitur consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus metus fringilla neque dignissim ultrices. Aenean semper laoreet leo nec bibendum."},
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
}

export default projects;