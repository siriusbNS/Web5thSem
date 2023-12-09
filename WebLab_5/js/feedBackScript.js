const form = document.getElementById("tableForm")

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const data = new FormData(form);
    for (const [name,value] of data) {
        localStorage.setItem(name,value);
    }

    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = generateTable();



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
    let tableType = localStorage.getItem('tableType') || 'goodOnes';
    let quantity= localStorage.getItem('maxLessons') || '';
   let  language  = localStorage.getItem('language') || '';
   tableContainer.innerHTML = generateTable(tableType, quantity, language);
});