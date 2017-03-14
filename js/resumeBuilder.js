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

var work = {
	"employers": [
		{
			"name":"Xccepted Technologies Inc",
			"position":"Software Developer",
			"date":"February 2016 - January 2017",
			"location":"Vancouver",
			"description":"Designed and programmed an Android app to be used in conjunction with our company's devices.  Also engineered devices to work on Arduino and raspberry Pi. Implemented innovative systems for data collection, storage, and management of customer data",
			"link":"http://xccepted.com"
		},
		{
			"name":"Energy Fitness & Yoga",
			"position":"Social Media Marketer & Administrations Manager",
			"location":"Vancouver",
			"date":"January 2015 - March 2016",
			"description":"Implemented SEO strategies, and Google analytics to increase membership enrollment. Maintained website, social media outlets, and created the monthly member emails. Helped in directing the hiring, training and performance evaluations for staff and supervised their daily activities.",
			"link":""
		}	
	]
};


var projects = {
	"project": [
		{
			"title":"Vanpedia",
			"date":"March 2016",
			"description":"Designed, coded, and tested a tourism app designed for Vancouver. The app allows the user to search for near-by places and activities by category. It also featured recommended spots, weather, and information about the city. One of the stand out features was the ability to 'star' and save places to your own personal list, as well as the ability to contact the place and get directions with the implementation of google maps API",
			"image":["images/vanpedia.png"],
			"link":["https://github.com/dems-mobile/vanpedia"]
		},
		{
			"title":"Website Work",
			"date":"December 2016",
			"description":"Created Inked Cosmetic's website building on a Bootstrap 1 page template. I personalized the website to the client's needs, adding multiple pages, contact information, and personal design preferences",
			"image":["images/xcceptedwebsite.png","images/inkedwebsite.png","images/weddingwebsite.png"],
			"link":["http://xccepted.com/","http://inkedcosmetic.ca/","http://thehaferfamily.com"],
		},		
		{
			"title":"Portfolio Builder",
			"date":"February 2017",
			"description":"Developed a responsive website that displays images, descriptions, and links to each of the portfolio projects I will be completing throughout my Nanodegree program.",
			"image":["images/personalwebsite.png"],
			"link":["https://github.com/mhafer/Udacity-FrontEnd-Nanodegree/tree/master/build-a-portfolio-site"]
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

bio.display = function(){

	var formattedName = HTMLheaderName.replace("%data%", "Michelle Hafer");
	var formattedRole = HTMLheaderRole.replace("%data%", "Software Developer");
	var formattedMobile = HTMLmobile.replace("%data%", bio.contact.phone);
	var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.image);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);	
	$("#myPic").append(formattedBioPic);
	$("#aboutMe").append(formattedWelcome);

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
}


work.display = function(){

	for(jobs in work.employers){
	
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employers[jobs].name);
		var formattedEmployerLink = formattedEmployer.replace("#", work.employers[jobs].link);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.employers[jobs].position);
		var formattedEmployerTitle = formattedEmployerLink + " " + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.employers[jobs].date);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.employers[jobs].description);
		$(".work-entry:last").append(formattedDescription);
	}	

}


projects.display = function(){
	
$("#projects").append(HTMLprojectStart);
	
	for(p in projects.project){

		var img = projects.project[p].image;
		var links = projects.project[p].link;
		$(".project-entry:last").prepend(HTMLProjectImagePlaceholder);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[p].description);
		$(".project-entry:last").prepend(formattedDescription);
		var formattedDate = HTMLprojectDates.replace("%data%",projects.project[p].date);
		$(".project-entry:last").prepend(formattedDate);
		var formattedTitleLink = HTMLprojectTitle.replace("#", projects.project[p].link[0]);
		var formattedTitle = formattedTitleLink.replace("%data%", projects.project[p].title);
		$(".project-entry:last").prepend(formattedTitle);

		if(img.length == 1){
			var formattedImage = HTMLprojectImage.replace("%data%", img[0]);
			var formattedLink = formattedImage.replace("#", links[0]);
			$("#img1").append(formattedLink);		

		}else{
			for(var i = 0; i < img.length; i++){
				var id = "#img" + i;
				var formattedImage = HTMLprojectImage.replace("%data%", img[i]);
				var formattedLink = formattedImage.replace("#", links[i]);
				$(id).append(formattedLink);
			}
		}		
	}
}

education.display = function(){

	$("#education").append(HTMLschoolStart);

		for(e in education.schools){

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[e].name);
			var formattedSchoolLink = formattedSchoolName.replace("#", education.schools[e].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[e].degree);
			var formattedSchoolTitle = formattedSchoolLink + formattedSchoolDegree;
			$(".education-entry").append(formattedSchoolTitle);	
			var formattedSchoolDate = HTMLschoolDate.replace("%data%", education.schools[e].date);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[e].location);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[e].major);		
			$(".education-entry").append(formattedSchoolDate);
			$(".education-entry").append(formattedLocation);
			$(".education-entry").append(formattedMajor);

		}

	$(".education-entry").append(HTMLonlineClasses);	

		for(o in education.online){

			var formattedSchoolName = HTMLonlineSchool.replace("%data%", education.online[o].name);
			var formattedSchoolLink = HTMLonlineTitle.replace("#", education.online[o].url);
			var formattedSchoolCourse = formattedSchoolLink.replace("%data%", education.online[o].title);
			var formattedSchoolTitle = formattedSchoolCourse + formattedSchoolName;
			var formattedSchoolDate = HTMLonlineDates.replace("%data%", education.online[o].date);
			$(".education-entry").append(formattedSchoolTitle);
			$(".education-entry").append(formattedSchoolDate);

		}

}

var footer = {
	"contacts": [
		{
			"name": "Michelle's LinkedIn",
			"link": "https://www.linkedin.com/in/michellesalema",
			"code": "linkedin"
		},
		{
			"name": "mhaf3r@gmail.com",
			"link": "mailto:missmichellesalema@gmail.com",
			"code": "envelope"
		},
		{
			"name": "Michelle's Git Hub",
			"link": "https://github.com/mhafer",
			"code": "github"
		}
	]
}


function setUpFooter(){

	var formattedLinkedInLink = HTMLfooterLinkedIn.replace("#", footer.contacts[0].link);
	var formattedLinkedInCode = formattedLinkedInLink.replace("%class%", footer.contacts[0].code);
	var formattedLinkedIn = formattedLinkedInCode.replace("%title%", footer.contacts[0].name);
	$("#footerContacts").append(formattedLinkedIn);

	var formattedEmailLink = HTMLfooterEmail.replace("#", footer.contacts[1].link);
	var formattedEmailCode = formattedEmailLink.replace("%class%", footer.contacts[1].code);
	var formattedEmail = formattedEmailCode.replace("%title%", footer.contacts[1].name);
	$("#footerContacts").append(formattedEmail);

	var formattedGitLink = HTMLfooterGitHub.replace("#", footer.contacts[2].link);
	var formattedGitCode = formattedGitLink.replace("%class%", footer.contacts[2].code);
	var formattedGit = formattedGitCode.replace("%title%", footer.contacts[2].name);
	$("#footerContacts").append(formattedGit);

	var formattedCRlink = HTMLCopyWriteText.replace("#","http://www.michellesalema.com");
	var formattedCRtitle = formattedCRlink.replace("%title%","Michelle's Previous Website");
	var formattedCRtext = formattedCRtitle.replace("%data%","Michelle Hafer");
	$('.copyright').append(formattedCRtext);

}

bio.display();
work.display();
projects.display();
education.display();
setUpFooter();
$("#mapDiv").append(googleMap);