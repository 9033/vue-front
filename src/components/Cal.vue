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
    myname:{//없으면 myname이 없다고 지랄남.
      type:String,//받은 데이터의 타입을 확인. (없어도 실행됨.)
    },
  },
  created:()=>{
    console.log('cal cal created');//실행되는 순서: data -> created -> mounted
  },
  mounted(){
    console.log('cal cal mounted');//실행되는 순서: data -> created -> mounted
    // console.log(this.myname)//전달받은 myname을 확인해봄.
  },
  data(){
    console.log("Cal Cal data");//실행되는 순서: data -> created -> mounted
    console.log(this.myname)//전달받은 myname을 확인해봄.
    return {}
  },
  beforeCreate:function(){
    console.log("Cal Cal beforeCreate");//실행되는 순서: beforeCreate -> data
  },
  /*
    $store는 vuex. @/store/index.js에 정의해 놓음.
  */
  computed: {
    // cnt:this.$store.state.count,//$store를 못읽는다고 함.
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