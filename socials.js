// Edit social profile URLs and card copy here. Empty URLs render as inactive cards.
const socials = [
  { name: 'Instagram', description: 'The race, in pictures.', url: 'https://www.instagram.com/getraceweekend/', color: '#00cbb3', icon: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/>' },
  { name: 'Threads', description: 'Stats. Stories. Race-day conversations.', url: 'https://www.threads.com/@getraceweekend', color: '#538aee', icon: '<path d="M19.5 8C18.7 4.5 16.2 2.5 12 2.5 6 2.5 3.5 6.6 3.5 12s2.5 9.5 8.5 9.5c4.5 0 7.5-2.5 7.5-6 0-3.8-3.5-5.5-7-5.5-2.5 0-4 1.2-4 3s1.4 3 3.5 3c3 0 4-2.4 4-5.5S14.5 6 12 6c-1.5 0-2.8.6-3.5 1.5"/>' },
  { name: 'YouTube', description: 'More racing. A closer look.', url: 'https://www.youtube.com/@getraceweekend', color: '#ff8700', icon: '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none"/>' },
];

const container = document.querySelector('#social-links');
document.querySelector('.section-label > span').textContent = `01 — ${String(socials.length).padStart(2, '0')}`;
for (const social of socials) {
  const link = document.createElement(social.url ? 'a' : 'div');
  link.className = 'social-link';
  link.style.setProperty('--accent', social.color);
  if (social.url) {
    link.href = social.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `${social.name} — Race Weekend (opens in a new tab)`);
  } else {
    link.setAttribute('aria-disabled', 'true');
  }
  const icon = document.createElement('span');
  icon.className = 'social-icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${social.icon}</svg>`;
  const copy = document.createElement('span');
  copy.className = 'social-copy';
  const name = document.createElement('strong');
  name.textContent = social.name;
  copy.append(name);
  link.append(icon, copy);
  container.append(link);
}
