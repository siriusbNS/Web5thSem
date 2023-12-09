document.getElementById('tableForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const tableType = document.getElementById('tableType').value;
    const quantity = document.getElementById('quantity').value;
    const language = document.getElementById('language').value;
    localStorage.setItem('tableType', tableType);
    localStorage.setItem('quantity', quantity);
    localStorage.setItem('language', language);
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = generateTable(tableType, quantity, language);



});


function generateTable() {
    let tableType = localStorage.getItem("tableType")
    let quantity = localStorage.getItem("quantity")
    let language = localStorage.getItem('language')
    let scheduleTable = '<table>';
    for (let i = 0; i < quantity; i++) {
        scheduleTable += '<tr>';
            if(tableType === "goodOnes") {
                if (language === "english") {
                    scheduleTable += '<td>user223917249821: Good!</td>';

                } else {
                    scheduleTable += '<td>user223917249821: Отлично!</td>';
                }


            }else {
                if (language === "english") {
                    scheduleTable += '<td> hater232: Bad!</td>';

                } else {
                    scheduleTable += '<td> hater2232: Ужасно!</td>';
                }


            }

        scheduleTable += '</tr>';
    }
    scheduleTable += '</table>';

  return scheduleTable


}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tableType').value = localStorage.getItem('tableType') || 'goodOnes';
    document.getElementById('maxLessons').value = localStorage.getItem('quantity') || '';
    document.getElementById('language').value = localStorage.getItem('language') || '';
});
