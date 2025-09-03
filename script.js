document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        pt: {
            nav_home: "Início",
            nav_with_ruy: "Com o Ruy",
            nav_who_is_ruy: "Quem é Ruy?",
            nav_chronology: "Cronologia",
            nav_works_about: "Trabalhos sobre",
            nav_news_dropdown: "Notícias",
            nav_archive: "Acervo",
            nav_filmography: "Filmografia",
            nav_actor: "Ator",
            nav_writings: "Escritos",
            nav_around_the_world: "Pelo Mundo",
            nav_contact: "Contato",
            chronology_title: "Cronologia",
            chronology_content: "Conteúdo da cronologia em breve...",
            works_about_title: "Trabalhos Sobre",
            works_about_content: "Conteúdo sobre trabalhos em breve...",
            archive_title: "Acervo",
            archive_content: "Conteúdo do acervo em breve...",
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
            filmography_title: "Filmografia",
            filmography_subtitle: "Longas-metragens",
            actor_title: "Ator",
            actor_p1: `Além de dirigir, Ruy Guerra também marcou presença...`,
            writings_title: "Escritos",
            writings_p1: "A palavra é outro território fundamental...",
            writings_poem_title: `"O Rinoceronte" (fragmento)`,
            writings_poem_content: `<p>O rinoceronte avança, lento e pesado...<br></p>`,
            world_title: "Pelo Mundo",
            world_p1: "Um cidadão do mundo...",
            news_title: "Últimas Notícias",
            news1_title: "Retrospectiva da obra de Ruy Guerra no MoMA",
            news1_date: "15 de Agosto de 2025",
            news1_content: "O Museu de Arte Moderna de Nova York anuncia...",
            news2_title: "Lançamento de coletânea de poesias",
            news2_date: "02 de Julho de 2025",
            news2_content: `A editora X anuncia o lançamento de "24 Quadros"...`,
            contact_title: "Contato",
            contact_p1: "Para informações sobre a obra...",
            contact_press: "Assessoria de Imprensa:",
            contact_agent: "Agente:",
            footer_text: "&copy; 2025 Ruy Guerra. Todos os direitos reservados."
        },
        en: {
            nav_home: "Home",
            nav_with_ruy: "With Ruy",
            nav_who_is_ruy: "Who is Ruy?",
            nav_chronology: "Chronology",
            nav_works_about: "Works About",
            nav_news_dropdown: "News",
            nav_archive: "Archive",
            nav_filmography: "Filmography",
            nav_actor: "Actor",
            nav_writings: "Writings",
            nav_around_the_world: "Around the World",
            nav_contact: "Contact",
            chronology_title: "Chronology",
            chronology_content: "Chronology content coming soon...",
            works_about_title: "Works About",
            works_about_content: "Content about works coming soon...",
            archive_title: "Archive",
            archive_content: "Archive content coming soon...",
            home_p1: `Ruy Guerra was born on August 22, 1931, in <span class="text-highlight">Mozambique</span>...`,
            home_p2: `At twenty, he went to Paris...`,
            home_p3: `In Rio de Janeiro in the 1960s/1970s...`,
            home_p4: `He traveled half the world...`,
            bio_title: "Who is Ruy Guerra",
            bio_content: `
                <div class="text-base leading-relaxed space-y-4">
                    <p>Ruy Guerra is a well- known name to cinema fans. In the 1960s, the period of the Cinema Novo, renewing Brazilian cinema, Ruy, born in Mozambique, arrived in Rio de Janeiro, direct from Paris, where he had graduated in Film Making. Today he is one of the surviving myths of the Cinema Novo, indeed one the most famous, having been the first of the group to shoot films outside Brazil. He is also known to those who enjoy Brazilian popular music from the 1960s and 70s, when he partnered young musicians. In 1958 Ruy came to Rio de Janeiro, which has been his safe haven until today. The trip to Brazil was a desire expressed years earlier in letters to his father, brother and friends.</p>
                    <p>At the moment (August 2014) he is a well-lived 83 years-old, whose energy makes those of us who are much younger envy him. Many say that this energy comes from his home country, Mozambique, on the edge of the Indian Ocean in southern Africa. He is the son of a Portuguese couple who were trying life in the Portuguese colony and who settled in the capital, Lourenço Marques, and started a family. Since he was ten Ruy has been crazy about writing, film and film making, and during the second half of the 1940s he published short stories, articles and poetry in newspapers and even today repeatedly talks about his frustrated vocation as a writer, reaffirming his desire to write a novel. The complicated situation of living financially from film making also led him to direct the concerts of his friends, and he also wrote the play ‘Calabar: in praise of treason’ in partnership with Chico Buarque. It was banned on the eve of the premiere, causing financial losses to the producers. Like many contemporaries, Chico Buarque and Ruy Guerra often had problems with the lyrics.</p>
                    <p>Since his teens Ruy has understood filmmaking as a way of thinking and presenting political and social relations. Lourenço Marques was the most important port on the Indian Ocean in Southern Africa, and much of the south of the continent's trade passed through the port. At 16, with an 8 mm. camera borrowed from a friend, he filmed the reality of the Cais Gorjão harbour, portraying the lives of black workers. He filmed them resting under wagons, eating, sleeping under trains; for Ruy for these images ‘reminded me of concentration camps’. According to one analyst, Ruy as an amateur film maker, ‘flirted with social critique’.</p>
                    <div class="my-6 text-center"><img class="mx-auto max-w-md w-full rounded shadow-lg" src="https://placehold.co/480x320/d8cbb7/5a4a3b?text=Ruy+in+Mozambique" alt="A photo of Ruy In Mozambique sent by his sister Lara"><p class="text-sm italic mt-2">A photo of Ruy In Mozambique sent by his sister Lara</p></div>
                    <p>In the family home and the Liceu Salazar state secondary school, Ruy received a Portuguese education. He and his classmates were educated by teachers ‘banished from Portugal by the Dictatorship’, ‘critical thinkers’ who made them read a lot, resulting in many students becoming rebels against the status quo. They refused to accept the cultural production of the Salazar dictatorship, and Brazilian cultural material was very important, not only because Brazil was a former Portuguese colony that had become independent, but also because of the similarities between the cultures of Mozambique and Brazil (the climate, the presence of black people, the aromas and flavours...). Brazilian literature and magazines, which were were often censored and had to enter the country illegally, impressed this generation, called the Mozambique ‘diaspora’. Ruy stated in an interview: ‘Some of us made up a generation that mostly left the country and distinguished itself in the arts, philosophy (...) because of the political and social context in which they were born and raised (...) it was not by chance or just as a result of individual psychological conditions’. This generation used culture as their form of political revolt against colonialism and racism. Ruy, concerned with the relations of domination and subordination in the colony, was interrogated and arrested by the police of the Portuguese dictatorship because of his independent thinking at the Liceu, and because of his activities and those of his group he was eventually legally prevented from visiting Portugal for a number of years.</p>
                    <p>At 20 he went to study film in Paris and arrived in the French capital at a very important moment for cinema as young filmmakers were trying to impose their auteur style on the traditional large-scale industry. He professionally graduated during this period, the early 1950s, when the traditional cinema was being renewed, with the first ripples of the Nouvelle Vague. He recalls the movement as being made up of young French intellectuals to whom he, as a foreign immigrant, felt very different: ‘[The Nouvelle Vague] always had a clear right-wing position and I […] was definitely on the left [...] I condemned French intellectuals for their lack of political engagement, they never talked about the war in Algeria or about immigrants’. He attended the Institut des Hautes Études Cinématographiques (IDHEC) and was seen by classmates as an excellent student, better educated than others, though a permanent questioner. He also studied acting for two years on a course at the Théâtre National de Paris (NPT).</p>
                    <p>In Paris he got to know Brazilians, with whom he came to try his chance in the New World which he hoped to conquer through his enthusiasm for film. He carried in his luggage the first script he wrote shortly after graduating and which he had been attempting in many ways to film in the Old World. This script would later become ‘Os Fuzis’ [The Guns], which won the Silver Bear at the Berlin Film Festival in 1964 and was one of the most remarkable films of that period.</p>
                    <div class="my-6 text-center"><img class="mx-auto max-w-2xl w-full rounded shadow-lg" src="https://placehold.co/800x500/d8cbb7/5a4a3b?text=Cinema+Novo+Group" alt="Cinema Novo in Brazil"><p class="text-sm italic mt-2">Meeting of filmmakers for a the French TV programme, ‘Carnets brésiliens’, Copacabana 1966</p></div>
                    <p>Ruy jokes that he was born as a filmmaker with the Cinema Novo but he was not born into it, among the young people between whom, despite the usual rivalries and clashes, there was a close cooperation on the basis of the films they made. It was a cinema search of identity: ‘We were interested in producing films that portrayed the reality of the people, political and social conflicts, to escape the production rules and dogmas of the aesthetics of the industrial cinema’. However, Ruy did not practice the art as weapon of revolutionary propaganda; his filmography can hardly be seen as didactic but was rather part of a generation which, in the 1960s, wished to change the world to what they believed was the best for society; and also, for some of them, including Ruy, their daily lives.</p>
                    <p>Over the years, Ruy has worked in various functions related to the screen (photographer, assistant director, director, screenwriter, actor, editor, executive producer, executive and artistic director and teacher), in writing poetry, lyrics, and newspaper columns, shows and plays (which he sometimes also directed). He recently declared himself ‘a typical artist produced by underdevelopment’, who has had to work in various forms of art in order to survive. He has used all his gifts with words; in addition to writing poems, lyrics, he wrote and directed plays, and for five years penned a weekly column in the Cadernos Dois supplement of the O Estado de São Paulo newspaper.</p>
                    <p>Economic difficulties, an inherent part of the Brazilian authorial cinema, led him for a time to live from writing lyrics in the Zona Sul in Rio de Janeiro for musician friends such as Sergio Ricardo, Edu Lobo, Chico Buarque de Holanda, Francis Hime, Carlos Lyra, Luiz Eça and Milton Nascimento. A talented writer of lyrics, he has written more than a hundred songs, which abandoned the contents of the ‘the little boat and the flower’ of the Bossa Nova for a stronger social theme and content. The difficulty of living from his films also led to work with the theatre, directing the concerts of his friends and, when invited, he also directed a number of plays. He also wrote in partnership with Chico Buarque ‘Calabar: in praise of treason’, which was banned by the censorship of the military dictatorship. Like many others, Chico Buarque and Ruy often had various problems with the lyrics.</p>
                    <p>Ruy is very proud of being classified as a political filmmaker. Since his adolescence he has been a politician a broad sense: being involved with the problems of his time. He repeatedly says: ‘I look at reality from a political and cultural point of view.’ Throughout his life Ruy has taken this political position with a capital P, though never having been an activist or member of a political party. Ruy sees himself and is seen as a man of the left from the way he speaks and lives, and his art and teaching. He believes all aesthetics are political, as they will always contain a worldview and will be anchored to a set of values they present, defend or condemn. In 1997, the film critic Maria do Rosario Caetano noted that he retained the ‘highly political rhetoric of the 1960s’ and did not believe in the end of ideology; and in recent speeches and writings Ruy seems to confirm this.</p>
                    <p>From 1960 to 1970 Ruy worked in France on a number of occasions in film and television. He was close to the group linked to film magazine Positif. In 1965 the French magazine Cahiers de Cinema, which gave great prominence to the Brazilian Cinema Novo, summarized the themes of his films: cruelty, violence, racism, never-ending time... According to Ruy, ‘Whoever analyses my films has said that there is a kind of obsession for the areas of power and repressive mechanisms, whether in the family environment, social structures or government.’</p>
                    <p>The socialist revolution of the new People's Republic of Mozambique, victorious in 1975 under the leadership of Samora Machel, initially gave a fundamental role to film in the construction of national identity. It was an important part of the attempt to unite many tribes, whose culture is based on oral tradition, into a nation. Urged by former friends, who now had posts in the government, Ruy started to actively collaborate in the creation of the National Film Institute of Mozambique (INC) and the training of film technicians; he gave practical lessons and brought to Maputo (formerly Lourenço Marques) many experts in various aspects of film. He intensely lived the experience of independence and decolonization of the country where he was born; his African films are by their nature political.</p>
                    <p>His left-wing position is also clear in his relations with Cuba, where he lived for various periods. Since the beginning of the International Festival of New Latin American Cinema in 1979, his films have been shown there. Since 1988 he has been part of the teaching staff of the well-known Escuela Internacional de Cine y TV in San Antonio de Los Baños, 30 kilometres from Havana. He took part in projects and scripts with Gabriel García Márquez, ‘Gabo’, a founder of the school, who became his personal friend. He was the most important maker of Gabo’s films: ‘Erêndira’, ‘Fábula de la bella Palomera’, ‘Veneno de la Madrugada’ and ‘Me alquilo para soñar’ (a mini-series for Spanish television, filmed entirely in Havana). At the end of the 1990s he also made in Havana ‘Estorvo’, adapted from the novel by Chico Buarque, with the main part played by the Cuban actor Jorge Perrugoria and a team largely made up of Cuban technicians.</p>
                    <div class="my-6 text-center"><img class="mx-auto max-w-2xl w-full rounded shadow-lg" src="https://placehold.co/800x500/d8cbb7/5a4a3b?text=Ruy+and+Gabo" alt="Ruy Guerra and Gabriel Garca Mrquez"><p class="text-sm italic mt-2">Ruy Guerra and Gabriel García Márquez during the filming of ‘Erêndira’, Mexico, 1982</p></div>
                    <p>Brazilian and Latin American filmmakers sometimes remain decades without being able to film because they face permanent economic problems and sometimes difficulties due to the political situation. Ruy managed to shoot long, medium and short length films in Brazil, France, Portugal, Spain, Mexico, and Cuba. He has often said: ‘I didn’t make all the films I wanted to, but I wanted to make all the films that I did make.’ At the beginning of the 21st century he was invited to write for the theatre on Don Quixote, creating a musical called ‘Don Quixote from Nowhere’, an adaptation of Don Quixote to the Northeast of Brazil.</p>
                    <p>And when he was unable to film he was involved in teaching, organizing film courses in Rio de Janeiro from the 1990s. His teaching activities in the last 10-12 years have developed into courses, lectures and workshops. In an interview he said: ‘I say in the first lesson: If you have come here to make a North American film it is easy. Let’s go to the bar, and in an hour, I’ll tell you all you need to know. […] I tell them that it's not worth wasting two and a half years to make films like the Americans. Now, if the guy wants to make Brazilian films, he will spend two years in college making an effort, and he will continue making an effort, and will not leave college knowing how to make Brazilian films. It's another thing: it’s a quest, it is to make a link with reality; it is to know who you are’. He emphasizes how fundamental it is to ‘open the heads of young people to the act of thinking about art, cultural education [...] so that a person can take on such a great responsibility [...] for this means of expression that is in my view so vital and important, so politically and aesthetically important.’</p>
                    <p>When talking about movies and the market his position is clear: ‘The equations of society are all poorly made, and you live with these wrong equations. A film does not have to have 10 million viewers. A movie has to be seen by X people who can take from this film something important for their lives. It's different. Because of these millions of viewers there are usually not even ten that take from the film something important for their lives. They have consumed the film as a product, as 'fast food'. [...] It is important to see that seeing these American films is the same as eating at Macdonald's. There's no difference. [...] You must be careful, very careful.’</p>
                    <p>The study and practice of a cinematic language is constantly renewed in his filmmaking, and Ruy stresses how important this is: ‘Something fundamental for me is to find structures that break with standard concepts, basically the North American hegemonic structure, which I believe reduces reality and is of no use for our culture. [...]. This refusal, this factor of refusal, I believe, is still present today. Many films are wrong, but I think this is even present in these films that are wrong’.</p>
                    <p>He has lived in various countries and different continents and has been called ‘a citizen of the world’. His path through life cannot be separated from his artistic production, as his artistic quest has been the defining factor of his movements through space and time. He defines himself: ‘Half African, half Portuguese, half Brazilian, somewhat Latin, half lost, 100% of what in this cocktail of anguishes?’</p>
                    <div class="my-6 text-center"><img class="mx-auto max-w-md w-full rounded shadow-lg" src="https://placehold.co/480x320/d8cbb7/5a4a3b?text=Ruy+in+Atacama" alt="Ruy Guerra no deserto do Atacama"><p class="text-sm italic mt-2">Chile, 2014</p></div>
                </div>
            `,
            filmography_title: "Filmography",
            filmography_subtitle: "Feature Films",
            actor_title: "Actor",
            actor_p1: `Besides directing, Ruy Guerra also made his mark...`,
            writings_title: "Writings",
            writings_p1: "The word is another fundamental territory...",
            writings_poem_title: `"The Rhinoceros" (fragment)`,
            writings_poem_content: `<p>The rhinoceros advances, slow and heavy...<br></p>`,
            world_title: "Around the World",
            world_p1: "A citizen of the world...",
            news_title: "Latest News",
            news1_title: "Ruy Guerra's Work Retrospective at MoMA",
            news1_date: "August 15, 2025",
            news1_content: "The Museum of Modern Art in New York announces...",
            news2_title: "Release of a poetry collection",
            news2_date: "July 02, 2025",
            news2_content: `Publisher X announces the release of "24 Frames"...`,
            contact_title: "Contact",
            contact_p1: "For information about the work...",
            contact_press: "Press Office:",
            contact_agent: "Agent:",
            footer_text: "&copy; 2025 Ruy Guerra. All rights reserved."
        },
        fr: {
            nav_home: "Accueil",
            nav_with_ruy: "Avec Ruy",
            nav_who_is_ruy: "Qui est Ruy?",
            nav_chronology: "Chronologie",
            nav_works_about: "Travaux sur",
            nav_news_dropdown: "Actualités",
            nav_archive: "Archives",
            nav_filmography: "Filmographie",
            nav_actor: "Acteur",
            nav_writings: "Écrits",
            nav_around_the_world: "Autour du Monde",
            nav_contact: "Contact",
            chronology_title: "Chronologie",
            chronology_content: "Contenu de la chronologie bientôt disponible...",
            works_about_title: "Travaux Sur",
            works_about_content: "Contenu sur les travaux bientôt disponible...",
            archive_title: "Archives",
            archive_content: "Contenu des archives bientôt disponible...",
            home_p1: `Ruy Guerra est né le 22/08/1931 au <span class="text-highlight">Mozambique</span>...`,
            home_p2: `À vingt ans, il part pour Paris...`,
            home_p3: `À Rio de Janeiro dans les années 1960/1970...`,
            home_p4: `Il a parcouru le monde...`,
            bio_title: "Qui est Ruy Guerra",
            bio_p1: "Ruy Alexandre Guerra Coelho Pereira de Oliveira...",
            bio_p2: `Son parcours cinématographique commence en France...`,
            bio_p3: `Sa carrière internationale comprend des œuvres...`,
            filmography_title: "Filmographie",
            filmography_subtitle: "Longs métrages",
            actor_title: "Acteur",
            actor_p1: `En plus de la réalisation, Ruy Guerra a également marqué...`,
            writings_title: "Écrits",
            writings_p1: "La parole est un autre territoire fondamental...",
            writings_poem_title: `"Le Rhinocéros" (fragment)`,
            writings_poem_content: `<p>Le rhinocéros avance, lent et lourd...<br></p>`,
            world_title: "Autour du Monde",
            world_p1: "Un citoyen du monde...",
            news_title: "Dernières Nouvelles",
            news1_title: "Rétrospective de l'œuvre de Ruy Guerra au MoMA",
            news1_date: "15 août 2025",
            news1_content: "Le Musée d'Art Moderne de New York annonce...",
            news2_title: "Sortie d'un recueil de poésie",
            news2_date: "02 juillet 2025",
            news2_content: `L'éditeur X annonce la sortie de "24 Cadres"...`,
            contact_title: "Contact",
            contact_p1: "Pour toute information sur l'œuvre...",
            contact_press: "Bureau de Presse:",
            contact_agent: "Agent:",
            footer_text: "&copy; 2025 Ruy Guerra. Tous droits réservés."
        }
    };

    const langSwitchers = [document.getElementById('lang-switcher'), document.getElementById('lang-switcher-mobile')];
    const translatableElements = document.querySelectorAll('[data-lang-key]');

    function setLanguage(lang) {
        translatableElements.forEach(el => {
            const key = el.dataset.langKey;
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        document.documentElement.lang = lang.startsWith('pt') ? 'pt-BR' : lang;
    }

    langSwitchers.forEach(switcher => {
        switcher.addEventListener('click', function(e) {
            if (e.target.tagName === 'IMG') {
                const lang = e.target.dataset.lang;
                setLanguage(lang);
            }
        });
    });
    
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navLinksContainer = document.getElementById('nav-links-container');
    
    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.toggle('active', section.id === sectionId);
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            if(sectionId) {
                navLinks.forEach(l => l.classList.remove('active'));
                
                if(this.closest('.dropdown-menu')) {
                    this.closest('.dropdown').querySelector('button').classList.add('active');
                } else {
                    this.classList.add('active');
                }

                showSection(sectionId);
                
                if (window.innerWidth < 768) {
                    navLinksContainer.classList.add('hidden');
                }
            }
        });
    });
    
    mobileMenuButton.addEventListener('click', () => {
        navLinksContainer.classList.toggle('hidden');
    });

    // Galeria
    const galleryItems = document.querySelectorAll('.gallery-item');
    const navContainer = document.querySelector('.gallery-nav');
    let currentIndex = 0;
    let intervalId;
    function updateGallery() {
        galleryItems.forEach((item, i) => {
            item.className = 'gallery-item'; // Reset classes
            const diff = i - currentIndex;
            if (diff === 0) item.classList.add('active');
            else if (diff === -1 || diff === galleryItems.length - 1) item.classList.add('prev-1');
            else if (diff === 1 || diff === -(galleryItems.length - 1)) item.classList.add('next-1');
            else if (diff === -2 || diff === galleryItems.length - 2) item.classList.add('prev-2');
            else if (diff === 2 || diff === -(galleryItems.length - 2)) item.classList.add('next-2');
        });
        document.querySelectorAll('.nav-dot').forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
    }
    function setupNav() {
        galleryItems.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'nav-dot';
            dot.textContent = i + 1;
            dot.onclick = () => { currentIndex = i; updateGallery(); resetInterval(); };
            navContainer.appendChild(dot);
        });
    }
    function nextImage() { currentIndex = (currentIndex + 1) % galleryItems.length; updateGallery(); }
    function resetInterval() { clearInterval(intervalId); intervalId = setInterval(nextImage, 4000); }
    if (galleryItems.length > 0) { setupNav(); updateGallery(); resetInterval(); }

    setLanguage('pt');
});
