// Temporarily stores JSON data
var data = {};

$('#fileinput').change(function(){
    var props=$('#fileinput').prop('files');

    if(props) {
        for (file of props) {
            read(file);
        }
    }
})

$( "#toggle-how-to" ).click(function() {
    $("#how-to").toggleClass("hidden");
});

$( "#toggle-faq").click(function() {
    $("#faq").toggleClass("hidden");
});

function read(file) {
    // Read in file data
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e) {
        // Store JSON data to correct key value
        if (file.name === "following.json") {
            data.followingJson = JSON.parse(e.target.result)
            document.getElementById("status-notif").innerHTML = "Successfully uploaded <strong>Following.json</strong>";
        } else if(file.name === "followers.json") {
            data.followersJson = JSON.parse(e.target.result)
            document.getElementById("status-notif").innerHTML = "Successfully uploaded <strong>Followers.json</strong>";
        } else {
            document.getElementById("status-notif").innerHTML = "Invalid file - Followers.json and Following.json only.";
        }

        if ((data.followersJson) && (data.followingJson)){
            document.getElementById("status-notif").innerHTML = "Successfully uploaded <strong>Followers.json</strong> and <strong>Following.json</strong>";
            document.getElementById("process-btn").style.cursor = "";
            document.getElementById("process-btn").style.backgroundColor = "#2DBE60";
            document.getElementById("process-btn").classList = "process";
        }
    };
}

async function process() {
    // Empty all results
    $("#result").empty();

    var followersData = []
    var followingData = []

    // Check if data is present
    if ((data.followersJson) && (data.followingJson)){
        document.getElementById("process").classList = "w-6 h-6 mr-2.5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600";

        var followersArray = data.followersJson.relationships_followers

        // Extract followers' username
        document.getElementById("status-notif").innerHTML = "Extracting followers";
        document.getElementById("bar").style.width = Math.floor(Math.random() * (45 - 40 + 1) + 40) + "%";
        for (var i = 0; i < followersArray.length; i++) {
            followersData.push(followersArray[i].string_list_data[0].value)
        }
        await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * (2500 - 1000 + 1) + 1000)));

        // Extract following's username
        document.getElementById("status-notif").innerHTML = "Extracting followings";
        document.getElementById("bar").style.width = Math.floor(Math.random() * (75 - 60 + 1) + 60) + "%";
        var followingArray = data.followingJson.relationships_following
        for (var i = 0; i < followingArray.length; i++) {
            followingData.push(followingArray[i].string_list_data[0].value)
        } 
        await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * (2500 - 1000 + 1) + 1000)));

        // Output difference
        document.getElementById("status-notif").innerHTML = "Finalizing results";
        document.getElementById("bar").style.width = Math.floor(Math.random() * (95 - 85 + 1) + 85) + "%";
        let difference = followingData.filter(x => !followersData.includes(x));
        await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * (2500 - 1000 + 1) + 1000)));
        document.getElementById("process").classList = "w-6 h-6 mr-2.5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 hidden";

        document.getElementById("bar").style.width = "100%"
        document.getElementById("status-notif").innerHTML = "Done - Results are below";

        console.log(difference)
        var result = document.getElementById("result")
        for (let item = 0; item < difference.length; item++){
            let container = document.createElement("a");
            container.href = "https://instagram.com/" + difference[item];
            container.classList = "w-auto rounded-full h-12 basis-0 item";
            container.style = "background-color: #F36A3E; flex: 1 1 18%";
            container.target = "_blank";

            let value = document.createElement("div");
            value.classList = "py-3";
            value.style = "width: auto";
            value.innerHTML = difference[item];

            container.appendChild(value);

            result.appendChild(container);
        }
    }
}