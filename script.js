function toggleFolder(id, btn) {
      const folder = document.getElementById(id);
      const arrow = btn.querySelector('.arrow');
      if (folder.style.display === "block") {
        folder.style.display = "none";
        arrow.classList.remove('rotate');
      } else {
        folder.style.display = "block";
        arrow.classList.add('rotate');
      }
    }

    const ajudaTopicos = [
       {
            palavras: ["convenções do sistema"],
            link: "ConvençõesDoSistema.html"
        },
      {
            palavras: ["Classificação", "classificação", "pesquisa de classificação", "ficha de classificação ", "Classificação"],
            link: "ClassFiscal.html"
        },
        {
            palavras: ["estados", "pesquisa de estados", "ficha de estados", "Estados"],
            link: "Estados.html"
        },
        {
            palavras: ["comissões", "fechamento mensal", "lançamento de conta corrente", "pesquisa de comissões", "pesquisa de comissões", "lançamento"],
            link: "Comissões.html"
        },
        {
            palavras: ["Clientes Ativos", "clientes ativos", "cliente ativo", "pesquisa de clientes ativos", "clientes ativos endereços"],
            link: "ClientesAtivos.html"
        },
        {
            palavras: ["Clientes Potenciais", "clientes potenciais", "potenciais", "pesquisa de clientes potenciais", "clientes potenciais endereços"],
            link: "ClientesPotenciais.html"
        },
        {
            palavras: ["Condições de Pagamentos", "condições", "pagamentos", "pesquisa de condições de pagamentos", "ficha de condições de pagamentos", "condição de pagamento"],
            link: "CondiDePagame.html"
        },
        {
            palavras: ["Cor", "Cor de Papeis", "cor de papeis", "cor"],
            link: "Cordepapeis.html"
        },
        {
            palavras: ["Departamentos", "departamentos", "ficha de departamento", "pesquisa de departamento", "departamento"],
            link: "Departamentos.html"
        },
        {
            palavras: ["Duplicatas a Receber", "duplicatas a receber", "ficha de duplicatas", "pesquisa de duplicatas", "duplicatas para receber"],
            link: "DuplicatasReceber.html"
        },
        {
            palavras: ["Etapas", "Produção", "Etapas de produção", "etapas de produção"],
            link: "Etapasdeprodução.html"
        },
        {
            palavras: ["Faturamento", "nota fiscal", "faturado", "faturamento", "duplicatas de Faturamento", "nota de cabeçalho", "Duplicatas de Faturamento", "faturamentos"],
            link: "Faturamento.html"
        },
        {
            palavras: ["Fechamento", "Fechamento de Guias", "fechamento de guias", "pesquisa de guia encerrada", "guia encerrada", "fecha guia", "fecha a guia"],
            link: "FechamentoDeGuias.html"
        },
        {
            palavras: ["Fornecedores", "fornecedores", "ficha de fornecedor", "inserir fornecedor", "papeis fornecidos", "telefone do fornecedor", "materiais fornecidos", "pesquisa de fornecedor"],
            link: "Fornecedores.html"
        },
        {
            palavras: ["grupo de fornecedores", "ficha de grupos de fornecedores", "pesquisa de grupos de fornecedores"],
            link: "Gpdefornecedores.html"
        },
        {
            palavras: ["Grupo de Materiais", "grupo de materiais", "pesquisa de grupo de materiais", "ficha de grupo de materiais"],
            link: "Gpdemateriais.html"
        },
        {
            palavras: ["Guias", "guias", "conceito de guia", "consultando uma guia", "abrindo uma nova guia", "impressão de guia", "imprimir uma guia", "guia"],
            link: "Guias.html"
        },
        {
            palavras: ["Indexadores", "indexadores", "indexadores economicos", "ficha de indexadores", "pesquisa de indexadores"],
            link: "Indexadores.html"
        },
        {
            palavras: ["IntegraçãoAX", "Integração AX", "integração", "integração ax", "notas de entrada", "notas de saída", "notas de entrada dep.", "notas de saida dep.", "exportação de cadastro", "manuntenção de notas fiscais", "notas fiscais integradas"],
            link: "IntegraçãoAX.html"
        },
        {
            palavras: ["Imposto de Renda", "imposto de renda", "ficha de imposto de renda", "pesquisa de imposto de renda", "Imposto de renda"],
            link: "IR.html"
        },
        {
            palavras: ["Maquinas", "maquinas", "pesquisa de maquinas", "ficha de maquinas"],
            link: "Maquinas.html"
        },
        {
            palavras: ["ficha de materiais", "pesquisa de materiais", "ultimas compras", "fornecedores de materiais"],
            link: "Materiais.html"
        },
        {
            palavras: ["Medidas de Cilindro", "cilindro", "cilindros", "medidas de cilindro", "medidas"],
            link: " MedidasCilindros.html"
        },
        {
            palavras: ["mensagens", "Mensagens", "Mensagens do Sistema", "Mensagens usadas no faturamento", "pesquisa de mensagem", "ficha de mensagem", "mensagem do sistema", "mensagem de faturamento"],
            link: "MSG.html"
        },
        {
            palavras: ["materiais"],
            link: "Materiais.html"
        },
        {
            palavras: ["ficha de papeis", "pesquisa de papeis"],
            link: "Papeis.html"
        },
        {
            palavras: ["Portadores", "portadores", "ficha de portadores", "pesquisa de portadores"],
            link: "Portadores.html"
        },
        {
            palavras: ["Posições de Trabalho", "posições de trabalho", "processos da empresa"],
            link: "PosiçãoTrabalho.html"
        },
        {
            palavras: ["Ramos de Atividade", "ramo de atividades", "ramos de atividade", "ficha de ramos de atividades", "pesquisa de ramos de atividades"],
            link: "RamosAtividade.html"
        },
        {
            palavras: ["Recebimento de Materiais", "recebimento de materiais", "ficha de recebimento de materiais", "pesquisa de recebimento de materiais"],
            link: "RecebimentoMateriais.html"
        },
        {
            palavras: ["Recebimento de papeis", "recebimento de papeis", "papeis a receber", "movimento de papeis", "pesquisa entrada de papeis"],
            link: "RecebimentoPapeis.html"
        },
        {
            palavras: ["Representantes", "representante", "representantes", "clientes representados", "conta corrente do representante"],
            link: "Representantes.html"
        },
        {
            palavras: ["Transportadora", "transportadora", "contatos da transportadora", "praças", "telefones da transportadora", "pesquisa da transportadora", "ficha da transportadora", "nova transportadora"],
            link: "Transportadora.html"
        }
    ];

    const perguntasRespostas = [
        { perguntas: ["qual seu nome", "quem é você"], resposta: "Eu sou seu assistente virtual da IGB Manual" },
        { perguntas: ["como funciona", "o que você faz", "o que voce faz"], resposta: "Posso responder dúvidas e te direcionar para páginas de ajuda." },
        { perguntas: ["olá","ola", "oi", "bom dia", "boa tarde", "boa noite"], resposta: "Olá! Como posso ajudar você hoje?" },
        { perguntas: ["obrigado", "valeu"], resposta: "De nada! Estou sempre à disposição." },
        { perguntas: ["para que serve o manual", "utilidade", "deveria", "para que voce serve"], resposta: "Para não fazer o manuseio errado do sistema e tirar dúvidas de localização do sistema." },
        { perguntas: ["Como gero uma nota fiscal", "como gera uma nota fiscal", "como preparo uma nova nota fiscal", "como gerar uma nota fiscal"], resposta: "Digite faturamento, para que eu possa redirecionar você!" },
        { perguntas: ["quem oferece as condições de pagamento no sistema",], resposta: "São oferecidas pela IGB para que o cliente possa pagar um determinado trabalho." },
        { perguntas: ["como funciona os processos da empresa", "como funciona os processos da empresa"], resposta: "Digite (Posições de Trabalho), para que eu possa redirecionar você!" },
        { perguntas: ["oque é uma ficha", "oque e uma ficha", "para que serve a ficha", "significado de ficha", "para que serve uma ficha", "qual a função da ficha"], resposta: "A ficha é como um cartão de informações que guarda dados de formas diferentes. Pode ser de clientes, produtos, serviços… tudo organizado pra facilitar consulta e controle." },
      ];

    function toggleChat() {
        const chat = document.getElementById("chatContainer");
        chat.style.display = (chat.style.display === "flex") ? "none" : "flex";
    }

    function sendMessage() {
        let input = document.getElementById("userInput").value.toLowerCase().trim();
        if (!input) return;

        addMessage("Você: " + input, "user");

        for (let pr of perguntasRespostas) {
            for (let p of pr.perguntas) {
                if (input.includes(p)) {
                    addMessage("Bot: " + pr.resposta, "bot");
                    document.getElementById("userInput").value = "";
                    return;
                }
            }
        }

        for (let topico of ajudaTopicos) {
            for (let palavra of topico.palavras) {
                if (input.includes(palavra)) {
                    addMessage("Bot: Encontrei ajuda sobre '" + palavra + "'. Redirecionando...", "bot");
                    setTimeout(() => {
                        window.location.href = topico.link;
                    }, 1500);
                    document.getElementById("userInput").value = "";
                    return;
                }
            }
        }

        addMessage("Bot: Poderia ser mais claro, no que está procurando?", "bot");
        document.getElementById("userInput").value = "";
    }

    function goToHelp(chave) {
        for (let topico of ajudaTopicos) {
            if (topico.palavras.includes(chave)) {
                addMessage("Você clicou em: " + chave, "user");
                addMessage("Bot: Redirecionando para ajuda sobre '" + chave + "'...", "bot");
                setTimeout(() => {
                    window.location.href = topico.link;
                }, 1000);
                break;
            }
        }
    }

    function addMessage(msg, classe) {
        const chatBox = document.getElementById("chatBox");
        const p = document.createElement("p");
        p.textContent = msg;
        p.className = classe;
        chatBox.appendChild(p);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
    let progress = 0;
    const loader = document.getElementById("loaderProgress");
    const interval = setInterval(() => {
      progress += 1;
      loader.style.width = progress + "%";

      if (progress >= 100) {
        clearInterval(interval);
        document.querySelector('.loader-container').style.display = 'none';
        document.querySelector('.conteudo').style.display = 'block';
      }
    }, 30);