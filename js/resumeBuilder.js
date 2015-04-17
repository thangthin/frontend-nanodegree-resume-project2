// Personal Bio section
var PERSONAL_MESSAGE = "Hi! I'm an aspiring software developer. "+
  "Having been exposed to how practical programming was in my previous job, "+
  "I've decided to persue a career in it. My hope is to work in a position that will allow me to fullfill my natural interest in "+
  "learning and building interesting things.";

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
  skills:["programming","web development","web design", "software engineering"],
  biopic:"images/profilepic.jpg",
};

// display bio section by format and add to html all the bio properties

bio.display = function(){
  console.log("This is the bioDisplay getting called");
  var formattedName = HTMLheaderName.replace("%data%",this.name);
  var formattedRole = HTMLheaderRole.replace("%data%",this.role);
  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",this.welcomeMessage);
  var formattedEmail = HTMLemail.replace("%data%",this.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%",this.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%",this.contacts.location);
  var formattedBioPic = HTMLbioPic.replace("%data%",this.biopic);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedGithub);
  $("#topContacts").append(formattedLocation);
  $("#header").append(formattedBioPic);
  $("#header").append(formattedWelcomeMsg);


  if(this.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for(skill in this.skills) {
      var formattedSkill = HTMLskills.replace('%data%', this.skills[skill]);
      $("#skills").append(formattedSkill);
    }
  }

  $("#header").append(HTMLmenu);
  $("#header").append(HTMLhr);
};

//display footer

bio.displayFooter = function(){
  var formattedMobile = HTMLmobile.replace("%data%",this.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%",this.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%",this.contacts.github);
  var formattedTwitter = HTMLtwitter.replace("%data%",this.contacts.twitter);
  var formattedLocation = HTMLlocation.replace("%data%",this.contacts.location);

  $("#footerContacts").append(formattedMobile);
  $("#footerContacts").append(formattedEmail);
  $("#footerContacts").append(formattedGithub);
  $("#footerContacts").append(formattedTwitter);
  $("#footerContacts").append(formattedLocation);
};

// Personal education section

var education = {
  schools:[
    {
      name:"Testing University",
      location:"Boston, MA",
      degree:"Bachelor of Science",
      majors:"Awesomeness",
      dates:2011,
      url:"http://www.northeastern.edu"
    }],
  onlineCourses:[
    {
      title: "Javascript Crash Course",
      school: "Udacity",
      date: 2014,
      url:"http://www.udacity.com/course/ud804"
    },
    {
      title: "Jquery",
      school: "Udacity",
      date: 2014,
      url:"http://www.udacity.com/course/ud805"
    }],
};

//display education section

education.display = function(){
  console.log("This is the educationDisplay getting called");
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
    }
  }
  // make new education-entry div for online courses
  if(this.onlineCourses.length > 0){
    $("#education").append(HTMLschoolStart);
    $(HTMLonlineClasses).insertBefore(".education-entry:last");
    $(".education-entry").last().addClass("online-courses");
    for(course in this.onlineCourses){
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",this.onlineCourses[course].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",this.onlineCourses[course].school);
      var formattedOnlineSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
      var formattedOnlineDates = HTMLonlineDates.replace("%data%",this.onlineCourses[course].date);
      var formattedOnlineUrl = HTMLonlineURL.replace("%data%",this.onlineCourses[course].url);
      $(".online-courses").append(formattedOnlineSchoolTitle);
      $(".online-courses").append(formattedOnlineDates);
      $(".online-courses").append(formattedOnlineUrl);
    }
  }
};

// Personal work section
var work = {
  jobs: [
    {
      employer:"Planet Express",
      title:"Delivery Boy",
      location:"Brooklyn, NY",
      dates: "January 3000 - Future",
      description: "Who moved my cheese cheesy feet cauliflower chees. Queso taleggio when the cheese comes out everybody's happy airdale ricotta cheese and wine paneer camember de normandie. Swiss mazzarella cheese slices feta fromage fraise airdale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      employer:"Planet Express",
      title:"Delivery Boy",
      location:"Manhattan, NY",
      dates: "1998 - December 31, 1999",
      description: "Who moved my cheese cheesy feet cauliflower chees. Queso taleggio when the cheese comes out everybody's happy airdale ricotta cheese and wine paneer camember de normandie. Swiss mazzarella cheese slices feta fromage fraise airdale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

//display work section
work.display = function(){
  console.log("This is the workDisplay getting called");
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
      title:"Community Fund",
      dates:"2014",
      description:"Who moved my cheese cheesy feet cauliflower chees. Queso taleggio when the cheese comes out everybody's happy airdale ricotta cheese and wine paneer camember de normandie. Swiss mazzarella cheese slices feta fromage fraise airdale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
      images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTen9W6VGcDg_gSFyGQrj400BvXG3Wmdl54PE5pGFXnlq2EwKXo"]
    },
    {
      title:"Community Fund",
      dates:"2014",
      description:"Who moved my cheese cheesy feet cauliflower chees. Queso taleggio when the cheese comes out everybody's happy airdale ricotta cheese and wine paneer camember de normandie. Swiss mazzarella cheese slices feta fromage fraise airdale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
      images:["data:image/jpeg;base64,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","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQyEztNyJ8A-dk7HmzjbkmAnxhEdFNTzBdRzo8SNW3uX-x9YDPx"]
    }
  ]
};

//display project section
projects.display = function(){
  console.log("This is the projectsDisplay getting called");
  $('#projects').append(HTMLprojectStart);
  if(this.projects.length > 0){
    for(project in this.projects){
      var formattedProjectTitle = HTMLprojectTitle.replace("%data%",this.projects[project].title);
      var formattedProjectDates = HTMLprojectDates.replace("%data%",this.projects[project].dates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%",this.projects[project].description);

      $(".project-entry:last").append(formattedProjectTitle);
      $(".project-entry:last").append(formattedProjectDates);
      $(".project-entry:last").append(formattedProjectDescription);

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
work.display();
education.display();
projects.display();


$("#mapDiv").append(googleMap);

// Provide Interactivity with resume sections
// toggle work section
var workSection = $("#work-section");
workSection.click(function(){
  $('.work-entry').toggle();
});

//toggle education section
var educationSection = $('#education-section');
educationSection.click(function(){
  $('.education-entry').toggle();
});
//toggle project section
var projectSection = $("#project-section");
projectSection.click(function(){
  $('.project-entry').toggle();
});