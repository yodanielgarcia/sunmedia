<template>
<b-container>
  <b-row> 
    <b-col style="margin: 0 auto; float: none;" cols="12" sm="4" class="my-1" v-for="teams in paginatedItems" :key="teams.id">
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6" v-for="logo in teams.logos" :key="logo">
            <b-card-img v-bind:src="logo" class="rounded-0" onerror="this.style.display='none'"></b-card-img>
          </b-col>
          <b-col md="12">
            <b-card-body :title="teams.abbreviation">
              <b-card-text>
                <b-link @click="goTo(teams.id)">{{teams.school}}</b-link>
                <h4 @click="goTo(teams.id)" v-if="teams.conference != null">Conferencia: {{teams.conference}} Division: {{teams.division}}</h4>
                <p> Mascota {{teams.mascot}}</p>
              </b-card-text>
              <div v-bind:style="'display: inline-block; width: 100px; height: 100px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background: ' + teams.color">
              </div>
              <div v-bind:style="'display: inline-block; width: 100px; height: 100px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background: ' + teams.alt_color">
              </div>
              <div>
                <b-button pill v-if="favView" @click="deleteFav(teams.id)" variant="danger">Delete</b-button>
                <b-button v-b-modal.modal-1 pill variant="primary" @click="addTeamFavoriteList(teams.id)">Add Favorite </b-button>
                <b-modal id="modal-1" title="BootstrapVue">
                  <p class="my-4">Comentarios</p>
                  <input type="text" v-model="coment">
                </b-modal>
              </div>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
  </b-row> 
  <b-row>
    <b-col md="6" class="my-1">
      <b-pagination @change="onPageChanged" :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
    </b-col>
  </b-row>
</b-container>
</template>

<script>
export default {
  name: "teamsCards",
  props:{
      teamsPrint: {teamsPrint: Array,
      default: null
      },
      favView: Boolean
  },
  data(){
    return{
      teams: null,
      paginatedItems: null,
      perPage: 3,
      totalRows: null,
      currentPage: 1,
      coment: ''
    }
  },
  watch: {
    teamsPrint: function (){
      this.teams= this.teamsPrint,
      this.paginatedItems =this.teamsPrint,
      this.totalRows= this.teamsPrint.length,
      this.paginate(this.perPage, 0)
    }
  },
  computed: {
    pageCount() {
      let l = this.totalRows,
        s = this.perPage;
      return Math.floor(l / s);
    }
  },
  methods: {
    goTo (id){
      this.$router.push({
        name:'team',
        params: {teamId:id}
      })
    },
    paginate (page_size, page_number) {
      let itemsToParse = this.teams
      this.paginatedItems = itemsToParse.slice(page_number * page_size, (page_number + 1) * page_size);
    },
    onPageChanged(page){
      this.paginate(this.perPage, page - 1)
    },
    addTeamFavoriteList (id) {
      let favorileTeams = localStorage.getItem('favoriteList')
      let noExist = false
      let Existnumber = 0
      if (favorileTeams != null) {
        favorileTeams = favorileTeams.split(',')
        let data = favorileTeams.find(Element => Element === id.toString())        
        if (typeof data === 'undefined') {
          favorileTeams.push(id)
        } else {
          alert('ya es favorito')
        }
        
      } else {
        favorileTeams = [id]
      }
      localStorage.setItem('favoriteList', favorileTeams);
    },
    deleteFav (id) {
      let favorileTeams = localStorage.getItem('favoriteList')
      favorileTeams = favorileTeams.split(',')
      let index = 0
      favorileTeams.forEach(element => {
        if (element === id.toString()) {
          favorileTeams.splice(index,1)
        }
        index++
      });
      localStorage.setItem('favoriteList', favorileTeams);
    }
  }
}
</script>

