"use strict";

const p = document.querySelectorAll("p"),
  form = document.querySelector("form"),
  radio = document.getElementsByName('public');
  let checkedOn = Boolean;
 
 

function validate(EO) {
  EO = EO || window.event;

  const form = document.querySelector("form");

  const nameSite = form.elements.name;
  const nameSiteValue = nameSite.value;
  const nameSiteValueDetector = document.querySelector("#name");

  const urlSite = form.elements.url;
  const urlSiteValue = urlSite.value;
  const urlSiteValueDetector = document.querySelector("#url");

  const startdateSite = form.elements.startdate;
  const startdateSiteValue = startdateSite.value;
  const startdateSiteValueDetector = document.querySelector("#startdate");

  const personsSite = form.elements.persons;
  const personsSiteValue = personsSite.value;
  const personsSiteValueDetector = document.querySelector("#persons");

  const emailSite = form.elements.email;
  const emailSiteValue = emailSite.value;
  const emailSiteValueDetector = document.querySelector("#email");

  const rubricSite = form.elements.rubric;
  
  const rubricChange = document.getElementById('rubric1').selectedIndex;
  const rubricSiteValueDetector = document.querySelector("#rubric");

  const publicSite = form.elements.public;
  const publicSiteValue = publicSite.value;
  const publicSiteValueDetector = document.querySelector("#public");

  const commentsSite = form.elements.comments;
  const coomentChecked = document.getElementById("commentS").checked;
  const commentsSiteValue = commentsSite.value;
  const commentsSiteValueDetector = document.querySelector("#comments");

  const articleSite = form.elements.article;
  const articleSiteValue = articleSite.value;
  const articleSiteValueDetector = document.querySelector("#article");

  valConrole(nameSiteValue, nameSiteValueDetector, nameSite);
  valConrole(urlSiteValue, urlSiteValueDetector, urlSite);
  valConrole(startdateSiteValue, startdateSiteValueDetector, startdateSite);
  valConrole(personsSiteValue, personsSiteValueDetector, personsSite);
  valConrole(emailSiteValue, emailSiteValueDetector, emailSite);
  valConrole(rubricChange , rubricSiteValueDetector, rubricSite);
  valConrole(publicSiteValue, publicSiteValueDetector, publicSite);
  valConrole(coomentChecked, commentsSiteValueDetector, commentsSite);
  valConrole(articleSiteValue, articleSiteValueDetector, articleSite);
 console.log(coomentChecked);

  function valConrole(e, p, f) {
    
    
    if(!e){
      EO.preventDefault();
      p.style.display = "block";
      f=focus;
    }

  
 
}}

form.addEventListener("submit", validate, false);
form.addEventListener("mousedup"&&"focusout", () => {
  const form = document.querySelector("form");
  const parag = form.querySelectorAll("p");

  for (let elem of parag) {
    if (elem.id === event.target.name) {
      if (!event.target.value) {
        elem.style.display = "block";
      } else if (event.target.value) {
        elem.style.display = "none";
      }
    }
  }
});
