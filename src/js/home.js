import {MovieList} from "../js/MovieArray.js";

const STORAGE_KEY = "sign-in-user-storage-key"

const MY_WATCHLIST_KEY = "watchlist-storage-key"

Vue.createApp(){
  data(){
    return {
      movies: [

      ]
    }
  }
}





// User clicks on Avatar button
function myButton(){
  getElementById('myDropdown').classList.toggle('show');
}

//Close the myDropdown
window.onclick = function(event){

}


// Movie Carousel 
const Example = {
    data() {
        return {
            list: [
                {
                    image: 'https://picsum.photos/id/100/200/100',
                    title: 'Asdasdas',
                    description: 'asdasd',
                },
                {
                    image: 'https://picsum.photos/id/200/200/100',
                    title: 'Asdasdas',
                    description: 'asdasd',
                },
                {
                    image: 'https://picsum.photos/id/300/200/100',
                    title: 'Asdasdas',
                    description: 'asdasd',
                },
                {
                    image: 'https://picsum.photos/id/400/200/100',
                    title: 'Asdasdas',
                    description: 'asdasd',
                },
                {
                    image: 'https://picsum.photos/id/500/200/100',
                    title: 'Asdasdas',
                    description: 'asdasd',
                }
            ]
        }
    },
