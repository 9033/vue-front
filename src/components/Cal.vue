<template>
<div id='cal'>
  <p>{{ myname }}</p>
  <p>{{ count }}</p>
  <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>    
</div>
</template>

<script>
/*
vuex: 하나의 변수를 여러 계층의 컴포넌트에서 공유.
*/
export default {
  name: 'Cal',
  props:{
    myname:{
      // type:String,
    },
  },
  mounted(){
    console.log(this.myname)
  },
  data(){
    console.log("Cal Cal  data");
    return {}
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  }
}


</script>

<style>

</style>