document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    body.style.margin = '0';
    body.style.padding = '0';
    body.style.fontFamily = 'Arial, sans-serif';
    body.style.background = '#546489';
    body.style.overflowX = 'hidden';

    // Crear el contenido principal
    const main = document.createElement('main');
    main.style.padding = '20px';
    main.style.marginTop = '100px';

    const sectionsData = [
        {
            title: 'Nuestra Historia',
            content: 'Somos una empresa joven especializada en ofrecer soluciones financieras a personas y pequeñas empresas que necesitan préstamos para crecer. Aunque hemos comenzado hace poco, estamos comprometidos con brindar servicios de calidad y apoyar el desarrollo económico de nuestros clientes.'
        },
        {
            title: 'Nuestro Compromiso',
            content: 'Nos esforzamos por ofrecer préstamos accesibles y flexibles que se adapten a las necesidades financieras únicas de cada cliente. Nuestro equipo de profesionales está dedicado a brindar asesoramiento personalizado y soluciones a medida para ayudar a nuestros clientes a alcanzar sus metas.'
        },
        {
            title: 'Nuestros Servicios',
            content: 'Ofrecemos una variedad de productos financieros, incluyendo préstamos personales, préstamos para pequeñas empresas y líneas de crédito. Nuestra plataforma en línea fácil de usar permite a los clientes solicitar préstamos de manera conveniente y rápida, con tiempos de aprobación ágiles.'
        },
        {
            title: 'Valores Fundamentales',
            content: 'En PrestaPlus, valoramos la transparencia, la honestidad y el compromiso con la satisfacción del cliente. Creemos en construir relaciones sólidas y duraderas con nuestros clientes, basadas en la confianza y la integridad.'
        }
    ];

    sectionsData.forEach(sectionData => {
        const section = document.createElement('section');
        section.style.marginBottom = '20px';
        section.style.padding = '20px';
        section.style.borderRadius = '5px';
        section.style.backgroundColor = '#ffffff';
        section.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.1)';

        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = sectionData.title;
        sectionTitle.style.fontWeight = 'bold';
        sectionTitle.style.marginBottom = '10px';

        const sectionContent = document.createElement('p');
        sectionContent.textContent = sectionData.content;

        section.appendChild(sectionTitle);
        section.appendChild(sectionContent);

        main.appendChild(section);
    });

    body.appendChild(main);

    // Crear el pie de página
    const footer = document.createElement('footer');
    footer.style.textAlign = 'center';
    footer.style.marginTop = '50px';
    const footerText = document.createElement('p');
    footerText.textContent = '© 2023 PrestaPlus. Todos los derechos reservados.';
    footerText.style.color = '#ffffff';
    footer.appendChild(footerText);
    body.appendChild(footer);
});
