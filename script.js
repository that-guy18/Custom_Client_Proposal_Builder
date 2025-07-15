const form = document.getElementById('proposal-form');
const contentDiv = document.getElementById('proposal-content');
const downloadBtn = document.getElementById('download-btn');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const clientName = document.getElementById('client-name').value;
  const clientCompany = document.getElementById('client-company').value;
  const services = document.getElementById('services').value;
  const pricing = document.getElementById('pricing').value;
  const terms = document.getElementById('terms').value;

  const html = `
    <div class="proposal">
      <h2>Proposal for ${clientName}</h2>
      <p><strong>Company:</strong> ${clientCompany}</p>
      <h3>Services</h3>
      <p>${services.replace(/\n/g, '<br>')}</p>
      <h3>Pricing</h3>
      <p>${pricing.replace(/\n/g, '<br>')}</p>
      <h3>Terms & Conditions</h3>
      <p>${terms.replace(/\n/g, '<br>')}</p>
    </div>
  `;

  contentDiv.innerHTML = html;
});

downloadBtn.addEventListener('click', () => {
  const element = document.getElementById('proposal-content');
  const opt = {
    margin:       0.5,
    filename:     'client-proposal.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().from(element).set(opt).save();
});
