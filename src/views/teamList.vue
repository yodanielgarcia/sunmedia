<template>
<div>
  <div class="container flex flex-wrap -mb-4" v-for="teams in teamsList" :key="teams.id">
    <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" :title="teams.abbreviation">
      <div v-for="logo in teams.logos" :key="logo">
        <img  v-bind:src="logo" />
      </div>
    </div>
    <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <div class="text-gray-900 font-bold text-xl mb-2">{{teams.school}}</div>
        <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
      </div>
      <div class="flex items-center">
        <p v-bind:style="'width: 100px; height: 100px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background: ' + teams.color">
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import services from '@/services/index';
export default {
  name: "teamList",
  data(){
    return{
      teamsList:'',
      img: ''
    }
  },
  beforeCreate:function () {
    services.getRequest('https://api.collegefootballdata.com/teams').then(value => {
      this.teamsList = value
    })
  }
}
</script>

