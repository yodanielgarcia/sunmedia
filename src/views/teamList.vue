<template>
  <teamsCard :teamsPrint="teamsList"></teamsCard>
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
      this.teamsList = value
    })
  }
}
</script>

