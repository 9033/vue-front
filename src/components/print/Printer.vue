<template>
  <main>
    <viewer
      :is="viewer"
      v-if="viewer && data"
    />
  </main>
</template>

<script>

export default {
  // name: '',
  mixins: [],
  components: {
    // viewer: null,
  },
  data () {
    return {
      viewer: null,
    }
  },
  model: {},
  props: ['data'],
  computed: {
    getComponent(){
      if(typeof this.data === 'function'){
        return () => import(`./type/function.vue`)
      } else if(Array.isArray(this.data)){
        return () => import(`./type/array.vue`)
      }
      return null
    }
  },
  methods: {

  },
  watch: {

  },
  created () {

  },
  mounted () {
    // this.viewer = () => import(`./type/undefined.vue`)
    this.getComponent()
    .then(()=>{
      this.viewer = () => this.getComponent()
    })
    .catch(()=>{
      this.viewer = () => import(`./type/undefined.vue`)
    })
  },
  beforeDestroy () {

  },
}
</script>

<style scoped>

</style>
