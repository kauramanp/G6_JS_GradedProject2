const noresumeDiv = document.getElementById("noresumeDiv");
const resumeDiv = document.getElementById("resumeDiv")
const previousButton = document.getElementById("PreviousButton")
const nextButton = document.getElementById("NextButton")
const searchButton = document.getElementById("searchButton")
const search = document.getElementById("search")
const name = document.getElementById("name")
const appliedFor = document.getElementById("appliedFor")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const skills = document.getElementById("skills")
const hobbies = document.getElementById("hobbies")
const companyName = document.getElementById("companyName")
const companyPosition = document.getElementById("companyPosition")
const startDate = document.getElementById("startDate")
const endDate = document.getElementById("endDate")
const summary = document.getElementById("summary")
const projectHeading = document.getElementById("projectHeading")
const projectDescription = document.getElementById("projectDescription")
const ug = document.getElementById("ug")
const senSec = document.getElementById("senSec")
const highSchool = document.getElementById("highSchool")
const internCompany = document.getElementById("internCompany")
const internPosition = document.getElementById("internPosition")
const internStartDate = document.getElementById("internStartDate")
const internEndDate = document.getElementById("internEndDate")
const internSummary = document.getElementById("internSummary")
const acheivements = document.getElementById("acheivements")
var resume = [];
var currentPosition = 0;

window.onload = () => {
    if (data.resume.length != 0) {
        resume = data.resume;
        console.log("data.resume " + data.resume.length);
        resumeDiv.style.display = "inline-block"
        noresumeDiv.style.display = "none"
        showButtons()
    } else {
        resumeDiv.style.display = "none"
        noresumeDiv.style.display = "inline-block"
    }
}

function showButtons() {
    if (resume.length != 0) {
        resumeDiv.style.display = "inline-block"
        noresumeDiv.style.display = "none"
        updateResume();

    } else {
        resumeDiv.style.display = "none"
        noresumeDiv.style.display = "flex"
    }

    if (currentPosition == 0) {
        previousButton.style.display = "none"
    } else {
        previousButton.style.display = "inline"
    }

    if (currentPosition < resume.length - 1) {
        nextButton.style.display = "inline"
    } else {
        nextButton.style.display = "none"
    }


}

nextButton.addEventListener("click", (e) => {
    if (currentPosition < resume.length) {
        currentPosition++;
    }
    console.log(currentPosition)
    showButtons();
})


previousButton.addEventListener("click", (e) => {
    if (currentPosition > 0) {
        currentPosition--;
    }
    console.log(currentPosition)
    showButtons();
})

searchButton.addEventListener("click", (e) => {
    console.log("searchInput " + search.value);
    if ((search.value == null || search.value === "")) {
        alert("Enter text to search");
    } else {
        resume = [];
        for (resumes of data.resume) {
            if (resumes.basics.AppliedFor.toLowerCase() == (search.value).toLowerCase()) {
                resume.push(resumes);
            }
        }
        console.log("resume.length in search " + resume.length)
        showButtons()
    }
});


search.oninput = function () {
    console.log("search.value " + search.value);
    if (search.value === "") {
        console.log("in empty seach");
        resume = data.resume;
        showButtons();
    }
};
function updateResume() {
    if (resume.length == 0) {
        return;
    }
    var selectedResume = resume[currentPosition];
    name.innerText = selectedResume.basics.name;
    appliedFor.innerText = selectedResume.basics.AppliedFor;
    email.innerText = selectedResume.basics.email;
    phone.innerText = selectedResume.basics.phone;
    linkedin.innerText = selectedResume.basics.profiles.url;
    var skillsText = "";
    for (items in selectedResume.skills.keywords) {
        if (items > 0) {
            skillsText += "\n"
        }
        skillsText += selectedResume.skills.keywords[items];
        console.log("currentResume.skills.keywords" + selectedResume.skills.keywords);
    }
    skills.innerText = skillsText;
    companyName.innerText = selectedResume.work["Company Name"];
    companyPosition.innerText = selectedResume.work.Position;
    startDate.innerText = selectedResume.work["Start Date"];
    endDate.innerText = selectedResume.work["End Date"];
    summary.innerText = selectedResume.work.Summary;

    projectHeading.innerText = selectedResume.projects.name;
    projectDescription.innerText = selectedResume.projects.description;
    ug.innerText = `${selectedResume.education.UG.institute} ${selectedResume.education.UG.course} ${selectedResume.education.UG.cgpa}`;
    senSec.innerText = `${selectedResume.education["Senior Secondary"].institute} ${selectedResume.education["Senior Secondary"].cgpa}`;
    highSchool.innerText = `${selectedResume.education["High School"].institute} ${selectedResume.education["High School"].cgpa}`;

    internCompany.innerText = selectedResume.Internship["Company Name"];
    internPosition.innerText = selectedResume.Internship.Position;
    internStartDate.innerText = selectedResume.Internship["Start Date"];
    internEndDate.innerText = selectedResume.Internship["End Date"];
    internSummary.innerText = selectedResume.Internship.Summary;

    var hobbiesText = "";
    for (items in selectedResume.interests.hobbies) {
        if (items > 0) {
            hobbiesText += "\n"
        }
        hobbiesText += selectedResume.interests.hobbies[items];
    }
    hobbies.innerText = hobbiesText;

    var achText = "";
    for (items in selectedResume.achievements.Summary) {
        if (items > 0) {
            achText += "\n"
        }
        achText += selectedResume.achievements.Summary[items];
    }
    acheivements.innerText = achText;


}