// Handlebars Partial 
Handlebars.registerPartial("tagline", "The Largest Repository");

//Custom Block Helper
Handlebars.registerHelper("saleStatus", function(Price){
if(Price>"$6.00"){
  return("On Sale!");
}else{
  return("");
}
});

//navBar
var source= document.getElementById('navTemplate').innerHTML;
var template= Handlebars.compile(source);
var data={
  navBrand: "SpaceBooks",
  About: "Our Team",
  Products: "Ebooks",
  Contact: "Email",
};
var output= template(data);
document.getElementById('navRender').innerHTML= output;

// Categories
var source= document.getElementById("categoriesTemplate").innerHTML;
var template= Handlebars.compile(source);
var data={
 Product: "Ebooks",
 menu:[
  {link:"#", Category: "Handlebars"},
   {link:"#", Category: "Neuroscience"},
    {link:"#", Category: "Fiction"}

 ]
};
var output= template(data);
document.getElementById("categoriesRender").innerHTML=output;

// Items
var source= document.getElementById("itemTemplate").innerHTML;
var template= Handlebars.compile(source);
var data={
   product:[
     {Price:"$4.99", Caption:"Handlebars", Description:"Lorem ipsum dolor sit amet, ea est dolor evertitur", Stock:"In Stock"},
     {Price:"$5.99", Caption:"Neurons", Description:"Lorem ipsum dolor sit amet, ea est dolor evertitur"},
     {Price:"$6.99", Caption:"Synapses", Description:"Lorem ipsum dolor sit amet, ea est dolor evertitur"},
     {Price:"$7.99", Caption:"BFG", Description:"Lorem ipsum dolor sit amet, ea est dolor evertitur"},
     {Price:"$8.99", Caption:"Narnia", Description:"Lorem ipsum dolor sit amet, ea est dolor evertitur", Stock:"In Stock"}
   ]
};
var output= template(data);
document.getElementById("itemRender").innerHTML= output;

