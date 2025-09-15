import poesias from './poesias.json' with { type: 'json' };
import musicas from './musicas.json' with { type: 'json' };

const chronology = [
    { year: "1931", type: "personal", content: "22/08 - nascimento em Lourenço Marques, Moçambique, colônia portuguesa na África Austral" },
    { year: "1933-1974", type: "context", content: "Estado Novo, ditadura de Antônio Salazar em Portugal" },
    { year: "1936-1937", type: "personal", content: "viagem a Portugal com a família, aos 3/4 anos" },
    { year: "1939-1945", type: "context", content: "Segunda Guerra Mundial" },
    { year: "1951", type: "personal", content: "21/06 - morte da mãe em desastre de avião da Pan American Airlines sobre a Libéria" },
    { year: "1952", type: "personal", content: "em março, ida de navio para Portugal" },
    { year: "1952", type: "personal", content: "alguns meses depois breve visita com pai e irmão em Londres e depois Paris" },
    { year: "1952-1954", type: "professional", content: "Paris: profissionalização no IDHEC – Institut des Hautes Études Cinématographiques" },
    { year: "1954", type: "professional", content: "primeiro curta metragem no IDHEC, roteiro e direção de <i>Quand le soleil dort</i>, inspirado no romance de Uomini o No, de Elio Vittorini" },
    { year: "1954-1955", type: "professional", content: "curso de ator no Théâtre National de Paris" },
    { year: "1955", type: "professional", content: "assistência de direção - estagiário em <i>Chiens perdus sans collier</i>, de Jean Delannoy" },
    { year: "1955", type: "personal", content: "21/09 - morte do pai em Lourenço Marques" },
    { year: "1956", type: "professional", content: "Madrid – estada de quase um ano" },
    { year: "1957", type: "personal", content: "quase um ano em Atenas, Grécia" },
    { year: "1957", type: "professional", content: "Córsega: ator e assistente de direção estagiário em <i>SOS Noronha</i>, de Georges Rouquier" },
    { year: "1958", type: "personal", content: "09/07 – desembarque no Rio de Janeiro" },
    { year: "1958", type: "context", content: "Revolução Cubana sob liderança de Fidel Castro" },
    { year: "1959", type: "context", content: "início da Nouvelle Vague na França com os filmes <i>Os Incompreendidos</i> de François Truffaut e <i>Acossado</i> de Jean Luc Godard" },
    { year: "1962", type: "professional", content: "primeiro longa metragem <i>Os Cafajestes</i> (Rio de Janeiro e Cabo Frio)" },
    { year: "1961-1963", type: "personal", content: "relacionamento com Nara Leão" },
    { year: "1963-1973", type: "professional", content: "uma década de mais de cem letras de músicas e direção de espetáculos musicais" },
    { year: "1963", type: "professional", content: "filmagem do 2º longa metragem <i>Os Fuzis</i> em Milagres, Bahia" },
    { year: "1964", type: "context", content: "golpe civil militar inicia ditadura militar brasileira" },
    { year: "1964", type: "professional", content: "visibilidade internacional do Cinema Novo com a tríade: <i>Deus e o Diabo</i>, <i>Vidas Secas</i> e <i>Os Fuzis</i>" },
    { year: "1970", type: "professional", content: "longa metragem <i>Os deuses e os mortos</i>, filmado no sul do estado da Bahia" },
    { year: "1971", type: "personal", content: "19/11 - nascimento de uma filha com Leila Diniz, Janaina Diniz Guerra" },
    { year: "1972", type: "personal", content: "14/06 - explosão do avião onde viajava Leila Diniz, morta aos 27 anos" },
    { year: "1973", type: "professional", content: "autoria de texto e letras de músicas no espetáculo teatral <i>Calabar: o elogio da traição</i>, em parceria com Chico Buarque – censurado" },
    { year: "1974", type: "context", content: "Revolução dos Cravos, fim da ditadura em Portugal" },
    { year: "1975", type: "context", content: "FRELIMO toma o poder em Maputo com Samora Machel" },
    { year: "1975", type: "personal", content: "Viagem a Maputo para a festa da independência moçambicana, depois de ausência de 25 anos" },
    { year: "1976", type: "professional", content: "longa metragem A Queda, 2º Urso de Prata de Berlim" },
    { year: "1979-1980", type: "professional", content: "longa metragem documentário/ficcional Mueda, Memória, Massacre, Maputo" },
    { year: "1982", type: "personal", content: "relacionamento com Cláudia Ohana" },
    { year: "1983", type: "professional", content: "longa metragem Erendira, inspirado em Gabriel García Márquez, México" },
    { year: "1983", type: "personal", content: "10/10: nascimento da 2ª filha, Dandara, com Cláudia Ohana" },
    { year: "1985", type: "context", content: "Fundação em Cuba da Escuela Internacional de Cine y Televisión San Antonio de Los Baños" },
    { year: "1985", type: "professional", content: "longa metragem Ópera do Malandro, inspirada em peça musical de Chico Buarque, Rio de Janeiro" },
    { year: "1989", type: "professional", content: "longa metragem Kuarup - inspirado em romance do mesmo nome de Antônio Callado, filmado na região do Xingu e em Recife" },
    { year: "2000", type: "personal", content: "descoberta e acolhimento do filho Adriano, então com 20 anos" },
    { year: "2000", type: "personal", content: "casamento com Luciana Mazzotti" },
    { year: "2000", type: "professional", content: "longa metragem Estorvo, inspirado em Chico Buarque, Cuba e Rio de Janeiro" },
    { year: "2005-2006", type: "professional", content: "longa metragem O veneno na Madrugada inspirado em La Mala Hora, de Gabriel García Márquez, Xerém, Rio de Janeiro e Buenos Aires" },
    { year: "2005", type: "personal", content: "Nascimento do primeiro neto, Martim, da filha Dandara" }
];

const longas = [
    { titulo: "Os Cafajestes (Brasil - 1962)", imagem: "images/longas/os_cafagestes-cartaz.jpg", detalhes: { "Direção e roteiro": "Ruy Guerra", "Duração": "100 min", "Elenco": "Norma Bengell, Hugo Carvana, Glauce Rocha, Jece Valadão, Daniel Filho" } },
    { titulo: "Os Fuzis (Brasil - 1964)", imagem: "images/longas/os_fuzis-cartaz2.jpg", detalhes: { "Direção": "Ruy Guerra", "Roteiro": "Ruy Guerra, Miguel Torres", "Duração": "103 min", "Elenco": "Nelson Xavier, Átila Iório, Paulo César Peréio, Hugo Carvana, Mauricio Loyola, Maria Adélia, Leonidas Bayer, Ruy Polanah, Joel Barcellos, Antonio Pitanga, Ivan Cândido, Maria Ligia, Paulo Campos, Maria Gladys, Billy Davis, Hugo Kusnetzoff" } },
    { titulo: "Sweet Hunters (França - 1969)", imagem: "images/longas/tendres_chasseurs.jpg", detalhes: { "Direção e roteiro": "Ruy Guerra", "Duração": "102 min", "Elenco": "Stuart Whitman, Susan Strasberg, Maureen McNally, Sterling Hayden, Andrew Hayden" } },
    { titulo: "Os Deuses e os Mortos (Brasil - 1970)", imagem: "images/longas/os_deuses_e_os_mortos.jpg", detalhes: { "Direção e roteiro": "Ruy Guerra", "Duração": "97 min", "Elenco": "Norma Bengell, Othon Bastos, Ítala Nandi, Nelson Xavier, Ruy Polanah, Jorge Chaia" } },
    { titulo: "A Queda (Brasil - 1977)", imagem: "images/longas/a_queda.jpg", detalhes: { "Direção e roteiro": "Ruy Guerra, Nelson Xavier", "Duração": "110 min", "Elenco": "Leonidas Bayer, Carlos Alberto Baía, Hugo Carvana, Murilo de Lima, Jurandir de Oliveira, Ginaldo de Souza, Ivan De Souza, Luiz Antônio de Souza, Cosme dos Santos, Lima Duarte, Marco Antônio Esteves" } },
    { titulo: "Mueda: Memória e Massacre (Moçambique - 1979/80)", imagem: "images/longas/mueda_memoria_e_massacre.jpg", detalhes: { "Direção e roteiro": "Ruy Guerra", "Duração": "80 min", "Elenco": "Romão Canapoquele, Filipe Gunoguacala, Mauricio Machimbuco, Baltazar Nchilema" } },
    { titulo: "Histoires Extraordinaires: la lettre volée (França/Portugal - 1981)", imagem: "images/longas/la_lettre_volee.jpg", detalhes: { "Direção": "Ruy Guerra", "Roteiro": "Gerard Zingg, Ruy Guerra", "Produção": "FR3, Films du Triangle, TCV, RTP", "Duração": "52 min, 16 mm, cor", "Argumentação": "Adaptação do texto original de Edgar Allan Poe" } },
    { titulo: "Erendira (Brasil, México, França, Alemanha - 1982)", imagem: "images/longas/erendira.jpg", detalhes: { "Direção": "Ruy Guerra", "Roteiro": "Gabriel García Márquez", "Duração": "103 min", "Elenco": "Claudia Ohana, Irene Papas, Michael Lonsdale, Oliver Wehe, Rufus, Blanca Guerra, Pierre Vaneck" } },
    { titulo: "Ópera do Malandro (Brasil, França - 1985)", imagem: "images/longas/opera_do_malandro.jpg", detalhes: { "Direção": "Ruy Guerra", "Roteiro": "Chico Buarque de Hollanda, Orlando Senna, Ruy Guerra", "Duração": "100 min", "Elenco": "Edson Celulari, Claudia Ohana, Elba Ramalho, Fábio Sabag, J.C. Violla, Wilson Grey, Maria Sílvia, Cláudia Jimenez" } },
    { titulo: "A Fábula da Bela Palomera (Brasil, Espanha - 1987)", imagem: "images/longas/a_bela_palomera.jpg", detalhes: { "Direção": "Ruy Guerra", "Roteiro": "Ruy Guerra, Gabriel García Márquez", "Duração": "90 min", "Elenco": "Ney Latorraca, Claudia Ohana, Tânia Carrero, Dina Sfat, Chico Díaz, Cecil Thiré" } },
    { titulo: "Kuarup (Brasil - 1989)", imagem: "images/longas/kuarup.jpg", detalhes: { "Direção": "Ruy Guerra", "Roteiro": "Antonio Callado (romance), Ruy Guerra, Rudy Langemann", "Duração": "115 min", "Elenco": "Taumaturgo Ferreira, Fernanda Torres, Cláudio Mamberti, Umberto Magnani, Ewerton de Castro, Roberto Bonfim, Cláudia Raia, Rui Resende, Dionísio Azevedo, Claudia Ohana, Maitê Proença" } },
    { titulo: "Me Alquilo Para Soñar (Espanha - 1991/92)", imagem: "images/longas/me-alquilo-para-sonar.jpg", detalhes: { "Direção": "Ruy Guerra", "Roteiro": "Gabriel García Márquez, Eliseo Alberto Diego, Cláudio McDowell, Ruy Guerra", "Produção": "Ing, TVE - Espanha", "Fotografia": "Raul Perez Ureta", "Montagem": "Julia Salvador", "Música": "Mario Dali", "Elenco": "Hanna Schygulla, Fernando Guillén, Charo López, Leonor Arocha, J.L. Alvarez, Alicia Bustamante, Álvaro de Luna, Francisco Gattorno, Gilberto Reyes, entre outros" } },
    { titulo: "Estorvo (Brasil - 2000)", imagem: "images/longas/estorvo.jpg", detalhes: { "Direção": "Ruy Guerra", "Roteiro": "Chico Buarque de Hollanda (romance), Ruy Guerra", "Duração": "95 min", "Elenco": "Jorge Perugorría, Bianca Byington, Suzana Ribeiro, Leonor Arocha, Xando Graça, Athayde Arcoverde, Candido Damm, José Antônio Rodriguez, Dandara Guerra, Tonico Oliveira" } },
    { titulo: "Monsanto (Portugal - 2000)", imagem: "images/longas/monsanto.jpg", detalhes: { "Direção": "Ruy Guerra", "Roteiro": "Vicente Alves do Ó", "Duração": "90 min", "Elenco": "Vítor Norte, Maria d'Aires, João Lagarto, Paula Neves, Teresa Roby, Júlia Correia, Ivo Canelas, Rui Luís, Bibi Gomes, Zeka Laplaine, José Raposo, João Maria Pinto, Luís Zagalo, Francisco Brás, Carlos Curto, Otelo Saraiva de Carvalho" } },
    { titulo: "Portugal S/A (Portugal - 2003)", imagem: "images/longas/portugal_sa.jpg", detalhes: { "Direção": "Ruy Guerra", "Roteiro": "Carlos Vale Ferraz", "Duração": "95 min", "Elenco": "Ana Bustorff, Cândido Ferreira, Cristina Carvalhal, Cristina Câmara, Diogo Infante, Henrique Viana, João D’Ávila, João Reis, João Vaz, Luís Madureira, Maria do Céu Guerra, Pedro Oliveira" } },
    { titulo: "O Veneno da Madrugada (Brasil, Argentina, Portugal - 2004/2005)", imagem: "images/longas/o_veneno_da_madrugada.jpg", detalhes: { "Direção": "Ruy Guerra", "Roteiro": "Ruy Guerra, Tairone Feitosa", "Duração": "118 min", "Elenco": "Leonardo Medeiros, Juliana Carneiro da Cunha, Fábio Sabag, Zózimo Bulbul, Jean Pierre Noher, Rejane Arruda, Luah Galvão, Nélton Bicudo, Amir Haddad, Tonico Pereira, Emílio de Melo, Murilo Grossi, Fernando Alves Pinto" } },
    { titulo: "Quase Memória (Brasil - 2015)", imagem: "images/longas/quase_memoria.jpg", detalhes: { "Direção": "Ruy Guerra", "Roteiro": "Ruy Guerra, Bruno Laet, Diogo de Oliveira", "Duração": "132 min", "Elenco": "Tony Ramos, Charles Fricks, João Miguel, Mariana Gimenes, Antonio Pedro" } },
    { titulo: "Aos Pedaços (Brasil - 2020)", imagem: "images/longas/aos-pedacos.jpg", detalhes: { "Direção": "Ruy Guerra", "Roteiro": "Ruy Guerra, Luciana Mazzotti", "Duração": "93 min", "Elenco": "Julio Adrião, Emílio de Mello, Simone Spoladore, Christiana Ubach" } }
];

const curtas = [
    { titulo: "Quand Le Soleil Dort", info: "1954, França, 10 min, 35mm, p&b", descricao: "Prova final de Ruy Guerra no curso de cinema do IDHEC (França). Durante a II Guerra Mundial, um grupo de soldados alemães vigia prisioneiros da resistência italiana.", detalhes: { "Argumento": "Baseado no romance Le Hommes et Les Autres de Elio Vitorini", "Roteiro": "J. Duval", "Diálogos": "Elio Vitorini", "Direção": "Ruy Guerra", "Produção": "V. Cerep", "Fotografia": "M. Mundiviller", "Montagem": "M. Duchesne", "Elenco": "Pierre Francis James, Bruno Balt, Maria B. Leite, Eugene Berthier, Elen Estange, Frank Estange, Ruy Belos, Bernard Revon" } },
    { titulo: "Orós", info: "1959, Brasil", detalhes: { "Direção": "Ruy Guerra", "Produção": "Carlos Niemeyer" } },
    { titulo: "Cavalo de Oxumaré", info: "1960, Brasil", detalhes: { "Direção": "Ruy Guerra", "Produção": "Carlos Niemeyer", "Elenco": "Irma Alvarez e Haroldo Costa" }, imagens: [{ src: "images/longas/irma_alvarez.jpg", alt: "Irma Alvarez", legenda: "Irma Alvarez" }, { src: "images/longas/cavalo_oxumare.jpg", alt: "Ruy Guerra e Miguel Torres", legenda: "Ruy Guerra e seu parceiro Miguel Torres, início dos anos 60" }] },
    { titulo: "Chanson pour traverser une rivière", info: "1966, Bretanha, França", descricao: "Episódio para o filme Loin du Vietnam, de Chris Marker.", detalhes: { "Direção": "Ruy Guerra" } },
    { titulo: "Operação Búfalo", info: "1978, Moçambique, 25 min, 16mm, p&b", detalhes: { "Direção": "Ruy Guerra", "Produção": "INC - Instituto Nacional de Cinema de Moçambique", "Fotografia": "Fernando Silva, Ruy Guerra", "Montagem": "Enoque Mate, Moira Forjaz", "Música": "J. Muscavel, Sox, Pedro Bem, Sigauque, Grupo Musical da Zona de Marromeu", "Locução": "Gulamo Khan" } },
    { titulo: "Danças Moçambicanas", info: "1979, Moçambique, 35mm, cor", detalhes: { "Direção": "Ruy Guerra", "Produção": "INC - Instituto Nacional de Cinema de Moçambique" } },
    { titulo: "Um Povo Nunca Morre", info: "1980, Moçambique, 18 min, 16mm, cor", detalhes: { "Roteiro": "Licínio de Azevedo", "Direção": "Ruy Guerra", "Produção": "INC - Instituto Nacional de Cinema de Moçambique", "Fotografia": "Edgar Moura, Ahmed Ali, Bonifácio Simbine, João Costa, Luis Simão, Ruy Guerra", "Música": "Obadias, Fernando Sofane", "Locução": "Gulamo Khan" } },
    { titulo: "Talk To Me", info: "1984, EUA, 6 min, videoclipe", descricao: "Videoclipe da banda <i>I am Sian</i>.", detalhes: { "Direção e roteiro": "Ruy Guerra", "Produtora": "David Sonnenberg / Guerra Filmes LTDA", "Elenco": "Claudia Ohana, Paula Maria, Evandro Carvalho, Juan Chomze, Dama de Lara, Nayra Fernandes, Jorge Lino, Lé Meireles, Nestor Fernandes, Jorge Lino, Nestor Capueira e outros" } },
    { titulo: "Obvious Child", info: "1990, EUA, 5 min, 35mm, cor, videoclipe", descricao: "Videoclipe da música Obvious Child, do álbum <i>Rythm of The Saints</i>, de Paul Simon. Filmado em Salvador com o grupo <i>Olodum</i>.", detalhes: { "Direção": "Ruy Guerra", "Produção": "Roberlo Backer, Peregrine INC, Warner Music" } },
    { titulo: "Carta portuguesa a Sarajevo", info: "1994, França e Inglaterra, 3 min, cor", detalhes: { "Direção e roteiro": "Ruy Guerra", "Produção": "Prod. Point Du Jour / Arte / BBC2 / Saga", "Idéia original": "Patrice Barrat" } }
];

const entrevistas = [
    { titulo: 'Aos 90 anos cineasta Ruy Guerra escreve seu primeiro romance, critica desmonte da cultura e afirma "Vamos sair deste buraco"', data: '06/09/2021', autor: 'Ruan de Souza Gabriel', fonte: 'O Globo', local: 'Brasil' },
    { titulo: 'Diretor de cinema destaca a importância da sétima arte na Amazônia', data: '30/01/2014', autor: 'Jony Clay Borges', fonte: 'A Crítica', local: 'Manaus - Brasil' },
    { titulo: '“Fazer e desfazer, tudo é fazer” (Os filmes de minha vida, vol.5 – Cinema é sonho)', data: '2013', fonte: 'Mostra Internacional de Cinema SP / Imprensa Oficial', local: 'São Paulo - Brasil' },
    { titulo: 'Ruy Guerra: cidadão de várias pátrias, passageiro de várias revoluções', data: '2012', fonte: 'Revista Atlântica Nº21', local: 'Portugal' },
    { titulo: 'Ruy Guerra, o cineasta da palavra', data: '23/05/2011', autor: 'Rafael Antunes e António Costa', local: 'Lisboa - Portugal' },
    { titulo: '“Trabalhar com o oculto e com o que já se esqueceu”', data: '08/2006', autor: 'José Carlos Avellar, Geraldo Sarno e Sergio Sanz', fonte: 'Mostra Cultural de Cinema Banco do Brasil', local: 'São Paulo - Brasil' },
    { titulo: 'De volta ao campo de batalha', data: '2005', autor: 'Neusa Barbosa', fonte: 'Revista Bine\'Art' },
    { titulo: '28º Festival de Cinema de Gramado: "Temos direito à universidade"', data: '03/08/2000', fonte: 'Agência Estado' },
    { titulo: 'Entrevista em Retrospectiva Ruy Guerra', data: '1999', autor: 'Nuno Sena', local: 'Lisboa - Portugal' },
    { titulo: 'O idioma como pátria e o sentimento do mundo', data: '1997', autor: 'Ana Maria Galano', fonte: 'LINGUAMAR - Funarte', local: 'Brasil' },
    { titulo: 'Entretien avec... Ruy Guerra: "Ma rencontre avec García Márquez"', data: '24/11/1983', fonte: 'Les Nouvelles Littéraires', local: 'França' },
    { titulo: 'Ruy Guerra abre o verbo', data: '11/1976', autor: 'Ivalda Freitas, Henrique Faulhaber e Caio Rubens', fonte: 'Cine-Olho (PUC RJ)', local: 'Rio de Janeiro - Brasil' },
    { titulo: 'Entretien avec Ruy Guerra: À propos des "Fusils"', data: '13/04/1967', fonte: 'Le Monde', local: 'França' },
    { titulo: 'Entretien avec Ruy Guerra', data: '1966', autor: 'Robert Benayoun, Michel Ciment, Jacques Demeure, Michèle Firk, Paul-Louis Thirard', fonte: 'Revista Positif', local: 'França' },
    { titulo: 'Entretien avec Ruy Guerra', data: '1966', autor: 'Jean-André Fieschi e Jean Narboni', fonte: 'Cahiers du Cinéma', local: 'Paris - França' }
];

const montador = [
    { titulo: "Cinco Vezes Favela - Escola de Samba, Alegria de Viver (Brasil - 1962)", detalhes: { "Direção": "Carlos Diegues", "Duração": "longa-metragem" } },
    { titulo: "História da Praia (Brasil - 1962)", detalhes: { "Direção": "Fernando Amaral", "Duração": "curta-metragem" } },
    { titulo: "Esse Mundo é Meu (Brasil - 1963)", detalhes: { "Direção": "Sérgio Ricardo", "Duração": "longa-metragem" } },
    { titulo: "Os Fuzis (Brasil - 1964)", detalhes: { "Direção": "Ruy Guerra", "Duração": "longa-metragem" } },
    { titulo: "Heitor dos Prazeres (Brasil - 1965)", detalhes: { "Direção": "Antonio Carlos Fontoura", "Duração": "curta-metragem" } },
    { titulo: "Série de documentários semanais (França - 1966/68)", detalhes: { "Descrição": "Montagem para a ORTF." } },
    { titulo: "Os Deuses e Os Mortos (Brasil - 1970)", detalhes: { "Direção": "Ruy Guerra", "Duração": "longa-metragem" } },
    { titulo: "Marcados para Viver (Brasil - 1976)", detalhes: { "Direção": "Maria do Rosário Nascimento Silva", "Duração": "longa-metragem" } },
    { titulo: "A Queda (Brasil - 1977)", detalhes: { "Direção": "Ruy Guerra", "Duração": "longa-metragem" } },
    { titulo: "Mueda, Memória e Massacre (Moçambique - 1979)", detalhes: { "Direção": "Ruy Guerra", "Duração": "longa-metragem" } },
    { titulo: "O Judeu (Brasil, Portugal - 1995)", detalhes: { "Direção": "Jom Tob Azulay", "Duração": "longa-metragem" } },
    { titulo: "Supervisão de roteiros e montagem (Portugal - 1995)", detalhes: { "Descrição": "Para a produtora “D&D Audiovisuais” (TV) Portugal." } }
];

const festivais = [
    { tipo: 'filme', titulo: 'Os Cafajestes', info: 'Brasil - 1962', eventos: [{ evento: '1962 - Prêmios Saci do Estado de São Paulo, Brasil', premios: ['Saci Melhor Direção', 'Saci Melhor Argumento Original Ruy Guerra e Miguel Torres', 'Saci Melhor Fotografia Toni Rabattoni', 'Saci Melhor Música Luiz Bonfá', 'Saci Melhor Atriz Norma Bengell'] }, { evento: '1963 - Festival de Berlim, Alemanha', premios: ['Participação oficial representando o Brasil'] }] },
    { tipo: 'filme', titulo: 'Os Fuzis', info: 'Brasil - 1964', eventos: [{ evento: '1964 - Festival de Berlim, Alemanha', premios: ['Urso de Prata - Prêmio Especial do Juri'], imagem: { src: 'images/longas/urso_de_prata.jpg', alt: 'Ruy Guerra premiado com o Urso de Prata, Berlim', legenda: 'Ruy Guerra sendo premiado com o Urso de Prata, Berlim' } }, { evento: '1964 - Festival de Cinema Brasileiro de Teresópolis', premios: [] }, { evento: '1964 - Festival de Pesaro, Itália', premios: ['Melhor Fotografia, Ricardo Aronovich'] }, { evento: '1965 - Festival de Acapulco, México', premios: ['Prêmio Cabeza de Palanque'] }, { evento: 'Cahiers du Cinéma, França', premios: ['Selecionado na lista de críticos europeus como um dos dez melhores filmes da história do cinema'] }] },
    { tipo: 'filme', titulo: 'Sweet Hunters', info: 'França, Brasil, Panamá - 1969', eventos: [{ evento: '1969 - Festival de Veneza, Itália', nota: '(festival sem premiação competitiva)', premios: ['Medalha de Ouro por Participação Especial'] }, { evento: '1970 - Festival de Cannes, França', nota: '(Quinzaine des Realizateurs)' }, { evento: '1970 - Festival dos Festivais, Inglaterra', nota: '(não competitivo, Londres - Inglaterra)' }] },
    { tipo: 'filme', titulo: 'Os Deuses e os Mortos', info: 'Brasil - 1970', eventos: [{ evento: '1970 Festival de Brasília', premios: ['Candango de Ouro, Melhor Filme, Melhor Ator Othon Bastos, Melhor Atriz Dina Sfat, Melhor Fotografia Dib Lutfi, Melhor Cenografia Marcos Weintock, Melhor Música Milton Nascimento'] }, { evento: '1970 - Prêmios do Estado do Rio de Janeiro', premios: ['Coruja de Ouro, Melhor Atriz Ítala Nandi, Melhor Fotografia Dib Lutfi, Atriz Coadjuvante Mara Rubia, Ator Coadjuvante Nelson Xavier', 'Golfinho de Ouro pela "Melhor Criação do Ano"'] }, { evento: '1970 - Festival de Berlim, Alemanha', premios: ['Competição oficial representando o Brasil'] }, { evento: '1970 - Festival de Cartago, Tunísia' }, { evento: '1971 - Xème Rencontre Internacionale du Cinema et de Jeunesse de Grenoble, França', premios: ['Melhor Realização, Melhor Fotografia Dib Lutfi'] }, { evento: '1971 - XIII Semana Internacional de Cine In Color de Barcelona', premios: ['Prêmio Dama dei Paraguas pelo Melhor Filme, Espanha'] }, { evento: '1971 - Participação na Semaine Positif, Paris, França' }, { evento: '1971 - XIX Festival de Cine, San Sebastian, Espanha' }, { evento: '1971 - Festival de Cannes, França', nota: '(Quinzaine des Realizateurs)' }, { evento: '1971 - Cahiers du Cinéma, França', premios: ['Selecionado pela revista francesa Cahiers du Cinema como um dos sete melhores filmes do ano'] }, { evento: '1974 - Prêmio de Qualidade INC (Brasil)' }] },
    { tipo: 'filme', titulo: 'A Queda', info: 'Brasil - 1977', eventos: [{ evento: '1978 - Festival de Berlim, Alemanha', premios: ['Urso de Prata - Prêmio Especial do Juri'] }, { evento: '1978 - CNNB Rio de Janeiro', premios: ['Prêmio Margarida de Prata, Brasil'] }, { evento: '1978 - Festival de Brasília', premios: ['Melhor Ator Nelson Xavier, Brasil'] }, { evento: '1979 - Federação Cineclubes do Rio de Janeiro, Brasil', premios: ['Prêmio São Saruê'] }, { evento: '1980 - Festival Biarritz, França' }, { evento: '1981 - Festival de Edinburgh, Inglaterra' }, { evento: '1981 - Semana de Positif, Paris, França' }] },
    { tipo: 'filme', titulo: 'Mueda - Memória e Massacre', info: 'Moçambique - 1979/80', eventos: [{ evento: '1980 - Festival de Tashkent, Rússia (ex-URSS)', premios: ['Prêmio União da Amizade dos Povos'] }, { evento: '1980 - Prêmio Filme e Cultura' }, { evento: '1981 - Festival de Rotterdam, Holanda' }, { evento: '1981 - Forum do Jovem Cinema, Festival de Berlim, Alemanha' }, { evento: '1981 - Semana Cinema Terceiro Mundo, Lisboa, Portugal' }, { evento: '1982 - Jornadas Cinematográficas de Amiens, França' }, { evento: '1983 - Confrontation Perpignan, França' }] },
    { tipo: 'filme', titulo: 'Erendira', info: 'Brasil, México, França, Alemanha - 1982', eventos: [{ evento: '1984 - Festival de Chicago, USA', premios: ['Prêmio Melhor Atriz Irene Papas'] }, { evento: '1985 - Cine Clube, São Paulo', premios: ['Melhor Filme Brasileiro escolhido pelo público'] }, { evento: '1983 - Festival de Cannes, França', premios: ['Competição Oficial representando o México'], imagem: { src: 'images/longas/ruy-gabo-cannes-erendira.jpg', alt: 'Ruy Guerra, Gabriel García Márquez, Festival de Cannes, Erendira', legenda: 'Ruy Guerra e Gabriel García Márquez' } }, { evento: '1983 - Festival Latino Americano (Hours-Concours), Cuba' }, { evento: '1983 - Festival de New York, USA' }, { evento: '1983 - Festival de Toronto, Canadá' }, { evento: '1984 - Festival de Cartagena (Hours-Concours), Colombia' }, { evento: '1984 - 8ª Mostra Internacional de Cinema de São Paulo, Brasil' }] },
    { tipo: 'filme', titulo: 'Ópera do Malandro', info: 'Brasil, França - 1985', eventos: [{ evento: '1986 - Prêmio do Estado do Rio de Janeiro, Brasil', premios: ['Golfinho de Ouro (Cinema)'], imagem: { src: 'images/longas/chico-buarque_jack-lang.jpg', alt: 'Chico Buarque com Jack Lang, A Ópera do Malandro', legenda: 'O ministro da cultura francês Jack Lang, a primeira dama da França Danielle Mitterand e Chico Buarque durante as filmagens' } }, { evento: '1986 - III Festival do Rio de Janeiro', premios: ['Prêmio de Melhor Direção, Brasil'] }, { evento: '1986 - Festival Latino Americano Havana, Cuba', premios: ['Prêmio Especial do Juri', 'Prêmio Melhor Trilha Sonora Chico Buarque', 'Prêmio Melhor Montagem Mair Tavares, Ide Lacreta'] }, { evento: '1988 - Quinzaine des Realisateurs, Cannes, França', premios: ['Avant - Première Square de Choisy, França'] }, { evento: '1988 - 24º New York Film Festival, USA' }, { evento: '1987 - Miami Film Festival, USA' }, { evento: '1987 - Festival Internacional de Cinema de Washington DC., USA' }, { evento: '1987 - Semana da Associação de Técnicos de Cinema, Brasil' }, { evento: '1987 - 2 Festival Internacional de Cine de Expressão Ibérica, Espanha' }, { evento: '1987 - Mostra de Cinema Latino Americano, Peru' }, { evento: '1987 - Festival de Cinema de Istambul, Turquia' }, { evento: '1988 - Semana Cinema Latino Americano - Fundación del Nuevo Cine Latino Americano, Cuba' }, { evento: '2005 - Festival das Águas, Hors-concours, Corumbá, Brasil' }] },
    { tipo: 'filme', titulo: 'A Fábula da Bela Palomera', info: 'Brasil - 1987', eventos: [{ evento: '1988 - 25º Festival Internacional de Television', premios: ["Prague d'Or (Prêmio da Imprensa)"] }, { evento: '1988 - Festival de Munique, Alemanha' }, { evento: '1988 - 21º Festival de Brasília (Hour-Concours), Brasil' }, { evento: '1988 - XXXIII Semana Internacional de Valladolid, Espanha' }, { evento: '1988 - Mostra de Cinema em São Paulo, Brasil' }, { evento: '1989 - 13º Hong Kong International Film Festival' }, { evento: '1990 - Festival Latino Americano, Providence, USA' }] },
    { tipo: 'filme', titulo: 'Kuarup', info: 'Brasil - 1989', eventos: [{ evento: '1988 - Prêmio Casa de las Americas, Cuba' }, { evento: '1988 - Festival of Festivals, Toronto (Canadá)' }, { evento: '1989 - Festival de Cannes, França', premios: ['Competição oficial representando o Brasil'] }, { evento: '1989 - XV Festival de Cine Ibero Americano de Huelva, Espanha', premios: ['Prêmio Radio Nacional de Espana, Espanha', 'Prêmio ASECAN (Associação de Escritores Cinematográficos de Andaluzia), Melhor Filme, Espanha'] }, { evento: '1989 - Festival Latino Americano de Havana', premios: ['Prêmio FICC (Federação Internacional de Cine Clube), Cuba, Melhor Filme'] }, { evento: '1990 - Cinco Indicações no 10 Prêmio Bel Metal, Brasil' }] },
    { tipo: 'filme', titulo: 'Estorvo', info: 'Brasil - 2000', eventos: [{ evento: '2000 - Festival de Cannes, França', premios: ['Competição oficial representando o Brasil'], imagem: { src: 'images/longas/cannes.jpg', alt: 'Ruy Guerra sendo entrevistado em Cannes', legenda: 'Ruy Guerra sendo entrevistado em Cannes' } }, { evento: '2000 - Festival de Gramado, Brasil', premios: ['Melhor Fotografia Marcelo Durst', 'Melhor Trilha Sonora Egberto Gismonti'], imagem: { src: 'images/longas/kikito.jpg', alt: 'Ruy Guerra recebendo o Kikito em Gramado', legenda: 'Ruy Guerra sendo premiado com o Kikito' } }, { evento: '2000 - Festival de Huelva, Espanha', premios: ['Melhor Diretor'] }, { evento: '2001 - Associação Paulista de Críticos de Arte, Brasil', premios: ['Prêmio APCA de Melhor Diretor'] }, { evento: '2002 - Festival de Rabat, Marrocos' }, { evento: '2002 - Festival de Nova Delhi, Índia' }, { evento: '2002 - V FICA-Festival Internacional de Cinema e Vídeo Ambiental, Brasil' }] },
    { tipo: 'filme', titulo: 'O Veneno da Madrugada', info: 'Brasil, Argentina, Portugal - 2004/2005', eventos: [{ evento: '2005 - Festival de Brasília, Brasil', premios: ['Prêmio de Melhor Fotografia, Walter Carvalho', 'Melhor Direção de Arte, Marcos Flaksman'] }, { evento: '2005 - Festival de Havana, Cuba', premios: ['Prêmio de Melhor Fotografia, Walter Carvalho'] }, { evento: '2005 - Festival de San Sebastian, Espanha', premios: ['Competição oficial representando o Brasil'] }, { evento: '2005 - Festival de Biarritz, França', premios: ['Competição oficial representando o Brasil'] }, { evento: '2006 - Festival Iberoamericano de Cine de Santa Cruz de la Sierra, Bolívia', premios: ['Melhor filme'] }, { evento: '2008 - 1st Cine Fest Brasil/Madrid, Espanha' }] },
    { tipo: 'filme', titulo: 'Quase Memória', info: 'Brasil, 2015', eventos: [{ evento: '2015 - Festival do Rio de Janeiro', premios: ['Prêmio Especial do Jury'] }, { evento: '2016 - 19º Festival internacional de Cinema de Punta del Este', premios: ['Premio de melhor direção'] }, { evento: '2016 - Festival Internacional de Cinema de Moscow', premios: ['Menção Honrosa'] }] },
    { tipo: 'filme', titulo: 'Aos Pedaços', info: 'Brasil - 2020', eventos: [{ evento: '2020 - 48º Festival de Gramado, Brasil', premios: ['Melhor Direção', 'Melhor Fotografia', 'Melhor Desenho de Som'] }, { evento: '2020 - Rotterdam Film FESTIVAL', premios: ['Participação com exibição em fevereiro/2020'] }] },
    { tipo: 'categoria', titulo: 'Prêmios e Homenagens', eventos: [{ evento: '1987 - Grau de Comendador da Ordem do Mérito', premios: ['Outorgada pelo Presidente Mário Soares (Portugal)'] }, { evento: '1987 - Governo do Estado do Rio de Janeiro', premios: ['Golfinho de Ouro do Cinema'] }, { evento: '1993 - Festival de Trieste (Itália)', premios: ['Prêmio pela obra'] }, { evento: '2000 - Festival Iberoamericano de Cine de Santa Cruz (Bolívia)', premios: ['Prêmio Tatá Tumpa por “Excelencia y aporte al Cine Iberoamericano”'] }, { evento: '2002 - Festival de Cinema, Vídeo e Cine de Curitiba', premios: ['Prêmio “Ruy Guerra”'] }, { evento: '2003 - 8º Festival de Cinema Universitário (UFF/CCBB)', premios: ['Homenagem ao Professor Ruy Guerra'] }, { evento: '2003 - Jornal O Estado de S. Paulo e Serasa S/A', premios: ['Prêmio Multicultural - Cinema'] }, { evento: '2004 - Festival Internacional de Cine de San Sebastian', premios: ['Presidente do Juri “Horizontes”'] }, { evento: '2008 - Ordem ao Mérito Cultural (Brasil)', premios: ['Grau de Comendador'] }, { evento: '2009 - Homenagem da ABDeC (Associação Brasileira de Documentaristas e Curtametragistas Rio de Janeiro)' }, { evento: '2010 - Premio Kikito de Cristal – Festival de Gramado', premios: ['Homenagem pelo conjunto da obra'] }, { evento: '2011 - Mostra Comemorativa dos 80 anos de Ruy Guerra na Cinemateca de São Paulo', premios: ['Exibição de seus filmes entre os dias 18 a 25 de agosto'] }, { evento: '2012 - Homenagem Especial 6º Festival Dockanemo Maputo, Moçambique (setembro)' }] },
    { tipo: 'categoria', titulo: 'Retrospectivas', eventos: [{ evento: '1981 - Festival de Cinema de Biarritz, França', premios: ['Retrospectiva Ruy Guerra'] }, { evento: '1998 - Cinemateca de Lisboa', premios: ['Retrospectiva de toda a obra'] }, { evento: '1998 - Centro Cultural Banco do Brasil (CCBB) Rio de Janeiro', premios: ['Retrospectiva de toda a obra'] }, { evento: '2005 - Cineclube SESC-SP', premios: ['Mostra “O cinema de Ruy Guerra”'] }, { evento: '2006 - Centro Cultural Banco do Brasil CCBB São Paulo', premios: ['Retrospectiva de toda a obra - Ruy Guerra, Filmar e Viver'] }] },
    { tipo: 'categoria', titulo: 'Participação como Jurado', eventos: [{ evento: '1980 - Jornadas da Bahia, Brasil' }, { evento: '1980 - Festival de Cinema de Gramado, Brasil' }, { evento: '1980 - Festival de Cinema em Cartagena, Colombia' }, { evento: '1981 - 1º Concurso de Fotografia, Moçambique' }, { evento: '1981 - 2º Concurso de Fotografia, Moçambique' }, { evento: '1981 - Festival de Arte e Areia, Paraíba, Brasil' }, { evento: '1981 - Festival de Cinema de Biarritz, França' }, { evento: '1982 - Festival de Cinema de Biarritz, França' }, { evento: '1982 - 1º Seminário de Audio Visual, Moçambique' }, { evento: '1994 - Laboratório de Guiones, Sundance, México', premios: ['Assessor'] }, { evento: '1996 Workshop de roteiros Sundance, Búzios', premios: ['Assessor'] }, { evento: '2003 - Festival de Curta Metragem da Universidade Gama Filho', premios: ['Presidente'] }, { evento: '2004 - Festival do Rio de Janeiro', premios: ['Presidente do Juri'] }, { evento: '2006 – Festival de Gramado', premios: ['Presidente do Juri Latino americano'] }, { evento: '2010 - Festival de Mar Del Plata, Argentina' }] },
    { tipo: 'categoria', titulo: 'Participação como Palestrante', eventos: [{ evento: '1976 - Universidad Autónoma do México, México' }, { evento: '1978 - 1ª Feira de Livro Progressista, República Popular de Angola' }, { evento: '1982 - 1ª Assembléia Mundial de Realizadores (Funchal)' }, { evento: '1985 - Jornadas Democráticas do Presidente Raoul Alfonsín, Buenos Aires' }] }
];

const teatro = [
    { type: 'group', titulo: 'Shows de música: direção entre 1964 e 1970', items: [{ titulo: 'Francis Hime e Dori Caymmi', local: 'Rio de Janeiro, Brasil', detalhes: { 'Direção': 'Ruy Guerra' } }, { titulo: 'Recital de Samba', local: 'Rio de Janeiro, Brasil', detalhes: { 'Direção': 'Ruy Guerra', 'Com': 'Baden Powell, Alaíde Costa, Dulce Nunes e Oscar Castro Neves.' } }, { titulo: 'Poeira de Estrelas', local: 'Rio de Janeiro, Brasil', detalhes: { 'Direção': 'Ruy Guerra', 'Descrição': 'Espetáculo para o Sindicato dos Artistas e Técnicos.' } }, { titulo: 'Clube da Esquina', local: 'Rio de Janeiro, Brasil', detalhes: { 'Direção': 'Ruy Guerra', 'Com': 'Milton Nascimento, Lo Borges, entre outros.' } }, { titulo: 'Chico Buarque e Maria Bethânia no Canecão', local: 'Rio de Janeiro, Brasil', detalhes: { 'Direção': 'Ruy Guerra' } }, { titulo: 'Grupo de Criação', local: 'Rio de Janeiro, Brasil', detalhes: { 'Direção': 'Ruy Guerra', 'Descrição': 'Parceria com Caetano Veloso.' } }] },
    { type: 'single', titulo: 'Woyzeck, de G. Bruchner', ano: '1972', local: 'Rio de Janeiro, Brasil', detalhes: { 'Tradução de Texto e Letras Originais': 'Ruy Guerra', 'Direção': 'Marília Pedroso', 'Canções': 'Edu Lobo' } },
    { type: 'single', titulo: 'Tempo e Contratempo', ano: '1972', local: 'Brasil', detalhes: { 'Direção': 'Ruy Guerra', 'Com': 'Chico Buarque e MPB4.' } },
    { type: 'single', titulo: 'O Homem de la Mancha', ano: '1973', local: 'Rio de Janeiro, Brasil', detalhes: { 'Descrição': 'Peça teatral original de Dale Wasserman.', 'Versão letras de música': 'Ruy Guerra em parceria Chico Buarque', 'Direção': 'Flávio Rangel' } },
    { type: 'single', titulo: 'Calabar, O Elogio da Traição', ano: '1974', local: 'Brasil', detalhes: { 'Descrição': 'Texto original e letras de Chico Buarque e Ruy Guerra (censurada).' }, imagens: [{ src: 'images/longas/calabar.jpg', alt: 'Ruy Guerra e Chico Buarque, Calabar', legenda: 'Ruy Guerra e Chico Buarque' }, { src: 'images/longas/calabar-capa.jpg', alt: 'Calabar: Chico Buarque e Ruy Guerra' }] },
    { type: 'single', titulo: 'Festa do Avante', ano: '1975', local: 'Lisboa', detalhes: { 'Direção': 'Ruy Guerra', 'Com': 'Chico Buarque, Edu Lobo, Simone e MPB4.' } },
    { type: 'single', titulo: 'Trivial Simples', ano: '1976', local: 'Brasil', detalhes: { 'Descrição': 'Peça Teatral Original de Nelson Xavier.', 'Direção': 'Ruy Guerra' } },
    { type: 'single', titulo: 'Fábrica de Chocolate', ano: '1979', local: 'Brasil', detalhes: { 'Descrição': 'Peça Teatral Original de Mário Prata.', 'Direção': 'Ruy Guerra' }, imagens: [{ src: 'images/longas/fabrica_de_chocolate.jpg', alt: 'Mário Prata - Fábrica de Chocolate' }] },
    { type: 'single', titulo: 'Dom Quixote de Lugar Nenhum', ano: '2007/08', local: 'Brasil', detalhes: { 'Autor': 'Ruy Guerra', 'Elenco': 'Edson Celulari' }, imagens: [{ src: 'images/longas/dom_quixote_de_lugar_nenhum.jpg', alt: 'Dom Quixote de lugar nenhum - peça' }] },
    { type: 'single', titulo: 'Os Exilados', ano: '2012', local: 'Brasil', detalhes: { 'Descrição': 'Peça Teatral Original de James Joyce.', 'Direção': 'Ruy Guerra' }, imagens: [{ src: 'images/longas/os_exilados-2.jpg', alt: 'Ruy Guerra e Franciely Freduzeski da peça Os exilados', legenda: 'Ruy Guerra e a atriz Franciely Freduzeski de Os Exilados' }, { src: 'images/longas/exilados-trupe.jpg', alt: 'Ruy Guerra e os atores da peça Os exilados', legenda: 'Ruy Guerra e os atores da peça Os exilados' }] }
];

const cronicas = [
    { titulo: "Algumas palavras para alguém que anda por aí há já algum tempo", data: "07/06/2014", fonte: "O Estado de S.Paulo - Caderno 2" },
    { titulo: "O ovo da serpente", data: "01/04/2014", fonte: "Blog Carta Maior" },
    { titulo: "Meu gordo definitivo", data: "09/10/1998", fonte: "O Estado de S. Paulo" },
    { titulo: "O ídolo das chuteiras de prata", data: "24/07/1998", fonte: "O Estado de S.Paulo - Caderno 2" },
    { titulo: "Flores do pântano", data: "05/06/1998", fonte: "O Estado de S. Paulo" },
    { titulo: "Em nome da lapa", data: "15/05/1998", fonte: "O Estado de S. Paulo" },
    { titulo: "O paladar da revolução", data: "20/03/1998", fonte: "O Estado de S. Paulo" },
    { titulo: "Cuba: o difícil diálogo entre o poder e a arte", data: "13/03/1998", fonte: "O Estado de S. Paulo" },
    { titulo: "Amargo travo de saudade", data: "19/12/1997", fonte: "O Estado de S. Paulo" },
    { titulo: "A Ricardo o que é de Ricardo", data: "12/12/1997", fonte: "O Estado de S. Paulo" },
    { titulo: "As portas da poesia", data: "12/11/1997", fonte: "O Estado de S. Paulo" },
    { titulo: "As três paixões de Miguel Torres", data: "24/10/1997", fonte: "O Estado de S. Paulo" },
    { titulo: "A sombra da globo e a visão estroboscópica do cinema brasileiro", data: "26/09/1997", fonte: "O Estado de S. Paulo" },
    { titulo: "Lola Montes venceu", data: "15/08/1997", fonte: "O Estado de S. Paulo" },
    { titulo: "O muro da lógica", data: "11/07/1997", fonte: "O Estado de S. Paulo" },
    { titulo: "Tenho muito medo", data: "06/06/1997", fonte: "O Estado de S. Paulo" },
    { titulo: "A imagem e o horror", data: "04/04/1997", fonte: "O Estado de S. Paulo" },
    { titulo: "A noite e seus bêbados", data: "28/03/1997", fonte: "O Estado de S. Paulo" },
    { titulo: "Brasil, um faroeste de colarinho branco", data: "21/03/1997", fonte: "O Estado de S. Paulo" },
    { titulo: "Despedida", data: "14/03/1997", fonte: "O Estado de S. Paulo" },
    { titulo: "O fantasma da homossexualidade", data: "14/03/1997", fonte: "O Estado de S. Paulo" },
    { titulo: "Cadê aquela França?", data: "07/03/1997", fonte: "O Estado de S. Paulo" },
    { titulo: "A idade e o sonho", data: "06/02/1997", fonte: "" },
    { titulo: "A coragem dos poetas", data: "1996", fonte: "Ruy Guerra, op. cit., 1996" },
    { titulo: "Esta janela", data: "1996", fonte: "Ruy Guerra, op. cit, 1996" },
    { titulo: "Um cheiro de manga", data: "1996", fonte: "Ruy Guerra, op. cit, 1996" },
    { titulo: "Vinte navios...", data: "1996", fonte: "Ruy Guerra, op. cit., 1996" },
    { titulo: "A bela e o monstro", data: "12/1949", fonte: "Itinerário" },
    { titulo: "M. Vincent (São Vicente de Paula)", data: "10/1949", fonte: "Noticias - 25 de outubro 1949 - Coluna de Cinema" },
    { titulo: "Arco de Triunfo", data: "08/1949", fonte: "Itinerário, Moçambique" },
    { titulo: "Lourenço Marques, uma cidade moderna", data: "05/1949", fonte: "jornal Notícias, Moçambique" },
    { titulo: "Utilidades e perigos do cinema na formação do caráter da juventude", data: "1940", fonte: "imprensa moçambicana, final dos anos 1940" }
];

const contos = [
    { titulo: "No pântano", data: "02/1950", autor: "Ruy Guerra", fonte: "", local: "Lourenço Marques - Moçambique" },
    { titulo: "Negro João há de morrer no mar", data: "29/05/1949", autor: "Ruy Guerra", fonte: "", local: "Lourenço Marques - Moçambique" },
    { titulo: "A negra rosa", data: "05/1949", autor: "Ruy Guerra", fonte: "Itinerário e posteriormente As mãos dos pretos, Antologia do Conto Moçambicano, Organização e Prefácio Nelson Saúte Publicações Dom Quixote, 2001", local: "Lourenço Marques - Moçambique" },
    { titulo: "Foi assim que morreu Bobby", data: "04/03/1949", autor: "Ruy Guerra", fonte: "", local: "Lourenço Marques - Moçambique" },
    { titulo: "Pablo", data: "09/1948", autor: "Ruy Guerra", fonte: "Jornal da Mocidade Portuguesa", local: "Lourenço Marques - Moçambique" },
    { titulo: "Farol vermelho", data: "12/1947", autor: "Ruy Guerra", fonte: "", local: "Lourenço Marques - Moçambique" },
    { titulo: "Diário de um louco: o coqueiro", data: "entre 1947/1952", autor: "Ruy Guerra", fonte: "", local: "Lourenço Marques - Moçambique" }
];

const falasEPrefacios = [
    { titulo: "Prefácio a um livro de poesias do aluno Daniel Rocha", data: "04/2012", autor: "Ruy Guerra", fonte: "", local: "Rio de Janeiro - Brasil" },
    { titulo: "Fala do Mérito Cultural", data: "07/10/2008", autor: "Ruy Guerra", fonte: "", local: "Rio de Janeiro - Brasil" },
    { titulo: "Texto para para o livro 'RIO DOS BONS SINAIS' de Nelson Saúte", data: "2007", autor: "Ruy Guerra", fonte: "", local: "" },
    { titulo: "Palavras do paraninfo: Ruy Guerra", data: "1998", autor: "Ruy Guerra", fonte: "Curso para 5 vezes Favela - Agora por nós mesmos", local: "Teatro Municipal do Rio de Janeiro - Rio de Janeiro - Brasil" },
    { titulo: "Fábrica de chocolate é um desafio para todos", data: "11/1979", autor: "Ruy Guerra", fonte: "Programa da peça 'Fábrica de Chocolate'", local: "São Paulo - Brasil" },
    { titulo: "Fotografando o que não se vê", data: "data ", autor: "Ruy Guerra", fonte: "Texto escrito por Ruy Guerra para imprensa carioca sobre o fotógrafo Walter Carvalho", local: "" }
];

const albuns = [
    {
        titulo: `Em Lourenço Marques (Moçambique)`,
        fotos: [
            { src: `images/mundo/mae_cadeira.jpg`, legenda: `A mãe Clara Guerra` },
            { src: `images/mundo/pai.jpg`, legenda: `O pai Mário Coelho Pereira` },
            { src: `images/mundo/na_barriga.jpg`, legenda: `Clara esperando seu caçula, Ruy Alexandre` },
            { src: `images/mundo/ruy_mae-1931.jpg`, legenda: `Ruy no colo da mãe em 1931` },
            { src: `images/mundo/irmaos_e_pai.jpg`, legenda: `Com os irmãos Mario Luiz, Maria Clara e o Pai` },
            { src: `images/mundo/casa_ferias.jpg`, legenda: `A casa de férias na Naamacha` },
            { src: `images/mundo/ruy_irmaos_carro.jpg`, legenda: `Os 3 filhos no carro paterno ` },
            { src: `images/mundo/casa_maputo.jpg`, legenda: `Ruy na ultima casa que morou, rua Neutel de Abreu, atrás o Hotel Girassol` },
            { src: `images/mundo/classe_liceu.jpg`, legenda: `Com a turma do Liceu, Ruy é o último da direita, em baixo` },
            { src: `images/mundo/praia-mocambique.jpg`, legenda: `Com Rui Knopfli e Edmundo Simões na praia` }
        ]
    },
    {
        titulo: `Formação como cineasta, França (1952/54)`,
        fotos: [
            { src: `images/mundo/paris-2.jpg`, legenda: `Chegando a Paris com o pai` },
            { src: `images/mundo/paris-1.jpg`, legenda: `No IDHEC` },
            { src: `images/mundo/idhec.jpg`, legenda: `No estudio do IDHEC dirigindo Edouard et Caroline` },
            { src: `images/mundo/ruy_eletricista.jpg`, legenda: `Servindo de eletricista no IDHEC` },
            { src: `images/mundo/idhec_sul-da-franca_1953.jpg`, legenda: `Férias no Sul da França, 1953` },
            { src: `images/mundo/idhec-ruy_guerra.jpg`, legenda: `Filmagem nas ruas de Paris com Demosthènes Théokary` },
            { src: `images/mundo/idhec-2.jpg`, legenda: `Ator no IDHEC em filme de colega` },
            { src: `images/mundo/idhec-3.jpg`, legenda: `Ator no IDHEC em filme de colega` }
        ]
    },
    {
        titulo: `Lisboa, idas e vindas`,
        fotos: [
            { src: `images/mundo/avo_paterno.jpg`, legenda: `O avô paterno, pintor e desenhista, José Maria Pereira Junior, vulgo Pereira Cão` },
            { src: `images/mundo/ruy_carnaval_irmaos.jpg`, legenda: `Ruy e os irmãos nos carnaval` },
            { src: `images/mundo/ruy_20.jpg`, legenda: `1952 - com o irmão, a irmã e o cunhado` },
            { src: `images/mundo/maria_clara.jpg`, legenda: `A irmã Maria Clara (Lara) - 1952` },
            { src: `images/mundo/anos90.jpg`, legenda: `Com os sobrinhos João Vasco e Rui Luís, anos 90` },
            { src: `images/mundo/com_irmaos-1992-lisboa.jpg`, legenda: `Com os irmãos Mário Luís e Maria Clara (1992)` },
            { src: `images/mundo/monsanto.jpg`, legenda: `Encerramento das filmagens de Monsanto, 2000` },
            { src: `images/mundo/lisboa.jpg`, legenda: `Com Otelo Saraiva e esposa, João Giraldes e esposa, Edmundo Simões e a irmã, no apartamento dela, 2011` },
            { src: `images/mundo/lisboa-2.jpg`, legenda: `Com familiares e amigos (2011)` }
        ]
    },
    {
        titulo: `Rio de Janeiro, família e amigos`,
        fotos: [
            { src: `images/mundo/chegada-rj-58.jpg`, legenda: `Chegada ao Rio de Janeiro em 1958` },
            { src: `images/mundo/leila_diniz.jpg`, legenda: `Com Leila Diniz e Ana Maria Magalhães no Hotel Nacional, Festival de Brasília, 1970` },
            { src: `images/mundo/com_janaina-1973-copacabana.jpg`, legenda: `Com Janaína em Copacabana, 1973` },
            { src: `images/mundo/riodejaneiro.jpg`, legenda: `Jogando pelada com o amigo Chico Buarque, anos 70` },
            { src: `images/mundo/i-love-ruy.jpg`, legenda: `Cláudia Ohana, mãe de Dandara` },
            { src: `images/mundo/dandara_guerra.jpg`, legenda: `Ruy com sua filha Dandara` },
            { src: `images/mundo/gabo-no-brasil.jpg`, legenda: `Gabriel García Márquez com o amigo Ruy Guerra no Rio de Janeiro` },
            { src: `images/mundo/janaina_dandara_guerra.jpg`, legenda: `Com as filhas Janaína e Dandara` },
            { src: `images/mundo/jogando_buraco.jpg`, legenda: `Jogando buraco, seu passatempo preferido, com Paulo Garzua` }
        ]
    },
    {
        titulo: `Rio de Janeiro, colegas e amigos de trabalho`,
        fotos: [
            { src: `images/mundo/ruy_guerra-italia.jpg`, legenda: `` },
            { src: `images/mundo/no_bar.jpg`, legenda: `Nelson P. dos Santos, Ruy Guerra, Joaquim P. de Andrade, Walter Lima Jr., Zelito Viana, Luís Carlos Barretto, Glauber Rocha e Leon Hirzman, no Zeppelim, ano de 1967` },
            { src: `images/mundo/cinema-novo_namesa.jpg`, legenda: `Com Pierre Kast, 1966` },
            { src: `images/mundo/glauber_rocha.jpg`, legenda: `Com Pierre Kast e Glauber Rocha, 1966` },
            { src: `images/mundo/hugo_carvana.jpg`, legenda: `Com Hugo Carvana e Nelson P dos Santos, 2010` },
            { src: `images/mundo/5xfavela-agora.jpg`, legenda: `Com Cacá Diegues, Renata Magalhães e Lilia Cabral, unidos pelo filme 5x Favela - agora por nós mesmos` },
            { src: `images/mundo/antonio_pitanga.jpg`, legenda: `Com Paulo José e Antonio Pitanga` }
        ]
    },
    {
        titulo: `Havana, Cuba`,
        fotos: [
            { src: `images/mundo/hanna_schygulla.jpg`, legenda: `Com Hannah Schygulla nas filmagens de Me Alquillo para Soñar (1991/92)` },
            { src: `images/mundo/cuba-92.jpg`, legenda: `Com o amigo Gabriel García Márquez durante as filmagens de Me Alquilo para Soñar` },
            { src: `images/mundo/raul_perez_ureta.jpg`, legenda: `Ruy com Raul Perez Ureta, diretor de fotografia de Me alquilo Para Soñar, Cuba, 1990` },
            { src: `images/mundo/cuba98.jpg`, legenda: `Leonor Arocha, Ruy, Chica e Paulo Caldas, Janaína e Job Tom Azulay. Filmagem de Estorvo.` },
            { src: `images/mundo/com_janaina_em_estorvo.jpg`, legenda: `Com a filha Janaína durante as filmagens de Estorvo, 1998/99` },
            { src: `images/mundo/havana-98.jpg`, legenda: `Com Lucélia Santos em Havana, 1998` }
        ]
    },
    {
        titulo: `Pessoas e destinos diversos`,
        fotos: [
            { src: `images/mundo/festival_mar-del-plata.jpg`, legenda: `25º festival de cinema de Mar del Plata` },
            { src: `images/mundo/restaurante-mar_del_plata.jpg`, legenda: `Perto do Atlântico em Mar del Plata` },
            { src: `images/mundo/mar_del_plata.jpg`, legenda: `Mar del Plata` },
            { src: `images/mundo/janaina-2010.jpg`, legenda: `Com a filha Janaina` },
            { src: `images/mundo/livraria-ateneu.jpg`, legenda: `Com Diogo Oliveira Campos, Livraria Ateneu - Buenos Aires` },
            { src: `images/mundo/feira_santelmo.jpg`, legenda: `Feira de Santelmo - Buenos Aires` }
        ]
    },
    {
        titulo: `2011 - Maputo (Moçambique) e Pilgrim’s Rest (África do Sul) - fotos de Chico Carneiro (*)`,
        fotos: [
            { src: `images/mundo/maputo-inac.jpg`, legenda: `INAC - Instituto Nacional do Audio-Visual e Cinema*` },
            { src: `images/mundo/inac2.jpg`, legenda: `No INAC em busca de originais de Mueda*` },
            { src: `images/mundo/maputo-2011.jpg`, legenda: `Ruy com a biógrafa Vavy Pacheco Borges e reporter na casa de José Luiz Cabaço` },
            { src: `images/mundo/palestra-maputo.jpg`, legenda: `Palestra em Maputo*` },
            { src: `images/mundo/pimenta-ardida.jpg`, legenda: `Piri piri (pimenta ardida) no Piri Piri (restaurante), com Diogo Oliveira Campos*` },
            { src: `images/mundo/mocambique-2011.jpg`, legenda: `Com outro Ruy Guerra, assim chamado em sua homenagem*` },
            { src: `images/mundo/homenagem-dockanema.jpg`, legenda: `Homenagem à Ruy Guerra em Moçambique*` },
            { src: `images/mundo/festa-encerramento-maputo.jpg`, legenda: `Festa de encerramento, com os 3 filhos, com Isabel Noronha, Camilo de Souza e a filha*` },
            { src: `images/mundo/com-adriano.jpg`, legenda: `Em Pilgrim´s Rest com o filho Adriano, José Luís Cabaço e Bruno Laet*` },
            { src: `images/mundo/macaco.jpg`, legenda: `Um macaco roubando a cena, Pilgrim´s Rest*` }
        ]
    },
    {
        titulo: `Filmando pelo mundo`,
        fotos: [
            { src: `images/mundo/eduardo_simoes.jpg`, legenda: `Com Edmundo Simões, Lourenço Marques, 1949` },
            { src: `images/mundo/pierre_pelergri.jpg`, legenda: `Com Pierre Pelegri, Paris, 1953` },
            { src: `images/mundo/nara_leao.jpg`, legenda: `Os Fuzis: à esquerda, bem coberta contra o sol, Nara Leão, acima Joel Barcelos, de costas Paulo Pereio, falando com Leônidas Bayer, Milagres, Bahia 1963` },
            { src: `images/mundo/sweet_hunters-1968.jpg`, legenda: `Sweet Hunters, Bretanha, 1968` },
            { src: `images/mundo/la_lettre_volee.jpg`, legenda: `La lettre volée, Sintra, Portugal,1981` },
            { src: `images/mundo/erendira-1983.jpg`, legenda: `Erêndira, México, 1983` },
            { src: `images/mundo/claudia_ohana.jpg`, legenda: `A Ópera do Malandro, com Claudia Ohana, Rio de Janeiro, Pavilhão São Cristovão` },
            { src: `images/mundo/kuarup_recife.jpg`, legenda: `Kuarup, a Marcha dos sem Terra, Recife, 1989` },
            { src: `images/mundo/filmagem-kuarup-xingu.jpg`, legenda: `Kuarup, Xingu, 1989` },
            { src: `images/mundo/veneno-da-madrugada-2004.jpg`, legenda: `Veneno da Madrugada com Walter Carvalho, Ulisses Malta e Juliana Carneiro da Cunha, Xerém, estado do Rio de Janeiro` }
        ]
    },
    {
        titulo: `México`,
        fotos: [
            { src: `images/mundo/claudia_ohana-erendira.jpg`, legenda: `Com Cláudia Ohana nas filmagens de Erendira (1981)` },
            { src: `images/mundo/erendira.jpg`, legenda: `Filmagens de Erendira` },
            { src: `images/mundo/erendira-2.jpg`, legenda: `Por trás do seu visor` },
            { src: `images/mundo/ruy-guerra_irene-papas.jpg`, legenda: `Dirigindo a atriz Irene Papas` },
            { src: `images/mundo/mexico81-casa-gabo.jpg`, legenda: `Jantando com o casal na casa de Mercedes e Gabriel García Márquez, México, 1981` },
            { src: `images/mundo/dedicatoria_gabriel-garcia-marquez.jpg`, legenda: `Mostrando a dedicatória de Gabriel García Márquez` },
            { src: `images/mundo/adolfo_garcia.jpg`, legenda: `Ruy com Adolfo Garcia Videla, autor de documentário sobre Erendira Del Fuego y del Viento 1983` }
        ]
    },
    {
        titulo: `Tempos de Ruy`,
        fotos: [
            { src: `images/mundo/rg-1.jpg`, legenda: `` },
            { src: `images/mundo/rg-2.jpg`, legenda: `` },
            { src: `images/mundo/rg-3.jpg`, legenda: `` },
            { src: `images/mundo/rg-4.jpg`, legenda: `` },
            { src: `images/mundo/rg-5.jpg`, legenda: `Foto de Maria do Rosário Caetano, Ceará, 1996` },
            { src: `images/mundo/rg-6.jpg`, legenda: `` },
            { src: `images/mundo/rg-7.jpg`, legenda: `` },
            { src: `images/mundo/rg-8.jpg`, legenda: `` },
            { src: `images/mundo/rg-9.jpg`, legenda: `` },
            { src: `images/mundo/rg-10.jpg`, legenda: `` }
        ]
    },
    {
        titulo: `Encontros de cinema`,
        fotos: [
            { src: `images/mundo/urso_de_prata-fuzis.jpg`, legenda: `Comemoração da entrega do Urso de Prata (Os Fuzis), Berlin, 1964` },
            { src: `images/mundo/cinema_novo.jpg`, legenda: `Gustavo Dahl,Paulo César Sarraceni, Ruy Guerra e Joaquim Pedro de Andrade, reunião de cineastas para um programa da TV francesa Carnets Brésiliens, Copacabana, 1966` },
            { src: `images/mundo/encontros-3.jpg`, legenda: `Almoço no ICAIC com Tomas G.Alea e diretor indiano durante meados dos anos 1980` },
            { src: `images/mundo/encontros-8.jpg`, legenda: `1º Seminário de Comunicação Audio-Visual com José Luís Cabaço e Pedro Pimenta, Moçambique, 1983` },
            { src: `images/mundo/encontros-2.jpg`, legenda: `Produtora MK2, Paris, 1985` },
            { src: `images/mundo/encontros-1.jpg`, legenda: `Ruy sendo entrevistado em Cannes` },
            { src: `images/mundo/encontros-4.jpg`, legenda: `1993` },
            { src: `images/mundo/encontros-5.jpg`, legenda: `Com Cacá Diegues, Retrospectiva Ruy Guerra - Rio de Janeiro, 2000` },
            { src: `images/mundo/os_jurados.jpg`, legenda: `Os jurados: Mario Canale (diretor italiano), Dominique Sanda (atriz francesa), Roman Gubém (critico espanhol ), Graciela Maglie (cineasta argentina) e Ruy Guerra; 25º Festival Internacional de Cine de Mar del Plata - novembro de 2010` },
            { src: `images/mundo/exibicao_filme.jpg`, legenda: `Exibição do filme <i>O Veneno da Madrugada</i> em Mar del Plata e palestra, 25º Festival Internacional de Cine de Mar del Plata - novembro de 2010` }
        ]
    },
    {
        titulo: `Pelo mundo`,
        fotos: [
            { src: `images/mundo/idhec-5.jpg`, legenda: `Na Grécia, amigos, 1957` },
            { src: `images/mundo/virgilio_lemos.jpg`, legenda: `Em Paris, no apartamento do amigo Virgílio de Lemos, em Port Royal, 1967` },
            { src: `images/mundo/chapeu_mexicano.jpg`, legenda: `No México, em bar 1974, com Afonso Arrau e outros` },
            { src: `images/mundo/puerto-rico-93.jpg`, legenda: `Em Puerto Rico, em locações,1993` },
            { src: `images/mundo/gabo_familia.jpg`, legenda: `Gabo, Mercedes e o filho Gonçalo, um casal de amigos, em Havana, 1986` },
            { src: `images/mundo/cannes-2000.jpg`, legenda: `Cannes, França, com produtor Bruno Estropiana, competindo com o filme Estorvo,2000` },
            { src: `images/mundo/ruy_gauin-paris-2000.jpg`, legenda: `Paris, França, com amigo Ruy Câmara, 2000` },
            { src: `images/mundo/santaCruzdeLaSierra.jpg`, legenda: `Produção e equipe de Veneno da Madrugada, Festival Iberoamericano de Cine de Santa Cruz de la Sierra, Bolívia, 2006` },
            { src: `images/mundo/festival-espanha.jpg`, legenda: `Madrid, Espanha, First Brazilian Film Festival 2008` },
            { src: `images/mundo/istambul-2011.jpg`, legenda: `Istambul, Turquia, com Bruno Laet, 2011` }
        ]
    }
];

export const pt = {
    nav_home: "Início",
    nav_with_ruy: "Com o Ruy",
    nav_who_is_ruy: "Quem é Ruy?",
    nav_chronology: "Cronologia",
    nav_works_about: "Trabalhos sobre",
    nav_news_dropdown: "Notícias",
    nav_archive: "Acervo",
    nav_filmography: "Filmografia",
    nav_longas: "Longas",
    nav_curtas: "Curtas",
    nav_interviews: "Entrevistas",
    nav_actor: "Ator",
    nav_roteirista: "Roteirista",
    nav_montador: "Montador",
    nav_festivais: "Festivais e Premiações",
    nav_teatro: "Teatro",
    nav_poesias: "Poesias",
    nav_prosa: "Prosa",
    nav_chronicles: "Crônicas",
    nav_tales: "Contos",
    nav_speeches: "Falas e Prefácios",
    nav_songs: "Letras de Músicas",
    nav_globetrotter: "Globetrotter",
    nav_oficinas: "Oficinas",
    nav_contact: "Contato",
    home_p1: `Ruy Guerra nasceu a 22/08/1931 em <span class="text-highlight">Moçambique</span>, colónia africana portuguesa às margens do Oceano Índico. Desde jovem foi um apaixonado pela palavra e pela imagem. Escreveu poesias, contos, críticas cinematográficas para a imprensa da capital Lourenço Marques; assíduo frequentador das matinés de cinema, filmou documentário sobre o cotidiano dos trabalhadores das docas desse porto importante da África Austral.`,
    home_p2: `Aos vinte anos foi para Paris onde se formou cineasta. Desembarcou no Rio de Janeiro em julho de 1958; fez do Brasil seu país de adoção. Seus dois primeiros filmes – <span class="text-highlight">Os Cafajestes</span> (1962) e <span class="text-highlight">Os Fuzis</span> (1964, Urso de Prata de Berlim) – logo o tornaram conhecido no cenário cinematográfico brasileiro e mundial. Foi o primeiro cineasta do grupo do <span class="text-highlight">Cinema Novo</span> a filmar fora do Brasil (França, em 1968).`,
    home_p3: `No Rio de Janeiro dos anos 1960/1970 foi parceiro letrista de músicos jovens que se projetavam, entre outros <span class="text-highlight">Edu Lobo, Francis Hime, Milton Nascimento, Chico Buarque</span>. Com o último escreveu e realizou o musical <span class="text-highlight">Calabar: o elogio da traição</span>, proibido pela censura da ditadura militar em 1973. Ainda de Chico filmou o musical A Ópera do Malandro em 1985 e em 2000 o livro Estorvo. Foi o realizador que mais levou à tela trabalhos de <span class="text-highlight">Gabriel García Márquez</span>, de quem ficou amigo desde 1972.`,
    home_p4: `Andou meio mundo atrás de sua paixão por filmar; em meados de 1990 voltou a se fixar no Rio de Janeiro, onde nasceram e vivem seus 3 filhos e 3 netos.`,
    bio_title: "Quem é Ruy Guerra?",
    bio_content1: `
                <div class="text-base leading-relaxed space-y-4">
                <p>Em meados da década de 1970, Ruy Guerra se auto explicava em poema:</p>
                    <blockquote class="my-4 pl-4 border-l-4 border-gray-400 italic text-center space-y-2">
                    <p>Vivo sobre um corpo de mulher<br>que faz de mim gato e sapato<br>que me foge e me desfolha<br>e brinca de gato e rato</p>
                        <p>Vivo sobre três continentes<br>e isso não me contêm<br>a raiva que trago nos dentes<br>não sei se me faz mal ou bem</p>
                        <p>Vivo à sombra de um túnel<br>do outro lado do sol<br>e nesta clave difícil<br>me sustento num bemol</p>
                        </blockquote>
                        </div><br><br><br>
                        `,
    bio_content2: `<div class="text-base leading-relaxed space-y-4">
                        <p>Ruy Guerra é um nome conhecido para os que se interessam por cinema. Em tempos renovadores do Cinema Novo, anos 1960, esse africano desembarcou no Rio de Janeiro direto de Paris, onde se formara cineasta. Hoje é um dos mitos sobreviventes do grupo, dos mais notórios, tendo sido o primeiro deles a filmar fora do Brasil. É também conhecido por quem curte música popular brasileira dos anos 1960/70, quando ele fez parcerias com jovens músicos. Ruy veio para o Rio de Janeiro em 1958, seu porto seguro até hoje. A vinda ao Brasil era um desejo manifestado anos antes em cartas ao pai, irmão e amigos.</p>
                        <p>Tem atualmente (agosto 2014) 83 anos, bem vividos mundo afora e conserva uma energia de dar inveja a gente mais jovem. Muitos dizem que traz essa força de seu país de origem, Moçambique, na África Austral, à beira do Oceano Índico; é filho de portugueses que foram tentar a vida na colónia e se aclimataram na capital Lourenço Marques, formando família. Desde seus 10 anos Ruy foi louco por escrever, louco por cinema e por filmar. Durante a segunda metade dos anos 1940 publicou na imprensa vários contos, artigos e poesias e até hoje fala constantemente de sua vocação frustrada de escritor, reafirmando o desejo de escrever um romance.</p>
                        <p>Desde adolescente Ruy compreende o fazer cinema como uma forma de pensar e apresentar as relações político-sociais. Lourenço Marques era o porto do Índico mais importante da África Austral e boa parte do comércio do sul do continente passava por lá. Aos 16 anos, com uma câmara de 8 mm. emprestada por um amigo, filmou a realidade portuária do Cais Gorjão, retratando a vida dos trabalhadores negros. Filmou-os descansando embaixo de vagões, alimentando-se, dormindo sob trens; para Ruy aquelas imagens ‘me lembravam campos de concentração’. Segundo um analista, já como amador Ruy ‘flertava com a denúncia social’.</p>
                    <div class="my-6 text-center"><img class="mx-auto max-w-md w-full rounded shadow-lg" src="images/ruy_guerra-por_lara.jpg" alt="foto de Ruy Guerra enviada por sua irm Lara"><p class="text-sm italic mt-2">Em Moçambique</p></div>
                    <p>Na casa paterna e no Liceu Salazar, escola pública que frequentou, Ruy recebeu uma educação luso-europeia. Segundo ele e colegas, foram educados por professores ‘degredados de Portugal pela Ditadura’, ‘cabeças pensantes críticas’ que os faziam ler muito, o que acabou por tornar muitos deles rebeldes ao status quo. Havia uma certa recusa à produção cultural da ditadura salazarista e o que vinha do Brasil nessa área era muito importante, não só por que o Brasil era ex-colónia portuguesa que realizara sua independência, mas pelas semelhanças com a cultura e espaço brasileiros ( clima, presença do negro, aromas e sabores ...). A literatura brasileira, revistas, muitas vezes eram censuradas, tendo que entrar por baixo do pano, muito marcantes nessa geração chamada da ‘diáspora’. Em entrevista Ruy afirma: ‘Alguns acabaram constituindo uma geração que em sua maioria deixou o país e se distinguiu no campo das artes, filosofia (...) devido ao contexto político e social em que nascemos e fomos criados (...) não por acaso ou por condições psicológicas individuais apenas’. Essa parte de sua geração fez da cultura a via de sua revolta política contra o colonialismo e o racismo. Preocupado com as relações de dominação e subordinação na colónia, passou por interrogatórios e detenções feitas pela policia da ditadura portuguesa em razão de suas atitudes independentes no Liceu, em razões de suas atividades e de seu grupo, acabando por ter um processo que o impediu de voltar a Portugal por alguns anos.</p>
                    <p>Aos 20 anos foi estudar cinema em Paris. Chegou na capital francesa em um momento muito quente para o cinema, pois jovens cineastas tentavam impor seu cinema de autor contra um cinema da grande indústria tradicional. Formou-se profissionalmente nesse período - inicio dos anos 1950 – em que o cinema tradicional estava sob o impacto de uma renovação, com as primeiras marolas do surgimento da Nouvelle Vague. Rememora o movimento como constituído por jovens intelectuais franceses dos quais ele, como imigrante estrangeiro, se sentia muito diferente: ‘ ( a Nouvelle Vague) sempre teve uma marcada posição direitista e eu (..) tinha uma posição nitidamente de esquerda ... condenava aos intelectuais franceses justamente um apolitismo extremamente político, nunca falavam da guerra da Argélia, nem dos imigrantes’. Cursou o IDHEC (Institut des Hautes Études Cinématographiques), sendo visto por colegas como ótimo aluno, mais preparado que os outros, embora um permanente contestador. Fez ainda por dois anos um curso de ator no Thèatre National de Paris (TNP).</p>
                    <p>Na capital francesa aproximou-se de brasileiros com os quais acabou vindo tentar sua chance num Novo Mundo que esperava conquistar através de seu entusiasmo por seu trabalho. Trazia na bagagem o primeiro roteiro escrito logo após se formar e que tinha tentado por muitas formas implementar no Velho Mundo, a Europa; roteiro que depois vai se tornar Os Fuzis, Urso de Prata no Festival de Berlim em 1964, um dos filmes mais marcantes desse momento.</p>
                    <div class="my-6 text-center"><img class="mx-auto max-w-2xl w-full rounded shadow-lg" src="images/cinema-novo_grupo.jpg" alt="cinema novo no Brasil"><p class="text-sm italic mt-2">Reunião de cineastas para um programa da TV francesa Carnets Brésiliens, Copacabana, 1966</p></div>
                    <p>Afirma brincando que nasceu cineasta com o Cinema Novo mas não nele, em meio aos jovens entre os quais, apesar das costumeiras rivalidades e choques, havia uma estreita colaboração em função dos filmes que faziam. Era um cinema de busca de identidade: ‘Estávamos interessados em produzir filmes que retratassem a realidade do povo, os conflitos políticos e sociais, que fugissem às regras de produção e aos dogmatismos da estética do cinema industrial.’ Ruy porém não pratica a arte como arma de propaganda revolucionária; sua filmografia dificilmente poderá ser vista como didática. Foi parte de uma geração que, nos anos 1960, quiz mudar o mundo pelo que acreditava ser o melhor para a sociedade; também, alguns deles e Ruy entre eles, por sua prática de vida.</p>
                    <p>Ao longo dos anos, trabalhou em diversas funçõs ligadas à tela (fotógrafo, assistente de direção, diretor, roteirista, ator, montador, produtor executivo, conselheiro executivo e artístico ou professor). Declarou-se recentemente como ‘um artista tipicamente produto do subdesenvolvimento’, levado a exercer várias formas de arte para subsistir. Usou de todos seus dons com a palavra; além da composição de poemas, letras de músicas, escreveu e dirigiu teatro, e por cinco anos redigiu crónicas semanais para o Caderno Dois do jornal O Estado de S.Paulo.</p>
                    <p>Durante certo tempo a viver da escrita de letras de músicas para amigos músicos da zona Sul carioca como Sergio Ricardo, Edu Lobo, Chico Buarque de Holanda, Francis Hime, Carlos Lyra, Luiz Eça e Milton Nascimento. Letrista de mão cheia, fez por volta de 100 letras que abandonavam o teor ‘o barquinho e a flor’ da Bossa Nova por uma temática mais forte, de teor social. A situação complicada para viver de seu cinema o levou também a trabalhar com o teatro. Dirigiu shows musicais de seus amigos e, quando convidado, algumas peças ao longo dos anos. Ainda para o teatro escreveu em parceria com Chico Buarque ‘Calabar: o elogio da traição’, peça foi interditada pela censura da ditadura militar. Como inúmeros outros, muitas vezes Chico Buarque e Ruy tiveram diversos problemas com as letras.</p>
                    <p>Muitas vezes classificado como cineasta político, muito se orgulha dessa marca maior. Desde sua adolescência ser político tem para ele um sentido amplo: ‘ estar envolvido com as problemáticas de sua época. Afirma várias vezes: ‘Tenho um olhar políico sobre a realidade, de um ponto de vista cultural’. Ao longo de sua vida Ruy ostentou esse posicionamento político com P maiúsculo, não tendo sido nunca um militante ou membro de partido político. Ruy se vê e é visto, como um homem à esquerda a partir de suas falas, suas atitudes de vida, suas expressões no campo artístico e educacional. Para ele qualquer estética é política, pois traz necessariamente embutida uma visão de mundo, ancorando-se em um conjunto de valores que apresenta, defende ou condena. Em 1997, a analista de cinema M. do Rosário Caetano observou que ele conservava a ‘retórica sessentista politizadissima’ e parecia não acreditar no fim das ideologias; em falas e escritos recentes Ruy parece confirmar essa afirmação.</p>
                    <p>Nos anos 1960/70 trabalhou por diversas vezes em França no cinema e para a televisão. Foi bastante ligado ao grupo da revista de cinema Positif. Em 1965 a revista francesa Cahiers de Cinema – que dava enorme destaque ao Cinema Novo Brasileiro - resume os temas de seus filmes: a crueldade, a violência, o racismo, o tempo que não acaba... Segundo Ruy, ‘Quem analisa meus filmes já disse que há uma espécie de obsessão pelas áreas de poder e os mecanismos repressivos, seja no ambiente familiar, nas estruturas sociais ou no governo.’</p>
                    <p>A revolução socialista da nova República Popular de Moçambique, vitoriosa em 1975 sob a chefia de Samora Machel, atribuiu em seu início um papel fundamental ao cinema na construção da identidade nacional. Parte importante na tentativa de unir em uma nação diversas tribos, cuja cultura se baseava na tradição oral. Instado por ex-colegas no governo, Ruy passou a colaborar ativamente na criação do Instituto Nacional de Cinema de Moçambique (INC) e na formação de quadros para cinema; dava aulas práticas e trouxe para Maputo (ex Lourenço Marques )muitos especialistas nas mais variadas atividades da área. Viveu intensamente a experiência de independência e descolonização da terra onde nascera; seus filmes africanos são de natureza essencialmente política.</p>
                    <p>Sua posição de esquerda fica clara também em suas relações com Cuba, onde viveu por alguns períodos. A partir do aparecimento do Festival Internacional do Novo Cinema Latino-Americano em 1979, seus filmes são lá apresentados. Desde 1988 fez parte do quadro de professores da conhecida "Escuela Internacional de Cine y TV", em San Antonio de Los Baños, a 30 km de Havana. Participou de projetos e roteiros com aquele que seu tornou seu amigo pessoal: Gabriel García Márquez – o Gabo - um dos fundadores da Escuela. Foi o maior realizador de filmes de Gabo: Erêndira, La bela Palomera, Veneno da Madrugada e Me alquilo para Soñar (mini-série para a televisão espanhola, totalmente filmado em Havana). Lá rodou no final dos anos 1990 um filme adaptado de um romance de Chico Buarque, Estorvo, tendo como o personagem principal o ator cubano Jorge Perrugoria e uma equipe formada em boa parte por técnicos cubanos.</p>
                    <div class="my-6 text-center"><img class="mx-auto max-w-2xl w-full rounded shadow-lg" src="images/com-gabo.jpg" alt="Ruy Guerra com Gabriel García Márquez"><p class="text-sm italic mt-2">Ruy Guerra e Gabriel García Márquez na filmagem de Erêndira, Mexico, 1982</p></div>
                    <p>Cineastas brasileiros e latino-americanos por vezes ficam décadas sem conseguir filmar, pois enfrentam dificuldades económicas permanentes e por vezes dificuldades conjunturais em razão do momento político. Ruy conseguiu filmar longas, médias e curtas metragens no Brasil, na França, em Portugal, na Espanha, no México, em Cuba. Afirma muita vezes :‘Não fiz todos os filmes que queria, mas queria fazer todos os filmes que fiz.’ No inicio do século XXI é convidado para escrever para o teatro sobre o D Quixote, criando um musical chamado Don Quixote de lugar nenhum, uma adaptação do personagem ao Nordeste brasileiro.</p>
                    <p>E quando não pode filmar, ensina, atividade na qual muito se empenhou, organizando cursos de cinema no Rio de Janeiro desde os anos 1990. Suas atividades de professor se desdobraram nos últimos 10-12 anos em cursos, palestras e oficinas. Em entrevista afirmou: ‘Digo na primeira aula: Se você vem aqui para fazer filme norte-americano é fácil. Vamos para o bar e em uma hora, eu falo tudo que você precisa saber.’(...) Falo para eles que não vale a pena perder dois anos e meio para fazer filmes como os norte-americanos. Agora, se o cara quer fazer filme brasileiro, ele vai passar dois anos remando na faculdade e vai continuar remando, não sairá da faculdade sabendo não. É outra coisa: é busca, é se vincular à realidade, é saber quem você é. Ressalta como fundamental ‘abrir as cabeças dos jovens para o ato de pensar a arte, a formação cultural (...) para que uma pessoa assuma uma responsabilidade tão grande (...) para com esse meio de expressão que é a meu ver extremamente vital e importante, política e esteticamente importante’.</p>
                    <p>Falando sobre filmes e mercado, toma posição clara: ‘As equações da sociedade estão todas mal feitas e você vive com essas equações equivocadas. Um filme não tem que dar 10 milhões de espectadores. Um filme tem que ser visto por X pessoas que podem tirar desse filme alguma coisa importante para a vida delas. É diferente. Porque desses milhões de espectadores geralmente não tem dez que tirem do filme alguma coisa importante para a vida delas. Elas consumiram aquele filme como um produto, como um ‘fast food’. (...) É importante dizer que ver esses filmes norte-americanos é a mesma coisa que frequentar o Macdonald’s. Não tem diferença nenhuma.(...)É preciso cuidado, muito cuidado’.</p>
                    <p>O estudo e a prática de uma linguagem cinematográfica sempre renovada é uma constante em seu fazer cinema. Destaca como imprescindível essa procura de uma renovação: ‘Algo fundamental para mim é encontrar estruturas que rompam com os conceitos padrões, basicamente da estrutura hegemónica norte-americana, que acredito serem redutores da realidade e não servirem para a nossa cultura. (...). Essa recusa, esse fator recusa, acho que está presente ainda hoje. Muitos filmes estão equivocados, mas acho que isso está presente mesmo nesses filmes que estão equivocados.’</p>
                    <p>Tem vivido em vários continentes e países, sendo apontado como ‘um cidadão do mundo’. Seu percurso de vida não se separa de sua produção artística, pois foi a busca dessa mesma o fio condutor de seus deslocamentos no espaço e da continuidade de suas atividades no tempo. Define-se:‘meio africano, meio português, meio brasileiro, um tanto latino, meio perdido, 100% o que nesse coquetel de angústias’?</p>
                    <div class="my-6 text-center"><img class="mx-auto max-w-md w-full rounded shadow-lg" src="images/atacama.jpg" alt="Ruy Guerra no deserto do Atacama"><p class="text-sm italic mt-2">No deserto do Atacama (Chile, 2014)</p></div> `,
    chronology_title: "Cronologia",
    chronology_content: `
    ${chronology.map(item => `
    <div class="timeline-item ${item.type}">
        <div class="timeline-year">${item.year}</div>
        <div class="timeline-content"><p>${item.content}</p></div>
    </div>
    `).join("")}`,
    works_about_title: "Trabalhos Sobre",
    works_about_content: `
<ul class="teses">
    <li>BORGES, Vavy Pacheco: “Ruy Guerra: uma vida à medida do sonho”, publicação, Festival do Cine Documentário, Maputo, Moçambique, 2011</li>
    <li>BORGES, Vavy Pacheco: “Nas pegadas de um leão” em Grafia da vida: reflexões e experiências com a escrita biográfica, Alexandre de Sá Avelar e Benito Bissio (orgs.), Editora Letra e Voz, SP 2012, pp. 83-104</li>
    <li>BORGES, Vavy Pacheco: “Paixão Escancarada - Ruy Guerra, vida e obra” (biografia em fase de finalização)</li>
</ul>
<br>
<p class="imagem">
    <img class="img350" src="images/biografia_ruy_guerra.jpg" alt="biografia de Ruy Guerra por Vavy Pacheco Borges" title="biografia de Ruy Guerra por Vavy Pacheco Borges" />
</p>
<br>
<ul class="teses">
    <li>BRISENO, Marcelo: “Recursos Cinematográficos de Estorvo no contexto pós-moderno”, artigo em revista INOVCOM, Vol.1, No 2, 2006</li>
    <li>CONTI, Maria Aparecida. Calabar, o elogio da traição: drama da memória ou trama na história? 2007. 119 f. Dissertação (Mestrado em Linguística) – Universidade Federal de Uberlândia, Uberlândia, 2007</li>
    <li>DOURADO, Elziane O.: O diálogo entre o cinema direto e o filme A Queda, Cinema e ciências humanas, Multimeios UNICAMP, Campinas, s.d.</li>
    <li>DUARTE, Mimoso. Ruys, Imagologies et Métissage: Enjeu de l’espace littéraire et filmique: des scénarios et des “Cuentos” 1972 de Gabriel García Márquez à Erendira (1982, un film de Ruy Guerra), Littérature Comparée et Cinema, Université de Toulouse II, Toulouse, 2001</li>
    <li>GARCIA, Miliandre: “A luta agora é na justiça: o processo censório de Calabar”, artigo em revista PolHis ano 5, Número 9, primeiro semestre 2012</li>
    <li>HARDMANN, Halina: “Os Cafajestes e Os Fuzis: proximidade e distância na representação popular”, ensaio de avaliação, UFSC, Florianópolis, 2008</li>
    <li>MARTINS, Christian Alves. Diálogos entre passado e presente: “Calabar, O elogio da traição” (1973) de Chico Buarque e Ruy Guerra. 2007. 201 f. Dissertação (Mestrado em História) – Programa de Pós-Graduação em História, Universidade Federal de Uberlândia, Uberlândia, 2007</li>
    <li>MARTINS, Christian Alves. Rupturas e permanências: a recepção de “Calabar, o elogio da traição” de Chico Buarque e Ruy Guerra. 2013. 230 f. Tese (Doutorado em História Social) – Programa de Pós-Graduação em História do Instituto de História, Universidade Federal de Uberlândia, Uberlândia, 2013.</li>
    <li>MEDEIROS, Viviane. Rupturas e descaminhos: o Estorvo da pós-modernidade, Monografia: Imagens e representações da cidade, PUC-RJ, Rio de Janeiro, 2003</li>
    <li>MELO, Pedro Henrique de: “O riso: a linguagem da transgressão através da leitura de Calabar - o elogio da transgressão de Chico Buarque e Ruy Guerra”, especialização em Letras, UFOP, 2005</li>
    <li>REIS, Mirian S. Carneiro. Náusea e absurdo: o existencialismo em Estorvo, Mestrado em Literatura e diversidade cultural, Universidade Estadual de Feira de Santana, Bahia, 2010</li>
    <li>NUNES, Elzimar F.: “A reescrita da História em Calabar, o elogio da traição, de Chico Buarque e Ruy Guerra”, Universidade de Brasília, 2002</li>
    <li>PINTO, Carlos Eduardo Pinto de. Imaginar a cidade real: o Cinema Novo e a representação da modernidade urbana carioca (1955-1970). 2013. 344 f. Tese (doutorado em História) – Programa de Pós-Graduação em História, Universidade Federal Fluminense (UFF), Niterói, 2013</li>
    <li>PINTO, Carlos Eduardo Pinto de. Câmera-arma: a representação das funções sociais da fotografia em Os Cafajestes (Ruy Guerra, 1962). Revista Brasileira de História da Mídia, Porto Alegre/São Paulo, v. 2, n. 2, jul./dez., p. 151-158, 2013</li>
    <li>PINTO, Leonor Stella de Souza. Le cinéma brésilien au risque de la censure pendant la dictature militaire de 1964 à 1985. Thèse de Doctorat, Univ de Toulouse “Le Mirail”, 2001</li>
    <li>PORTANOVA DE BARROS, Eduardo: “O nomadismo poético em Estorvo, de Ruy Guerra”, comunicação no: IX Seminário Internacional da Comunicação: Simulacros e dis(simulações) na sociedade hiperespetacular (Anais). Porto Alegre: EDIPUCRS, 2007</li>
    <li>PORTANOVA DE BARROS, Eduardo: “O cinema de Ruy Guerra; um imaginário autoral na pós-modernidade”, Tese de Doutorado, PUC-RS, 2009</li>
    <li>ROCHA, Elizabete Sanches. O elogio da liberdade: procedimentos estéticos em Calabar. 2003. 299 f. Tese (Doutorado em letras) – Faculdade de Ciência e Letras, Universidade Estadual Paulista Júlio de Mesquita Filho, Araraquara, 2003</li>
    <li>SCHEFER, Raquel. Birth of fiction: On "Mueda, Memória e Massacre", by Ruy Guerra. Africa's Lost Classics: New Histories of African Cinema/ ed. por Lizelle Bisschoff e David Murphy. Oxford: Legenda, Maney Publishing, 9 p., no prelo (Outubro de 2014)</li>
    <li>SCHEFER, Raquel. La forme-événement: Le Cinéma Révolutionnaire Mozambicain et le Cinéma de Libération, Thèse de Doctorat d’études Cinématographiques à l’Université Sorbonne Nouvelle-Paris 3 (Outubro, 2015)</li>
    <li>SCHEFER, Raquel. Reconstitutions / Autour de “Mueda, Memória e Massacre” de Ruy Guerra. Article commenté. 10 ans de Bétonsalon – Centre d’art et de recherche/ ed. por Mélanie Bouteloup. Paris: Bétonsalon e Les Éditions Beaux-arts, no prelo (Setembro de 2014)</li>
    <li>SCHEFER, Raquel. Fictions of the Liberation Struggle: Ruy Guerra, José Cardoso, Zdravko Velimirovic. Assubuji, Rui, Israel, Paolo e Thompson, Drew (ed. por), The Liberation Script in Mozambican History, Kronos: Southern African Histories, XXXIX, Novembro de 2013, pp. 298-315</li>
    <li>SCHEFER, Raquel. Re-constitutions. On “Mueda, Memória e Massacre”, by Ruy Guerra. Bouteloup, Mélanie (ed. por), You do not stand in one place to watch a masquerade, Le Journal de La Triennale, Paris: CNAP, Palais de Tokyo, IV, 2012, pp. 39-41<br>
        <a href="http://www.cnap.fr/sites/default/files/article/123910_le-journal-de-la-triennale--4--on_ne_reste_pas_au_meme_endroit--melaniebouteloup_adm2.pdf">URL</a>
    </li>
    <li>SCHEFER, Raquel. O Nascimento de uma Imagem, Buala, 2011<br>
        <a href="http://www.buala.org/pt/afroscreen/o-nascimento-de-uma-imagem-mueda-memoria-e-massacre-de-ruy-guerra-1979">URL</a>
    </li>
    <li>SILVA, Anderson Lopes e RIBEIRO, Regiane Regina: “O cinema brasileiro e as identidades híbridas em Ruy Guerra: o olhar latino-africano de um cidadão da vida”, artigo, Journal of Brazilian Studies Vol 3 Nro 1 (Jul.2014)</li>
    <li>SILVA, Anderson Lopes. “O cinema autoral em Ruy Guerra: uma análise fílmica de ‘Os Cafajestes’ (1962)”. 2013. Monografia (Especialização em Comunicação, Cultura e Arte) - Pontifícia Universidade Católica do Paraná, Curitiba</li>
    <li>SILVA, Anderson Lopes. “Revisitando Ruy Guerra: um percurso metodológico pela análise fílmica de 'Os Cafajestes' (1962)”, 'Toma Uno', do Departamento de Cinema e Televisão (Universidad Nacional de Córdoba, Argentina) (no prelo)</li>
    <li>SOUZA, Maria Cristina R. da C. O discurso de oposição de Chico Buarque de Hollanda na ditadura militar brasileira. 1999. 92 f. Dissertação (Mestrado em Língua Portuguesa) – Pontifícia Universidade Católica de São Paulo, São Paulo, 1999</li>
    <li>TAVARES, Ane Carolina Randig. “(Re)criar para (re)contar: O processo transcriativo de La mala hora, de Gabriel García Márquez, por Ruy Guerra". Dissertação de mestrado (Estudos de Literatura - PPGlit) novembro de 2013, UFSCAR</li>
    <li>VIANA, Ana Cristina Caminha. Calabar, O Elogio da Traição: Um novo drama histórico. 2006. 123 f. Dissertação (Mestrado em Letras) – Universidade Federal do Ceará, Fortaleza, 2006</li>
    <li>XAVIER, Ismail: O olho mágico, o abrigo e a ameaça: Ruy Guerra filma Chico Buarque, em MATRIZes, ECA-USP, Capa, vol.2, No 2, 2009</li>
    <li>XAVIER, Ismail: “Os deuses e os mortos: Maldição dos deuses ou maldição da História”, artigo, Ilha do Desterro, Florianópolis No 32, 1997</li>
</ul>
`,
    news_title: "Notícias",
    news_content: `<main class="max-w-5xl mx-auto p-6">
    <h1 class="text-2xl font-bold mb-2">Ruy Guerra faz 90 anos</h1>
    <p class="news mb-8">
        Ruy Guerra completou 90 anos em 2021. Homenagens começaram no 26º Festival Internacional de Documentários – Tudo Verdade, organizado em São Paulo por Amir Labaki, de 8 a 18 de abril. A exibição foi nacional e virtual devido à pandemia. Foram exibidos dois de seus cinco documentários africanos: <b>Mueda Memória e Massacre</b> e <b>Os Comprometidos – Atas de um processo de descolonização</b>. Ruy também deu uma aula magistral, entrevistado por Adilson Mendes (autor de livro de entrevistas) e Diogo Oliveira (diretor de <i>O Homem que Matou John Wayne</i>).
    </p>

    <h1 class="text-2xl font-bold mb-2">Sob Pressão</h1>
    <p class="news mb-8">
        No segundo semestre de 2020, a pedido de Andrucha Waddington, Ruy escreveu a letra da música "Sob Pressão" para a série homônima da TV Globo. A música foi composta por Gilberto Gil e gravada por Gil e Chico Buarque.
    </p>

    <h1 class="text-2xl font-bold mb-2">Último filme: Aos Pedaços</h1>
    <p class="news mb-8">
        "Aos Pedaços", filmado em Cataguases em 2018, foi exibido no Rotterdam Film Festival em janeiro/fevereiro de 2020 e no 48º Festival de Gramado em setembro de 2020, recebendo prêmios de melhor direção, fotografia e desenho de som.
    </p>

    <h1 class="text-2xl font-bold mb-2">Doutor Honoris Causa</h1>
    <p class="news mb-8">
        Em 28 de junho de 2018, Ruy Guerra recebeu o título de Doutor Honoris Causa da Universidade Federal do Rio de Janeiro (UFRJ), entregue pelo reitor Roberto Leher no Colégio Brasileiro de Altos Estudos.
    </p>

    <h1 class="text-2xl font-bold mb-2">Quase Memória: estreia nacional</h1>
    <p class="news mb-8">
        Estreou comercialmente em 19 de abril de 2018. Sinopse: Carlos é um homem condenado aos desassossegos da memória que se encontra consigo mesmo em uma dobra de tempo. Recebem um pacote estranho, que só poderia ter sido enviado por seu pai, Ernesto, morto há anos. Nessa dobra do tempo, há um Carlos que lembra e outro que esquece, em divertidas memórias ao lado desse pai genialmente louco.<br>
        Adaptado da obra de Carlos Heitor Cony.<br>
        Trailer oficial: <a href="https://www.youtube.com/watch?v=p1ZDPkheiLA" target="_blank">https://www.youtube.com/watch?v=p1ZDPkheiLA</a>
    </p>

    <h1 class="text-2xl font-bold mb-2">Ruy Guerra em Conversa com Bial</h1>
    <p class="news mb-8">
        Em 2 de outubro de 2017, Ruy Guerra participou do programa Conversa com Bial, na TV Globo. A entrevista está disponível no Globo Play e YouTube.<br>
        No 12º Festival Aruanda do Audiovisual Brasileiro, em João Pessoa, Paraíba, foi homenageado de honra, com exibição de filmes, mesa-redonda e divulgação da biografia "Ruy Guerra paixão escancarada", por Vavy Pacheco Borges.<br>
        <a href="https://www.youtube.com/watch?v=rMl1S0t8nts" target="_blank">Assista aqui</a>
    </p>

    <h1 class="text-2xl font-bold mb-2">Uma biografia de Ruy</h1>
    <p class="news mb-8">
        <b>RUY GUERRA paixão escancarada</b>, escrita por Vavy Pacheco Borges após longa pesquisa, foi lançada pela editora BOMTEMPO em São Paulo (08/08/2017, Livraria da Vila) e no Rio de Janeiro (21/08/2017, Livraria Travessa).
    </p>

    <h1 class="text-2xl font-bold mb-2">Festival Africa's - Cinema e Revolução</h1>
    <p class="news mb-8">
        Em novembro de 2016, no Cinema Belas Artes em São Paulo, ocorreu o Festival Africa's - Cinema e Revolução, com exibição de quatro curtas de Ruy Guerra e o longa <b>Mueda, Memória e Massacre</b>, seguidos de debate com o diretor.
    </p>

    <h1 class="text-2xl font-bold mb-2">La Furia Umana</h1>
    <p class="news mb-8">
        Homenagem a Ruy Guerra no periódico de cinema <a href="http://www.lafuriaumana.it/" target="_blank">La Furia Umana</a>.
    </p>

    <h1 class="text-2xl font-bold mb-2">Exibições</h1>
    <p class="news mb-8">
        "Quase Memória" foi exibido no 38th Moscow International Film Festival, recebendo duas menções honrosas: do júri de críticos russos e da Federação dos cineclubes russos.<br>
        "O Homem que matou John Wayne" foi exibido no Amsterdam Film Festival 2016, recebendo o prêmio Van Gogh de Melhor Montagem.<br>
        <img src="images/filme_jw-2016.jpg" class="w-full max-w-2xl rounded-lg my-4" alt="Exibição do filme O Homem que matou John Wayne">
    </p>

    <h1 class="text-2xl font-bold mb-2">O Homem que matou John Wayne</h1>
    <p class="news mb-8">
        O documentário sobre arte e cinema de Ruy Guerra estreou no Brasil em abril de 2016 no Festival Tudo é Verdade, com sessões especiais em São Paulo e Rio de Janeiro.
    </p>

    <h1 class="text-2xl font-bold mb-2">Quase Memória</h1>
    <p class="news mb-8">
        "Quase Memória", o mais recente filme de Ruy Guerra, foi exibido na 39ª Mostra Internacional de Cinema de São Paulo (outubro de 2016), no Festival do Rio de Janeiro (Prêmio Especial do Jury) e no 19º Festival Internacional de Punta del Este (prêmio de melhor direção e menção honrosa para fotografia).<br>
        <img src="images/punta_del_este-2016.jpg" class="w-full max-w-2xl rounded-lg my-4" alt="Festival de Cinema Punta del Este">
        <a href="https://www.facebook.com/pages/Quase-Mem%C3%B3ria/313511105520432?sk=info" target="_blank">Facebook</a>
    </p>

    <h1 class="text-2xl font-bold mb-2">37º Festival del Cine Latinoamericano de Havana</h1>
    <p class="news mb-8">
        No 37º Festival del Cine Latinoamericano de Havana (dezembro de 2015), Ruy Guerra foi homenageado com o Coral de Honor, com exibição de filmes e exposição de fotos. O documentário "O Homem que matou John Wayne", dirigido por Diogo de Oliveira e Bruno Laet, foi exibido pela primeira vez.
    </p>

    <h1 class="text-2xl font-bold mb-2">Colóquio Internacional - Ruy Guerra e o Pensamento Crítico das Imagens</h1>
    <p class="news mb-8">
        Realizado em Paris nos dias 8 e 9 de outubro, com apoio da Fundação Calouste Gulbenkian e do INHA. <a href="coloquio_Ruy_Guerra-2015.pdf" target="_blank">Documento completo</a> | <a`,
    archive_title: "Acervo",
    archive_content: `
        <p class="basico">
            Uma parte da documentação pessoal acumulada por Ruy Guerra foi depositada, desde os anos 1989/1990, no <b>Museu de Arte Moderna do Rio de Janeiro (MAM)</b> e uma segunda parte, desde o segundo semestre de 2021, comprada pelo <b>Instituto Moreira Salles (IMS)</b> e depositada em seu arquivo do Rio de Janeiro.
        </p>
        <p class="basico">No <b>Arquivo Nacional</b> no Rio de Janeiro podem ser encontrados alguns de seus filmes:</p>
        <p class="basico"><b>Sweet Hunters</b> - uma cópia com legendas em francês;</p>
        <p class="basico"><b>A Queda</b> - uma cópia com legendas em espanhol, um negativo do som somente e um trailer;</p>
        <p class="basico"><b>Mueda, Memória e Massacre</b> - uma cópia sem legendas.</p>
        <p class="basico"><b>Erendira</b> - uma cópia sem legendas e uma cópia com legendas em francês;</p>
        <p class="basico"><b>Ópera do Malandro</b> - uma cópia sem legendas;</p>
        <p class="basico"><b>Bela Palomera</b> - uma cópia sem legendas;</p>
        <p class="basico"><b>Kuarup</b> - uma cópia sem legendas.</p>
        <p class="basico">
            A <b>Cinemateca Brasileira em São Paulo</b> possui uma cópia restaurada de <b>Os Fuzis</b>, versão nacional autorizada pelo produtor Jarbas Barbosa que, por ter sofrido um corte de vários minutos, Ruy não assina.
        </p>
        `,
    longas_title: "Longas-metragens",
    longas_content: `<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                ${longas.map(filme => `
                    <div class="flex flex-col sm:flex-row gap-4 bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                        <img src="${filme.imagem}" alt="${filme.titulo}" class="w-32 rounded-lg flex-shrink-0">
                        <div>
                            <h2 class="text-xl font-bold">${filme.titulo}</h2>
                            <div class="text-sm mt-2">
                                ${Object.entries(filme.detalhes).map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`).join('')}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>`,
    curtas_title: "Curtas-metragens",
    curtas_content: `<main class="max-w-5xl mx-auto p-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    ${curtas.map(curta => `
                        <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                            <h2 class="text-xl font-bold">${curta.titulo}</h2>
                            <p class="text-sm mb-2">${curta.info}</p>
                            ${curta.descricao ? `<p>${curta.descricao}</p>` : ''}
                            <p>${Object.entries(curta.detalhes).map(([key, value]) => `<strong>${key}:</strong> ${value}`).join('<br>')}</p>
                            ${curta.imagens ? `
                                <div class="mt-4">
                                    ${curta.imagens.map(img => `
                                        <img src="${img.src}" alt="${img.alt}" class="w-48 rounded-lg mt-2">
                                        ${img.legenda ? `<div class="text-sm italic">${img.legenda}</div>` : ''}
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </main>`,
    interviews_title: "Entrevistas",
    interviews_content: `${listItems(entrevistas)}
    <div class="flex justify-center my-10">
        <img class="img480" src="images/cine_olho.jpg" alt="cine-olho" title="cine-olho">
    </div>`,
    actor_title: "Ator",
    actor_content: `
<main class="max-w-5xl mx-auto p-6">
        
       <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Filme 1 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">SOS Noronha (Brasil - 1957)</h2>
                <img src="images/longas/s-o-s_noronha.jpg" alt="S.O.S Noronha" class="w-32 rounded-lg mb-2">
                <p>
                    <strong>Direção:</strong> Georges Rouquier<br>
                    <strong>Roteiro:</strong> Pierre Viré (romance), Georges Rouquier, Thomas Narcejac, Pierre Boileau<br>
                    <strong>Duração:</strong> 100 min<br>
                    <strong>Elenco:</strong> Jean Marais, Daniel Ivernel, Yves Massard, Vanja Orico, José Lewgoy, Ruy Guerra, Altit, Mario Bernardi, Jacques Demy
                </p>
                <img src="images/longas/sos_noronha.jpg" alt="Ruy Guerra em SOS Noronha" class="w-48 rounded-lg mt-4">
                <div class="text-sm italic">Jean Marais, Daniel Ivernel, José Lewgoy, Ruy Guerra</div>
            </div>
            <!-- Filme 2 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">Os Mendigos (Brasil - 1963)</h2>
                <img src="images/longas/osMendigos/cartaz.jpg" alt="Os Mendigos (cartaz)" class="w-32 rounded-lg mb-2">
                <p>
                    <strong>Direção e roteiro:</strong> Flávio Migliaccio<br>
                    <strong>Duração:</strong> 82 min<br>
                    <strong>Elenco:</strong> participação especial de Ruy Guerra (mendigo cego)
                </p>
                <img src="images/longas/osMendigos/os_mendigos-1.jpg" alt="Ruy Guerra em Os Mendigos" class="w-48 rounded-lg mt-4">
                <div class="text-sm italic">Ruy Guerra em Os Mendigos</div>
                <img src="images/longas/osMendigos/os_mendigos-2.jpg" alt="cena do filme Os Mendigos" class="w-48 rounded-lg mt-2">
                <div class="text-sm italic">Cena do filme Os Mendigos</div>
            </div>
            <!-- Filme 3 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">Benito Cereno (França - 1969)</h2>
                <img src="images/longas/benito-cereno.jpg" alt="cena do filme Benito Cereno" class="w-48 rounded-lg mb-2">
                <p>
                    <strong>Direção:</strong> Serge Roullet<br>
                    <strong>Duração:</strong> longa-metragem<br>
                    <strong>Elenco:</strong> Ruy Guerra, Georges Selmark, Tamour Diop, Gino Turini, Philippe Nourry, Jacques Mercier
                </p>
                <div class="text-sm italic">Ruy Guerra como Benito Cereno</div>
            </div>
            <!-- Filme 4 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">Le Maître du Temps (França, Brasil - 1969)</h2>
                <p>
                    <strong>Direção:</strong> Jean Daniel Poullet<br>
                    <strong>Duração:</strong> longa-metragem<br>
                    <strong>Elenco:</strong> Ruy Guerra e outros
                </p>
            </div>
            <!-- Filme 5 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">Aguirre, a Cólera dos Deuses (Alemanha - 1972)</h2>
                <img src="images/longas/aguirre.jpg" alt="Aguirre, a cólera dos deuses" class="w-32 rounded-lg mb-2">
                <p>
                    <strong>Direção:</strong> Werner Herzog<br>
                    <strong>Duração:</strong> 93 min<br>
                    <strong>Elenco:</strong> Klaus Kinski, Ruy Guerra, Helena Rojo
                </p>
                <img src="images/longas/aguirre2.jpg" alt="Ruy Guerra em Aguirre" class="w-48 rounded-lg mt-4">
                <div class="text-sm italic">Ruy Guerra no intervalo das filmagens</div>
            </div>
            <!-- Filme 6 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">Os Sóis da Ilha de Páscoa (França - 1972)</h2>
                <img src="images/longas/les_soleils_de_l_ile_de_paques.jpg" alt="Les soleils de l'ile de paques" class="w-32 rounded-lg mb-2">
                <p>
                    <strong>Direção:</strong> Pierre Kast<br>
                    <strong>Duração:</strong> longa-metragem<br>
                    <strong>Elenco:</strong> Ruy Guerra e outros
                </p>
            </div>
            <!-- Filme 7 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">Nifrapo (Brasil - 1985)</h2>
                <p>
                    <strong>Direção:</strong> Ricardo Bravo<br>
                    <strong>Duração:</strong> curta-metragem<br>
                    <strong>Elenco:</strong> Ruy Guerra e outros
                </p>
            </div>
            <!-- Filme 8 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">Retrato do Artista com o 38 na Mão (Brasil - 2000)</h2>
                <img src="images/longas/retrato-artista-38-mao.jpg" alt="Ruy Guerra em Retrato do artista com o 38 na mão" class="w-48 rounded-lg mb-2">
                <p>
                    <strong>Direção:</strong> Paulo Halm<br>
                    <strong>Duração:</strong> curta-metragem<br>
                    <strong>Elenco:</strong> Ruy Guerra e outros
                </p>
                <div class="text-sm italic">Ruy Guerra em Retrato do artista com o 38 na mão</div>
            </div>
            <!-- Filme 9 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">Casa de Areia (Brasil - 2005)</h2>
                <img src="images/longas/casa_de_areia.jpg" alt="Casa de areia (2005)" class="w-32 rounded-lg mb-2">
                <p>
                    <strong>Direção:</strong> Andrucha Waddington<br>
                    <strong>Duração:</strong> 115 min<br>
                    <strong>Elenco:</strong> Fernanda Montenegro, Fernanda Torres, Ruy Guerra, Seu Jorge, Luiz Melodia, Enrique Diaz, Stênio Garcia, Emiliano Queiroz, João Acaiabe, Camilla Facundes, Haroldo Costa, Jorge Mautner, Nélson Jacobina
                </p>
                <img src="images/longas/casa_de_areia-2.jpg" alt="cena do filme Casa de Areia" class="w-48 rounded-lg mt-4">
                <div class="text-sm italic">Ruy Guerra em Casa de Areia</div>
            </div>
            <!-- Filme 10 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">Acossada (Brasil - 2005)</h2>
                <p>
                    <strong>Direção:</strong> Karen Black, Karen Akerman<br>
                    <strong>Duração:</strong> 7 min<br>
                    <strong>Elenco:</strong> Ruy Guerra e outros
                </p>
            </div>
            <!-- Filme 11 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">5 Vezes Favela - agora por nós mesmos (Brasil - 2012)</h2>
                <img src="images/longas/5x-favela.jpg" alt="Cinco vezes favela - agora por nós mesmos" class="w-48 rounded-lg mb-2">
                <p>
                    <strong>Produção:</strong> Carlos Diegues, Renata de Almeida Magalhães<br>
                    <strong>Duração:</strong> longa-metragem<br>
                    <strong>Elenco:</strong> Ruy Guerra e outros
                </p>
                <div class="text-sm italic">Ruy Guerra em Cinco Vezes Favela - Agora por Nós Mesmos</div>
            </div>
            <!-- Filme 12 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">Sangue Azul (Brasil - 2014)</h2>
                <img src="images/longas/sangue_azul.jpg" alt="Ruy Guerra em Sangue Azul, de Lírio Ferreira" class="w-48 rounded-lg mb-2">
                <p>
                    <strong>Direção:</strong> Lírio Ferreira<br>
                    <strong>Duração:</strong> longa-metragem<br>
                    <strong>Elenco:</strong> Daniel de Oliveira, Sandra Corveloni, Ney Latorraca, Matheus Natchergaele, Aramis Trindade, Ruy Guerra, entre outros
                </p>
                <div class="text-sm italic">Filmagens</div>
            </div>
        </div>
    </main>`,
    roteirista_title: "Roteirista",
    roteirista_content: `
<main class="max-w-5xl mx-auto p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Roteirista 1 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">Os Cafajestes (Brasil - 1962)</h2>
                <p>
                    <strong>Argumento original e Roteiro:</strong> Ruy Guerra<br>
                    <strong>Co-Adaptação e Diálogo:</strong> Ruy Guerra com Miguel Torres
                </p>
            </div>
            <!-- Roteirista 2 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">Os Fuzis (Brasil - 1964)</h2>
                <p>
                    <strong>Argumento original e Roteiro:</strong> Ruy Guerra<br>
                    <strong>Co-Adaptação e Diálogo:</strong> Ruy Guerra com Miguel Torres
                </p>
            </div>
            <!-- Roteirista 3 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">Balada da Página Três (Brasil - 1968)</h2>
                <p>
                    <strong>Direção:</strong> Luiz Rosemberg Filho<br>
                    <strong>Argumento original e Roteiro:</strong> Ruy Guerra<br>
                    <strong>Elenco:</strong> Sindoval Aguiar, Chacrinha, Adriana Prieto, Echio Reis, Velico
                </p>
            </div>
            <!-- Roteirista 4 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">Sweet Hunters (França - 1969)</h2>
                <p>
                    <strong>Argumento original e Roteiro:</strong> Ruy Guerra<br>
                    <strong>Co-Adaptação e Diálogo:</strong> Ruy Guerra com Philipe Dumarçay
                </p>
            </div>
            <!-- Roteirista 5 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">Os Deuses e os Mortos (Brasil - 1970)</h2>
                <p>
                    <strong>Argumento original, Roteiro e Diálogo:</strong> Ruy Guerra<br>
                    <strong>Co-Adaptação:</strong> Ruy Guerra com Paulo José e Flávio Imperial
                </p>
            </div>
            <!-- Roteirista 6 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">Aventuras de um Detetive Português (Brasil, Portugal - 1975)</h2>
                <p>
                    <strong>Direção:</strong> Stefan Wohl<br>
                    <strong>Roteiro:</strong> Ruy Guerra<br>
                    <strong>Co-Adaptação:</strong> Ruy Guerra<br>
                    <strong>Elenco:</strong> Raul Solnado, Jorge Dória, Mara Rúbia, Grande Otelo, Nelson Dantas, Betty Saady, Fregolente, Fábio Sabag, Albino Pinheiro, Moacyr Deriquém, Sílvia Dizitser, Rogério Steinberg, Arthur Duarte, Ester de Abreu, Estelita Bell, Jackson de Souza, Martim Francisco, Edgar da Rocha Miranda
                </p>
            </div>
            <!-- Roteirista 7 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">A Queda (Brasil - 1977)</h2>
                <p>
                    <strong>Argumento original e Roteiro:</strong> Ruy Guerra<br>
                    <strong>Co-Adaptação:</strong> Ruy Guerra com Nelson Xavier<br>
                    <strong>Diálogos:</strong> Improvisados
                </p>
            </div>
            <!-- Roteirista 8 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">Mueda: Memória e Massacre (Moçambique - 1979/80)</h2>
                <p>
                    <strong>Argumento e Roteiro:</strong> Ruy Guerra
                </p>
            </div>
            <!-- Roteirista 9 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">Erendira (Brasil, México, França, Alemanha - 1982)</h2>
                <p>
                    <strong>Direção:</strong> Ruy Guerra<br>
                    <strong>Roteiro:</strong> original de Gabriel García Márquez
                </p>
            </div>
            <!-- Roteirista 10 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">Ópera do Malandro (Brasil, França - 1985)</h2>
                <p>
                    <strong>Direção:</strong> Ruy Guerra<br>
                    <strong>Roteiro:</strong> Ruy Guerra<br>
                    <strong>Co-Adaptação:</strong> Ruy Guerra com Chico Buarque e Orlando Senna<br>
                    <strong>Diálogos:</strong> Chico Buarque
                </p>
            </div>
            <!-- Roteirista 11 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">A Fábula da Bela Palomera (Brasil, Espanha - 1987)</h2>
                <p>
                    <strong>Direção:</strong> Ruy Guerra<br>
                    <strong>Roteiro:</strong> original de Gabriel García Márquez<br>
                    <strong>Co-Adaptação e Diálogos:</strong> Ruy Guerra com Gabriel García Márquez
                </p>
            </div>
            <!-- Roteirista 12 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">Kuarup (Brasil - 1989)</h2>
                <p>
                    <strong>Direção:</strong> Ruy Guerra<br>
                    <strong>Co-Adaptação e Roteiro:</strong> Ruy Guerra
                </p>
            </div>
            <!-- Roteirista 13 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">Me Alquilo Para Soñar (Espanha - 1991/92)</h2>
                <p>
                    <strong>Direção:</strong> Ruy Guerra<br>
                    <strong>Roteiro:</strong> original de Gabriel García Márquez<br>
                    <strong>Co-Adaptação:</strong> Ruy Guerra com Claudio McDowell
                </p>
            </div>
            <!-- Roteirista 14 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">Guerra Particular (Brasil - 1999)</h2>
                <p>
                    Argumento original que serviu de base para o livro "A Guerra do Fim do Mundo" de Mario Vargas Llosa. (Filme não realizado)<br>
                    <strong>Argumento original:</strong> Ruy Guerra<br>
                    <strong>Co-Adaptação:</strong> Ruy Guerra
                </p>
            </div>
            <!-- Roteirista 15 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">Estorvo (Brasil - 2000)</h2>
                <p>
                    <strong>Direção:</strong> Ruy Guerra<br>
                    <strong>Roteiro:</strong> Ruy Guerra, baseado no romance homônimo de Chico Buarque de Hollanda
                </p>
            </div>
            <!-- Roteirista 16 -->
            <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                <h2 class="text-xl font-bold">O Veneno da Madrugada (Brasil, Argentina, Portugal - 2004/2005)</h2>
                <p>
                    <strong>Direção:</strong> Ruy Guerra<br>
                    <strong>Roteiro:</strong> Ruy Guerra, baseado no romance "La mala hora" de Gabriel García Márquez<br>
                    <strong>Co-Adaptação:</strong> Ruy Guerra com Tairone Feitosa, colaboração de Leonardo Gudel
                </p>
            </div>
        </div>
    </main>`,
    montador_title: "Montador",
    montador_content: `<main class="max-w-5xl mx-auto p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                ${montador.map(item => `
                    <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                        <h2 class="text-xl font-bold">${item.titulo}</h2>
                        <div class="text-sm mt-2">
                            ${Object.entries(item.detalhes).map(([key, value]) => {
        // Se a chave for 'Descrição', não mostra o título da chave
        return key === 'Descrição' ? `<p>${value}</p>` : `<p><strong>${key}:</strong> ${value}</p>`;
    }).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </main>`,
    festivais_title: "Festivais e Premiações",
    festivais_content: `<main class="max-w-5xl mx-auto p-6">
            <div class="space-y-8">
                ${festivais.map(item => `
                    <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                        <h2 class="text-xl font-bold">${item.titulo} ${item.info ? `<span class="text-base font-normal">${item.info}</span>` : ''}</h2>
                        ${item.eventos.map(evento => `
                            <div class="mt-4">
                                <h3 class="font-semibold">${evento.evento}</h3>
                                ${evento.nota ? `<div class="text-sm italic">${evento.nota}</div>` : ''}
                                ${evento.premios ? `<ul class="list-disc ml-6">${evento.premios.map(premio => `<li>${premio}</li>`).join('')}</ul>` : ''}
                                ${evento.imagem ? `<img src="${evento.imagem.src}" alt="${evento.imagem.alt}" class="w-96 rounded-lg my-4"><div class="text-sm italic">${evento.imagem.legenda}</div>` : ''}
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
            </div>
        </main>`,
    theater_title: "Teatro",
    theater_content: `<main class="max-w-5xl mx-auto p-6">
                <div class="space-y-8">
                    ${teatro.map(item => {
        if (item.type === 'group') {
            return `<div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                                <h2 class="text-xl font-bold mb-2">${item.titulo}</h2>
                                ${item.items.map(subItem => `
                                    <div class="mt-4">
                                        <h3 class="font-semibold">${subItem.titulo} <span class="text-base font-normal">${subItem.local}</span></h3>
                                        <p>${Object.entries(subItem.detalhes).map(([key, value]) => `<strong>${key}:</strong> ${value}`).join('<br>')}</p>
                                    </div>
                                `).join('')}
                            </div>`;
        } else {
            return `<div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20">
                                <h3 class="font-semibold">${item.titulo} <span class="text-base font-normal">${item.ano}, ${item.local}</span></h3>
                                <p>${Object.entries(item.detalhes).map(([key, value]) => `<strong>${key}:</strong> ${value}`).join('<br>')}</p>
                                ${item.imagens ? `
                                    <div class="mt-4">
                                        ${item.imagens.map(img => `
                                            <img class="w-80 rounded-lg mb-2" src="${img.src}" alt="${img.alt}">
                                            ${img.legenda ? `<div class="text-sm italic">${img.legenda}</div>` : ''}
                                        `).join('')}
                                    </div>
                                ` : ''}
                            </div>`;
        }
    }).join('')}
                </div>
            </main>`,
    poesias_title: "Poesias",
    poesias_content: listItems(poesias),
    chronicles_title: "Crônicas",
    chronicles_content: listItems(cronicas),
    tales_title: "Contos",
    tales_content: listItems(contos),
    speeches_title: "Falas e Prefácios",
    speeches_content: listItems(falasEPrefacios),
    songs_title: "Letras de Músicas",
    songs_content: listItems(musicas),
    globetrotter_title: "Globetrotter",
    globetrotter_content: `
    ${albuns.map((album, i) => `
      <div class="bg-[#d8cbb7] m-5 p-6 rounded-lg border border-black/20">
        <h3 class="text-2xl font-bold mb-4 text-center">${album.titulo}</h3>
        
        <div class="text-center">
          <img id="foto-${i}" src="${album.fotos[0].src}" class="max-h-96 mx-auto rounded-lg shadow" alt="">
          <p id="legenda-${i}" class="italic text-sm mt-2">${album.fotos[0].legenda}</p>
        </div>

        <div class="flex justify-center mt-3 space-x-1">
            ${album.fotos.map((f, idx) => `
                <button class="album-btn${idx === 0 ? " selected" : ""}"
                onclick="
                    document.querySelector('#foto-${i}').src='${f.src}';
                    document.querySelector('#legenda-${i}').textContent='${f.legenda}';
                    [...this.parentNode.children].forEach(b=>b.classList.remove('selected'));
                    this.classList.add('selected');
                ">${idx + 1}</button>
            `).join('')}
         </div>
      </div>
    `).join('')}
  `,
    workshops_title: "Oficinas",
    workshops_content: `<main class="max-w-5xl mx-auto p-6">
        <div class="mb-8">
            <img src="images/oficinas.jpg" alt="Oficina de Ruy Guerra" class="w-96 rounded-lg mx-auto mb-4">
            <p class="text-center text-base">
                Ruy Guerra, ao longo de sua vida profissional, tem ministrado cursos, oficinas e palestras em várias partes do Brasil e no exterior. Para mais informações, use nosso <a href="contato.html" class="underline text-blue-700">formulário de contato</a>.
            </p>
        </div>
        <div class="bg-[#d8cbb7] rounded-lg p-4 border border-black/20 mb-8">
            <h2 class="text-xl font-bold mb-4">Docência Cinematográfica</h2>
            <ul class="list-disc ml-6 space-y-2">
                <li><strong>1964</strong> - Museu de Arte Moderna do Rio de Janeiro (MAM): Curso de Direção cinematográfica (interrompido pelo golpe de Estado)</li>
                <li><strong>1988</strong> - Workshop de Roteiro, com Gabriel García Márquez, “Escola dos Três Mundos” em San Antonio de los Baños, Cuba. Desde 1988 pertence ao quadro de Professores de cinema da “Escola dos Três Mundos”</li>
                <li><strong>1996</strong> - Workshop de Roteiros “Sundance” (Brasil): Assessor</li>
                <li><strong>1997</strong> - Oficinas de Linguagem Cinematográfica e Realização Cinematográfica: Brasília, Belém do Pará, Porto Alegre, Guaranhuns, Instituto Dragão do Mar (Fortaleza), Vitória, Goiás, entre outros</li>
                <li><strong>1997</strong> - Oficina de Roteiros de Curtametragem, CCBB Rio de Janeiro: Assessor</li>
                <li><strong>1998 a 2000</strong> - Universidade Estácio de Sá: Fundador, Supervisor e Professor (Linguagem Cinematográfica) do Curso de Cinema</li>
                <li><strong>2001 a 2008</strong> - Universidade Gama Filho: Fundador, Diretor e Professor (Linguagem Cinematográfica) do Curso de Cinema</li>
                <li><strong>2007</strong> - São José do Rio Preto: Oficina cinematográfica</li>
                <li><strong>2007</strong> - Mangaratiba: Oficina cinematográfica</li>
                <li><strong>2008</strong> - Teatro Poeira, Rio de Janeiro: Artista Residente, Oficina “Muito além do Cinema”</li>
                <li><strong>2008</strong> - ArtCênicas, Rio de Janeiro: Oficina “Câmera, ator, personagem”</li>
                <li><strong>2008</strong> - Cachoeira do Macacu: Oficina cinematográfica</li>
                <li><strong>2008</strong> - Paraty: Oficina cinematográfica</li>
                <li><strong>2008/2009</strong> - Coordenador do Centro de Estudos e Pesquisa do Instituto Darcy Ribeiro: “O Pensar e o Fazer”</li>
                <li><strong>2009</strong> - Campinas/Tainá: Oficina cinematográfica</li>
                <li><strong>2010</strong> - Brasília: Oficina cinematográfica</li>
                <li><strong>Desde 2010</strong>: Professor residente de “Linguagem Fílmica” do Centro de Estudos e Pesquisa do Instituto Darcy Ribeiro</li>
                <li><strong>2011</strong> - Palestras: Universidade Lusófona, Lisboa, Portugal</li>
            </ul>
        </div>
        <div class="mb-8 text-center">
            <img src="images/mestres_do_cinema_brasileiro.png" alt="Mestres do cinema brasileiro - Ruy Guerra" class="w-full max-w-2xl rounded-lg mx-auto mb-2">
            <div class="text-sm italic">Oficina realizada em Minas Gerais, 2013</div>
        </div>
    </main>`,
    actor_title: "Ator",
    actor_p1: `Além de dirigir, Ruy Guerra também marcou presença...`,
    writings_title: "Escritos",
    writings_p1: "A palavra é outro território fundamental...",
    writings_poem_title: `"O Rinoceronte" (fragmento)`,
    writings_poem_content: `<p>O rinoceronte avança, lento e pesado...<br></p>`,
    world_title: "Pelo Mundo",
    world_p1: "Um cidadão do mundo...",
    contact_title: "Contato",
    contact_p1: "Para informações sobre a obra...",
    contact_press: "Assessoria de Imprensa:",
    contact_agent: "Agente:",
    footer_text: "&copy; 2025 Ruy Guerra. Todos os direitos reservados."
}

function listItems(array) {
    return array.map((item, idx) => `
        <div class="bg-[#d8cbb7] m-5 p-6 rounded-lg border border-black/20 hover:shadow-lg transition cursor-pointer list-item" data-index="${idx}">
            <h2 class="text-xl font-bold mb-1">
                ${item.titulo || ""}
                ${item.data ? `<span>(${item.data})</span>` : ""}
            </h2>
            ${item.autor ? `<p><b>Autor:</b> ${item.autor}</p>` : ""}
            ${item.autores ? `<p><b>Autores:</b> ${item.autores}</p>` : ""}
            ${item.local ? `<p><b>Local:</b> ${item.local}</p>` : ""}
            ${item.fonte ? `<p><b>Fonte:</b> ${item.fonte}</p>` : ""}
        </div>
    `).join('');
}