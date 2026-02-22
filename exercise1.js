// exercise1.js
const accordion = document.querySelector('.accordion');
accordion.addEventListener('click', function(event) {
 // 1. Find the closest trigger from event.target
   const trigger = event.target.closest('.accordion-trigger');
 // If null, the click was not on a trigger - return early.
   if (!trigger) {return;}
 // 2. From the trigger, find the closest .accordion-item
    const aI = trigger.closest('.accordion-item');
 // 3. Close ALL accordion items (querySelectorAll + forEach + remove class)
   const cAI = document.querySelectorAll('.accordion-item');
   cAI.forEach(i => {
      if (i !== aI){
         i.classList.remove('open');
      }
   });
 // 4. Toggle .open on the clicked item only
   aI.classList.toggle('open');
});