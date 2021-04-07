
//Parse the data from the data-weather.js file.
let dataFromJsonWeather = JSON.parse(jsonDataWeather)

//Empty variable
let dataitem = " "

/** Description: 1. dataitem variable is declared to store the required table.
 *               2. A table tag is made using the dataitem variable.
 *               3. A table row is made under the table in order to store and print table headings.
 *               4. A for loop is declared to iterate through the JSON data and print the data below their associated headings.
 *               5. The data printed using for loop is stored in the dataitem variable.
 */
dataitem += "<table id = 'tableToBeAdded'>"

    dataitem += "<tr>"
    dataitem += "<th>"+"CityID"+"</th>"
    dataitem += "<th>"+"CityName"+"</th>"
    dataitem += "<th>"+"MainWeather"+"</th>"
    dataitem += "<th>"+"Temp"+"</th>"
    dataitem += "<th>"+"TempUnit"+"</th>"
    dataitem += "<th>"+"FeelsLike"+"</th>"
    dataitem += "<th>"+"RainPossibilityPercentage"+"</th>"
    dataitem += "</tr>"

    for (var i = 0; i < dataFromJsonWeather.length; i++) {
        dataitem += "<tr>"
        dataitem += "<td>" +  dataFromJsonWeather[i].CityID + "</td>"
        dataitem += "<td>" +  dataFromJsonWeather[i].CityName + "</td>"
        dataitem += "<td>" +  dataFromJsonWeather[i].MainWeather + "</td>" 
        dataitem += "<td>" +  dataFromJsonWeather[i].Temp + "</td>"
        dataitem += "<td>" +  dataFromJsonWeather[i].TempUnit + "</td>"  
        dataitem += "<td>" +  dataFromJsonWeather[i].FeelsLike + "</td>" 
        dataitem += "<td>" +  dataFromJsonWeather[i].RainPossibilityPercentage + "</td>" 
        dataitem += "</tr>"  
    }

dataitem += "</table>"

//Prints the table in the division tag with id "data-in-table-form".
document.getElementById("data-in-table-form").innerHTML += dataitem

/** 
 * Line of reference: Line 53 
 * Description: Learned about how a search in a html file works that is how javascript function is used in order to search a particular word. 
 * Date Learned: 07 December 2020
 * URL: https://www.w3schools.com/howto/howto_js_filter_lists.asp
*/

/** 
 * Description about the search() function: These function helps to search a particular word in the table entered by the user as a search input in the input box. For    example: if the user enters "Het" or "Hetset" then this function sorts out the table and display the required row. A "FOR" loop is used for sorting and searching the data from table. 
*/
function search(){
    var name = document.getElementById("cityName").value.toLowerCase()
    var table = document.getElementById("tableToBeAdded")
    var rows = table.getElementsByTagName("tr")
    
    for(var i = 0; i < rows.length ;i++){
        var row_i = rows[i].getElementsByTagName("td")[1]
            if(row_i != undefined){
                var expected = row_i.innerText.toLowerCase();
                var comp = expected.indexOf(name)
                if(comp > -1){
                rows[i].style.display = " "
                }
                else{
                    rows[i].style.display = "none" 
                }
            }
    }
}

/** 
 * Provides an eventlistener to the "Search" button that is when the search button is clicked then the search function is executed and the data is displayed in the division.
*/
document.getElementById("filter-search-button").addEventListener("click", search)


