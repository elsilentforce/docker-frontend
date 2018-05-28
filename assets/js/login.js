$("#button").click(function(){
    $.post("http://localhost:3000/api/v1/login",
    {
        email: $("#email").val(),
        password: $("#email").val()
    },
    function(data, status){
        alert("Message: " + data["message"] + "\nStatus: " + status);
    });
});
