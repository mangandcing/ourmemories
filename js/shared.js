// shared.js
function checkAuth(){
  if(!sessionStorage.getItem('auth')) window.location.href='index.html';
}
function getRole(){ return sessionStorage.getItem('role')||'site'; }
function logout(){ sessionStorage.clear(); window.location.href='index.html'; }

function toggleTheme(){
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark')?'dark':'light');
}
function applyTheme(){
  if(localStorage.getItem('theme')==='dark') document.body.classList.add('dark');
}

function showNotif(msg, duration=2800){
  let n=document.getElementById('globalNotif');
  if(!n){ n=document.createElement('div'); n.id='globalNotif'; n.className='notif'; document.body.appendChild(n); }
  n.textContent=msg; n.classList.add('show');
  setTimeout(()=>n.classList.remove('show'), duration);
}

function spawnPetals(container, count=20){
  const colors=['#f9bfcf','#e8a0b0','#fce4ec','#f8bbd9','#ffd6e0'];
  for(let i=0;i<count;i++){
    const p=document.createElement('div'); p.className='petal';
    const size=6+Math.random()*14;
    p.style.cssText=`left:${Math.random()*100}%;width:${size}px;height:${size}px;background:${colors[Math.floor(Math.random()*colors.length)]};animation-duration:${6+Math.random()*12}s;animation-delay:${-Math.random()*20}s;`;
    container.appendChild(p);
  }
}

function navHtml(active){
  const pages = [
    ['home.html',    'Home'],
    ['gallery.html', 'Gallery'],
    ['letters.html', 'Letters'],
    ['timeline.html','Timeline'],
    ['music.html',   'Music'],
    ['games.html',   'Fun'],
    ['wishes.html',  'Wishes'],
  ];
  const desktopLinks = pages.map(([href,label])=>
    `<a href="${href}" ${active===href.replace('.html','')?'class="active"':''}>${label}</a>`
  ).join('');
  const drawerLinks = pages.map(([href,label])=>
    `<a href="${href}" ${active===href.replace('.html','')?'class="active"':''}>${label}</a>`
  ).join('');

  return `
  <nav>
    <a href="home.html" class="nav-logo">M &amp; C</a>
    <div class="nav-links">${desktopLinks}</div>
    <div class="nav-right">
      <button class="theme-btn" onclick="toggleTheme()">Dark / Light</button>
      <button class="logout-btn" onclick="logout()">Exit</button>
    </div>
    <button class="nav-hamburger" id="navHamburger" onclick="toggleDrawer()" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="nav-drawer" id="navDrawer">
    ${drawerLinks}
    <div class="drawer-divider"></div>
    <div class="drawer-bottom">
      <button class="drawer-btn theme" onclick="toggleTheme();closeDrawer()">Dark / Light</button>
      <button class="drawer-btn exit" onclick="logout()">Exit</button>
    </div>
  </div>`;
}

function toggleDrawer(){
  const drawer = document.getElementById('navDrawer');
  const btn    = document.getElementById('navHamburger');
  const open   = drawer.classList.toggle('open');
  btn.classList.toggle('open', open);
}
function closeDrawer(){
  document.getElementById('navDrawer')?.classList.remove('open');
  document.getElementById('navHamburger')?.classList.remove('open');
}

// Close drawer when clicking outside
document.addEventListener('click', function(e){
  const drawer = document.getElementById('navDrawer');
  const btn    = document.getElementById('navHamburger');
  if(drawer && btn && !drawer.contains(e.target) && !btn.contains(e.target)){
    closeDrawer();
  }
});
