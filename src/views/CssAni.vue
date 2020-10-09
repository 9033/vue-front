<template>
  <main>
    BPM: <a-input-number v-model="bpm" :min="1" /> <a-input style="width: 50px" :maxLength="2" v-model="obj" />
    <div class="css_ani center">
      <p class="obj vertical_center" :style="ani">{{obj}}</p>
      <!-- <p>클라우드</p> -->
    </div>
  </main>
</template>

<script>
export default {
  computed:{
    ani(){
      return {
        animationDuration:`${60/this.bpm}s`,
      }
    }
  },
  data(){
    return {
      bpm: 170,
      obj:'💩',
    }
  }
}
</script>

<style scoped>
.css_ani {
  border: 1px solid black;
  width: 500px;
  height: 500px;
}
.obj{
  animation: mymove 1s infinite;
}
@keyframes mymove{
  from {
    font-size:50px;
  }
  to {
    font-size:250px;
  }
}
</style>
