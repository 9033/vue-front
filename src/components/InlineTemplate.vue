<template>
  <main>
    <component 
      :is="MyComponent"
      title="가짜"
    />
    <component 
      :is="MyComponent"
      title="진짜"
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
  props: [],
  computed: {
    MyComponent(){
      return {
        props: ['title'],
        render(){
          return (
            <div>
              <p>진짜? { this.title }</p>
            </div>
          )
        }
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
