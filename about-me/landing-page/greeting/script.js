let hour=new Date().getHours();
if(hour>=5 && hour<=11){
    console.log("Good Morning");
}else if(hour>=12 && hour<=17){
    console.log("Good Afternoon");
}else if(hour>=18 && hour<=21){
    console.log("Good Evening");
}else{
    console.log("Hello, night owl!");
}

for(let i=1;i<=5;i++){
    console.log("This is loop number" +i);
}