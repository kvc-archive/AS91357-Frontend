/* ========================
   'nav' Div
======================== */

var header = `
<h1>PBC Science</h1>
<ul>
    <li><a href="home.htm">Home</a></li>
    <li><A href="achievement_units.htm">AS Units</A></li>
    <li><A href="games.htm">Games</A></li>
    <li><a href="youtube.htm">Youtube</a></li>
    <li><A href="about.htm">About</A></li>
</ul>`;
document.getElementById('nav').innerHTML = header;

/* ========================
   'text' Div
======================== */

const as91153 = document.getElementById('2.1');
const as91154 = document.getElementById('2.2');
const as91156 = document.getElementById('2.3');
const as91158 = document.getElementById('2.6');
const as91160 = document.getElementById('2.8');

// Null check
if (as91153 && as91154 && as91156 && as91158 && as91160) {
    as91154.classList.add('hidden');
    as91156.classList.add('hidden');
    as91158.classList.add('hidden');
    as91160.classList.add('hidden');

    document.getElementById('as91153').addEventListener('click', function(event) {
        as91153.classList.remove('hidden');
        as91154.classList.add('hidden');
        as91156.classList.add('hidden');
        as91158.classList.add('hidden');
        as91160.classList.add('hidden');
    });

    document.getElementById("as91154").addEventListener('click', function(){
        as91153.classList.add('hidden');
        as91154.classList.remove('hidden');
        as91156.classList.add('hidden');
        as91158.classList.add('hidden');
        as91160.classList.add('hidden');
    });

    document.getElementById("as91155").addEventListener('click', function(){
        as91153.classList.add('hidden');
        as91154.classList.add('hidden');
        as91156.classList.remove('hidden');
        as91158.classList.add('hidden');
        as91160.classList.add('hidden');
    });

    document.getElementById("as91158").addEventListener('click', function(){
        as91153.classList.add('hidden');
        as91154.classList.add('hidden');
        as91156.classList.add('hidden');
        as91158.classList.remove('hidden');
        as91160.classList.add('hidden');
    });

    document.getElementById("as91160").addEventListener('click', function(){
        as91153.classList.add('hidden');
        as91154.classList.add('hidden');
        as91156.classList.add('hidden');
        as91158.classList.add('hidden');
        as91160.classList.remove('hidden');
    });
}

/* ========================
   'footer' Div
======================== */

var copyrightyear = "&copy Hy 2017 - " + new Date().getFullYear();
document.getElementById('footer').innerHTML = copyrightyear;