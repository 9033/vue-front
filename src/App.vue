<template>
  <div id="app">
    <a-menu mode="horizontal">
      <a-menu-item v-for="r in routes" :key="r.name">
        <router-link :to="r.path">{{ r.name}}</router-link>
      </a-menu-item>
    </a-menu>
    <br/>
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
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
