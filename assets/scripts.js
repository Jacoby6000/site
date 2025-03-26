window.onload = function() {
    initClock();
    initHeaderHovers('.blue h2 a, .dark h2 a', 'var(--light-text)', 'gray');
    initHeaderHovers('.light h2 a', 'var(--text-color)', 'gray');
};

function initHeaderHovers(selector, mouseoutColor, mouseoverColor) {
    function setMouseoverColor(link, span, color) {
        link.parentNode.style.color = color;
        link.style.color = color;
        link.style.textDecoration = 'underline';
        link.style.textDecorationThickness = '2px';
        span.style.color = color;
    }
    
    function setMouseoutColor(link, span, color) {
        link.parentNode.style.color = color;
        link.style.color = color;
        link.style.textDecoration = 'none';
    
        span.style.color = 'rgba(0,0,0,0)';
    }

    var links = document.querySelectorAll(selector);
    links.forEach(link => {
        var span = link.querySelector('span');

        if(span) {
            console.log('Setting up mouseover behavior for ' + link.textContent);
            
            setMouseoutColor(link, span, mouseoutColor);
            link.onmouseover = function() { setMouseoverColor(link, span, mouseoverColor); };
            link.onmouseout = function() { setMouseoutColor(link, span, mouseoutColor); };
        } else {
            console.warn("No span found for " + link.textContent);
        }
    });
}




function initClock() {
    function setTime(divId) {
        var now = new Date();
        var time = now.toLocaleString();
        document.getElementById(divId).innerHTML = time;
    }

    setInterval(() => setTime('floating-clock'), 1000);
}
