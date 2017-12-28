window.onload = function() {
    const siteEle = document.getElementById('Site');
    init();
    function init() {
        setTimeout(()=> {
            siteEle.classList.add('init');
        }, 200);
    }
}