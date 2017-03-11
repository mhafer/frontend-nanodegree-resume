var bio = {
	"name": "Michelle",
	"role": "Web Developer",
	"contact": {
		"phone":"410-297-1178",
		"email":"mhaf3r@gmail.com",
		"github": "mhafer",
		"location": "Baltimore, MD"
	},
	"image": "images/me.jpg",
	"welcomeMessage": "Results-oriented software programmer, both professionally educated and self-taught. Promotes object-oriented approaches to real-time software development. Analytical and detail-oriented. Enjoys working in a collaborative and supportive team environment.",
	"skills": {
		"Languages":["Java","C#","MySQL","HTML5","CSS","JavaScript","PHP"],
		"Frameworks":["Bootstrap","JQuery"],
		"Other":["Github","Android Studios","MongoDB"]
	}
};

//["Java","C#","MySQL","HTML5","CSS","JavaScript","PHP"]



var projects = {
	"project": [
		{
			"title":"Portfolio Builder",
			"date":"February 2017",
			"description":"Developed a responsive website that displays images, descriptions, and links to each of the portfolio projects I will be completing throughout my Nanodegree program.",
			"image":"images/udacityportfolio.png",
			"link":"https://github.com/mhafer/Udacity-FrontEnd-Nanodegree/tree/master/build-a-portfolio-site"
		},
		{
			"title":"Website Work",
			"date":"December 2016",
			"description":"Created Inked Cosmetic's website building on a Bootstrap 1 page template. I personalized the website to the client's needs, adding multiple pages, contact information, and personal design preferences",
			"image":"images/inked.png",
			"link":"http://inkedcosmetic.ca/"
		},
		{
			"title":"Vanpedia",
			"date":"March 2016",
			"description":"Designed, coded, and tested a tourism app designed for Vancouver. The app allows the user to search for near-by places and activities by category. It also featured recommended spots, weather, and information about the city. One of the stand out features was the ability to 'star' and save places to your own personal list, as well as the ability to contact the place and get directions with the implementation of google maps API",
			"image":"images/vanpedia.png",
			"link":"https://github.com/dems-mobile/vanpedia"
		}
	]
};

var work = {
	"employers": [
		{
			"name":"Xccepted Technologies Inc",
			"position":"Software Developer",
			"date":"February 2016 - January 2017",
			"description":"Designed and programmed an Android app to be used in conjunction with our company's devices.  Also engineered devices to work on Arduino and raspberry Pi. Implemented innovative systems for data collection, storage, and management of customer data",
			"link":"http://xccepted.com"
		},
		{
			"name":"Energy Fitness & Yoga",
			"position":"Social Media Marketer & Administrations Manager",
			"date":"January 2015 - March 2016",
			"description":"Implemented SEO strategies, and Google analytics to increase membership enrollment. Maintained website, social media outlets, and created the monthly member emails. Helped in directing the hiring, training and performance evaluations for staff and supervised their daily activities.",
			"link":""
		}	
	]
};

var education = {
	"schools": [
		{
			"name": "Douglas College",
			"location":"New Westminster, BC",
			"date":"May 2014 - June 2016",
			"major":"Computer Science",
			"degree":"Associates",
			"url":"https://www.douglascollege.ca/"
		},
		{
			"name":"University of Victoria",
			"location":"Victoria, BC",
			"date": "September 2006 - June 2009",
			"major":"Business",	
			"degree":"3rd Year",
			"url":"http://www.uvic.ca/"
		}
	],
	"online":[
		{
			"name":"Udacity",
			"title":"Front End Web Developer",
			"date":"current",
			"url":"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"name":"Udemy",
			"title":"Introduction to Data Structures & Algorithms in Java",
			"date":"January 2016",
			"url":"https://www.udemy.com/certificate/UC-1COZPSJ5/"
		}
	]
}; 


//$("#").append(internationalizeButton);
//$("#").prepend();
//string.replace("%data%", ""); 

var formattedName = HTMLheaderName.replace("%data%", "Michelle Hafer");
var formattedRole = HTMLheaderRole.replace("%data%", "Software Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contact.phone);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.image);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#myPic").append(formattedBioPic);
$("#aboutMe").append(formattedWelcome);





// if(bio.skills.length > 0){

// 	    for(var key in bio.skills) {
// 	    	var formattedSkillsStart = HTMLskillsStart.replace("%category%",key);
//            	$("#header").append(formattedSkillsStart);
//        		for( var i = 0; i < key.length; i++ ) {
//            		var obj = key[i];
//            		var formattedSkills = HTMLskills.replace("%data%", obj);
//  				$("#skills").append(formattedSkills);        		
//        		}
//     	}
// }


for(category in bio.skills){

	var cat = category;

	if(category == "Languages"){
		var formattedSkillsStart = HTMLskillsStart.replace("%category%", category);
		$("#mySkills").append(formattedSkillsStart);
	} else if(category == "Frameworks"){
		var formattedSkillsStart = HTMLframeworksStart.replace("%category%", category);
		$("#mySkills").append(formattedSkillsStart);
	} else {
		var formattedSkillsStart = HTMLotherStart.replace("%category%", category);
		$("#mySkills").append(formattedSkillsStart);

	}
			
	for(skill in bio.skills[category]){
		if(category == "Languages"){
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[category][skill]);
			$("#skills").append(formattedSkills);
		}
		else if(category == "Frameworks"){
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[category][skill]);
			$("#frameworks").append(formattedSkills);
		} else {
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[category][skill]);
			$("#other-skills").append(formattedSkills);

		}
		
	}
	
}



for(jobs in work.employers){
	//create a new div for work experience
	$("#workExperience").append(HTMLworkStart);
	//concat employer and title
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employers[jobs].name);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.employers[jobs].position);
	var formattedEmployerTitle = formattedEmployer + " " + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.employers[jobs].date);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.employers[jobs].description);
	$(".work-entry:last").append(formattedDescription);
}

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
  logClicks(x,y);
});


projects.display = function(){

	for(p in projects.project){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[p].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDate = HTMLprojectDates.replace("%data%",projects.project[p].date);
		$(".project-entry:last").append(formattedDate);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[p].description);
		$(".project-entry:last").append(formattedDescription);

		var formattedImage = HTMLprojectImage.replace("%data%", projects.project[p].image);
		$(".project-entry:last").append(formattedImage);
	}

}

projects.display();

//$("#mapDiv").append(googleMap);


