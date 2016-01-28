header = $("#header");
main = $("#main");
$(document).click(function(loc) {
    console.log("pageX: " + loc.pageX + ", pageY: " + loc.pageY);
});
function displayWork() {
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

}

function inName(name){
    name = name.trim().split(" ");
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    return name.join(" ")
}



var bio = {
    "name": "Peter Schüllermann",
    "role": "Full Stack Developer",
    "contacts": {
        "email": "Peter.schuellermann@gmail.com",
        "github": "Pepperrs",
        "twitter": "@aPepperrs",
        "location": "Berlin, Germany"
    },

    "skills": ["Java", "JavaScript", "Ruby on Rails"],
    "picture": "images/Bewerbungsbild.jpg",
    "welcomeMessage": "Hello World!"
};

var work = {
    "jobs": [
        {
            "title": "Vice President",
            "employer": "Universität zu Lübeck, student council",
            "location": "hier",
            "dates": "Jan. 2015 - Sept. 2015",
            "description": "Vice President of the Student council"
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "Rossall School of the student council",
            "location": "Lancashire, England",
            "degree": "IB",
            "majors": ["German", "Biology", "Economics"],
            "dates": "2007 - 2009",
            "url": "www.rossall.co.uk"
        },
        {
            "name": "Universität zu Lübeck",
            "location": "Lübeck, Germany",
            "degree": "Bachelor of Science",
            "majors": ["Computer Science"],
            "dates": "2010-2015",
            "url": "www.uni-luebeck.de"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front End Nano Degree",
            "school": "Udacity",
            "dates": "Jan. 2016 - Now",
            "url": "www.udacity.com"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "RedJenkins",
            "dates": 2,
            "description": "connection between Redmine and Jenkins",
            "images": ["images\197x148.gif"]
        }
    ]
};

header.append(HTMLheaderName.replace("%data%", bio.name));
header.append(HTMLheaderRole.replace("%data%", bio.role));

if (bio.skills.length != 0) {
    header.append(HTMLskillsStart);
    for (skill in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
    }
}

displayWork();

main.append(internationalizeButton);
