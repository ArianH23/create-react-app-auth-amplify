const url = "https://4xthlyydt2.execute-api.eu-west-1.amazonaws.com/production/ranking";

//get the current status of votting
function get() {

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
                "<ul id='neighbourhood-rank'>Rank</ul>"+
				"<ul id='neighbourhood-name'>Name</ul>"+
                "<ul id='neighbourhood-scores'>Score</ul>";
				
        for (var i=0; i < data.body.length; i++) {
            document.getElementById('neighbourhood-scores').innerHTML += '<li>' + neighbourhoods[i][1] +'</li>';
            document.getElementById('neighbourhood-name').innerHTML += '<li>' + neighbourhoods[i][0] + '</li>';
            document.getElementById('neighbourhood-rank').innerHTML += '<li>' + neighbourhoods[i][2] + '</li>';
        }
        

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
			
			


