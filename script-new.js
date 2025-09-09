let navBar = `
<nav>
    <a href="index.html" class="logo">
        <img src="img-new/main_logo.png" alt="">
        <h1>PBC Science - KVC Biology</h1>
    </a>
    <div class="nav-links" id="navLinks">
        <i class="fa fa-times" onclick="hideMenu()"></i>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="standards.html">Standards</a></li>
            <div class="dropdown">
                <button class="dropbtn">Dropdown
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="as91153.html">AS 91153</a>
                    <a href="as91154.html">AS 91154</a>
                    <a href="as91155.html">AS 91155</a>
                    <a href="as91158.html">AS 91158</a>
                    <a href="as91160.html">AS 91160</a>
                </div>
            </div>
            <li><a href="exercises.html">Exercises</a></li>
            <li><a href="resources.html">Resources</a></li>
        </ul>
    </div>
    <i class="fa fa-bars" onclick="showMenu()"></i>
</nav>`;

document.getElementById('nav').innerHTML = navBar;

let copyrightyear = `Copyright <i class="fa fa-copyright"></i> 2017-` + new Date().getFullYear() + " Hy Vo";

let footerPart = `<h4>About Us</h4>
<p>The website is non-profit, so if you can help out in any way, shape or form then please send me a message.
    <br>This resource initially was used for students for homework and revision. If a link is dead or you would like an image/file/ link removed and I will sort it as soon as I can. 
    <br>Anyone can search Google but the real skill is finding that what is relevant and work on understanding concepts, not just learning key word lists.</p>
<div class="icons">
    <a href="https://www.instagram.com/hyvogia/"><i class="fa fa-instagram"></i></a>
    <a href="https://www.linkedin.com/in/hy-vo-8a0843227/"><i class="fa fa-linkedin"></i></a>
</div>
<p>` + copyrightyear + ` <a href="home.html">Classic Version</a></p>`;


document.getElementById('footer').innerHTML = footerPart;