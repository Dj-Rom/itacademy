"use strict";
const p = document.querySelectorAll('p'),
form = document.querySelector('form');
    

     
     
function validate(EO) {
    EO=EO||window.event;
    

    const form = document.querySelector('form')

    const nameSite = form.elements.name;
    const nameSiteValue = nameSite.value;
    const nameSiteValueDetector = document.querySelector('#name');


    const urlSite = form.elements.url;
    const urlSiteValue = urlSite.value;
    const urlSiteValueDetector = document.querySelector('#url');

    const startdateSite = form.elements.startdate;
    const startdateSiteValue = startdateSite.value;
    const startdateSiteValueDetector = document.querySelector('#startdate');

    const personsSite = form.elements.persons;
    const personsSiteValue = personsSite.value;
    const personsSiteValueDetector = document.querySelector('#persons');

    const emailSite = form.elements.email;
    const emailSiteValue = emailSite.value;
    const emailSiteValueDetector = document.querySelector('#email');

    const rubricSite = form.elements.rubric;
    const rubricSiteValue = rubricSite.value;
    const rubricSiteValueDetector = document.querySelector('#rubric');
    
    const publicSite = form.elements.public;
    const publicSiteValue = publicSite.value;
    const publicSiteValueDetector = document.querySelector('#public');

    const commentsSite = form.elements.comments;
    const commentsSiteValue = commentsSite.value;
    const commentsSiteValueDetector = document.querySelector('#rticle');


    valConrole(nameSiteValue,nameSiteValueDetector,nameSite);
    valConrole(urlSiteValue,urlSiteValueDetector,urlSite);
    valConrole(startdateSiteValue,startdateSiteValueDetector,startdateSite);
    valConrole(personsSiteValue,personsSiteValueDetector,personsSite);
    valConrole(emailSiteValue,emailSiteValueDetector, emailSite)
    valConrole(rubricSiteValue,rubricSiteValueDetector, rubricSite);
    valConrole(publicSiteValue,publicSiteValueDetector,publicSite);
    valConrole(commentsSiteValue,commentsSiteValueDetector,commentsSite);

    console.log(form);



function valConrole(e,p,f){
    if (e.length ) {
        p.style.display='none';
    }else {
        p.style.display='block';
         f.focus;
         event.preventDefault();
}


}form.removeEventListener('submit', validate,false);}
form.addEventListener('submit', validate,false);
form.addEventListener('click'&&'focusout',()=>{
    const form = document.querySelector('form');
    const parag = form.querySelectorAll('p');

    





    for (let elem of parag){
            if(elem.id === event.target.name){
                if(!event.target.value){elem.style.display='block';
        
            }else if(event.target.value){elem.style.display='none';}
            }
        }
    }
}                     
    
        
  
