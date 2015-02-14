// Personal Bio section
var bio = {
  name:"Thang Thin",
  role:"Web Developer",
  contacts:{
    mobile:"123-123-1234",
    email:"thang@example.com",
    github:"https://github.com/thangthin",
    twitter:"@notwitter",
    location:"Boston, MA"
  },
  welcomeMessage:"Welcome to Thang's Resume",
  skills:["awesomeness","delivering things","cryogenic sleep", "saving the universe"],
  biopic:"images/fry.jpg",
};

// display bio section by format and add to html all the bio properties

bio.display = function(){
  console.log("This is the bioDisplay getting called");
  var formattedName = HTMLheaderName.replace("%data%",this.name);
  var formattedRole = HTMLheaderRole.replace("%data%",this.role);
  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",this.welcomeMessage);
  var formattedMobile = HTMLmobile.replace("%data%",this.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%",this.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%",this.contacts.github);
  var formattedTwitter = HTMLtwitter.replace("%data%",this.contacts.twitter);
  var formattedLocation = HTMLlocation.replace("%data%",this.contacts.location);
  var formattedBioPic = HTMLbioPic.replace("%data%",this.biopic);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedGithub);
  $("#topContacts").append(formattedTwitter);
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
      name:"Northeastern University",
      location:"Boston, MA",
      degree:"Bachelor of Science",
      majors:"Information Systems",
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
      images:["images/fry.jpg"]
    },
    {
      title:"Community Fund",
      dates:"2014",
      description:"Who moved my cheese cheesy feet cauliflower chees. Queso taleggio when the cheese comes out everybody's happy airdale ricotta cheese and wine paneer camember de normandie. Swiss mazzarella cheese slices feta fromage fraise airdale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
      images:["images/fry.jpg","images/fry.jpg"]
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
education.display();
work.display();
projects.display();


$("#mapDiv").append(googleMap);

