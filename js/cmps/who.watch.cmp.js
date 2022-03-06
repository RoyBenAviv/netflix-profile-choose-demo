export default {
    template: `
       <section class="who-watch">
   <div class="logo"><img class="netflix-logo" src="netflix-images/logo.png"></div>
   <div v-bind:style="{display: isActive ? 'none' : 'block'}" style="height: 100vh; margin-top: 100px">
      <h1 class="whos-watching">Who's watching?</h1>
      <div class="profile-avatars">
         <ul>
            <li v-for="currUser in users">
               <div v-on:click="openModal(currUser.id)" class="user">
                  <img v-bind:src="'netflix-images/' + currUser.url" /> 
                  <p>{{currUser.name}}</p>
               </div>
               <div v-bind:style="{display: showManage ? 'flex' : 'none'}" class="remove" v-on:click="removeUser(currUser.id)"><img src="netflix-images/delete.png"></div>
            </li>
            <div v-on:click="checkUsers"  class="add-user">
               <img class="plus" src="netflix-images/plus.png">
               <p>Add Profile</p>
            </div>
         </ul>
      </div>
      <div v-bind:style="{display: showModal ? 'block' : 'none'}" class="modal">
                  <img class="bg" src="netflix-images/background.jpg">
                  <div class="modal-content">
                  <img class="img-modal">
                  <h1>User: <span class="name-modal"></span></h1>
                  <h1>Favorite shows: <span class="fav-modal"></span></h1>
                  <button class="cancel" v-on:click="showModal = !showModal">CLOSE</button>
                  </div>
               </div>
      <button v-on:click="showManage = !showManage" class="manage-profiles">manage proflies</button>
   </div>
   <div v-bind:style="{display: isActive ? 'flex' : 'none'}" class="add-user-container">
      <h1>Add Profile</h1>
      <p>Add a profile for another person watching Netflix.</p>
      <hr>
      <div class="user-input">
         <img src="netflix-images/5.png"/> <input type="text"> 
         <div class="checkbox">
            <span>Favorite Shows?</span>
            <div><label for="got">Game of Thrones</label> <input type="checkbox" id="got" value="Game of Thrones" v-model="favShows"></div>
            <div><label for="bb">Breaking Bad</label> <input type="checkbox" id="bb" value="Breaking Bad" v-model="favShows"></div>
            <div><label for="dexter">Dexter</label><input type="checkbox" id="dexter" value="Dexter" v-model="favShows"></div>
         </div>
      </div>
      <hr>
      <div class="buttons">
         <button class="continue" v-on:click="addUser">continue</button> <button v-on:click="isActive = !isActive" class="cancel">cancel</button>
      </div>
   </div>
</section>
        `,

    data() {
        return {
            users: [
                {id: 'u101', name: 'Brain', url: '1.png', favorites: ['Game of Thrones, Money Heist']},
                {id: 'u102', name: 'David', url: '2.png', favorites: ['Black Mirror']},
                {id: 'u103', name: 'John', url: '3.png', favorites: ['Walking Dead, South Park']},
                {id: 'u104', name: 'Roy', url: '4.png', favorites: ['Squid Games']}
            ],
            isActive: false,
            showModal: false,
            showManage: false,
            favShows: []
        };
    },

    methods: {
        removeUser(id) {
            const idx = this.users.findIndex(user => user.id === id)
            this.users.splice(idx, 1)
        },
        checkUsers() {
            if(this.users.length === 5) return
            this.isActive = true
            
        },
        addUser() {
            const id = 'u' + Date.now() % 1000;
            const name = document.querySelector("input[type=text]").value
            const favorites = this.favShows
            console.log(favorites)
            const movie = {id, name, url: '5.png', favorites}
            this.users.push(movie)
            this.isActive = false
            document.querySelector("input[type=text]").value = ''
        },
        openModal(id) {
            this.showModal = true
            const user = this.users.find(user => user.id === id)
            document.querySelector(".name-modal").innerText = user.name
            document.querySelector(".img-modal").src = 'netflix-images/' + user.url
            user.favorites.map(favorite => {
               document.querySelector('.fav-modal').innerText = favorite
            })

        }
    },
    computed: {
        },


        formatedSecs() {

        },

}
