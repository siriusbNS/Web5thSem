(function() {
    var start = Date.now()
    window.addEventListener('load', function() {
        let res = new Date()
        document.getElementById('countDown').textContent =  31 - res.getDay() + 4
    });
})();