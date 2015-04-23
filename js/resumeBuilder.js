
// Personal Bio section
var PERSONAL_MESSAGE = "Hi! I'm an aspiring software developer. "+
  "Having been exposed to how practical programming was in my previous job, "+
  "I've decided to persue a career in it. My hope is to work in a position that will allow me to fullfill my natural interest in "+
  "learning and building fascinating things.";
var SUMMARY = "I'm a web developer and a tinkerer. In my former role, I was a security analyst for a government contractor, doing "+
"compliance and system administration work for classified programs. Having been exposed to how novel, practical and beautiful programming is, I've "+
"decided to pursue it as a career. Leaving behind practices of security protocols, access controls, log analysis, and system adminstration for "+
"my new found passion of web application development. Trading in pages and pages of industrial manuals for pages and pages and pages of "+
"programming and api documentations... <i>Oh, the fun never stops.</i> "+
"Since I've left my previous position, I've picked up web development, responsive web design, web optimization and working with technologies "+
" such as html, css, javascript, python, databases, git, and other fullstack development tools."

var bio = {
  name:"Thang Thin",
  role:"Web Developer",
  contacts:{
    email:"thangthin@gmail.com",
    github:"https://github.com/thangthin",
    twitter:"@notwitter",
    location:"Boston, MA"
  },
  welcomeMessage: PERSONAL_MESSAGE,
  skills:["programming","web development","software engineering", "information security"],
  biopic:"",
};

// display bio section by format and add to html all the bio properties

bio.display = function(){
  var formattedName = HTMLheaderName.replace("%data%",this.name);
  var formattedRole = HTMLheaderRole.replace("%data%",this.role);
  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",this.welcomeMessage);
  var formattedEmail = HTMLemail.replace("%data%",this.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%",this.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%",this.contacts.location);
  //var formattedBioPic = HTMLbioPic.replace("%data%",this.biopic);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedGithub);
  $("#topContacts").append(formattedLocation);
  //$("#header").append(formattedBioPic);
  $("#header").append(formattedWelcomeMsg);


  if(this.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for(skill in this.skills) {
      var formattedSkill = HTMLskills.replace('%data%', this.skills[skill]);
      $("#skills").append(formattedSkill);
    }
  }
  $("#header").append(HTMLhr);

};

//display footer

bio.displayFooter = function(){
  var formattedEmail = HTMLemail.replace("%data%",this.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%",this.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%",this.contacts.location);
  $("#footerContacts").append(formattedEmail);
  $("#footerContacts").append(formattedGithub);
  $("#footerContacts").append(formattedLocation);
};

// Summary Section
var summary = {
  synopsis: SUMMARY,
  skills: [{set: "Programming Languages",
            list: "scheme, ocaml, ruby, python, javascript"},
           {set: "Web Technologies",
            list: "html, css, knockout.js, bootstrap, angular.js"},
           {set: "Operating Systems",
            list: "Mac, Windows, Linux (ubuntu, redhat, centOS)"}]
}

summary.display = function(){
  var formattedSynopsis = HTMLsummary.replace("%data%", this.synopsis);
  $('#summary').append(formattedSynopsis);
  $('#summary').append("<br>")
  this.skills.forEach(function(e){
    var formattedSkill = HTMLskillset.replace("%data%", e.set + ": ");
    var formattedSkillList = HTMLskilllist.replace("%data%", e.list + ".");
    $('#summary').append(formattedSkill);
    $('.skill-set').last().append(formattedSkillList);

  })
}

// Personal education section

var education = {
  schools:[
    {
      name:"Harvard University Extension School",
      location:"Cambridge, MA",
      degree:"Master of Liberal Arts",
      majors:"Software Engineering",
      dates: "Ongoing",
      url:"http://www.extension.harvard.edu"
    },
    {
      name:"Northeastern University",
      location:"Boston, MA",
      degree:"Bachelor of Science in Business Administration",
      majors:"Information System and Accounting",
      dates:2011,
      url:"http://www.northeastern.edu"
    }],
  certificates:[
    {
      title: "Fullstack web development",
      school: "Udacity",
      date: "Ongoing",
      url:"http://www.udacity.com"
    },
    {
      title: "Frontend web development",
      school: "Udacity",
      date: 2015,
      url:"http://www.udacity.com"
    }]
  };

//display education section

education.display = function(){
  if(this.schools.length > 0) {
    $("#education").append(HTMLschoolStart);
    for(school in this.schools){
      var formattedSchoolName = HTMLschoolName.replace("%data%", this.schools[school].name);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
      var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",this.schools[school].location);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",this.schools[school].majors);
      $(".education-entry:last").append(formattedSchoolNameDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedSchoolMajor);
      $('.schoolName').last().attr("href", this.schools[school].url);
    }
    $("#education").append(HTMLbr);
  }
  // make new education-entry div for online courses
  if(this.certificates.length > 0){
    $('#education').append(HTMLcertHeading);
    $('#education').append(HTMLschoolStart);
    this.certificates.forEach(function(e){
      var $lastEducationEntry = $('.education-entry:last');
      var formattedCertificate = HTMLcertTitle.replace("%data%", e.title);
      var formattedSchool = HTMLcertSchool.replace("%data%", e.school);
      var formattedDate = HTMLcertDate.replace("%data%", e.date);
      var formattedTitle = formattedCertificate + formattedSchool;
      $lastEducationEntry.append(formattedTitle);
      $lastEducationEntry.append(formattedDate);
      $lastEducationEntry.append(HTMLbr);
      $('.certTitle').last().attr("href", e.url);
    });
  }
};

// Personal work section
var work = {
  jobs: [
    {
      employer:"Raytheon MDC",
      title:"Information Assurance Analyst II",
      location:"Woburn, MA",
      dates: "2013 - 2014",
      description: "Liaised as the primary security representative with engineers and users "+
      "of classified systems. Key contributions during tenure included the development and "+
      "implementation of security logs collection scripts, and events filtering program to "+
      "aid with log analysis. Log collection and verification was developed in bash while "+
      "events filtering program was developed in python with its regular expression module. "+
      "Streamlined what was a manual collection and reviewing process."
    },
    {
      employer:"Raytheon IADC",
      title:"Information Assurance Analyst",
      location:"Andover, MA",
      dates: "2011 - 2013",
      description: "Responsible for ensuring the compliance of information systems "+
      "used for classified programs in accordance with the NISPOM, ISFO, and ODAA baseline "+
      "standards. Key contributions during tenure included the creation of several security profiles "+
      "for classified programs resulting in the certification and accreditation of the associated "+
      "programs. Assisted the operation security team in achieving the highest possible rating "+
      "in multiple DSS Assessments as part of the IA team."
    },
    {
      employer:"Manulife Financial",
      title:"Program Analyst Intern",
      location:"Boston, MA",
      dates: "2010 - 2010",
      description: "Worked alongside developers and project manager during the development cycle of "+
      "company's claim system. Assisted in project planning, documentation, and facilitated between "+
      "developers and users of the system. Drew up test cases and assisted with reproduction of triage "+
      "issue in test environment."     
    },
    {
      employer:"Merrill Lynch",
      title:"Accounting Application Intern",
      location:"Jersey City, NJ",
      dates: "2009 - 2009",
      description: "Interned with company's accountant team. Responsible for reports generation "+
      "and analysis of account discrepancies. Wrote VBA scripts to assist with the analysis and "+
      "formatting of financial data pulled from corporate servers."     
    }
  ]
};

//display work section
work.display = function(){
  $("#workExperience").append(HTMLworkStart);
  if(this.jobs.length > 0){
    for(job in this.jobs){
      var formattedEmployer = HTMLworkEmployer.replace("%data%",this.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%",this.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      var formattedLocation = HTMLworkLocation.replace("%data%",this.jobs[job].location);
      var formattedDates = HTMLworkDates.replace("%data%",this.jobs[job].dates);
      var formattedDescription = HTMLworkDescription.replace("%data%",this.jobs[job].description);

      $(".work-entry:last").append(formattedEmployerTitle);
      $(".work-entry:last").append(formattedLocation);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedDescription);
    }
  }
};

// Personal projects section
var projects = {
  projects:[
    {
      title:"Neighborhood Maps",
      dates:"2015",
      description:"Neighborhood map is a map application that allows users to quickly see all the "+
      "establishments around their city that meet their search criteria. This was built using the "+
      "Google Web API suite. Specific APIs included are Google Street View, Google Map, Google Geocoding, "+
      "and Google Places. The web application was designed with the mobile user experience in mind, "+
      "automatically changing viewport depending on screen sizes used to view the site.",
      images:["images/neighborhood.png","images/neighborhood-mobile.png"],
      url:"http://thangthin.github.io/frontend-nanodegree-neighborhood-map/"
    },
    {
      title:"CrowdFund",
      dates:"2014",
      description:"CrowdFund was inspired by Kickstarter and other crowd funding websites. "+
      "The site was built with Ruby on Rails framework and MySQL. "+
      "Project utilizes the RESTful app design, using HTTP requests for its CRUD operations. "+
      "Project is hosted on Heroku with images hosted on Amazon web services.",
      images:["images/crowdfund.png","images/crowdFund-detailed.png"],
      url:"http://communityfund-fromtt.herokuapp.com/"
    },
    {
      title:"Sudoku Solver with Desktop GUI",
      dates:"2014",
      description:"Sudoku solver was a final team project for Harvard’s data abstraction "+
      "course built by my partner and myself. The project has a GUI interface built with "+
      "python tinker and treats Sudoku as an exact cover problem. The main algorithm for the "+
      "solver is the Dancing Link algorithm developed by Professor Donald Knuth at Stanford University.",
      images:["images/sudoku.png","images/sudoku-closeup.png"],
      url:"https://github.com/thangthin/sudoku"
    },
    {
      title:"Portfolio",
      dates:"2015",
      description:"A collection of my other work built for practice and such. Currently a work in progress.",
      images:[],
      url:"http://thangthin.github.io/portfolio/"
    }
  ]
};

//display project section
projects.display = function(){
  $('#projects').append(HTMLprojectStart);
  if(this.projects.length > 0){
    for(project in this.projects){
      var formattedProjectTitle = HTMLprojectTitle.replace("%data%",this.projects[project].title);
      var formattedProjectDates = HTMLprojectDates.replace("%data%",this.projects[project].dates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%",this.projects[project].description);

      $(".project-entry:last").append(formattedProjectTitle);
      $(".project-entry:last").append(formattedProjectDates);
      $(".project-entry:last").append(formattedProjectDescription);
      $(".pj:last").attr("href",this.projects[project].url);

      for(image in this.projects[project].images){
        var formattedImage = HTMLprojectImage.replace("%data%",this.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};

//displaying all five sections
bio.display();
bio.displayFooter();
summary.display();
work.display();
education.display();
projects.display();


$("#mapDiv").append(googleMap);

// Provide quick navigation to resume
var summaryLink = $('#summary-link');
summaryLink.on('click',function(e){
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, 1000);
});

var workObj = { jq: $('#work-link'), 
                 section: "#workExperience" },
    educationObj = { jq: $('#education-link'),
                      section: "#education" },
    projectObj = { jq: $('#projects-link'),
                    section: "#projects" };

[workObj,educationObj,projectObj].forEach(function(e){
  e.jq.on('click', function(ev){
    ev.preventDefault();
    scrollToSection(e.section,1000);
  })
})


function scrollToSection(id, ms){
  var position = $(id).offset().top;
  $('html, body').animate({ scrollTop: position}, ms);
  return false;
}

var navMenu = $('.menu');
var navMenuOriginalPosition = $('.menu').offset().top;


// Allow navigation to stay on page whereever user may scroll
var adjustNavMenu = function(){
  var currentPosition = $(window).scrollTop();
  if(currentPosition > navMenuOriginalPosition){
    navMenu.addClass('fixed-position expand-bottom-margin');
  }else{
    navMenu.removeClass('fixed-position expand-bottom-margin');
  }
}

$(window).scrollTop(0);
$(window).scroll(adjustNavMenu);



