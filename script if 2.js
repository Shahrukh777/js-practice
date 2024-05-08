const age= 11;
let drive = true;

if (age >= 18)
{
    console.log("You Can Drive");
}
else if (age <= 18)
{
    console.log("You Cannot Drive")
}
else{
    console.log("Age is neither 19 nor 20");
}
if (drive==true)
{
    console.log("You do drive");
}
else {
    console.log("You do not drive");
}
if (age >=18 && drive==true)
{
    console.log("No big deal")
}
else if (age >=18 && drive == false) 
{
    console.log("Dude, That's your choice")
}
else if (age <= 18 && drive==false)
{
    console.log("You are safe")
}
else{
    console.log("RUN !!!")
}