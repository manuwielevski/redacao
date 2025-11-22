function abrirRedacao(num) {
    const modal = document.getElementById("paginaRedacao");
    const titulo = document.getElementById("tituloRedacao");
    const texto = document.getElementById("textoRedacao");

    titulo.textContent = "Redação " + num;

    // Textos das redações
    const redacoes = {
        1: `Nos últimos anos, tem se observado um crescimento expressivo na busca por procedimentos estéticos entre os jovens brasileiros. Influenciados por padrões de beleza irreais e pela constante exposição nas redes sociais, muitos adolescente e jovens adultos recorrem a intervenções, muitas vezes invasivas, em busca de aceitação e autoestima. Esse fenômeno revela uma sociedade marcada pela pressão estética precoce, o que levanta preocupações em relação à saúde mental e aos riscos físicos dessas práticas.

Em primeiro lugar, é importante considerar o papel das redes sociais na construção de autoimagem dos jovens. Plataformas como Instagram e TikTok promovem padrões estéticos idealizados, geralmente alcançados por meio de filtros, edições digitais ou procedimentos cirúrgicos. Isso cria uma comparação constante entre os usuários e os influenciadores digitais, o que afeta negativamente a autoestima e gera a sensação de que é necessário mudar o próprio corpo para se sentir aceito e valorizado.

Além disso, a banalização de cirurgias plásticas e procedimentos minimamente invasivos também contribui para esse aumento. Clínicas estéticas têm se popularizado e oferecem condições de pagamento facilitadas, o que torna esses procedimentos mais acessíveis. 

No entanto, muitos jovens, por ainda estarem na fase de desenvolvimento físico e emocional, não estão preparados para lidar com as consequências de tais intervenções, o que pode resultar em arrependimento, complicações médicas e impactos psicológicos a longo prazo.`,

        2: `A Constituição Federal de 1988 assegura, em seu artigo 5º, a igualdade de direitos para todos os cidadãos brasileiros. No entanto, essa garantia ainda não se reflete plenamente na realidade das pessoas com deficiência no país. Apesar de avanços legais e políticos, a inclusão e a acessibilidade permanecem como desafios persistentes na sociedade brasileira, revelando falhas estruturais e culturais que limitam o exercício da cidadania plena por parte desse grupo. Um dos principais obstáculos à inclusão de pessoas com deficiência é a falta de acessibilidade nos espaços urbanos e públicos. Calçadas irregulares, transportes coletivos despreparados e prédios públicos sem adaptações adequadas dificultam a mobilidade e a autonomia desses cidadãos. 
        
        Segundo dados do IBGE, mais de 45 milhões de brasileiros possuem algum tipo de deficiência, e muitos enfrentam obstáculos diários que comprometem o direito de ir e vir. Essa realidade evidencia a negligência do poder público em cumprir as leis já existentes, como a Lei Brasileira de Inclusão (Lei nº 13.146/2015), que prevê adaptações obrigatórias em ambientes e serviços.
        
        Além das barreiras físicas, o preconceito e a desinformação também contribuem para a exclusão de pessoas com deficiência. No ambiente escolar e no mercado de trabalho, por exemplo, ainda é comum a subestimação das capacidades dessas pessoas. A falta de formação adequada dos profissionais da educação e de políticas públicas efetivas para inclusão profissional limitam o desenvolvimento pessoal e social dos deficientes. Isso demonstra que a inclusão vai além da acessibilidade física: é necessário promover uma mudança cultural que valorize a diversidade e reconheça o potencial de todos.
        
        Portanto, a acessibilidade e a inclusão de pessoas com deficiência no Brasil ainda enfrentam entraves significativos, tanto no campo estrutural quanto no social. Para que esses cidadãos tenham seus direitos plenamente garantidos, é fundamental que o Estado fiscalize e invista na adequação.`,
        
        3: `A busca pela qualidade de vida e pelo bem-estar sempre esteve presente na história da humanidade, mas, no mundo contemporâneo, ela assume novas dimensões diante das transformações sociais, econômicas e ambientais. No Brasil, embora haja avanços em áreas como saúde e educação, ainda existem fatores que dificultam o alcance pleno dessas condições, como desigualdade social, problemas ambientais e falta de acesso a serviços públicos de qualidade. Assim, é necessário compreender os principais elementos que interferem no bem-estar populacional para que soluções eficazes sejam implementadas.
        
        Em primeiro lugar, a desigualdade socioeconômica é um dos principais obstáculos para a melhoria da qualidade de vida. De acordo com dados do IBGE, milhões de brasileiros vivem em situação de pobreza ou extrema pobreza, o que limita o acesso a direitos básicos, como saneamento, alimentação saudável, educação e lazer. Essa realidade impacta diretamente a saúde física e mental da população, uma vez que condições de vulnerabilidade social tendem a aumentar os indices de doenças e de violência. Além disso, a degradação ambiental também compromete o bem-estar coletivo.

        A poluição atmosférica, o desmatamento e a contaminação da água não apenas afetam o equilíbrio dos ecossistemas, mas também colocam em risco a saúde da população. O aumento de doenças respiratórias em grandes centros urbanos é um exemplo concreto de como a falta de políticas ambientais eficazes pode prejudicar a qualidade de vida das pessoas.
        
        Portanto, os fatores que influenciam o bem-estar da população vão muito além da esfera individual, estando diretamente relacionados às condições sociais, econômicas e ambientais. Para modificar esse cenário, é necessário que o governo federal, em parceria com os estados e municípios, invista em políticas públicas que promovam a redução das desigualdades, como a ampliação de programas de inclusão social, melhorias no sistema de saúde e educação.`,
       
        4: `As mudanças climáticas são um dos maiores problemas enfrentados pela humanidade atualmente. No Brasil, esse fenômeno tem causado impactos sérios, como secas prolongadas, chuvas intensas, enchentes, aumento das temperaturas e desastres naturais que afetam diretamente a vida da população. Diante disso, é necessário discutir os principais desafios que o país enfrenta para lidar com essa realidade e o que pode ser feito para superá-los.
        
        Um dos maiores obstáculos é o desmatamento, especialmente na Amazônia. A retirada de árvores em grandes proporções contribui para o aumento da emissão de gases poluentes na atmosfera, o que agrava o efeito estufa e acelera o aquecimento global. Mesmo com leis que deveriam proteger o meio ambiente, muitas vezes elas não são cumpridas por falta de fiscalização ou por interesses econômicos, como a expansão da agropecuária. 
        
        Isso mostra que o desenvolvimento econômico precisa estar aliado à preservação ambiental. Outro grande desafio é a falta de preparo das cidades brasileiras para enfrentar os efeitos das mudanças climáticas. Muitas áreas urbanas não têm um bom sistema de drenagem, o que causa enchentes durante as chuvas fortes. Além disso, comunidades pobres costumam viver em áreas de risco, como morros e margens de rios, sendo as mais afetadas por desastres naturais. Essa situação revela a importância de políticas públicas que pensem na prevenção e na adaptação às mudanças no clima.

        Portanto, é essencial que o Brasil enfrente as mudanças climáticas com seriedade. O governo deve investir em fiscalização ambiental, em energias limpas e em projetos que preparem as cidades para eventos climáticos extremos. As escolas também podem ajudar, por meio da educação ambiental, ensinando os jovens a cuidar do planeta. Além disso, cada cidadão pode fazer a sua parte, adotando hábitos mais sustentáveis no dia a día.`,
       
        5: `O avanço tecnológico tem transformado o modo como a sociedade se comunica, trabalha e consome. No entanto, esse progresso também traz desafios significativos, como o aumento do lixo eletrônico — restos de celulares, computadores, baterias e outros equipamentos. O descarte incorreto desses resíduos tem gerado sérios impactos ambientais e sociais, os quais exigem atenção urgente da população e do poder público.
        
        Em primeiro lugar, é importante destacar os danos ambientais causados por esse tipo de lixo. Equipamentos eletrônicos contêm substâncias tóxicas, como mercúrio, chumbo e cádmio, que, ao serem descartadas em lixões ou aterros comuns, podem contaminar o solo, a água e o ar. Essa contaminação afeta ecossistemas inteiros e coloca em risco a saúde de animais e seres humanos. Além disso, o tempo de decomposição de muitos desses materiais é extremamente longo, o que agrava ainda mais o problema.
        
        Além dos impactos ambientais, o descarte inadequado do lixo eletrônico também tem consequências sociais. Em muitas regiões do Brasil, é comum encontrar catadores e trabalhadores informais expostos a riscos ao manusearem esses resíduos sem qualquer proteção. Muitas vezes, essas pessoas tentam extrair metais valiosos dos aparelhos, mas acabam sofrendo com intoxicações e outras doenças. A falta de informação, infraestrutura e políticas públicas eficazes contribui para que essa situação persista.
        
        Portanto, é necessário que medidas sejam tomadas para amenizar os efeitos do descarte inadequado de lixo eletrônico. O governo federal, por meio do Ministério do Meio Ambiente, deve ampliar campanhas educativas nas escolas e nas mídias sociais para conscientizar a população sobre os riscos e a importância do descarte correto. Além disso, empresas do setor de tecnologia precisam ser responsabilizadas por programas de logística reversa, que recolham e reciclem os produtos que comercializam.`,
       
        6: `O consumo de ultra processados e suas consequências á saúde.                                                                                             Nos últimos anos, o consumo de alimentos ultraprocessados tem se intensificado no Brasil e no mundo, impulsionado pela praticidade, pelo marketing agressivo das indústrias e pelo ritmo acelerado da vida moderna. Embora sejam atrativos pela conveniência, esses produtos representam sérias ameaças à saúde da população, contribuindo para o aumento de doenças crônicas e a piora da qualidade de vida. 
        
        Em primeiro lugar, é importante destacar que os ultraprocessados são ricos em aditivos químicos, gorduras saturadas, açúcares e sódio em excesso. Essa composição favorece o desenvolvimento de obesidade, hipertensão e diabetes tipo 2, doenças que têm se tornado cada vez mais comuns. De acordo com a Organização Mundial da Saúde (OMS), os índices de obesidade cresceram de forma alarmante nas últimas décadas, e a má alimentação é um dos principais fatores associados a esse cenário.
        
        Além disso, o consumo frequente desses produtos tende a substituir refeições nutritivas, empobrecendo a dieta e prejudicando a ingestão de vitaminas e minerais essenciais. Tal realidade atinge, sobretudo, crianças e adolescentes, público-alvo de muitas campanhas publicitárias, que acabam formando hábitos alimentares prejudiciais desde cedo. Assim, observa-se um ciclo preocupante de más escolhas alimentares que compromete tanto a saúde individual quanto a coletiva. 
        
        Diante desse quadro, torna-se fundamental a adoção de medidas de conscientização e regulação. É papel do Estado ampliar políticas públicas de incentivo à alimentação saudável, como a inclusão de alimentos frescos na merenda escolar e a taxação de produtos ultraprocessados. Paralelamente, a sociedade deve buscar práticas mais equilibradas, priorizando alimentos naturais e minimamente processados no cotidiano. Portanto, o consumo excessivo de ultraprocessados representa uma ameaça significativa à saúde pública, contribuindo para o avanço de doenças crônicas e a má qualidade de vida.`,
        
        7: `Com o avanço da tecnologia e a popularização da internet, jogos de apostas online tornaram-se cada vez mais acessíveis, especialmente entre os jovens. Plataformas que prometem lucros rápidos e fáceis atraem usuários de todas as idades, mas podem gerar consequências graves quando se transforma em vício. A dependência em jogos de apostas na web é um fenômeno crescente e preocupante, impulsionado por diversos fatores sociais e psicológicos, e que gera impactos significativos na vida pessoal, financeira e emocional dos indivíduos. 
        
        Um dos principais fatores que contribuem para o vício em apostas online é a ilusão de lucro imediato. Muitas plataformas utilizam estratégias de marketing agressivas, incluindo influenciadores digitais e propagandas que associam o jogo ao sucesso e à liberdade financeira. Isso cria uma falsa expectativa nos usuários, que acabam investindo cada vez mais tempo e dinheiro em busca de um retorno incerto. Além disso, a sensação de recompensa instantânea ativa áreas do cérebro relacionadas ao prazer, o que favorece a repetição do comportamento e pode levar à compulsão. 
        
        As consequências desse vício são diversas e impactam profundamente a vida do indivíduo. Financeiramente, muitos usuários acabam se endividando ou perdendo grandes quantias de dinheiro. No âmbito psicológico, a frustração constante pelas perdas pode gerar ansiedade, depressão e até pensamentos suicidas. Relacionamentos familiares e sociais também sofrem, pois o dependente tende a se isolar e a negligenciar suas responsabilidades. 
        
        É importante destacar que, como outros tipos de vício, a dependência em jogos de apostas exige acompanhamento profissional e políticas públicas que promovam a conscientização e o controle do acesso a essas plataformas. Dessa forma, percebe-se que a dependência em jogos de apostas online é um problema complexo, que exige atenção da sociedade, das famílias e do poder público.`,
    
        8: `O trabalho voluntário desempenha um papel fundamental na construção de uma sociedade mais justa e solidária. Em um mundo marcado por profundas desigualdades sociais, ações voluntárias não apenas ajudam a suprir carências imediatas de comunidades vulneráveis, mas também contribuem para a transformação estrutural das relações sociais, promovendo inclusão, educação e cidadania. 
        
        O voluntariado atua diretamente na redução das desigualdades, oferecendo suporte em áreas como educação, saúde, alimentação e habitação. Instituições sociais e organizações não governamentais dependem de pessoas dispostas a dedicar tempo e habilidades em prol do próximo, fornecendo recursos que muitas vezes não chegam via políticas públicas. Por exemplo, programas de reforço escolar ou oficinas profissionalizantes promovem oportunidades que fortalecem a autonomia e a dignidade de indivíduos que, de outra forma, poderiam permanecer marginalizados.
        
        Além do benefício material, o trabalho voluntário também promove um efeito transformador na sociedade como um todo. Ao engajar-se com a realidade de outras pessoas, os voluntários desenvolvem empatia, senso de responsabilidade social e consciência crítica sobre os problemas sociais existentes. Essa troca fortalece vínculos comunitários e incentiva a criação de redes de apoio que vão além do curto prazo, contribuindo para mudanças duradouras. 
         
        Portanto, o trabalho voluntário é muito mais do que um ato de generosidade; é uma ferramenta poderosa no combate às desigualdades sociais.`,
        
        9: `A infância e uma fase essencial para o desenvolvimento emocional, social e cognitivo do ser humano. No entanto, na sociedade atual, um preocupante fenômeno: a adultização infantil. Esse processo ocorre quando as crianças são expostas precocemente a comportamentos, responsabilidades e padrões típicos da vida adulta, o que pode gerar consequências graves e duradouras. Um dos principais fatores que contribuem para a adultização é a influência da mídia e das redes sociais.
        
        Desde cedo, crianças são incentivadas a seguir padrões de beleza, consumir produtos e adotar atitudes que não condizem com sua idade. Além disso, programas de televisão, músicas e conteúdos digitais muitas vezes estimulam comportamentos sexualizados e competitivos, interferindo na formação da identidade infantil e na construção de valores saudáveis. Outro aspecto preocupante é a pressão familiar e social para que as crianças amadureçam rapidamente. 
        
        Em muitos casos, eles assumem responsabilidades de adultos, como criar irmãos menores ou ajudar financeiramente em casa. Essa inversão de papéis pode comprometer o desenvolvimento emocional, gerar ansiedade, insegurança e até depressão, pois a criança perde a oportunidade de viver plenamente a fase de descobertas e aprendizados espontâneos.
        
        Portanto, é urgente que a sociedade repense suas atitudes e promova um ambiente que respeite o tempo de cada fase da vida. Família, escola e meios de comunicação devem atuar juntos na proteção da infância.`,
        
        10: `O etarismo, também conhecido como preconceito etário, é uma forma de discriminação baseada na idade, que afeta principalmente pessoa idosas, mas também pode atingir os mais jovens. Essa prática se manifesta em atitudes que desvalorizam a experiência, a capacidade e a participação dos indivíduos em razão de sua faixa etária.
        
        No contexto atual, em que o envelhecimento populacional é uma realidade crescente, combater o etarismo torna-se fundamental para promover uma sociedade mais justa e inclusiva. Um dos principais caminhos para enfrentar esse problema é a educação. A escola, a mídia e as redes sociais podem desempenhar um papel essencial ao difundir valores de respeito, empatia e valorização da diversidade etária. Ao promover campanhas e projetos que mostrem o envelhecimento como parte natural da vida, é possível desconstruir estereótipos negativos e estimular uma convivência mais harmoniosa entre gerações.
        
        Além disso, deve o mercado de trabalho e as políticas públicas se adaptem para acolher pessoas de todas as idades. Incentivar a contratação de profissionais mais velhos, criar programas de capacitação e combater práticas discriminatórias nas empresas são medidas importantes para garantir igualdade de oportunidades.
         
        Portanto, combater o etarismo exige um esforço coletivo que envolve educação, políticas inclusivas e conscientização social.`,
        
        11: `Na sociedade contemporânea, marcada pelo consumo constante e pela facilidade de acesso ao crédito, a educação financeira tornou-se uma habilidade essencial para o desenvolvimento pessoal e social. No entanto, muitos jovens chegam à vida adulta sem compreender plenamente como administrar seu dinheiro, o que pode resultar em endividamento e dificuldades econômicas. Diante disso, discutir a importância da educação financeira é fundamental para formar cidadãos mais conscientes e preparados para o futuro.
        
        Em primeiro lugar, a falta de conhecimento financeiro contribui para o aumento do consumo impulsivo e da inadimplência. Jovens que não aprendem desde cedo a planejar seus gastos e a poupar acabam vulneráveis às armadilhas do mercado e às pressões do consumo. A introdução da educação financeira nas escolas, portanto, é um passo essencial para desenvolver hábitos saudáveis de planejamento e responsabilidade econômica. 
        
        Além disso, a educação financeira promove autonomia e visão de futuro. Compreender conceitos como investimento, orçamento e juros permite que os jovens tomem decisões mais conscientes, busquem estabilidade e alcancem seus objetivos de vida. Assim, a prática do controle financeiro não apenas melhora a vida individual, mas também contribui para uma sociedade mais equilibrada economicamente. 
        
        Portanto, a educação financeira deve ser vista como parte indispensável da formação dos jovens. Ao ser inserida de forma contínua no ambiente escolar e familiar, ela se torna uma ferramenta de emancipação e cidadania, preparando os indivíduos para lidar de maneira responsável com o dinheiro e com as demandas do mundo moderno.`,
        
        12: ` A cultura popular brasileira é um dos maiores patrimônios do país, representando a identidade, a criatividade e a diversidade do povo. Manifesta-se por meio da música, da dança, das festas, da culinária e de diversas expressões regionais que refletem a história e os costumes das comunidades. No entanto, apesar de sua riqueza, a valorização da cultura popular ainda enfrenta inúmeros desafios, como o preconceito, a falta de investimento e a perda de interesse das novas gerações. 
        
        Um dos principais obstáculos é a influência da globalização e da cultura de massa, que muitas vezes coloca em segundo plano as tradições locais. Ritmos, festas e expressões artísticas brasileiras acabam sendo substituídos por produtos culturais estrangeiros, o que contribui para o enfraquecimento da identidade nacional. Além disso, a ausência de políticas públicas eficazes e de incentivos financeiros dificulta a preservação e a divulgação dessas manifestações culturais.
        
        Outro desafio relevante é o desconhecimento e o desinteresse dos jovens em relação à cultura popular. A falta de contato com essas tradições nas escolas e nos meios de comunicação faz com que muitas práticas culturais sejam esquecidas ou marginalizadas. 
         
        Portanto, para valorizar a cultura popular brasileira, é necessário investir em educação cultural, políticas de incentivo e divulgação midiática que estimulem o orgulho pelas raízes nacionais. Somente por meio da valorização daquilo que nos torna únicos será possível preservar a diversidade e fortalecer a identidade do povo brasileiro.`,
        
        13: `O saneamento básico, composto por abastecimento de água tratada, coleta de esgoto, manejo de resíduos e drenagem urbana, é um direito previsto na Constituição Federal e um setor essencial para a saúde pública e a qualidade de vida. No entanto, no Brasil, o que gera desigualdades sociais e graves problemas ambientais. Diante dessa realidade, torna-se fundamental refletir sobre os caminhos que podem conduzir o país á universalização do saneamento básico. 
        
        Em primeiro lugar, ausência de investimentos contínuos e bem direcionados é uma das principais barreiras para o avanço do saneamento. Muitas regiões, especialmente periferias urbanas e áreas rurais, sofrem com redes antigas, falta de manutenção e baixa cobertura. A ampliação do financiamento público, aliada á participação responsável da iniciativa privada, pode acelerar a construção de obras, modernizar sistemas e garantir atendimento para populações historicamente negligenciadas. 
         
        Além disso, a falta de planejamento integrado entre municípios, estados e União compromete compreenção das políticas públicas. Sem coordenação, os recursos são mal distribuídos, e projetos essenciais deixam de ser concluídos. 
         
        Assim, a criação de consórcios regionais e o fortalecimento dos órgãos de gestão podem tornar as ações mais organizadas, facilitando a implantação de infraestrutura adequada e reduzindo custos.`,
        
        14: `O esporte, muitas vezes visto apenas como entretenimento ou prática de lazer, desempenha um papel muito mais profundo na sociedade contemporânea. Em um país marcado por desigualdades, como o Brasil, essa atividade tem se mostrado uma ferramenta eficaz de transformação social, capaz de promover inclusão, disciplina e oportunidades de desenvolvimento. Dessa forma, compreender sua importância vai além da dimensão física: envolve reconhecer seu impacto na formação cidadã e na construção de um futuro mais equitativo. 
        
         Em primeiro lugar, o esporte atua como agente de inclusão social. Muitas crianças e jovens pertencentes a comunidades vulneráveis encontram nas práticas esportivas um espaço seguro onde podem desenvolver habilidades, criar vínculos e se manter afastados de contextos de violência ou criminalidade. Projetos como o “Segundo Tempo” e diversas iniciativas municipais demonstram como o acesso ao esporte pode reduzir a evasão escolar e ampliar perspectivas de vida. Assim, a quadra ou o campo tornam-se ambientes de acolhimento, pertencimento e crescimento.
         
         Além disso, o esporte estimula valores essenciais para a convivência social. A prática regular favorece a disciplina, o respeito, o trabalho em equipe e a empatia — características fundamentais para a formação de cidadãos críticos e responsáveis. Esses princípios ultrapassam o espaço esportivo e se refletem na vida pessoal e profissional dos praticantes. Dessa maneira, o esporte contribui para desenvolver competências socioemocionais que são indispensáveis no mundo atual. 
         
          Por fim, não se pode ignorar o potencial de mobilidade social que o esporte oferece. Diversos atletas brasileiros saíram de realidades marcadas pela pobreza e alcançaram reconhecimento nacional e internacional, servindo de inspiração para milhões de jovens. Embora nem todos sigam carreira profissional, o caminho esportivo oferece oportunidades de bolsas de estudo, entrada no mercado de trabalho e acesso a ambientes antes inacessíveis`
    };

    texto.innerText = redacoes[num] || "Texto não encontrado.";

    modal.style.display = "flex";

    formatarRedacao();
}

function fecharRedacao() {
    document.getElementById("paginaRedacao").style.display = "none";
}

// FORMATAÇÃO AUTOMÁTICA
function formatarRedacao() {
    const textoContainer = document.getElementById("textoRedacao");
    if (!textoContainer) return;

    // pega texto cru
    const textoOriginal = textoContainer.innerText.trim();

    // separa por blocos de parágrafo
    const paragrafos = textoOriginal.split(/\n\s*\n/);

    // limpa HTML dentro do container
    textoContainer.innerHTML = "";

    paragrafos.forEach(par => {
        const p = document.createElement("p");
        p.innerText = par.trim();
        textoContainer.appendChild(p);
    });
}
