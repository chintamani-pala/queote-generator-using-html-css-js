let categorySelected=""
let category=document.getElementById("category");
category.addEventListener("input",()=>{
    categorySelected=category.value
    fetchQueote()
})
var categoryval = 'happiness'
function fetchQueote(){
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + (categorySelected===""?categoryval:categorySelected),
        headers: { 'X-Api-Key': 'N4JYQskC9JQ1L6lSZ7AtpA==wMqqQBaO6F0s6UqY'},
        contentType: 'application/json',
        success: function(result) {
            let questions=document.getElementById('questions')
            questions.innerHTML=result[0]['quote']
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}
let nextQueote=document.getElementById("nextQueote")
nextQueote.addEventListener("click",fetchQueote)
fetchQueote()
