const breedsCollection = document.querySelector(".breed-select");
const catInfo = document.querySelector(".cat-info");

export  function fetchBreeds() {
   
    const url = `https://api.thecatapi.com/v1/breeds`;
    const api_key = "live_zpHZJryc8jZSMOKlS0o6oC7RtCLwTPfisNLPVimSooL3DRtQQiHyprH6BEG5hGjJ"

  return  fetch(`${url}?api_key=${api_key}`)
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

    
      