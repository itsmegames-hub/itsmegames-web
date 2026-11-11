import type { Language, Translations } from './types';

export const translations: Record<Language, Translations> = {
  en: {
    navbar: {
      home: 'Home',
      games: 'Games',
      story: 'Story',
      team: 'Team',
      sponsors: 'Partners',
    },
    hero: {
      titleLine1: 'FROM PLAYERS',
      titleLine2Pre: 'TO ',
      titleLine2Highlight: 'CREATORS',
      description:
        'Crafting worlds that inspire. We transform our love for gaming into unique interactive experiences.',
      badge: 'Córdoba, Argentina • Indie Studio',
      explore: 'Explore',
      playPrototype: 'Play the prototype',
    },
    games: {
      badge: 'Idea Lab',
      titlePre: 'Games in ',
      titleHighlight: 'Development',
      subtitle:
        'The projects taking shape at the core of ItsMeGames. Where code meets raw creativity.',
      statusLabel: 'STATUS',
      viewGame: 'View the game',
      playPrototype: 'Play the prototype',
      layer8: {
        title: 'THE KERNEL KEEPER',
        status: 'IN DEVELOPMENT',
        stage: 'Layer 7 playable',
        tagline: 'The system is rotten. You are the purge.',
        hook: 'A tactical twin-stick roguelite on a 90s desktop turned battlefield.',
        tags: ['Roguelite', 'TwinStick', 'TechHorror'],
      },
    },
    about: {
      title: 'Our Evolution',
      subtitle: 'The journey from a weekend hobby to a creative game studio.',
      milestones: [
        {
          year: '2020',
          title: 'The Beginning',
          description: 'Born during the pandemic as a shared hobby and a streaming channel.',
        },
        {
          year: '2021',
          title: 'Community & Streaming',
          description: 'The Twitch channel itsmegames_ becomes a meeting point.',
        },
        {
          year: '2026',
          title: 'The Studio Is Born',
          description: 'ItsMeGames becomes an indie studio and starts The Kernel Keeper.',
        },
        {
          year: '2026',
          title: 'First Playable Prototype',
          description: 'Layer 7 of The Kernel Keeper is now playable in the browser.',
        },
      ],
    },
    team: {
      title: 'The Family',
      subtitle: 'The passionate minds behind the magic.',
      viewInfo: 'View Info',
      members: {
        Brunito: {
          name: 'Brunito',
          role: 'Founder & Game Director',
          description:
            'The mastermind behind it all. Passionate gamer and relentless adventure seeker.',
        },
        Maxi: {
          name: 'Maxi',
          role: 'Legal & Community Manager',
          description: 'Protects our legal flank and keeps the community enthusiasm thriving.',
        },
        Azul: {
          name: 'Azul',
          role: 'UI/UX designer, web developer & QA',
          description:
            'Interface architect. Blending complex system logic with stunning visual aesthetics.',
        },
        Fran: {
          name: 'Fran',
          role: 'Tech Lead',
          description:
            'The code architect. Leading engineering to push performance to the next level.',
        },
        Lucas: {
          name: 'Lucas',
          role: 'Lead Artist',
          description:
            'Gamer at heart. Illustrates with pure passion; loves playing, experimenting, and having fun.',
        },
        Nico: {
          name: 'Nico',
          role: 'Sound Design',
          description: 'Tech geek, Techno producer, DJ and Developer. I am IronMan.',
        },
        Valen: {
          name: 'Valen',
          role: 'Level Designer & Gameplay Programmer',
          description:
            'Level architect. Builds the worlds, programs the gameplay, and shapes the game concepts.',
        },
      },
    },
    sponsors: {
      badge: 'Partnerships',
      titlePre: 'Strategic ',
      titleHighlight: 'Partners',
      subtitle:
        'Teaming up with forward-thinking institutions and leaders to push the boundaries of digital entertainment.',
      viewInfo: 'Partner Info',
      partners: {
        'UTN FRC': {
          name: 'UTN FRC',
          tier: 'Academic Partner',
          description:
            'National Technological University - Córdoba Regional Faculty. Fostering technological innovation and professional training.',
        },
        'Lanas Córdoba': {
          name: 'Lanas Córdoba',
          tier: 'Strategic Partner',
          description:
            'Benchmark leader in the textile industry. Actively collaborating in the growth of projects with strong local impact.',
        },
      },
    },
    footer: {
      founderRole: 'FOUNDER',
      emailLabel: 'EMAIL:',
    },
    kernelKeeper: {
      boot: {
        lines: [
          'VANGUARD BIOS v4.51 · (C) 1995 Vanguard Mainframes',
          'Base memory: 640K OK',
          'USB device detected: KERNEL_KEEPER.SYS',
          'Decrypting environment…',
          'Starting purge protocol.',
        ],
        skip: 'Press any key or click to skip',
      },
      ui: {
        home: 'ItsMeGames',
        settingsLabel: 'Display options',
        fx: 'CRT',
        legibleFont: 'Readable font',
        on: 'ON',
        off: 'OFF',
        photosensitivity:
          'Photosensitivity notice: this page has brief visual distortions. You can turn them off with the CRT button.',
        minimize: 'Minimize',
        restore: 'Restore',
        close: 'Close',
        taskbarLabel: 'Minimized windows',
        memLabel: 'MEM',
        scrollTop: 'Back to top',
        artPending: 'ART PENDING',
      },
      hero: {
        status: 'IN DEVELOPMENT · LAYER 7 PLAYABLE',
        tagline: 'The system is rotten. You are the purge.',
        genre: 'Tactical twin-stick roguelite shooter · Isometric · PC (Steam)',
        play: 'Play the prototype',
        beta: 'Join the beta',
        mobileNotice: 'The prototype needs a keyboard and mouse. Open it on a computer.',
      },
      story: {
        window: 'RECOVERED_LOG.TXT',
        title: 'The setup',
        lines: [
          'A cyberterrorist virus threatens to shut down the global network. The infected system belongs to **Vanguard Mainframes**.',
          'As a last resort, a technician plugs in an emergency USB drive: **the KERNEL Keeper**, a purge protocol.',
          "Your mission starts on the desktop. But Vanguard is hiding something… and the deeper you go, the more you'll uncover.",
        ],
      },
      layer7: {
        window: 'DESKTOP · LAYER 7',
        tag: 'LAYER 7 // APPLICATION',
        title: 'The desktop',
        intro: 'The first layer is a 90s desktop turned battlefield. Every program is a zone.',
        hint: 'No need to double-click. One click will do.',
        zones: [
          {
            id: 'paint',
            name: 'Paint program',
            file: 'DRAW.EXE',
            line: "The canvas is alive. It doesn't like visitors.",
          },
          {
            id: 'sheet',
            name: 'Spreadsheet',
            file: 'SHEET.EXE',
            line: 'Cells, formulas, and something moving between the rows.',
          },
          {
            id: 'media',
            name: 'Media player',
            file: 'PLAYER.EXE',
            line: "The equalizer is pulsing. That's not music.",
          },
          {
            id: 'pinball',
            name: 'Desktop pinball',
            file: 'PINBALL.EXE',
            line: 'Lights, bumpers and zero mercy.',
          },
          {
            id: 'chat',
            name: 'Instant messenger',
            file: 'MESSENGER.EXE',
            line: 'You have 99+ unread messages. None of them are from a human.',
          },
        ],
        hydra: {
          name: 'Hydra Browser',
          file: 'HYDRA.EXE',
          text: 'A mass of windows that never stops opening tabs.',
          warning: 'THREAT DETECTED',
        },
      },
      howToPlay: {
        window: 'HOW_TO_PLAY.HLP',
        title: 'How it plays',
        items: [
          {
            title: 'Frantic combat.',
            desc: 'High-pressure arenas, breakable cover and terrain that fights against you. Health never regenerates.',
          },
          {
            title: 'One Glitch at a time.',
            desc: 'Corruptions that grant massive power at a price. Your memory can only hold one.',
          },
          {
            title: 'Risk it or extract.',
            desc: 'Before the boss you can bail out with your progress, or go all in.',
          },
          {
            title: '90s tech-horror.',
            desc: 'CRT monitors, green phosphor and original synthwave.',
          },
        ],
      },
      dilemma: {
        pre: 'Every Glitch you absorb makes you more powerful. And more corrupt.',
        question: 'Will you die a hero... or live long enough to become the villain?',
      },
      locked: {
        window: 'DRIVE D:\\',
        title: 'DRIVE NOT MOUNTED — Restricted access',
        text: 'The deeper layers of the system: coming soon.',
        detail: 'ENCRYPTED SECTORS · READ DENIED',
        retry: 'Retry',
      },
      signup: {
        window: 'REGISTER.EXE',
        title: 'Closed beta',
        prompt: 'Leave your email to sign up for the upcoming closed beta and support development.',
        emailLabel: 'Your email',
        placeholder: 'user@sector.com',
        submit: '> REGISTER USER',
        loading: 'Decrypting environment…',
        success: "User registered. We'll let you know when the beta opens.",
        invalid: "ERROR 0x0E: that email isn't valid. Check it and try again.",
        error: "ERROR 0x1F: couldn't reach the server. Please try again later.",
      },
      credits: {
        window: 'CREDITS.LOG',
        title: 'Team & studio',
        command: '> read CREDITS.LOG',
        members: [
          {
            name: 'Bruno Aresu Barella',
            role: 'Executive producer, creative director, game design, economy, characters and narrative.',
          },
          {
            name: 'Maxi Gentili',
            role: 'Community Manager.',
          },
          {
            name: 'Azul Talavera',
            role: 'Interface design (diegetic UI/UX), web development and QA.',
          },
          {
            name: 'Francisco Merlini',
            role: 'Tech lead, C# programming (Unity URP) and core systems architecture.',
          },
          {
            name: 'Valen Bongiorno',
            role: 'Level design, level architecture, gameplay programming and concepts.',
          },
          {
            name: 'Lucas Segovia',
            role: 'Art direction, 3D modeling, animation, cel-shading and promotional art.',
          },
          {
            name: 'Nicolás Bugedo',
            role: 'Sound design, diegetic audio and original soundtrack.',
          },
        ],
        studio: 'A game by ItsMeGames · Córdoba, Argentina',
      },
      footer: {
        tagline: 'From Players to Creators',
        location: 'Córdoba, Argentina',
        contactLabel: 'Contact',
        followLabel: 'Follow us',
      },
      bsod: {
        title: 'KERNEL_KEEPER.SYS',
        lines: [
          'KERNEL_KEEPER.SYS stopped responding. Stop code: 0xC0FFEE.',
          "Relax, you didn't break anything. This is the ItsMeGames team saying hi.",
          'Thanks for digging this deep. The deeper layers are still compiling.',
        ],
        dismiss: 'Press any key to return to the system _',
      },
    },
    switch: {
      ariaLabel: 'Language selector',
      enTitle: 'English',
      esTitle: 'Spanish',
    },
    notFound: {
      description:
        'You have gone off the map. The file you are looking for has been deleted or never existed in this sector.',
      respawn: 'Respawn (Back to Home)',
    },
  },
  es: {
    navbar: {
      home: 'Inicio',
      games: 'Juegos',
      story: 'Historia',
      team: 'Equipo',
      sponsors: 'Socios',
    },
    hero: {
      titleLine1: 'FROM PLAYERS',
      titleLine2Pre: 'TO ',
      titleLine2Highlight: 'CREATORS',
      description:
        'Creando mundos que inspiran. Transformamos nuestra pasión por jugar en experiencias interactivas únicas.',
      badge: 'Córdoba, Argentina • Estudio Indie',
      explore: 'Explorar',
      playPrototype: 'Jugar el prototipo',
    },
    games: {
      badge: 'Laboratorio de Ideas',
      titlePre: 'Juegos en ',
      titleHighlight: 'Desarrollo',
      subtitle:
        'Los proyectos que están tomando forma en el corazón de ItsMeGames. Donde el código se cruza con la creatividad.',
      statusLabel: 'ESTADO',
      viewGame: 'Ver el juego',
      playPrototype: 'Jugar el prototipo',
      layer8: {
        title: 'THE KERNEL KEEPER',
        status: 'EN DESARROLLO',
        stage: 'Capa 7 jugable',
        tagline: 'El sistema está podrido. Vos sos la purga.',
        hook: 'Roguelite twin-stick táctico en un escritorio de los 90 convertido en campo de batalla.',
        tags: ['Roguelite', 'TwinStick', 'TechHorror'],
      },
    },
    about: {
      title: 'Nuestra Evolución',
      subtitle: 'De un hobby de fin de semana a un estudio creativo de videojuegos.',
      milestones: [
        {
          year: '2020',
          title: 'El comienzo',
          description:
            'Nace durante la pandemia como un pasatiempo compartido y un canal de streaming.',
        },
        {
          year: '2021',
          title: 'Comunidad y streaming',
          description: 'El canal de Twitch itsmegames_ se vuelve punto de encuentro.',
        },
        {
          year: '2026',
          title: 'Nace el estudio',
          description: 'ItsMeGames se convierte en un estudio indie y arranca The Kernel Keeper.',
        },
        {
          year: '2026',
          title: 'Primer prototipo jugable',
          description: 'La Capa 7 de The Kernel Keeper ya se puede jugar en el navegador.',
        },
      ],
    },
    team: {
      title: 'La Familia',
      subtitle: 'El equipo detrás de la magia.',
      viewInfo: 'Ver Info',
      members: {
        Brunito: {
          name: 'Brunito',
          role: 'Founder & Game Director',
          description:
            'El cerebro detrás de todo. Fanático de los videojuegos y de vivir nuevas aventuras.',
        },
        Maxi: {
          name: 'Maxi',
          role: 'Legal & Community Manager',
          description: 'Cuida nuestras espaldas legales y mantiene viva la llama de la comunidad.',
        },
        Azul: {
          name: 'Azul',
          role: 'UI/UX designer, web developer & QA',
          description:
            'Arquitecta de interfaces. Fusiona los requisitos del sistema con un diseño visual impactante.',
        },
        Fran: {
          name: 'Fran',
          role: 'Tech Lead',
          description:
            'El arquitecto del código. Lidera la tecnología para llevar el rendimiento al siguiente nivel.',
        },
        Lucas: {
          name: 'Lucas',
          role: 'Lead Artist',
          description:
            'Fanático de los videojuegos. Dibuja con el corazón; su pasión es jugar y divertirse.',
        },
        Nico: {
          name: 'Nico',
          role: 'Sound Design',
          description: 'Gordo compu, productor Techno, DJ y Developer. I am IronMan.',
        },
        Valen: {
          name: 'Valen',
          role: 'Level Designer & Gameplay Programmer',
          description:
            'Arquitecto de niveles. Diseña los mundos, programa el gameplay y le da forma a los conceptos del juego.',
        },
      },
    },
    sponsors: {
      badge: 'Alianzas',
      titlePre: 'Socios ',
      titleHighlight: 'Estratégicos',
      subtitle:
        'Colaborando con instituciones y empresas líderes para expandir los límites del entretenimiento digital.',
      viewInfo: 'Info del Socio',
      partners: {
        'UTN FRC': {
          name: 'UTN FRC',
          tier: 'Socio Académico',
          description:
            'Universidad Tecnológica Nacional - Facultad Regional Córdoba. Impulsando la innovación técnica y formación profesional.',
        },
        'Lanas Córdoba': {
          name: 'Lanas Córdoba',
          tier: 'Socio Estratégico',
          description:
            'Referente en la industria textil. Colaborando en el crecimiento de proyectos con impacto local.',
        },
      },
    },
    footer: {
      founderRole: 'FOUNDER',
      emailLabel: 'EMAIL:',
    },
    kernelKeeper: {
      boot: {
        lines: [
          'VANGUARD BIOS v4.51 · (C) 1995 Vanguard Mainframes',
          'Memoria base: 640K OK',
          'Dispositivo USB detectado: KERNEL_KEEPER.SYS',
          'Desencriptando entorno…',
          'Iniciando protocolo de purga.',
        ],
        skip: 'Presioná una tecla o hacé clic para saltear',
      },
      ui: {
        home: 'ItsMeGames',
        settingsLabel: 'Opciones de pantalla',
        fx: 'CRT',
        legibleFont: 'Fuente legible',
        on: 'ON',
        off: 'OFF',
        photosensitivity:
          'Aviso de fotosensibilidad: esta página tiene distorsiones visuales breves. Podés apagarlas con el botón CRT.',
        minimize: 'Minimizar',
        restore: 'Restaurar',
        close: 'Cerrar',
        taskbarLabel: 'Ventanas minimizadas',
        memLabel: 'MEM',
        scrollTop: 'Volver arriba',
        artPending: 'ARTE PENDIENTE',
      },
      hero: {
        status: 'EN DESARROLLO · CAPA 7 JUGABLE',
        tagline: 'El sistema está podrido. Vos sos la purga.',
        genre: 'Roguelite twin-stick shooter táctico · Isométrico · PC (Steam)',
        play: 'Jugar el prototipo',
        beta: 'Anotarme a la beta',
        mobileNotice: 'El prototipo necesita teclado y mouse. Abrilo desde una compu.',
      },
      story: {
        window: 'REGISTRO_RECUPERADO.TXT',
        title: 'El planteo',
        lines: [
          'Un virus ciberterrorista amenaza con apagar la red global. El sistema infectado pertenece a **Vanguard Mainframes**.',
          'Como último recurso, un técnico conecta un pendrive de emergencia: **el KERNEL Keeper**, un protocolo de purga.',
          'Tu misión empieza en el escritorio. Pero Vanguard oculta algo… y cuanto más bajes, más vas a descubrir.',
        ],
      },
      layer7: {
        window: 'ESCRITORIO · CAPA 7',
        tag: 'CAPA 7 // APLICACIÓN',
        title: 'El escritorio',
        intro:
          'La primera capa es un escritorio de los 90 convertido en campo de batalla. Cada programa es una zona.',
        hint: 'No hace falta doble clic. Con uno alcanza.',
        zones: [
          {
            id: 'paint',
            name: 'Programa de dibujo',
            file: 'DIBUJO.EXE',
            line: 'El lienzo está vivo. Y no le gustan las visitas.',
          },
          {
            id: 'sheet',
            name: 'Planilla de cálculo',
            file: 'PLANILLA.EXE',
            line: 'Celdas, fórmulas y algo que se mueve entre las filas.',
          },
          {
            id: 'media',
            name: 'Reproductor multimedia',
            file: 'REPRODUCTOR.EXE',
            line: 'El ecualizador late. No es música.',
          },
          {
            id: 'pinball',
            name: 'Pinball de escritorio',
            file: 'PINBALL.EXE',
            line: 'Luces, rebotes y cero piedad.',
          },
          {
            id: 'chat',
            name: 'Mensajero instantáneo',
            file: 'MENSAJERO.EXE',
            line: 'Tenés 99+ mensajes sin leer. Ninguno es de un humano.',
          },
        ],
        hydra: {
          name: 'Hydra Browser',
          file: 'HYDRA.EXE',
          text: 'Una masa de ventanas que no deja de abrir pestañas.',
          warning: 'AMENAZA DETECTADA',
        },
      },
      howToPlay: {
        window: 'COMO_SE_JUEGA.HLP',
        title: 'Cómo se juega',
        items: [
          {
            title: 'Combate frenético.',
            desc: 'Arenas de presión máxima, coberturas que se rompen y un terreno que juega en tu contra. La salud no se regenera.',
          },
          {
            title: 'Un solo Glitch a la vez.',
            desc: 'Corrupciones que te dan un poder enorme a cambio de un precio. Tu memoria solo soporta una.',
          },
          {
            title: 'Arriesgá o extraé.',
            desc: 'Antes del jefe podés retirarte con tu progreso o jugártela por todo.',
          },
          {
            title: 'Tech-horror noventero.',
            desc: 'Monitores CRT, fósforo verde y synthwave original.',
          },
        ],
      },
      dilemma: {
        pre: 'Cada Glitch que absorbés te hace más poderoso. Y más corrupto.',
        question:
          '¿Vas a morir siendo un héroe... o vas a vivir lo suficiente para convertirte en el villano?',
      },
      locked: {
        window: 'UNIDAD D:\\',
        title: 'UNIDAD NO MONTADA — Acceso restringido',
        text: 'Las capas más profundas del sistema: próximamente.',
        detail: 'SECTORES CIFRADOS · LECTURA DENEGADA',
        retry: 'Reintentar',
      },
      signup: {
        window: 'REGISTRO.EXE',
        title: 'Beta cerrada',
        prompt: 'Dejá tu mail para anotarte en la próxima beta cerrada y apoyar el desarrollo.',
        emailLabel: 'Tu email',
        placeholder: 'usuario@sector.com',
        submit: '> REGISTRAR USUARIO',
        loading: 'Desencriptando entorno…',
        success: 'Usuario registrado. Te avisamos cuando abra la beta.',
        invalid: 'ERROR 0x0E: el mail no es válido. Revisalo y probá de nuevo.',
        error: 'ERROR 0x1F: no pudimos conectar con el servidor. Probá de nuevo más tarde.',
      },
      credits: {
        window: 'CREDITS.LOG',
        title: 'Equipo y estudio',
        command: '> leer CREDITS.LOG',
        members: [
          {
            name: 'Bruno Aresu Barella',
            role: 'Producción general, dirección creativa, game design, economía, personajes y narrativa.',
          },
          {
            name: 'Maxi Gentili',
            role: 'Community Manager.',
          },
          {
            name: 'Azul Talavera',
            role: 'Diseño de interfaces (UI/UX diegética), desarrollo web y QA.',
          },
          {
            name: 'Francisco Merlini',
            role: 'Tech lead, programación C# (Unity URP) y arquitectura de sistemas core.',
          },
          {
            name: 'Valen Bongiorno',
            role: 'Level design, arquitectura de niveles, programación de gameplay y conceptos.',
          },
          {
            name: 'Lucas Segovia',
            role: 'Dirección de arte, modelado 3D, animación, cel-shading y arte promocional.',
          },
          {
            name: 'Nicolás Bugedo',
            role: 'Diseño de sonido, audio diegético y banda sonora original.',
          },
        ],
        studio: 'Un juego de ItsMeGames · Córdoba, Argentina',
      },
      footer: {
        tagline: 'From Players to Creators',
        location: 'Córdoba, Argentina',
        contactLabel: 'Contacto',
        followLabel: 'Seguinos',
      },
      bsod: {
        title: 'KERNEL_KEEPER.SYS',
        lines: [
          'KERNEL_KEEPER.SYS dejó de responder. Código de detención: 0xC0FFEE.',
          'Tranquilo: no rompiste nada. Es el equipo de ItsMeGames saludándote.',
          'Gracias por bajar hasta acá. Las capas más profundas todavía se están compilando.',
        ],
        dismiss: 'Presioná cualquier tecla para volver al sistema _',
      },
    },
    switch: {
      ariaLabel: 'Selector de idioma',
      enTitle: 'Inglés',
      esTitle: 'Español',
    },
    notFound: {
      description:
        'Te has salido del mapa. El archivo que buscas ha sido eliminado o nunca existió en este sector.',
      respawn: 'Respawn (Volver al Inicio)',
    },
  },
};
