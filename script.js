// Shared client script for JD Communication Services (home + services small logic)
const SERVICES = [
  { id: "community", title: "Community Certificate", desc: "Issuance of community/caste certificate for official use." },
  { id: "income", title: "Income Certificate", desc: "Proof of household income for subsidies and benefits." },
  { id: "nativity", title: "Nativity Certificate", desc: "Official nativity/birth certificate." },
  { id: "pan", title: "PAN Card", desc: "Help with PAN card application and corrections." },
  { id: "voter", title: "Voter ID", desc: "Apply or update your voter ID." },
  { id: "obc", title: "OBC Certificate", desc: "Obtain OBC certificate for reservation and benefits." },
  { id: "pstm", title: "PSTM Certificate", desc: "PSTM certificate assistance and follow-up." }
];

document.addEventListener('DOMContentLoaded', ()=>{
  const grid = document.getElementById('service-grid');
  const homeGrid = document.getElementById('home-services');
  SERVICES.forEach(s=>{
    const card = document.createElement('div'); card.className='card service-card';
    card.innerHTML = `<h3>${s.title}</h3><p>${s.desc}</p><div style="margin-top:10px" class="service-actions"><a class="btn primary" href="request.html?service=${s.id}">Apply Now</a><a class="btn ghost" href="services.html">More</a></div>`;
    if(grid) grid.appendChild(card);
    if(homeGrid) homeGrid.appendChild(card.cloneNode(true));
  });

  const themeToggle = document.getElementById('theme-toggle');
  if(themeToggle){
    themeToggle.addEventListener('click', ()=>{
      document.body.classList.toggle('dark');
      themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });
  }
});