document.addEventListener('DOMContentLoaded', () => {
    
    // ==================================================================
    // 1. DADOS (APENAS A ESTRUTURA DO GRID)
    // ==================================================================
    const odsDataStructure = [
        { id: 1, name: 'Erradicação da Pobreza', colorClass: 'ods-1' },
        { id: 2, name: 'Fome Zero e Agricultura Sustentável', colorClass: 'ods-2' },
        { id: 3, name: 'Saúde e Bem-Estar', colorClass: 'ods-3' },
        { id: 4, name: 'Educação de Qualidade', colorClass: 'ods-4' },
        { id: 5, name: 'Igualdade de Gênero', colorClass: 'ods-5' },
        { id: 6, name: 'Água Limpa e Saneamento', colorClass: 'ods-6' },
        { id: 7, name: 'Energia Limpa e Acessível', colorClass: 'ods-7' },
        { id: 8, name: 'Trabalho Decente e Crescimento Econômico', colorClass: 'ods-8' },
        { id: 9, name: 'Indústria, Inovação e Infraestrutura', colorClass: 'ods-9' },
        { id: 10, name: 'Redução das Desigualdades', colorClass: 'ods-10' },
        { id: 11, name: 'Cidades e Comunidades Sustentáveis', colorClass: 'ods-11' },
        { id: 12, name: 'Consumo e Produção Sustentáveis', colorClass: 'ods-12' },
        { id: 13, name: 'Ação Contra a Mudança Climática', colorClass: 'ods-13' },
        { id: 14, name: 'Vida na Água', colorClass: 'ods-14' },
        { id: 15, name: 'Vida Terrestre', colorClass: 'ods-15' },
        { id: 16, name: 'Paz, Justiça e Instituições Eficazes', colorClass: 'ods-16' },
        { id: 17, name: 'Parcerias e Meios de Implementação', colorClass: 'ods-17' },
    ];

    // ==================================================================
    // 2. LÓGICA DO PAINEL (SIMPLIFICADA)
    // ==================================================================
    const odsGrid = document.getElementById('odsGrid');
    const footer = document.querySelector('.footer');
    const currentYear = new Date().getFullYear();

    /** Adiciona o ano ao footer */
    function setupFooter() {
        const pYear = document.createElement('p');
        pYear.innerHTML = `<i class="far fa-copyright"></i> ${currentYear} | Todos os direitos reservados.`;
        footer.appendChild(pYear);
    }
    
    /** Renderiza o grid de botões ODS */
    function renderOdsGrid() {
        odsDataStructure.forEach(ods => {
            const button = document.createElement('button');
            button.className = `ods-item ${ods.colorClass}`;
            button.dataset.ods = ods.id;
            button.innerHTML = `<span>ODS ${ods.id}</span><p>${ods.name}</p>`;
            odsGrid.appendChild(button);
        });
    }

    // REMOVIDO: Event listener de clique
    // REMOVIDO: Função loadOdsDetails

    // Inicialização
    renderOdsGrid(); 
    setupFooter(); 
});
