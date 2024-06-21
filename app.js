document.addEventListener('DOMContentLoaded', function () {
    const root = document.getElementById('root');

    // Create Navbar
    const navbar = document.createElement('nav');
    navbar.className = 'navbar navbar-expand-lg navbar-light';
    navbar.id = 'navbar';
    navbar.innerHTML = `
        <a class="navbar-brand" href="#">NeptunE</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item"><a class="nav-link" href="#home"><i class="fas fa-home"></i> Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#about"><i class="fas fa-user"></i> About</a></li>
                <li class="nav-item"><a class="nav-link" href="#skills"><i class="fas fa-toolbox"></i> Skills</a></li>
                <li class="nav-item"><a class="nav-link" href="#projects"><i class="fas fa-project-diagram"></i> Projects</a></li>
                <li class="nav-item"><a class="nav-link" href="./Assets/Resume.pdf" target="_blank"><i class="fas fa-file"></i> Resume</a></li>
                <li class="nav-item"><a class="nav-link" href="#contact"><i class="fas fa-envelope"></i> Contact</a></li>
            </ul>
        </div>
    `;
    root.appendChild(navbar);

    // Create Home Section
    const homeSection = document.createElement('section');
    homeSection.className = 'home';
    homeSection.id = 'home';
    homeSection.innerHTML = `
        <div class="home-content text-center">
            <div class="text">
                <div class="home-circle">
                    <img src="./Assets/images/Minnu.JPG" alt="Minnu" class="img-fluid">
                </div>
                <div class="text-one">Hello there,</div>
                <div class="text-two">I'm Minnu</div>
                <div class="text-three" id="typed-text"><span class="pre-style"></span></div>
                <div class="social-links d-flex align-items-center">
                    <a href="https://github.com/minnukota381" target="_blank" rel="noopener noreferrer" title="GitHub" class="github-link"><i class="fab fa-github fa-2x"></i><span class="sr-only">GitHub</span></a>
                    <a href="https://www.linkedin.com/in/minnukota381/" target="_blank" rel="noopener noreferrer" title="LinkedIn" class="linkedin-link"><i class="fab fa-linkedin fa-2x"></i><span class="sr-only">LinkedIn</span></a>
                    <a href="https://www.facebook.com/minnukota381" target="_blank" rel="noopener noreferrer" title="Facebook" class="facebook-link"><i class="fab fa-facebook fa-2x"></i><span class="sr-only">Facebook</span></a>
                    <a href="https://www.instagram.com/minnukota381/" target="_blank" rel="noopener noreferrer" title="Instagram" class="instagram-link"><i class="fab fa-instagram fa-2x"></i><span class="sr-only">Instagram</span></a>
                </div>
            </div>
        </div>
    `;
    root.appendChild(homeSection);

    // Create About Section
    const aboutSection = document.createElement('section');
    aboutSection.className = 'about';
    aboutSection.id = 'about';
    aboutSection.innerHTML = `
        <div class="content">
            <div class="title text-center"><span class="about-title">About Me</span></div>
            <div class="about-details row">
                <div class="col-md-4 d-flex align-items-center">
                    <img src="./Assets/images/m.jpg" alt="" class="img-fluid">
                </div>
                <div class="col-md-8">
                    <div class="right">
                        <div class="topic about-topic ">Professional Profile</div>
                        <p class="about-p">
                            "I'm Minnu, and I'm excited to share my journey in the tech world with you. Beginning with foundational languages like C, C++, Java, and Python, I've built a strong base in software development.
                        </p>
                        <p class="about-p">
                            Exploring data structures and algorithms honed my problem-solving skills. Transitioning to front-end development, I've mastered HTML, CSS, and JavaScript to craft engaging user interfaces.
                        </p>
                        <p class="about-p">
                            In backend development, I've worked with Flask, integrating databases like SQLite, MySQL, MongoDB, and PostgreSQL. Embracing Node.js and PHP, I've developed scalable web applications.
                        </p>
                        <p class="resume-options">
                            <a href="./Assets/Resume.pdf" class="btn btn-outline-light" target="_blank">View my resume</a>
                        </p>
                        <p>
                            <a href="./Assets/Resume.pdf" class="btn btn-outline-light" target="_blank">Download my resume</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
    root.appendChild(aboutSection);

    // Skills Section
    const skillsSection = document.createElement('section');
    skillsSection.className = 'skills';
    skillsSection.id = 'skills';
    skillsSection.innerHTML = `
        <div class="content">
            <div class="title text-center"><span>Skills</span></div>
            <div class="row">
                <div class="col-md-3 col-sm-6"><img src="./Assets/icons/c.svg" alt="C Icon" class="svg-icon"></div>
                <div class="col-md-3 col-sm-6"><img src="./Assets/icons/cpp.svg" alt="C++ Icon" class="svg-icon"></div>
                <div class="col-md-3 col-sm-6"><img src="./Assets/icons/java.svg" alt="Java Icon" class="svg-icon"></div>
                <div class="col-md-3 col-sm-6"><img src="./Assets/icons/python.svg" alt="Python Icon" class="svg-icon"></div>
            </div>
            <div class="row">
                <div class="col-md-3 col-sm-6"><img src="./Assets/icons/html.svg" alt="HTML Icon" class="svg-icon"></div>
                <div class="col-md-3 col-sm-6"><img src="./Assets/icons/css.svg" alt="CSS Icon" class="svg-icon"></div>
                <div class="col-md-3 col-sm-6"><img src="./Assets/icons/javascript.svg" alt="JavaScript Icon" class="svg-icon"></div>
                <div class="col-md-3 col-sm-6"><img src="./Assets/icons/jquery.svg" alt="JQuery Icon" class="svg-icon"></div>
            </div>
            <div class="row">
                <div class="col-md-3 col-sm-6"><img src="./Assets/icons/nodejs.svg" alt="NodeJS Icon" class="svg-icon"></div>
                <div class="col-md-3 col-sm-6"><img src="./Assets/icons/express.svg" alt="Express Icon" class="svg-icon"></div>
                <div class="col-md-3 col-sm-6"><img src="./Assets/icons/mongodb.svg" alt="MongoDB Icon" class="svg-icon"></div>
                <div class="col-md-3 col-sm-6"><img src="./Assets/icons/mysql.svg" alt="MySQL Icon" class="svg-icon"></div>
            </div>
        </div>
    `;
    root.appendChild(skillsSection);
// Create Projects Section
const projectsSection = document.createElement('section');
projectsSection.className = 'projects';
projectsSection.id = 'projects';
projectsSection.innerHTML = `
    <div class="content">
        <div class="title text-center"><span>Projects</span></div>
        <div class="row">
            <div class="col-md-6">
                <div class="project-card">
                    <h3>CUTM Result Portal</h3>
                    <img src="./Assets/images/portal.jpg" alt="Project 1" class="img-fluid">
                    <div class="project-info">
                        <p>Designed and developed a personal portfolio website to showcase my projects, skills, and resume.</p>
                        <a href="#" class="btn btn-primary" target="_blank">View Project</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="project-card">
                    <h4>Smart Pond Monitoring</h4>
                    <img src="./Assets/images/smart.jpg" alt="Project 2" class="img-fluid">
                    <div class="project-info">
                        <p>A web-based Simon Game built using JavaScript, HTML, and CSS for interactive user experience.</p>
                        <a href="#" class="btn btn-primary" target="_blank">View Project</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
root.appendChild(projectsSection);

    // Create Contact Section
    const contactSection = document.createElement('section');
    contactSection.className = 'contact';
    contactSection.id = 'contact';
    contactSection.innerHTML = `
        <div class="content">
            <div class="title text-center"><span>Contact Me</span></div>
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <form action="https://formspree.io/f/mgejqkra" method="POST" class="contact-form">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" name="_replyto" id="email" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea name="message" id="message" rows="5" class="form-control" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Send</button>
                    </form>
                </div>
            </div>
        </div>
    `;
    root.appendChild(contactSection);

    // Create Footer
    const footer = document.createElement('footer');
    footer.className = 'footer text-center';
    footer.innerHTML = `
        <p>&copy; 2024 Minnu. All rights reserved. Design inspired by Minnu.</p>
    `;
    root.appendChild(footer);

    // Initialize Typed.js
    new Typed('#typed-text .pre-style', {
        strings: ['Programmer', 'Full Stack Developer', 'Software Developer'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
});
