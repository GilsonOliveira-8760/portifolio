export function maintanancePage() {
    return `
    <div class="main-container">

        <div class="content-left">
            <div class="status-badge">
                <div class="status-dot"></div>
                Manutenção do Sistema
            </div>
            <h1>EM<br><span>MANUTENÇÃO</span></h1>
            <p class="description">
                Estamos fazendo atualizações importantes para melhorar sua experiência. 
                O voltaremos em breve com novos recursos.
            </p>

            <div class="progress-section">
                <div class="progress-label">
                    <span>Progresso da Atualização</span>
                    <span>75%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill"></div>
                </div>
            </div>
        </div>

        <div class="content-right">
            <div class="image-mockup">
                <img src="../public/assets/images/output-onlinegiftools.gif" alt="DevStruct Mobile Preview">
            </div>
        </div>
    </div>
    `
}