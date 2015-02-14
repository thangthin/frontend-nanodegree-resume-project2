function bioDisplay(){
  console.log("This is the bioDisplay getting called");
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
  var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
  var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
  var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedGithub);
  $("#topContacts").append(formattedTwitter);
  $("#topContacts").append(formattedLocation);
  $("#header").append(formattedBioPic);
  $("#header").append(formattedWelcomeMsg);

  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for(skill in bio.skills) {
      var formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
      $("#skills").append(formattedSkill);
    }
  }
}

function educationDisplay(){
  console.log("This is the educationDisplay getting called");
  if(education.schools.length > 0) {
    $("#education").append(HTMLschoolStart);
    for(school in education.schools){
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
      $(".education-entry:last").append(formattedSchoolNameDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedSchoolMajor);
    }
  }
  if(education.onlineCourses.length > 0){
    $(HTMLonlineClasses).insertAfter(".education-entry:last");
  }

}

function workDisplay(){
  console.log("This is the workDisplay getting called");
  $("#workExperience").append(HTMLworkStart);
  if(work.jobs.length > 0){
    for(job in work.jobs){
      var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
      var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
      var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

      $(".work-entry:last").append(formattedEmployerTitle);
      $(".work-entry:last").append(formattedLocation);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedDescription);
    }
  }
}

function projectsDisplay(){
  console.log("This is the projectsDisplay getting called");
  $('#projects').append(HTMLprojectStart);
  if(projects.projects.length > 0){
    for(project in projects.projects){
      var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
      var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);

      $(".project-entry:last").append(formattedProjectTitle);
      $(".project-entry:last").append(formattedProjectDates);
      $(".project-entry:last").append(formattedProjectDescription);

      for(image in projects.projects[project].images){
        var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }

}

var bio = {
  name:"Thang Thin",
  role:"Web Developer",
  contacts:{
    mobile:"123-123-1234",
    email:"testthang@gmail.com",
    github:"https://github.com/thangthin",
    twitter:"@notwitter",
    location:"Boston, MA"
  },
  welcomeMessage:"Welcome to Thang's Resume",
  skills:["saving the world","breaking things","building things",
            "solving easy problems"],
  biopic:"images/fry.jpg",
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
      title: "Javascript Crash Course",
      school: "Udacity",
      date: 2014,
      url:"http://www.udacity.com/course/ud804"
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
      dates: "2013-2014",
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
      images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ORzNXW260LWxIxMCUoWok03t28-fxhpgj57EGCDVTYALqFTQkA",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ORzNXW260LWxIxMCUoWok03t28-fxhpgj57EGCDVTYALqFTQkA"]
    }
  ],
  display: projectsDisplay
};

bio.display();
education.display();
work.display();
projects.display();

