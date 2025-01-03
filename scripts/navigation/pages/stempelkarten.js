function stempelkarten() {
    return `
        <h2>Stempelkarten</h2>
        <p>Sammeln Sie Stempel bei jeder Bestellung und erhalten Sie exklusive Rabatte!</p>
        <p>Aktueller Stempelstand: <span id="stamp-count">0</span> von 10</p>
        <progress id="stamp-progress" value="0" max="10"></progress>
    `;
}
