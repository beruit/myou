$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        var playlistId = $("#playlistId").val();
        $('#results').empty();
        var result="";
        var api_key ="AIzaSyDEzj8GMUfIBfQk-4nwTihV27HX9JCwaGk";
        var url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key="+api_key+"&playlistId="+playlistId+"&maxResults=50";
        $.get(url,function(data){
            console.log(data);

            for(var i=0;i<data.items.length;i++){
                result = `
                <div class="col-md-4">
                <img src="${data.items[i].snippet.thumbnails.medium.url}">

                <h4>${data.items[i].snippet.resourceId.videoId}</h5>
                <a href="https://www.youtube.com/watch?v=${data.items[i].snippet.resourceId.videoId}" target="_blank">
                 <h4>${data.items[i].snippet.title}</h5>
                 </a>
                
                 <p>${data.items[i].snippet.channelTitle}</p>
                </div>
                `;
                $("#results").append(result);
            }
        })
    })
})