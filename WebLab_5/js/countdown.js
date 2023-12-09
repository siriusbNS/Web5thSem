(function() {
    var start = Date.now()
    window.addEventListener('load', function() {
        let res = new Date()
        let count = 31 - res.getUTCDay() - 3
        document.getElementById('countDown').textContent =  count
    });
})();