class CV {
  constructor(name, email, phone, researchInterest, education, publication, experience, courses, skills, certifications, languages) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.researchInterest = researchInterest;
    this.education = education;
    this.publication = publication;
    this.experience = experience;
    this.courses = courses;
    this.skills = skills;
    this.certifications = certifications;
    this.languages = languages;
  }

  // Method to display CV details
  displayCV() {
    console.log("Curriculum Vitae");
    console.log("Name: " + this.name);
    console.log("Email: " + this.email);
    console.log("Phone: " + this.phone);
    console.log("Research Interest:");
    this.researchInterest.forEach((item, index) => {
      console.log(" - " + (index + 1) + ". " + item);
    });
    console.log("Education:");
    this.education.forEach((item, index) => {
      console.log(" - " + (index + 1) + ". " + item);
    });
    console.log("Publications:");
    this.publication.forEach((item, index) => {
      console.log(" - " + (index + 1) + ". " + item);
    });
    console.log("Experience:");
    this.experience.forEach((item, index) => {
      console.log(" - " + (index + 1) + ". " + item);
    });
    console.log("Courses:");
    this.courses.forEach((item, index) => {
      console.log(" - " + (index + 1) + ". " + item);
    });
    console.log("Skills:");
    this.skills.forEach((item, index) => {
      console.log(" - " + (index + 1) + ". " + item);
    });
    console.log("Certifications:");
    this.certifications.forEach((item, index) => {
      console.log(" - " + (index + 1) + ". " + item);
    });
    console.log("Languages:");
    this.languages.forEach((item, index) => {
      console.log(" - " + (index + 1) + ". " + item);
    });
  }
}
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const researchInterest = document.getElementById('researchInterest');
const education = document.getElementById('education');
const publication = document.getElementById('publication');
const experience = document.getElementById('experience');
const courses = document.getElementById('courses');
const skills = document.getElementById('skills');
const certifications = document.getElementById('certifications');
const languages = document.getElementById('languages');

// Example usage
name.textContent = ["Diego Javier Molina Perez"];
email.textContent = ["Email: diego.molina1@upr.edu"];
phone.textContent = ["Phone: (787)565-8166"];
researchInterest.textContent = [" Cyber Security", " Data Analysis", " Machine Learning", " Functional Programing"];
education.textContent = [" Highschool Diploma", " Currently pursuing a Bachelor's in Computer Science"];
publication.textContent = ["None"];
experience.textContent = ["None"];
courses.textContent = [" Data Structures"," Linear Algebra"," Discrete Math"," Introduction to Programming"," Mathematical Statistics"," Calculus 1, Calculus 2, and Calculus 3"];
skills.textContent = ["C++"];
certifications.textContent = ["None"];
languages.textContent = [" Spanish", " English"];

const myCV = new CV(name, email, phone, researchInterest, education, publication, experience, courses, skills, certifications, languages);
myCV.displayCV();

