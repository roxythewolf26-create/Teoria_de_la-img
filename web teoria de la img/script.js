const translations = {
    es: {
        logo: "Teoría de la Imagen",
        aboutContext: "01 / Contexto",
        aboutTitle: "Sobre el Proyecto",
        aboutLead: "Esta plataforma funciona como un archivo vivo y un catálogo crítico de los fundamentos conceptuales analizados durante el módulo de Teoría de la Imagen.",
        aboutBody: "A través de un ecosistema visual y una arquitectura limpia, la web deconstruye los mecanismos de la percepción, el análisis formal y semiótico del lenguaje audiovisual y el impacto sociocultural de la imagen técnica en la contemporaneidad. El fin no es almacenar teoría literal, sino demostrar la asimilación práctica mediante la jerarquía de la información.",
        objectivesTitle: "Objetivos del Módulo",
        obj1Strong: "1. Capacidad Analítica:",
        obj1Text: "Diseccionar las capas denotativas y connotativas de cualquier artefacto visual contemporáneo.",
        obj2Strong: "2. Sintaxis Visual:",
        obj2Text: "Comprender las dinámicas de composición, equilibrio, color y peso visual aplicados al diseño de interfaces.",
        obj3Strong: "3. Gestión del Conocimiento:",
        obj3Text: "Curar y referenciar de forma fidedigna las fuentes clave que cimientan la cultura visual actual.",
        
        block1Title: "BLOQUE 1",
        block2Title: "BLOQUE 2",
        visualEx: "Ejemplo Visual Interactivo",

        t1Title: "Tema 1 Comunicación visual y semiótica",
        t1Intro: "Este apartado introduce las bases de la comunicación visual a través del modelo de comunicación de Roman Jakobson y la semiótica de autores como Ferdinand de Saussure y Charles Sanders Peirce para la interpretación de signos visuales. Se desarrollan contenidos como:",
        t1_1Strong: "Modelo de Jakobson:",
        t1_1Text: "Estudio de las seis funciones del lenguaje (expresiva, apelativa, poética, referencial, fática y metalingüística) aplicadas al diseño gráfico contemporáneo.",
        t1_2Strong: "Estructura del Signo:",
        t1_2Text: "La división binaria de Saussure (significado y significante) frente a la tríada de Peirce (representamen, objeto e interprete), clasificando los signos en iconos, índices y símbolos.",
        t1_3Strong: "Retórica de la Imagen:",
        t1_3Text: "El análisis de Roland Barthes sobre los tres mensajes estructurales: el mensaje lingüístico (anclaje y relevo), el mensaje icónico denotado y el icónico connotado.",
        t1_4Strong: "Contexto y Audiencias:",
        t1_4Text: "Cómo las variaciones socio-culturales alteran la decodificación del mensaje visual según los modelos sociológicos de la comunicación de masas.",
        
        t2Title: "Tema 2 Retórica visual y análisis de la imagen",
        t2Intro: "Este tema analiza las figuras retóricas aplicadas a la imagen y su función persuasiva dentro de la comunicación visual, tomando como referencia los estudios de Jacques Durand sobre la retórica publicitaria. Se trabajan recursos como:",
        t2_1Strong: "Operaciones Retóricas:",
        t2_1Text: "Clasificación de Jacques Durand basada en operaciones de adjunción, supresión, sustitución y intercambio para generar metáforas, hipérboles, alegorías y elipsis visuales.",
        t2_2Strong: "Sintaxis de la Imagen:",
        t2_2Text: "Estudio de los elementos morfológicos básicos definidos por Donis A. Dondis: el punto, la línea, el contorno, la dirección, el tono, el color, la textura y la proporción.",
        t2_3Strong: "Técnicas Visuales:",
        t2_3Text: "Estrategias de comunicación visual contrapuestas como armonía/contraste, equilibrio/inestabilidad, simetría/asimetría, regularidad/irregularidad y economía/profusión.",
        t2_4Strong: "Composición y Peso:",
        t2_4Text: "Análisis de la distribución del color, la forma y la jerarquía de los elementos gráficos para dirigir activamente la mirada del espectador en interfaces digitales.",
        
        t3Title: "Tema 3 Teorías de la Gestalt",
        t3Intro: "Este apartado desarrolla los principios de percepción visual formulados por la escuela de la Gestalt (Max Wertheimer, Wolfgang Köhler y Kurt Koffka) y su aplicación directa en el diseño interactivo contemporáneo. Se explicarán principios como:",
        t3_1Strong: "Leyes Perceptivas Clave:",
        t3_1Text: "Análisis en profundidad de los principios de proximidad, semejanza, continuidad, cierre, simetría y la relación fundamental entre figura y fondo.",
        t3_2Strong: "Pensamiento Visual:",
        t3_2Text: "Concepto desarrollado por Rudolf Arnheim sobre cómo la mente procesa de forma integrada las estructuras visuales a través de fuerzas conceptuales de equilibrio y dinamismo.",
        t3_3Strong: "Aplicación en UX/UI:",
        t3_3Text: "Uso de los principios psicológicos para agrupar elementos en menús, diseñar botones intuitivos y optimizar la carga cognitiva de un usuario al navegar en la web.",
        t3Outro: "Además de la teoría, el apartado mostrará aplicaciones prácticas en disciplinas clave analizadas por teóricos como Rudolf Arnheim: diseño web, UX/UI, publicidad, identidad visual y composición gráfica.",
        
        t4Title: "Tema 4 Cultura visual y autoría",
        t4Intro: "Este tema reflexiona sobre la evolución de la imagen dentro de la cultura contemporánea y el cambio en el concepto tradicional de autor a partir de los Estudios de Cultura Visual (Nicholas Mirzoeff). Se abordarán ideas relacionadas con:",
        t4_1Strong: "Estudios de Cultura Visual:",
        t4_1Text: "Aproximación teórica de Nicholas Mirzoeff sobre la constante mediación visual de la experiencia global y el análisis de la imagen digitalizada en la era de internet.",
        t4_2Strong: "La Muerte del Autor:",
        t4_2Text: "Análisis del célebre ensayo de Roland Barthes, que desplaza el origen último del significado desde la intención del creador hacia la libre interpretación del lector.",
        t4_3Strong: "¿Qué es un Autor?:",
        t4_3Text: "El enfoque de Michel Foucault sobre la función-autor como un constructo social y jurídico que sirve para categorizar, delimitar y controlar la circulación de discursos.",
        t4_4Strong: "Apropiación Cultural:",
        t4_4Text: "Estudio sobre la reinterpretación colectiva de contenidos, el sampleado visual, los memes y las dinámicas horizontales de creación artística colaborativa.",
        
        t5Title: "Tema 5 Estética de la recepción",
        t5Intro: "Este apartado explora el papel activo del espectador en la interpretación de las imágenes y obras visuales, fundamentado en la Escuela de Constanza. A partir de las teorías de Hans Robert Jauss y Wolfgang Iser, se trabajarán conceptos como:",
        t5_1Strong: "Horizonte de Expectativas:",
        t5_1Text: "Concepto de Hans Robert Jauss que define el sistema de referencias culturales, históricos y estéticos compartidos que posee la audiencia al asimilar una obra.",
        t5_2Strong: "El Lector Implícito:",
        t5_2Text: "Teoría de Wolfgang Iser sobre la estructura del texto o imagen que invita al espectador a rellenar 'espacios vacíos' o indeterminaciones para completar el sentido del artefacto visual.",
        t5_3Strong: "Polisemia Visual:",
        t5_3Text: "Cómo una única pieza gráfica altera de forma fluida su significado basándose directamente en el entorno del receptor, rompiendo con la noción de una lectura única y objetiva.",
        
        t6Title: "Tema 6 Infografía y visualización de información",
        t6Intro: "Este tema introduce el concepto de infografía como herramienta de síntesis y comunicación visual, apoyándose en los principios de claridad de Edward Tufte y Alberto Cairo. Se trabajarán:",
        t6_1Strong: "Principios de Claridad:",
        t6_1Text: "La regla de Edward Tufte para maximizar el ratio dato-tinta, evitando el desorden decorativo innecesario ('chartjunk') que nubla la asimilación limpia de métricas.",
        t6_2Strong: "El Arte Funcional:",
        t6_2Text: "Metodología de Alberto Cairo que equilibra la estética rigurosa con la precisión informativa, concibiendo la infografía como una tecnología cognitiva adaptada al usuario.",
        t6_3Strong: "Arquitectura Gráfica:",
        t6_3Text: "Gestión avanzada de rejillas visuales, selección tipográfica proporcional, paletas cromáticas codificadas y uso estandarizado de familias iconográficas.",
        t6_4Strong: "Diseño Informativo:",
        t6_4Text: "Estrategias narrativas eficientes para convertir bases de datos abstractas y complejas en flujos visuales ordenados, legibles y funcionales.",
        
        t7Title: "Tema 7 Narrativa audiovisual y storytelling",
        t7Intro: "Este apartado analiza cómo la narrativa puede aplicarse al diseño visual y a la experiencia de navegación dentro de un producto digital, basándose en la psicología del diseño transmedia. Se desarrollarán contenidos relacionados con:",
        t7_1Strong: "Estructuras Narrativas:",
        t7_1Text: "Estudio del Viaje del Héroe de Joseph Campbell, adaptado por Christopher Vogler en las doce etapas estructurales del viaje del escritor aplicadas al diseño de interacción.",
        t7_2Strong: "Arquetipos Universales:",
        t7_2Text: "Uso práctico de los arquetipos de Carl Jung (el sabio, el héroe, el explorador, el rebelde) integrados en el diseño de interfaces digitales, branding corporativo y videojuegos.",
        t7_3Strong: "Storytelling e Interacción:",
        t7_3Text: "Cómo gestionar el ritmo visual, la secuencia del movimiento lineal, la interactividad inmersiva y la experiencia del usuario (UX) para dar coherencia al mensaje multimedia.",
        
        footerText: "Teoría de la Imagen"
    },
    ca: {
        logo: "Teoria de la Imatge",
        aboutContext: "01 / Context",
        aboutTitle: "Sobre el Projecte",
        aboutLead: "Aquesta plataforma funciona com un arxiu viu i un catàleg crític dels fonaments conceptuals analitzats durant el mòdul de Teoria de la Imatge.",
        aboutBody: "A través d'un ecosistema visual i una arquitectura neta, el web deconstrueix els mecanismes de la percepció, l'anàlisi formal i semiòtic del llenguatge audiovisual i l'impacte sociocultural de la imatge tècnica en la contemporaneïtat. El fi no és emmagatzemar teoria literal, sinó demostrar l'assimilació pràctica mitjançant la jerarquia de la informació.",
        objectivesTitle: "Objectius del Mòdul",
        obj1Strong: "1. Capacitat Analítica:",
        obj1Text: "Disseccionar les capes denotatives i connotatives de qualsevol artefacte visual contemporani.",
        obj2Strong: "2. Sintaxi Visual:",
        obj2Text: "Comprendre les dinàmiques de composició, equilibri, color i pes visual aplicats al disseny d'interfícies.",
        obj3Strong: "3. Gestió del Coneixement:",
        obj3Text: "Comissariar i referenciar de forma fidedigna les fonts clau que fonamenten la cultura visual actual.",
        
        block1Title: "BLOC 1",
        block2Title: "BLOC 2",
        visualEx: "Exemple Visual Interactiu",

        t1Title: "Tema 1 Comunicació visual i semiòtica",
        t1Intro: "Aquest apartat introdueix les bases de la comunicació visual a través del model de comunicació de Roman Jakobson i la semiòtica d'autors com Ferdinand de Saussure i Charles Sanders Peirce per a la interpretació de signes visuals. Es desenvolupen continguts com:",
        t1_1Strong: "Model de Jakobson:",
        t1_1Text: "Estudi de les sis funcions del llenguatge (expressiva, apel·lativa, poètica, referencial, fàtica i metalingüística) aplicades al disseny gràfic contemporani.",
        t1_2Strong: "Estructura del Signe:",
        t1_2Text: "La divisió binària de Saussure (significat i significant) enfront de la tríada de Peirce (representamen, objecte i intèrpret), classificant els signes en icones, índexs i símbols.",
        t1_3Strong: "Retòrica de la Imatge:",
        t1_3Text: "L'anàlisi de Roland Barthes sobre els tres missatges estructurals: el missatge lingüístic (ancoratge i relleu), l'icònic denotat i l'icònic connotat.",
        t1_4Strong: "Context i Audiències:",
        t1_4Text: "Com les variacions socio-culturals alteren la descodificació del missatge visual segons els models sociològics de la comunicació de masses.",
        
        t2Title: "Tema 2 Retòrica visual i anàlisi de la imatge",
        t2Intro: "Aquest tema analitza les figures retòriques aplicades a la imatge i la seva funció persuasiva dins de la comunicació visual, prenent com a referència els estudis de Jacques Durand sobre la retòrica publicitària. Es treballen recursos com:",
        t2_1Strong: "Operacions Retòriques:",
        t2_1Text: "Classificació de Jacques Durand basada en operacions d'adjunció, supressió, substitució i intercanvi per generar metàfores, hipèrboles, al·legories i el·lipsi visuals.",
        t2_2Strong: "Sintaxi de la Imatge:",
        t2_2Text: "Estudi dels elements morfològics bàsics definits per Donis A. Dondis: el punt, la línia, el contorn, la direcció, el to, el color, la textura i la proporció.",
        t2_3Strong: "Tècniques Visuals:",
        t2_3Text: "Estratègies de comunicació visual contraposades com harmonia/contrast, equilibri/inestabilitat, simetria/asimetria, regularitat/irregularitat i economia/profusió.",
        t2_4Strong: "Composició i Pes:",
        t2_4Text: "Anàlisi de la distribució del color, la forma i la jerarquia dels elements gràfics per dirigir activament la mirada de l'espectador en interfícies digitals.",

        t3Title: "Tema 3 Teories de la Gestalt",
        t3Intro: "Aquest apartat desenvolupa els principis de percepció visual formulats per l'escola de la Gestalt (Max Wertheimer, Wolfgang Köhler i Kurt Koffka) i la seva aplicació directa en el disseny interactiu contemporani. S'explicaran principis com:",
        t3_1Strong: "Lleis Perceptives Clau:",
        t3_1Text: "Anàlisi en profunditat dels principis de proximitat, semblança, continuïtat, tancament, simetria i la relació fonamental entre figura i fons.",
        t3_2Strong: "Pensamiento Visual:",
        t3_2Text: "Concepte desenvolupat per Rudolf Arnheim sobre com la ment processa de forma integrada les estructures visuals a través de forces conceptuals d'equilibri i dinamisme.",
        t3_3Strong: "Aplicació en UX/UI:",
        t3_3Text: "Ús dels principis psicològics per agrupar elements en menús, dissenyar botons intuïtius i optimitzar la càrrega cognitiva d'un usuari en navegar per la web.",
        t3Outro: "A més de la teoria, l'apartat mostrarà aplicacions pràctiques en disciplines clau analitzades per teòrics com Rudolf Arnheim: disseny web, UX/UI, publicitat, identitat visual i composició gràfica.",

        t4Title: "Tema 4 Cultura visual i autoria",
        t4Intro: "Aquest tema reflexiona sobre l'evolució de la imatge dins de la cultura contemporània i el canvi en el concepte tradicional d'autor a partir dels Estudis de Cultura Visual (Nicholas Mirzoeff). Es tractaran idees relacionades amb:",
        t4_1Strong: "Estudis de Cultura Visual:",
        t4_1Text: "Aproximació teòrica de Nicholas Mirzoeff sobre la constant mediació visual de la experiència global i l'anàlisi de la imatge digitalitzada en l'era d'internet.",
        t4_2Strong: "La Mort de l'Autor:",
        t4_2Text: "Anàlisi del famós assaig de Roland Barthes, que desplaça l'origen últim del significat des de la intenció del creador cap a la lliure interpretació del lector.",
        t4_3Strong: "Què és un Autor?:",
        t4_3Text: "L'enfocament de Michel Foucault sobre la funció-autor com un constructo social i jurídic que serveix per categoritzar, delimitar i controlar la circulació de discursos.",
        t4_4Strong: "Apropiació Cultural:",
        t4_4Text: "Estudi sobre la reinterpretació col·lectiva de continguts, el mostreig visual, els mems i les dinàmiques horitzontals de creació artística col·laborativa.",

        t5Title: "Tema 5 Estètica de la recepció",
        t5Intro: "Aquest apartat explora el paper actiu de l'espectador en la interpretació de les imatges i obres visuals, fonamentat en l'Escola de Constança. A partir de les teories de Hans Robert Jauss i Wolfgang Iser, es treballaran conceptes com:",
        t5_1Strong: "Horitzó d'Expectatives:",
        t5_1Text: "Concepte de Hans Robert Jauss que defineist el sistema de referències culturals, històrics i estètics compartits que posseeix l'audiència en assimilar una obra.",
        t5_2Strong: "El Lector Implícit:",
        t5_2Text: "Teoria de Wolfgang Iser sobre l'estructura del text o imatge que convida l'espectador a emplenar 'espais buits' o indeterminacions per completar el sentit de l'artefacte visual.",
        t5_3Strong: "Polisèmia Visual:",
        t5_3Text: "Com una única peça gràfica altera de forma fluida el seu significat basant-se directament en l'entorn del receptor, trencant amb la noció d'una lectura única i objectiva.",

        t6Title: "Tema 6 Infografía i visualització de informació",
        t6Intro: "Aquest tema introdueix el concepte d'infografia com a eina de síntesi i comunicació visual, recolzant-se en els principis de claredat d'Edward Tufte i Alberto Cairo. Es treballaran:",
        t6_1Strong: "Principios de Claredat:",
        t6_1Text: "La regla d'Edward Tufte per maximitzar la ràtio dada-tinta, evitant el desordre decoratiu innecessari ('chartjunk') que ennuvola l'assimilació neta de mètriques.",
        t6_2Strong: "L'Art Funcional:",
        t6_2Text: "Metodologia d'Alberto Cairo que equilibra l'estètica rigorosa amb la precisió informativa, concebent la infografia como una tecnologia cognitiva adaptada a l'usuari.",
        t6_3Strong: "Arquitectura Gráfica:",
        t6_3Text: "Gestió avançada de graelles visuals, selecció tipogràfica proporcional, paletes cromàtiques codificades i ús estandarditzat de famílies iconogràfiques.",
        t6_4Strong: "Disseny Informatiu:",
        t6_4Text: "Estratègies narratives eficients per convertir bases de dades abstractes i complexes en fluxos visuals ordenats, llegibles i funcionals.",

        t7Title: "Tema 7 Narrativa audiovisual i storytelling",
        t7Intro: "Aquest apartat analitza com la narrativa pot aplicar-se al disseny visual i a l'experiència de navegació dins d'un producte digital, basant-se en la psicologia del disseny transmèdia. Es desenvoluparan conceptes relacionats amb:",
        t7_1Strong: "Estructures Narratives:",
        t7_1Text: "Estudio del Viatge de l'Heroi de Joseph Campbell, adaptat per Christopher Vogler en les dotze etapes estructurals del viatge de l'escriptor aplicades al disseny d'interacció.",
        t7_2Strong: "Arquetips Universals:",
        t7_2Text: "Ús pràctic dels arquetips de Carl Jung (el savi, l'heroi, l'explorador, el rebel) integrats en el disseny d'interfícies digitals, brànding corporatiu i videojocs.",
        t7_3Strong: "Storytelling e Interacció:",
        t7_3Text: "Com gestionar el ritme visual, la seqüència del moviment lineal, la interactivitat immersiva i l'experiència de l'usu (UX) per donar coherència al missatge multimèdia.",

        footerText: "Teoria de la Imatge"
    },
    en: {
        logo: "Image Theory",
        aboutContext: "01 / Context",
        aboutTitle: "About the Project",
        aboutLead: "This platform functions as a living archive and a critical catalog of the conceptual foundations analyzed during the Image Theory module.",
        aboutBody: "Through a visual ecosystem and clean architecture, the website deconstructs the mechanisms of perception, formal and semiotic analysis of audiovisual language, and the sociocultural impact of technical images in contemporaneity. The purpose is not to store literal theory, but to demonstrate practical assimilation through information hierarchy.",
        objectivesTitle: "Module Objectives",
        obj1Strong: "1. Analytical Capacity:",
        obj1Text: "Dissect the denotative and connotative layers of any contemporary visual artifact.",
        obj2Strong: "2. Visual Syntax:",
        obj2Text: "Understand the dynamics of composition, balance, color, and visual weight applied to interface design.",
        obj3Strong: "3. Knowledge Management:",
        obj3Text: "Faithfully curate and reference the key sources that build current visual culture.",
        
        block1Title: "BLOCK 1",
        block2Title: "BLOCK 2",
        visualEx: "Interactive Visual Example",

        t1Title: "Topic 1 Visual communication and semiotics",
        t1Intro: "This section introduces the basics of visual communication through Roman Jakobson's communication model and the semiotics of authors like Ferdinand de Saussure and Charles Sanders Peirce for the interpretation of visual signs. It covers content such as:",
        t1_1Strong: "Jakobson's Model:",
        t1_1Text: "Study of the six functions of language (expressive, conative, poetic, referential, phatic, and metalingual) applied to contemporary graphic design.",
        t1_2Strong: "Sign Structure:",
        t1_2Text: "Saussure's binary division (signified and signifier) versus Peirce's triad (representamen, object, and interpretant), classifying signs into icons, indices, and symbols.",
        t1_3Strong: "Rhetoric of the Image:",
        t1_3Text: "Roland Barthes' analysis of the three structural messages: the linguistic message (anchorage and relay), the denoted iconic message, and the connoted iconic message.",
        t1_4Strong: "Context and Audiences:",
        t1_4Text: "How socio-cultural variations alter the decoding of the visual message according to sociological models of mass communication.",

        t2Title: "Topic 2 Visual rhetoric and image analysis",
        t2Intro: "This topic analyzes rhetorical figures applied to images and their persuasive function within visual communication, referencing Jacques Durand's studies on advertising rhetoric. It works with resources such as:",
        t2_1Strong: "Rhetorical Operations:",
        t2_1Text: "Jacques Durand's classification based on addition, suppression, substitution, and exchange operations to generate visual metaphors, hyperboles, allegories, and ellipses.",
        t2_2Strong: "Syntax of the Image:",
        t2_2Text: "Study of the basic morphological elements defined by Donis A. Dondis: dot, line, shape, direction, tone, color, texture, and proportion.",
        t2_3Strong: "Visual Techniques:",
        t2_3Text: "Contrasting visual communication strategies such as harmony/contrast, balance/instability, symmetry/asymmetry, regularity/irregularity, and economy/profusion.",
        t2_4Strong: "Composition and Weight:",
        t2_4Text: "Analysis of color distribution, shape, and hierarchy of graphic elements to actively direct the viewer's gaze in digital interfaces.",

        t3Title: "Topic 3 Gestalt Theories",
        t3Intro: "This section develops the principles of visual perception formulated by the Gestalt school (Max Wertheimer, Wolfgang Köhler, and Kurt Koffka) and their direct application in contemporary interactive design. Principles explained include:",
        t3_1Strong: "Key Perceptive Laws:",
        t3_1Text: "In-depth analysis of the principles of proximity, similarity, continuity, closure, symmetry, and the fundamental relationship between figure and ground.",
        t3_2Strong: "Visual Thinking:",
        t3_2Text: "Concept developed by Rudolf Arnheim on how the mind processes visual structures in an integrated way through conceptual forces of balance and dynamism.",
        t3_3Strong: "UX/UI Application:",
        t3_3Text: "Use of psychological principles to group elements in menus, design intuitive buttons, and optimize a user's cognitive load when navigating the web.",
        t3Outro: "In addition to theory, the section shows practical applications analyzed by theorists like Rudolf Arnheim: web design, UX/UI, advertising, visual identity, and graphic composition.",

        t4Title: "Topic 4 Visual culture and authorship",
        t4Intro: "This topic reflects on the evolution of images within contemporary culture and the shift in the traditional concept of authorship based on Visual Culture Studies (Nicholas Mirzoeff). It addresses ideas related to:",
        t4_1Strong: "Visual Culture Studies:",
        t4_1Text: "Nicholas Mirzoeff's theoretical approach to the constant visual mediation of global experience and the analysis of digital images in the internet era.",
        t4_2Strong: "The Death of the Author:",
        t4_2Text: "Analysis of Roland Barthes' famous essay, which shifts the ultimate origin of meaning from the creator's intent to the reader's free interpretation.",
        t4_3Strong: "What is an Author?:",
        t4_3Text: "Michel Foucault's focus on the author-function as a social and legal construct used to categorize, delimit, and control the circulation of discourses.",
        t4_4Strong: "Cultural Appropriation:",
        t4_4Text: "Study on the collective reinterpretation of content, visual sampling, memes, and the horizontal dynamics of collaborative artistic creation.",

        t5Title: "Topic 5 Aesthetics of reception",
        t5Intro: "This section explores the active role of the viewer in interpreting images and visual works, based on the Constance School. Drawing from the theories of Hans Robert Jauss and Wolfgang Iser, it covers concepts such as:",
        t5_1Strong: "Horizon of Expectations:",
        t5_1Text: "Hans Robert Jauss's concept defining the shared cultural, historical, and aesthetic reference system that audiences possess when assimilaling a work.",
        t5_2Strong: "The Implied Reader:",
        t5_2Text: "Wolfgang Iser's theory on the structure of text or image that invites the viewer to fill 'empty spaces' or indeterminacies to complete the meaning of the visual artifact.",
        t5_3Strong: "Visual Polysemy:",
        t5_3Text: "How a single graphic piece fluidly alters its meaning based directly on the receiver's environment, breaking away from the notion of a single objective reading.",

        t6Title: "Topic 6 Infographics and data visualization",
        t6Intro: "This topic introduces infographics as a tool for synthesis and visual communication, relying on Edward Tufte and Alberto Cairo's principles of clarity. It covers:",
        t6_1Strong: "Principles of Clarity:",
        t6_1Text: "Edward Tufte's rule to maximize the data-ink ratio, avoiding unnecessary decorative clutter ('chartjunk') that obscures the clean assimilation of metrics.",
        t6_2Strong: "The Functional Art:",
        t6_2Text: "Alberto Cairo's methodology balancing rigorous aesthetics with informative precision, conceiving infographics as cognitive technology adapted to the user.",
        t6_3Strong: "Graphic Architecture:",
        t6_3Text: "Advanced management of visual grids, proportional typographical selection, encoded color palettes, and standardized use of iconographic families.",
        t6_4Strong: "Information Design:",
        t6_4Text: "Efficient narrative strategies to convert abstract and complex databases into ordered, readable, and functional visual flows.",

        t7Title: "Topic 7 Audiovisual narrative and storytelling",
        t7Intro: "This section analyzes how narrative can be applied to visual design and navigation experience within a digital product, based on the psychology of transmedia design. Concepts related to:",
        t7_1Strong: "Narrative Structures:",
        t7_1Text: "Study of Joseph Campbell's The Hero's Journey, adapted by Christopher Vogler into the twelve structural stages of the writer's journey applied to interaction design.",
        t7_2Strong: "Universal Archetypes:",
        t7_2Text: "Practical use of Carl Jung's archetypes (the sage, the hero, the explorer, the rebel) integrated into digital interface design, corporate branding, and video games.",
        t7_3Strong: "Storytelling and Interaction:",
        t7_3Text: "How to manage visual rhythm, linear movement sequence, immersive interactivity, and user experience (UX) to give coherence to the multimedia message.",

        footerText: "Image Theory"
    }
};

const langSelector = document.getElementById('languageSelector');

function changeLanguage(lang) {
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key] !== undefined) {
            element.textContent = translations[lang][key];
        }
    });
    localStorage.setItem('preferredLang', lang);
}

langSelector.addEventListener('change', (e) => {
    changeLanguage(e.target.value);
});

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('preferredTheme', newTheme);
});

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const currentItem = header.parentElement;
        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== currentItem) {
                item.classList.remove('active');
            }
        });
        currentItem.classList.toggle('active');
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'es';
    langSelector.value = savedLang;
    changeLanguage(savedLang);

    const savedTheme = localStorage.getItem('preferredTheme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
});

const modal = document.getElementById('lightboxModal');
const modalImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeLightbox');
const prevBtn = document.getElementById('prevLightbox');
const nextBtn = document.getElementById('nextLightbox');
const images = Array.from(document.querySelectorAll('.gallery-img'));
let currentIndex = 0;

function updateLightbox() {
    modalImg.src = images[currentIndex].src;
    modalImg.alt = images[currentIndex].alt;
}

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        updateLightbox();
        modal.showModal();
    });
});

closeBtn.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.close();
    }
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateLightbox();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateLightbox();
});

document.addEventListener('keydown', (e) => {
    if (!modal.open) return;
    if (e.key === 'ArrowRight') {
        nextBtn.click();
    } else if (e.key === 'ArrowLeft') {
        prevBtn.click();
    } else if (e.key === 'Escape') {
        modal.close();
    }
});