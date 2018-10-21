var name='Anant'
var count=0;
//var data=["Anangt","Abhishek","Sharma"];
var data=[];
myFunction=function()
{
    window.alert("Welcome "+name)
};


testApp=function()
{
    if(count===0)
        window.alert("yay!!! You Have Nothing to DO...!!!");
    else
    {
        var text="<ol>";
        data.forEach(element => {
            text+="<li>"+element+"<div align='right'><button class='w3-button' onclick='deleteWork("+data.indexOf(element)+")'>Delete</button></div></li>";
        });
        text +="</ol>";
        document.getElementById("value").innerHTML=text;
        //document.write(text);
    }

};

addWork=function(note){
    data.push(note);
    console.log(data);
    window.alert("Work Added");
    count++;
    testApp();
}

deleteWork=function(value1){
    data.splice(value1,1);
    testApp();
}