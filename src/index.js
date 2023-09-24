import axios from "axios";
import {fetchBreeds, fetchCatByBreed}  from "./cat-api"


// axios.defaults.headers.common["x-api-key"] = "live_zpHZJryc8jZSMOKlS0o6oC7RtCLwTPfisNLPVimSooL3DRtQQiHyprH6BEG5hGjJ";

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
    console.log(resalt)
   
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
        breedsCollection.insertAdjacentHTML("afterbegin", `<option value="${id}">${name}</option>`);
    })
    };



