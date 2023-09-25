// import axios from "axios";
import SlimSelect from 'slim-select'
import Notiflix from 'notiflix';

import {fetchBreeds, fetchCatByBreed}  from "./cat-api"



const breedsCollection = document.querySelector(".breed-select");
const pageLoading = document.querySelector(".loader");
const warning = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info") 




pageLoading.setAttribute("hidden", "")
warning.setAttribute("hidden", "")

breedsCollection.addEventListener("change", fetchCat)
document.addEventListener("DOMContentLoaded", fetchBreeds);

 fetchBreeds()  
.then(resalt => {
    markupBreed(resalt)
    new SlimSelect({
        select: '.breed-select',
      });
  })
  .catch(error => {
    breedsCollection.setAttribute("hidden", "")
    warning.removeAttribute("hidden", "")
    console.log(error)
  });

   function fetchCat(event){
    catInfo.innerHTML = " "
    pageLoading.removeAttribute("hidden", "")
    const breedId = event.currentTarget.value;
    
    if(breedId === "mala") {
        Notiflix.Report.failure('Opps..', 'Котик пішов ловити мишку, повернеться пізніше)', 'Знайти іншого котика');
        return
    }
    fetchCatByBreed(breedId) 
    .then(resalt => {
        fetchCatBy(resalt)
        pageLoading.setAttribute("hidden", "")
        
        
      })
      .catch(error => {
        breedsCollection.setAttribute("hidden", "")
        warning.removeAttribute("hidden", "")
        console.log(error)
      });
    

   };

   function fetchCatBy(cats) {
    
    catInfo.removeAttribute("hidden", "true")
    for (const {url, height, width, breeds} of cats) {
    catInfo.insertAdjacentHTML("afterbegin", `<img src="${url}" alt="${breeds[0].name} width="${width / 3}" height="${height / 3}">
         <h2>${breeds[0].name}</h2>
         <p>${breeds[0].description}</p>
         <p>${breeds[0].temperament}</p>`);
   }  
};


function markupBreed(array) {
    return array.map(({id, name}) => {
        breedsCollection.insertAdjacentHTML("beforeend", `<option value="${id}">${name}</option>`);
       
    })
    };



