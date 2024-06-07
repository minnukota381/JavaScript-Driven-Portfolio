// Portfolio Container
const portfolioContainer = document.getElementById('portfolioContainer');

// Create Header
const header = document.createElement('div');
header.classList.add('header');
const headerTitle = document.createElement('h1');
headerTitle.textContent = 'My Portfolio';
header.appendChild(headerTitle);
portfolioContainer.appendChild(header);

// Create Sections
const sections = [
    { title: 'About Me', content: 'I am a web developer with a passion for creating beautiful and functional websites.' },
    { title: 'Projects', content: 'Here are some of my recent projects: Project A, Project B, Project C.' },
    { title: 'Contact', content: 'Feel free to reach out to me at myemail@example.com.' }
];

sections.forEach(sectionData => {
    const section = document.createElement('div');
    section.classList.add('section');
    
    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = sectionData.title;
    section.appendChild(sectionTitle);
    
    const sectionContent = document.createElement('p');
    sectionContent.textContent = sectionData.content;
    section.appendChild(sectionContent);
    
    portfolioContainer.appendChild(section);
});

// Create Footer
const footer = document.createElement('div');
footer.classList.add('footer');
const footerText = document.createElement('p');
footerText.textContent = '© 2024 My Portfolio. All rights reserved.';
footer.appendChild(footerText);
portfolioContainer.appendChild(footer);
