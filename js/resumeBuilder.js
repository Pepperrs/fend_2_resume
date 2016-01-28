header = $("#header");

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
            "location": "Lübeck",
            "yearsWorked": 1,
            "description": "Vice President of the Student council"
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "Rossall School",
            "location": "Lancashire, England",
            "degree": "IB",
            "majors": ["German", "Biology", "Economics"],
            "dates": 2,
            "url": "www.rossall.co.uk"
        },
        {
            "name": "Universität zu Lübeck",
            "location": "Lübeck, Germany",
            "degree": "Bachelor of Science",
            "majors": ["Computer Science"],
            "dates": 5,
            "url": "www.uni-luebeck.de"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front End Nano Degree",
            "school": "Udacity",
            "dates": "2",
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

var formattedName = HTMLheaderName.replace("%data%", "Peter Schüllermann");
var formattedRole = HTMLheaderRole.replace("%data%", "Full Stack Developer");

header.append(formattedName);
header.append(formattedRole);

if (bio.skills.length != 0) {
    header.append(HTMLskillsStart);
    for (var skill in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
    }
}
