function generate() {
  const idea = document.getElementById("idea").value;

  if (!idea) {
    alert("Enter an idea first");
    return;
  }

  const result = `
    <h2>${idea} Labs</h2>
    <p>We help people build ${idea} faster using automation.</p>

    <h3>Features</h3>
    <ul>
      <li>User Dashboard</li>
      <li>AI Automation</li>
      <li>Fast Performance</li>
      <li>Cloud Ready</li>
    </ul>

    <p><b>Monetization:</b> Freemium + Pro Plan</p>
  `;

  document.getElementById("result").innerHTML = result;
}
