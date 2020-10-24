<template>
  <main>
    BPM: <a-input-number v-model="bpm" :min="1" /> <a-input style="width: 50px" :maxLength="2" v-model="obj" />
    <span class="clicked" v-for="t in this.clickedTime" :key="t">✔</span>
    <div class="css_ani center vertical_center" @click="clickBPM">
      <p class="obj" :style="ani">{{obj}}</p>
      <!-- <p>클라우드</p> -->
    </div>
  </main>
</template>

<script>
import {Timeout, Interval} from '@/script/timeFn.js'
export default {
  computed:{
    ani(){
      return {
        animationDuration:`${60/this.bpm}s`,
      }
    }
  },
  methods:{
    clickBPM(){ // guess BPM #5
      const now_ms = Date.now()

      this.clickedTime.push(now_ms)

      this.$nextTick(()=>{
        this.clearClickedTime.set(()=>{ // reset after 3000ms
          this.clickedTime = []
        }, 3000)
        const clicked = document.querySelectorAll('.clicked')
        for(let c of clicked){ // reset fadeout animation
          c.classList.remove("clicked");
          void c.offsetWidth; // must do this
          c.classList.add("clicked");
        }
      })

      if(this.clickedTime.length >= 4){ // guass when 4 times and more
        const terms = this.clickedTime.length - 1
        const x1 = this.clickedTime[0] // first
        const x2 = this.clickedTime[this.clickedTime.length - 1] // last
        const avg = (x2 - x1)/terms
        this.bpm = Math.round(60000/avg)
      }
    },
  },
  mounted(){
    // this.tester.set(this.clickBPM, 60000/150)
  },
  beforeDestroy(){
    this.tester.clear()
    this.clearClickedTime.clear()
  },
  data(){
    return {
      tester:new Interval(), // clickBPM 테스터
      clickedTime:[],
      clearClickedTime:new Timeout(),
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
  margin-top: 0;
  margin-bottom: 0;
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
.clicked{
  animation: fadeout 3.5s 1;
}
@keyframes fadeout{
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
