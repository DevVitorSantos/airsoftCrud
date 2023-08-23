const games = [
    {
        nomeEvento: 'Evento 01 - Corrida maluca',
        descricaoEvento: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgEvento: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60',
        linkGrupoWpp: 'https://google.com',
        nomeDoCampo: 'b13',
        uid: '',
        createdBy: '',
        emailResponsavel: '',
        participantes: [],
        tags: ['b13','airsoft']
    },
    {
        nomeEvento: 'Evento 02 - Evento do papai noel',
        descricaoEvento: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgEvento: 'https://images.unsplash.com/photo-1692731614395-a879228ec181?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60',
        linkGrupoWpp: 'https://google.com',
        nomeDoCampo: 'b13',
        uid: '',
        createdBy: '',
        emailResponsavel: '',
        participantes: [],
        tags: ['b13','airsoft']
    },
    {
        nomeEvento: 'Evento 03 - Linha de chegada estranha',
        descricaoEvento: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgEvento: 'https://images.unsplash.com/photo-1682685797769-481b48222adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60',
        linkGrupoWpp: 'https://google.com',
        nomeDoCampo: 'b13',
        uid: '',
        createdBy: '',
        emailResponsavel: '',
        participantes: [],
        tags: ['b13','airsoft']
    },
    {
        nomeEvento: 'Evento 04 - Dias contados para apocalipse',
        descricaoEvento: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgEvento: 'https://images.unsplash.com/photo-1692731979683-c7ef5927c232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60',
        linkGrupoWpp: 'https://google.com',
        nomeDoCampo: 'ct fantasma',
        uid: '',
        createdBy: '',
        emailResponsavel: '',
        participantes: [],
        tags: ['ctfantasma','airsoft']
    },
    {
        nomeEvento: 'Evento 05 - Evento de boas vindas aos novatos',
        descricaoEvento: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgEvento: 'https://images.unsplash.com/photo-1692722950963-ce0afaa62d0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        linkGrupoWpp: 'https://google.com',
        nomeDoCampo: 'b13',
        uid: '',
        createdBy: '',
        emailResponsavel: '',
        participantes: [],
        tags: ['b13','airsoft']
    },
    {
        nomeEvento: 'Evento 06 - Silent hill para todos',
        descricaoEvento: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgEvento: 'https://plus.unsplash.com/premium_photo-1673283380444-d934f8fb10c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        linkGrupoWpp: 'https://google.com',
        nomeDoCampo: 'b13',
        uid: '',
        createdBy: '',
        emailResponsavel: '',
        participantes: [],
        tags: ['b13','airsoft']
    }
]


export default games