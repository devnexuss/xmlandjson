$(document).ready(function(){
    $.get("minsi.xml", function(data){
        $("#minsi").html("");
        $(data).find("gominsi").children().each(function(){
            var xmlDoc = $(this);
            $("#minsi").append("<h3>" +
            xmlDoc.find("name").text() + "</h3>" +
            xmlDoc.find("age").text() + "<br>" +
            xmlDoc.find("birthdate").text() + "<br>" +
            xmlDoc.find("description").text() + "<br><br>");
        });
    });
});


$(document).ready(function(){
    $.getJSON("minsi.json", function(data){
        $.each(data, function(){
            $.each(this, function(key, value){
                $("#minsi2").append(
                    "Name: " + value.name + "<br>" +
                    "Age: " + value.age + "<br>" +
                    "Birthdate: " + value.birthdate + "<br>" +
                    "Description: " + value.description + "<br><br>"
                );
            });
        });
    });
});