$header = $("#header");
$main = $("#main");


var bio = {
    "name": "Peter Schüllermann",
    "role": "Full Stack Developer",
    "contacts": {
        "email": "Peter.schuellermann@gmail.com",
        "github": "http://github.com/pepperrs",
        "twitter": "@aPepperrs",
        "location": "Berlin, Germany",
        "mobile": "0123-123123123",
        "blog": "http://pepperrs.github.io/portfolio"
    },
    "location": "Berlin, Germany",
    "skills": ["Java", "JavaScript", "Ruby on Rails", "HTML", "CSS", "LaTeX", "C++", "AWS", "Linux", "OS X", "Windows"],
    "biopic": "images/fry.jpg",
    "welcomeMessage": "Hello World!"
};

var work = {
    "jobs": [
        {
            "title": "Vice President",
            "employer": "Universität zu Lübeck, student council",
            "location": "Lübeck, Germany",
            "dates": "Jan. 2015 - Sept. 2015",
            "description": "Vice President of the Student council"
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "Universität zu Lübeck",
            "location": "Lübeck, Germany",
            "degree": "Bachelor of Science",
            "majors": ["Computer Science"],
            "dates": "2010-2015",
            "url": "www.uni-luebeck.de"
        },
        {
            "name": "Rossall School",
            "location": "Lancashire, England",
            "degree": "IB",
            "majors": ["German", "Biology", "Economics"],
            "dates": "2007 - 2009",
            "url": "www.rossall.co.uk"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front End Nano Degree",
            "school": "Udacity",
            "date": "Jan. 2016",
            "url": "www.udacity.com"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "RedJenkins",
            "dates": "2015",
            "description": "connection between Redmine and Jenkins",
            "images": ["images/197x148.gif"]
        }
    ]
};

bio.appendContact = function (bar) {
    bar.append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    bar.append(HTMLemail.replace("%data%", bio.contacts.email));
    bar.append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    bar.append(HTMLgithub.replace("%data%", bio.contacts.github));
    bar.append(HTMLblog.replace("%data%", bio.contacts.blog));
    bar.append(HTMLlocation.replace("%data%", bio.location));
};

bio.appendHeader = function () {
    $header.prepend(HTMLheaderRole.replace("%data%", bio.role));
    $header.prepend(HTMLheaderName.replace("%data%", bio.name));
};

bio.appendSkills = function () {
    if (bio.skills.length != 0) {
        $header.append(HTMLskillsStart);
        for (skill in bio.skills) {
            if (bio.skills.hasOwnProperty(skill)) {
                $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
            }
        }
    }
};

bio.display = function () {
    bio.appendHeader();
    $header.append(HTMLbioPic.replace("%data%", bio.biopic));
    bio.appendContact($("#topContacts"));
    bio.appendContact($("#footerContacts"));
    bio.appendSkills();
};

work.display = function () {
    for (job in work.jobs) {
        if (work.jobs.hasOwnProperty(job)) {
            $("#workExperience").append(HTMLworkStart);
            var workentry = $(".work-entry:last");
            var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            workentry.append(title + employer);
            var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            workentry.append(dates);
            var description = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            workentry.append(description);
            //var location = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            //$(".work-entry:last").append(location);
        }
    }

};

projects.display = function () {
    for (project in projects.projects) {
        if (projects.projects.hasOwnProperty(project)) {
            $("#projects").append(HTMLprojectStart);
            var projectEntry = $(".project-entry:last");
            var title = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            projectEntry.append(title);
            var dates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            projectEntry.append(dates);
            var description = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            projectEntry.append(description);
            if (projects.projects[project].images.length > 0) {
                for (image in projects.projects[project].images) {
                    var images = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                    projectEntry.append(images);
                }
            }
        }
    }
};

education.display = function () {
    for (school in education.schools) {
        if (education.schools.hasOwnProperty(school)) {
            $("#education").append(HTMLschoolStart);
            var schoolEntry = $(".education-entry:last");
            var name = HTMLschoolName.replace("%data%", education.schools[school].name);
            var degree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var location = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var dates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            schoolEntry.append(name + degree);
            schoolEntry.append(location);
            schoolEntry.append(dates);

            if (education.schools[school].majors.length > 0) {
                for (major in education.schools[school].majors) {
                    var majorInsert = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
                    schoolEntry.append(majorInsert);
                }
            }
        }
    }

};

bio.display();

work.display();

projects.display();

education.display();
$(document).click(function (loc) {
    console.log("pageX: " + loc.pageX + ", pageY: " + loc.pageY);
});

$("#mapDiv").append(googleMap);
