<template>
  <main>
    <component 
      :is="MyComponent"
      title="가짜"
    />
    <a-divider/>
    <component 
      :is="MyComponent"
      title="진짜"
    />
    <a-divider/>
    <OurComponent
      title="진짜 our"
    />
    <a-divider/>
    <OurComponent
      title="가짜 our"
    />
  </main>
</template>

<script>
const OurComponent = ({ props }) => 
<main>
  <p>진짜? { props.title }</p>
  <p>가짜?</p>
  <a-input
    value={props.title}
  />
</main>

export default {
  // name: '',
  mixins: [],
  components: {
    OurComponent,
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
        render(h){
          return (
            <main>
              <p>진짜? { this.title }</p>
              <p>가짜?</p>
              <a-input
                value={this.title}
              />
            </main>
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
