var formattedName = HTMLheaderName.replace("%data%", "Peter Schüllermann");
var formattedRole = HTMLheaderRole.replace("%data%", "Full Stack Developer");
header = $("#header");
header.append(formattedName);
header.append(formattedRole);