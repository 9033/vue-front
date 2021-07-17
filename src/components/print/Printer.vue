<template>
  <main>
    <viewer
      :is="viewer"
    />
  </main>
</template>

<script>

export default {
  // name: '',
  mixins: [],
  components: {

  },
  data () {
    return {

    }
  },
  model: {},
  props: ['data'],
  computed: {
    viewer(){
      if(typeof this.data === 'function'){
        return () => import(`./type/function.vue`)
      } else if(Array.isArray(this.data)){
        return () => import(`./type/array.vue`)
      } else {
        return () => import(`./type/undefined.vue`)  
      }
    }
  },
  methods: {

  },
  watch: {

  },
  created () {

  },
  mounted () {

  },
  beforeDestroy () {

  },
}
</script>

<style scoped>

</style>
