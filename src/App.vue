<template>
  <div id="app">
    <div id="nav">
      <p v-for="(r,i) in routes" :key="i">
        <!-- router-link의 속성을 to에서 :to로 바꾼다. -->
        <router-link :to="r.path">{{ r.name}}</router-link>
      </p>
    </div>
    <router-view/>
  </div>
</template>


<script>
import Route from './router'//라우팅 목록 받기.

export default {
    data (){
      return {
        routes:Route.routes,
      }
    },  
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.center {
  /* horizon center */
  margin-left: auto;
  margin-right: auto;
}
.vertical_center{
  /* vertical center */
  margin-top: 50%;
  transform: translate(0, -50%);
}

</style>
