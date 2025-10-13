const isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  document.body.innerHTML = `
    <div style="text-align:center; padding:40px; font-family:sans-serif;">
      <h2>This game is best played on a computer 💻</h2>
      <p>Please open this link on a desktop for the full experience.</p>
      <button onclick="copyLink()">Copy Link</button>
      <p id="copied" style="color:lightgreen; margin-top:10px;"></p>
    </div>
  `;
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href);
  document.getElementById('copied').textContent = 'Link copied!';
}