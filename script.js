$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        var videoId = $("#videoId").val();
        $('#results').empty();
        var result="";
        var api_key ="AIzaSyDEzj8GMUfIBfQk-4nwTihV27HX9JCwaGk";
        var url = "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&key="+api_key+"&videoId="+videoId+"&maxResults=10";
        $.get(url,function(data){
            console.log(data);

            for(var i=0;i<data.items.length;i++){
                result = `
                <div class="col-md-4">
                <img class="rounded-circle"
                 src="${data.items[i].snippet.topLevelComment.snippet.authorProfileImageUrl}">
                 <a href="${data.items[i].snippet.topLevelComment.snippet.authorChannelUrl}" target="_blank">
                 <h4>${data.items[i].snippet.topLevelComment.snippet.authorDisplayName}</h5>
                 </a>
                 <p>${data.items[i].snippet.topLevelComment.snippet.textDisplay}</p>
                </div>
                <br>
                `;
                $("#results").append(result);
            }
        })
    })
})