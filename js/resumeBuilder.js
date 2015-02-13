function bioDisplay(){
	console.log("This is the bioDisplay getting called");
}

function educationDisplay(){
	console.log("This is the educationDisplay getting called");
}

function workDisplay(){
	console.log("This is the workDisplay getting called");
}

function projectsDisplay(){
	console.log("This is the projectsDisplay getting called");
}

var bio = {
	name:"Thang Thin",
	role:"Web Developer",
	contacts:{
		mobile:"123-123-1234",
		email:"testthang@gmail.com",
		github:"https://github.com/thangthin",
		twitter:"notwitter",
		location:"Boston, MA"
	},
	welcomeMessage:"Welcome to Thang's Resume",
	skills:["saving the world","breaking things","building things",
						"solving easy problems"],
	biopic:"images//fred.jpg",
	display: bioDisplay
};

var education = {
	schools:[
		{
			name:"Northeastern University",
			location:"Boston, MA",
			degree:"Bachelor of Science",
			majors:"Information Systems",
			dates:2011,
			url:"http://www.northeastern.edu"
		}],
	onlineCourses:[
		{
			title: "Data Abstraction",
			school: "Harvard Extension School",
			date: 2014,
			url:"http://www.harvard.ext.edu"
		},
		{
			title: "CS50",
			school: "EdX",
			date: 2014,
			url:"http://www.edx.org"
		},
		{
			title: "Linux",
			school: "EdX",
			date: 2014,
			url:"http://www.edx.org"
		},
		{
			title: "Introduction to Computer Science",
			school: "Udacity",
			date: 2014,
			url:"http://www.udacity.com"
		},
		{
			title: "Intro to HTML and CSS",
			school: "Udacity",
			date: 2014,
			url:"http://www.udacity.com"
		},
		{
			title: "Javascript Basics",
			school: "Udacity",
			date: 2014,
			url:"http://www.udacity.com"
		},
		{
			title: "Intro to jQuery",
			school: "Udacity",
			date: 2014,
			url:"http://www.udacity.com"
		}],
	display: educationDisplay
};

var work = {
	jobs: [
		{
			employer:"Raytheon Integrated Air Defense",
			title:"System Security Analys I",
			location:"Andover, MA",
			dates: "2011-2013",
			description: "Industrial compliance and performed system security auditing functionality"
		},
		{
			employer:"Raytheon Missile Defense Center",
			title:"System Security Analys II",
			location:"Andover, MA",
			dates: "2011-2013",
			description: "Team lead for classified program Industrial security compliance and performed security auditing"
		}
	],
	display: workDisplay
};

var projects = {
	projects:[
		{
			title:"Community Fund",
			dates:"2014",
			description:"Ruby on Rails project utilizing CRUD features to showcase existing open source website currently online.",
			images:["images/project1.jpg","images/project1a.jpg"]
		},
		{
			title:"Postit, reddit markup",
			dates:"2014",
			description:"Ruby on Rails project utilizing CRUD features to showcase RESTFUL understanding.",
			images:["images/project2.jpg","images/project2a.jpg"]
		}
	],
	display: projectsDisplay
};





