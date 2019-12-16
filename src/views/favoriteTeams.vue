<template>
  <teamsCard :teamsPrint="teamsList" :favView="true"></teamsCard>
</template>

<script>
import services from '@/services/index';
import teamsCard from "@/components/teamsCard";
export default {
  name: "teamList",
  components : {
    teamsCard
  },
  data(){
    return{
      teamsList: null,
      img: ''
    }
  },
  mounted:function () {
    services.getRequest('https://api.collegefootballdata.com/teams').then(value => {
      let idTeam = localStorage.getItem('favoriteList')
      idTeam = idTeam.split(',')
      let favoriteTeam = []
      idTeam.forEach(element1 => {
        value.forEach(element2 => {
          if (element1 === element2.id.toString()) {
           favoriteTeam.push(element2)
          }
        });
      });
    this.teamsList = favoriteTeam    
    })
  }
}
</script>

