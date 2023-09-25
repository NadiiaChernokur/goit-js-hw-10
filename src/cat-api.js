import axios from "axios";

// const  axios  =  require ( 'axios' ).default ;
axios.defaults.headers.common["x-api-key"] = "live_zpHZJryc8jZSMOKlS0o6oC7RtCLwTPfisNLPVimSooL3DRtQQiHyprH6BEG5hGjJ";


export  function fetchBreeds() {
   
    const url = `https://api.thecatapi.com/v1/breeds`;
    // axios.get(`https://api.thecatapi.com/v1/breeds`)
    return  fetch(`${url}?api_key=${"x-api-key"}`)
    .then(response => {
      if(!response.ok) {
          throw new Error (response.statusText)
      }
      return response.json();
    })
  };
    
    export function fetchCatByBreed(breedId) {
     
     const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
     const api_key = "live_zpHZJryc8jZSMOKlS0o6oC7RtCLwTPfisNLPVimSooL3DRtQQiHyprH6BEG5hGjJ"
    
     return  fetch(`${url}&api_key=${api_key}`)
         
    .then(response => {
     if(!response.ok) {
        throw new Error (response.statusText)
            }
      return response.json();
     
     
          })
        };

    
      