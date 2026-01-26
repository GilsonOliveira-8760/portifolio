export function Home() {
    return `
    <section id="home" class="home">
        <div class="shape-circle shape-1"></div>
        <div class="shape-circle shape-2"></div>

        <div class="home-content">
            <span class="hero-tag">Profissional Técnico Júnior · Multidisciplinar</span>
            <h1>Desenvolvendo Técnicas E <br><span>Soluções</span> Com <br>Fundamentos Sólidos</h1>
            <p>Portfólio multidisciplinar com projetos em programação, engenharia e ciências, focado em lógica, fundamentos e desenvolvimento profissional contínuo.</p>
            <div class="home-buttons">
                <button class="btn-primary">Ver Projetos</button>
                <button class="btn-outline">Sobre Mim</button>
            </div>
        </div>
        
    </section>
    <section id="projects" class="projects">
        <div class="section-header">
            <div class="section-title">
                <h2>Projetos em destaque</h2>
                <p>Uma seleção dos meus trabalhos recentes.</p>
            </div>
            <div class="view-all">
                <a href="#">View All Projects</a><i class="ri-arrow-right-line"></i>
            </div>
        </div>
        <div class="projects-grid">
            <!-- project card 1 -->
            <div class="project-card">
                <div class="card-image">
                    <div class="card-overlay"></div>
                    <i class="ri-dashboard-3-line card-icon"></i>
                </div>
                <div class="card-content">
                    <div class="card-tags">
                        <span class="tag">Fintech</span>
                        <span class="tag">React</span>
                        <span class="tag">D3.js</span>
                    </div>
                    <h3 class="card-title">Nexus Financial Dashboard</h3>
                    <p class="card-desc">A comprehensive real-time data visualization platform for financial markets, featuring complex charting and low-latency updates.</p>
                    <a href="#" class="card-link">View Case Study <i class="ri-arrow-right-line"></i></a>
                </div>
            </div>
            <!-- project card 2 -->
             <div class="project-card">
                <div class="card-image">
                    <div class="card-overlay"></div>
                    <i class="ri-dashboard-3-line card-icon"></i>
                </div>
                <div class="card-content">
                    <div class="card-tags">
                        <span class="tag">Science</span>
                        <span class="tag">Python</span>
                        <span class="tag">AI</span>
                    </div>
                    <h3 class="card-title">Molecule AI Analyzer</h3>
                    <p class="card-desc">Machine learning powered tool for predicting chemical compound properties, bridging the gap between chemistry and code.</p>
                    <a href="#" class="card-link">View Case Study <i class="ri-arrow-right-line"></i></a>
                </div>
            </div>
            <!-- project card 3 -->
             <div class="project-card">
                <div class="card-image">
                    <div class="card-overlay"></div>
                    <i class="ri-dashboard-3-line card-icon"></i>
                </div>
                <div class="card-content">
                    <div class="card-tags">
                        <span class="tag">IoT</span>
                        <span class="tag">Hardware</span>
                        <span class="tag">App</span>
                    </div>
                    <h3 class="card-title">Smart Home Core</h3>
                    <p class="card-desc">An integrated system for managing home automation devices with a focus on security and energy efficiency algorithms.</p>
                    <a href="#" class="card-link">View Case Study <i class="ri-arrow-right-line"></i></a>
                </div>
            </div>
        </div>
    </section>
    <section id="about" class="about">
        <div class="about-text">
            <h2 class="about-heading">Mentalidade de engenharia,<br>Construída sobre fundamentos sólidos.</h2>
            <p class="about-desc">
                Atualmente curso Engenharia Química pela UFSJ – Campus Alto Paraopeba, formação que vem moldando meu raciocínio analítico, minha abordagem estruturada de problemas e minha atenção aos fundamentos. Ao longo da graduação, desenvolvi forte interesse por programação, engenharia e ciências aplicadas, buscando integrar diferentes áreas técnicas de forma consistente.          
            </p>
            <p class="about-desc">
                Este portfólio apresenta projetos de estudo, experimentos e aprendizados práticos que refletem minha evolução técnica e meu início de trajetória profissional. O foco está em construir uma base sólida, aprender continuamente e aplicar conceitos de forma consciente e bem fundamentada.
            </p>
        </div>
        <div class="about-img">
            <img src="Frontend/public/assets/images/Me.png" alt="Ilustração de Gilson Oliveira em estilo semi realista gerado por IA">
        </div>
    </section>
    <section id="contact" class="contact">
        <div class="contact-container">
            <div class="contact-info">
                <h2>Vamos construir algo<br> incrível juntos.</h2>
                <p>Tem algum projeto em mente ou só quer bater um papo sobre tecnologia? Fique à vontade para entrar em contato. No momento, estou disponível para trabalhos.</p>
                
                <div class="contact-methods">
                    <div class="method">
                        <div class="method-icon"><div class="ri-mail-send-line"></div></div>
                        <div class="method-text">
                            <h4>Meu email</h4>
                            <a href="mailto:gilson.oliveira8760@gmail.com"><span>gilson.oliveira8760@gmail.com</span></a>
                        </div>
                    </div>
                    <div class="method">
                        <div class="method-icon"><div class="ri-map-pin-line"></div></div>
                        <div class="method-text">
                            <h4>Localização</h4>
                            <span>Ouro Branco, MG - BR</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <form class="contact-form">
                <div class="form-group">
                    <label>Nome</label>
                    <input type="text" class="form-input" placeholder="Seu nome">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-input" placeholder="seu@email.com">
                </div>
                <div class="form-group">
                    <label>Mensagem</label>
                    <textarea class="form-input" placeholder="Fale-me sobre o seu projeto..."></textarea>
                </div>
                <button type="button" class="submit-btn">Enviar</button>
            </form> -->
        </div>
    </section>
    `
}