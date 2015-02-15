$(document).ready(function() {
	var bio = {
		"name":"Fabrige Gomez",
		"role":"Developper",
		"contact":{
			"mobile":"09-02-03-04-05",
			"twitter":"@fabrigee",
			"email":"fabrigee@gmail.com",
			"github":"fabrigee",
			"location":"Lille"
		},
		"skills":["Honesty","Empathie","Respect","Open-mindedness"],
		"picture":"test",
		"welcome":"welcome to my web site"
	}
  var HTMLheaderNameMod = HTMLheaderName.replace("%data%",bio.name);
  var HTMLheaderRoleMod = HTMLheaderRole.replace("%data%",bio.role);


 $("#header").prepend(HTMLheaderRoleMod);
 $("#header").prepend(HTMLheaderNameMod);
 $("#header").show();
 // var HTMLcontactGenericMod = HTMLcontactGeneric.replace("%contact%",bio.contact_info).replace("%data%",bio.contact);
 var HTMLmobileMod = HTMLmobile.replace("%data%",bio.contact.mobile);
 var HTMLemailMod= HTMLemail.replace("%data%",bio.contact.email);
 var HTMLtwitterMod= HTMLtwitter.replace("%data%",bio.contact.twitter);
 var HTMLgithubMod= HTMLgithub.replace("%data%",bio.contact.github);
 var HTMLlocationMod= HTMLlocation.replace("%data%",bio.contact.location);

 //$("#topContacts").append(HTMLcontactGenericMod);
 $("#topContacts").append(HTMLmobileMod);
 $("#topContacts").append(HTMLemailMod);
 $("#topContacts").append(HTMLtwitterMod);
 $("#topContacts").append(HTMLgithubMod);
  $("#topContacts").append(HTMLlocationMod);
$("#topContacts").show();


 var HTMLbioPicMod= HTMLbioPic.replace("%data%",bio.picture);

 var HTMLWelcomeMsgMod = HTMLWelcomeMsg.replace("%data%",bio.welcome);
 $("#topContacts").append(HTMLWelcomeMsgMod);


var work = {
	"job":"Developper",
	"employer":"Atos",
	"years":{
		"start":"2012",
		"end":""},
	"location":"Lille",
	"description":"blabla"

};

// $(".work-entry").append()
//var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployerMod= HTMLworkEmployer.replace("%data%",work.employer);
var HTMLworkTitleMod = HTMLworkTitle.replace("%data%",work["job"]);
var HTMLworkDatesMod = HTMLworkDates.replace("%data%",work.years.start+"-"+work.years.end);
var HTMLworkLocationMod = HTMLworkLocation.replace("%data%",work.job);
var HTMLworkDescriptionMod = HTMLworkDescription.replace("%data%",work.job);

 $("#workExperience").append(HTMLworkEmployerMod);
  $("#workExperience").append(HTMLworkTitleMod);
   $("#workExperience").append(HTMLworkDatesMod);
    $("#workExperience").append(HTMLworkLocationMod);

$("#workExperience").show();

var education = {
	"name":"USTL",
	"years":{
		"start":"2007",
		"end":"2010"},
	"city":"Lille",
	"degree":"Master"
};
education["city"]="Lille";


//var HTMLschoolStart = '<div class="education-entry"></div>';//
var HTMLschoolNameMod = HTMLschoolName.replace("%data%",education.name);
var HTMLschoolDegreeMod = HTMLschoolDegree.replace("%data%",education.degree);//' -- %data%</a>';
var HTMLschoolDatesMod = HTMLschoolDates.replace("%data%",education.years.start+"-"+education.years.end);'<div class="date-text">%data%</div>';
var HTMLschoolLocationMod = HTMLschoolLocation.replace("%data%",education.city);//'<div class="location-text">%data%</div>';
//var HTMLschoolMajor = HTMLworkEmployer.replace("%data%",work.employer);'<em><br>Major: %data%</em>';


 $("#education").append(HTMLschoolNameMod);
  $("#education").append(HTMLschoolDegreeMod);
   $("#education").append(HTMLschoolDatesMod);
    $("#education").append(HTMLschoolLocationMod);
     $("#education").show();



});


