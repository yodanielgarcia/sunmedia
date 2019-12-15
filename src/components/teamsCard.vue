<template>
<b-container>
  <b-row> 
    <b-col cols="12" sm="4" class="my-1" v-for="teams in paginatedItems" :key="teams.id">
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6" v-for="logo in teams.logos" :key="logo">
            <b-card-img v-bind:src="logo" class="rounded-0" onerror="this.style.display='none'"></b-card-img>
          </b-col>
          <b-col md="12">
            <b-card-body :title="teams.abbreviation">
              <b-card-text>
                {{teams.school}}
                Mascota {{teams.mascot}}
              </b-card-text>
              <div v-bind:style="'display: inline-block; width: 100px; height: 100px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background: ' + teams.color">
              </div>
              <div v-bind:style="'display: inline-block; width: 100px; height: 100px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background: ' + teams.alt_color">
              </div>
              <b-button pill variant="primary">Add Favorite </b-button>
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
      teamsPrint: Array,
      default: null
  },
  data(){
    return{
      teams: null,
      paginatedItems: null,
      perPage: 3,
      totalRows: null,
      currentPage: 1
    }
  },
  watch: {
    teamsPrint: function (){
      console.log(this.teamsPrint);
      
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
    paginate (page_size, page_number) {
      let itemsToParse = this.teams
      this.paginatedItems = itemsToParse.slice(page_number * page_size, (page_number + 1) * page_size);
    },
    onPageChanged(page){
      this.paginate(this.perPage, page - 1)
    }
  }
}
</script>

