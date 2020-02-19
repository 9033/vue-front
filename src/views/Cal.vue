<template>
  <Cal :myname="aaa" />
</template>

<script>
import Cal from '@/components/Cal.vue'

export default {
  components: {
    Cal
  },
  data(){
    console.log("Cal data");
    return{}
  },
  mounted(){
    console.log("mounted");
    
    this.aaa = "한조"
  },
}
</script>

<style>

</style>