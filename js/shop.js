
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

