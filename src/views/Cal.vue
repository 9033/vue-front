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
    return{//변수 정의하는 부분
      aaa:"한조2"
    }
  },
  mounted(){
  },
}
</script>

<style>

</style>