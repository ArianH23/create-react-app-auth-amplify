var baseUrl = "https://4xthlyydt2.execute-api.eu-west-1.amazonaws.com/production/ranking?";

//get the current status of votting
function get() {
    
    var kids = document.querySelector('input[type=radio][name=kids]:checked').value;
    var age = document.querySelector('input[type=radio][name=age]:checked').value;

    url = baseUrl + 'age=' + age + '&kids=' + kids;

    console.log(url)

    $.ajax({
    url: url,
    type: 'get',
    async: false,
    success: function( data, textStatus, jQxhr ){
        var neighbourhoods = [];

        for (var i=0; i < data.body.length; i++) {
            var neigh = [data.body[i].name, data.body[i].score, data.body[i].rank];
            neighbourhoods.push(neigh);
        }
        
        document.getElementById('neighbourhoodList').innerHTML = '';
        
        document.getElementById('neighbourhoodList').innerHTML +=         
        "<table  id=tab>"+
        "<tr style='text-align:center'>"+
            "<th style='text-align:center'>Rank</th>"+
            "<th style='text-align:center'>Name</th>"+ 
            "<th style='text-align:center'>Score</th>"+
        "</tr>";
        
                    
        for (var i=0; i < neighbourhoods.length; i++) {
            // Keep the row color
            if (i%2==1){
                document.getElementById('tab').innerHTML +=
                    '<tr>'+
                        '<td style="text-align:center">'+neighbourhoods[i][2]+'</td>'+
                        "<td style='text-align:center'>"+neighbourhoods[i][0]+"</td>"+
                        "<td style='text-align:center'>"+neighbourhoods[i][1]+"</td>"+
                    '</tr>'
            }
            
            // Use another color for even rows
            else{
                var col = "#091d43"
                document.getElementById('tab').innerHTML +=
                    '<tr>'+
                        '<td style="text-align:center" ; bgcolor='+col+'>'+neighbourhoods[i][2]+'</td>'+
                        "<td style='text-align:center' ; bgcolor="+col+'>'+neighbourhoods[i][0]+"</td>"+
                        "<td style='text-align:center' ; bgcolor="+col+'>'+neighbourhoods[i][1]+"</td>"+
                    '</tr>'
            }
        }

    document.getElementById('tab').innerHTML += '</table>';
    },

    error: function( jqXhr, textStatus, errorThrown ){
        console.log( errorThrown );
    }
    });

}


// Will need to get updated inthe future
function update(clicked_id) {
    $.ajax({
    url: url,
    type: 'get',
    async: false,
    success: function( data, textStatus, jQxhr ){
        document.getElementById(text).value=data.body.Count;
    },
    error: function( jqXhr, textStatus, errorThrown ){
        console.log( errorThrown );
    }
    });
}
			
			


