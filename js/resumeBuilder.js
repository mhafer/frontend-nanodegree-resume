var bio = {
	"name": "Michelle",
	"role": "Web Developer",
	"contacts": {
		"mobile":"410-297-1178",
		"email":"mhaf3r@gmail.com",
		"github": "mhafer",
		"location": "Baltimore, MD"
	},
	"welcomeMessage":"Results-oriented software programmer, both professionally educated and self-taught. Promotes object-oriented approaches to real-time software development. Analytical and detail-oriented. Enjoys working in a collaborative and supportive team environment.",
	"skills": ["Java","C#","MySQL","HTML5","CSS","JavaScript","PHP"],
	"biopic": "images/me.jpg",
	display : function(){
		var formattedName = HTMLheaderName.replace("%data%", "Michelle Hafer");
		var formattedRole = HTMLheaderRole.replace("%data%", "Software Developer");
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedLocation);	
		$("#myPic").append(formattedBioPic);
		$("#aboutMe").append(formattedWelcome);
		// append added skill titles
		var formattedSkillsStart = HTMLskillsStart.replace("%category%", "Languages"); //hardcoded in order to keep the schema the same "skills" and not "languages"
		$("#mySkills").append(formattedSkillsStart);
		var formattedFrameworkStart = HTMLframeworksStart.replace("%category%", bio.frameworks);
		$("#mySkills").append(formattedFrameworkStart);
		var formattedOtherStart = HTMLotherStart.replace("%category%", bio.other);
		$("#mySkills").append(formattedOtherStart);
				// loop through each skill and append sub-skill
		bio.skills.forEach(function(skill){
			var formattedSkills = HTMLskills.replace("%data%", skill);
			$("#skills").append(formattedSkills);
		});	
		bio.frameworks.forEach(function(framework){
			var formattedFrameworks = HTMLskills.replace("%data%", framework);
			$("#frameworks").append(formattedFrameworks);
		});
		bio.other.forEach(function(otherSkill){
			var formattedOtherSkills = HTMLskills.replace("%data%", otherSkill);
			$("#other-skills").append(formattedOtherSkills);
		});
  },
	"frameworks": ["Bootstrap","JQuery"],
	"other":["Github","Android Studios","MongoDB"],
	"footerContacts" : [
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
	],
	displayFooter : function(){

		for(var i = 0; i < bio.footerContacts.length; i++){
			var formattedFooterLink = HTMLfooterInfo.replace("#", bio.footerContacts[i].link);
			var formattedFooterCode = formattedFooterLink.replace("%class%", bio.footerContacts[i].code);
			var formattedFooterInfo = formattedFooterCode.replace("%title%", bio.footerContacts[i].name);
			$("#footerContacts").append(formattedFooterInfo);
		}
		var formattedCRlink = HTMLCopyWriteText.replace("#","http://www.michellesalema.com");
		var formattedCRtitle = formattedCRlink.replace("%title%","Michelle's Previous Website");
		var formattedCRtext = formattedCRtitle.replace("%data%","Michelle Hafer");
		$('.copyright').append(formattedCRtext);
	}	
};

var work = {
	"jobs": [
		{
			"employer":"Xccepted Technologies Inc",
			"title":"Software Developer",
			"location":"Surry, BC",
			"dates":"February 2016 - January 2017",
			"description":"Designed and programmed an Android app to be used in conjunction with our company's devices.  Also engineered devices to work on Arduino and raspberry Pi. Implemented innovative systems for data collection, storage, and management of customer data",
			"link":"http://xccepted.com"
		},
		{
			"employer":"Energy Fitness & Yoga",
			"title":"Social Media Marketer & Administrations Manager",
			"location":"Vancouver, BC",
			"dates":"January 2015 - March 2016",
			"description":"Implemented SEO strategies, and Google analytics to increase membership enrollment. Maintained website, social media outlets, and created the monthly member emails. Helped in directing the hiring, training and performance evaluations for staff and supervised their daily activities.",
			"link":""
		}	
	],
	display : function(){
		for(var i = 0; i < work.jobs.length; i++){
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedEmployerLink = formattedEmployer.replace("#", work.jobs[i].link);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedEmployerTitle = formattedEmployerLink + " " + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			$(".work-entry:last").append(formattedLocation);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			$(".work-entry:last").append(formattedDescription);
		}	
	}
};

var projects = {
	"projects": [
		{
			"title":"Vanpedia",
			"dates":"March 2016",
			"description":"Designed, coded, and tested a tourism app designed for Vancouver. The app allows the user to search for near-by places and activities by category. It also featured recommended spots, weather, and information about the city. One of the stand out features was the ability to 'star' and save places to your own personal list, as well as the ability to contact the place and get directions with the implementation of google maps API",
			"images":["images/vanpedia.png"],
			"link":["https://github.com/dems-mobile/vanpedia"]
		},
		{
			"title":"Website Work",
			"dates":"December 2016",
			"description":"The following are examples of some website work that I have done in the past. Originally, these are based on a simple, open source template. I personalize the website to the client's needs, adding multple pages, more functionality, contact forms, improving user experience, and of course changing the design to the client's own personal taste.",
			"images":["images/xcceptedwebsite.png","images/inkedwebsite.png","images/weddingwebsite.png"],
			"link":["http://xccepted.com/","http://inkedcosmetic.ca/","http://thehaferfamily.com"],
		},		
		{
			"title":"Portfolio Builder",
			"dates":"February 2017",
			"description":"Developed a responsive website that displays images, descriptions, and links to each of the portfolio projects I will be completing throughout my Nanodegree program.",
			"images":["images/personalwebsite.png"],
			"link":["https://github.com/mhafer/Udacity-FrontEnd-Nanodegree/tree/master/build-a-portfolio-site"]
		}
	],
	display : function(){
	$("#projects").append(HTMLprojectStart);
		for(var i = 0; i < projects.projects.length; i++){	
			var img = projects.projects[i].images;
			var links = projects.projects[i].link;
			$(".project-entry:last").prepend(HTMLProjectImagePlaceholder);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			$(".project-entry:last").prepend(formattedDescription);
			var formattedDate = HTMLprojectDates.replace("%data%",projects.projects[i].date);
			$(".project-entry:last").prepend(formattedDate);
			var formattedTitleLink = HTMLprojectTitle.replace("#", projects.projects[i].link[0]);
			var formattedTitle = formattedTitleLink.replace("%data%", projects.projects[i].title);
			$(".project-entry:last").prepend(formattedTitle);
			for(var k = 0; k < img.length; k++) {
				var id = "#img" + k;
				  //if there is only 1 image then place it in the middle column id
				  if(img.length == 1){
				  	id = "#img1";
				  }
			  	var formattedImages = HTMLprojectImage.replace("%data%", img[k]);
			  	var formattedLinks = formattedImages.replace("#", links[k]);
			  	$(id).append(formattedLinks);
			}
		}			
	}
};

var education = {
	"schools": [
		{
			"name": "Douglas College",
			"location":"New Westminster, BC",
			"degree":"Associates",
			"majors":["Computer Science"],
			"dates":"May 2014 - June 2016",
			"url":"https://www.douglascollege.ca/"
		},
		{
			"name":"University of Victoria",
			"location":"Victoria, BC",
			"degree":"3rd Year",
			"majors":["Business"],
			"dates": "September 2006 - June 2009",
			"url":"http://www.uvic.ca/"
		}
	],
	"onlineCourses":[
		{
			"title":"Front End Web Developer",
			"school":"Udacity",
			"dates":"current",
			"url":"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{	
			"title":"Introduction to Data Structures & Algorithms in Java",
			"school":"Udemy",			
			"dates":"January 2016",
			"url":"https://www.udemy.com/certificate/UC-1COZPSJ5/"
		}
	],
	display : function(){
	$("#education").append(HTMLschoolStart);
		for(var i = 0; i < education.schools.length; i++){
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedSchoolLink = formattedSchoolName.replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolTitle = formattedSchoolLink + formattedSchoolDegree;
			$(".education-entry").append(formattedSchoolTitle);	
			var formattedSchoolDate = HTMLschoolDate.replace("%data%", education.schools[i].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			$(".education-entry").append(formattedSchoolDate);
			$(".education-entry").append(formattedLocation);
			var major = education.schools[i].majors;
			for(var m = 0; m < major.length; m++){
				var formattedMajor = HTMLschoolMajor.replace("%data%", major[m]);
				$(".education-entry").append(formattedMajor);
			}
		}
	$(".education-entry").append(HTMLonlineClasses);	
		for(var o = 0; o < education.onlineCourses.length; o++){
			var formattedOnlineName = HTMLonlineSchool.replace("%data%", education.onlineCourses[o].school);
			var formattedOnlineLink = HTMLonlineTitle.replace("#", education.onlineCourses[o].url);
			var formattedSchoolCourse = formattedOnlineLink.replace("%data%", education.onlineCourses[o].title);
			var formattedOnlineTitle = formattedSchoolCourse + formattedOnlineName;
			var formattedOnlinelDate = HTMLonlineDates.replace("%data%", education.onlineCourses[o].dates);
			$(".education-entry").append(formattedOnlineTitle);
			$(".education-entry").append(formattedOnlinelDate);
		}
	}
};

bio.display();
work.display();
projects.display();
education.display();
bio.displayFooter();
$("#mapDiv").append(googleMap);