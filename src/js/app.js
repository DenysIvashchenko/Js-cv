document.querySelector('#my-name').innerHTML = `${data.first_name} <span class="color-grey">${data.last_name}</span>`;
document.querySelector('#job-title').textContent = data.job_title;
document.querySelector('.profile-data').textContent = data.profile;
/**
 * section data
 */
let expirienceData = '';
experience.forEach(item => {
    expirienceData += `<section class="mb-5">`;
    expirienceData += ` <h4 class="company-name mb-2">${item.company} - ${item.city}, <i>${item.from} - ${item.to}</i></h4>`;
    expirienceData += `<h5>${item.position}</h5>`;
    expirienceData += `<p>${item.description}</p>`;
    expirienceData += `</section>`;
});
document.querySelector('.experience-list').innerHTML = expirienceData;

/**
 * contact data
 */

document.querySelector('.contacts-block').innerHTML += `<li><i class="fa fa-phone"></i><a href="tel:${data.phone}">${data.phone}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><i class="fa fa-envelope"></i><a href="mailto:${data.email}">${data.email}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><i class="fa fa-skype"></i><a href="den.ivaschenko">${data.skype}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><i class="fa fa-linkedin-square"></i><a href="//www.linkedin.com/in/denys-ivashchenko-45143469/">${data.linkedin}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><i class="fa fa-github"></i><a href="https://github.com/DenysIvashchenko">${data.GitHub}</a></li>`
document.querySelector('.address').innerHTML = `<p><i class="fa fa-map-marker" aria-hidden="true"></i>${data.address}</p>`;
document.querySelector('#my-photo').src = data.photo;

/**
 * skills
 */

let skillsData = '';
data.skills.forEach(item => {
    skillsData += `<li>${item}</li>`;
});
document.querySelector('.skills-list').innerHTML = skillsData;

/**
 * education
 */

let educationData = '';
data.education.forEach(item => {
    educationData += `<li>${item[0]}, ${item[1]}</li>`;
});
document.querySelector('.education-list').innerHTML = educationData;

/**
 * Achievements
 */

let achievementsData = '';
data.achievements.forEach(item => {
    achievementsData += `<li>${item}</li>`;
});
document.querySelector('.achievements-list').innerHTML = achievementsData;