<template>
  <main>
    <p>양식 파트</p>
    Form {{data}}
    <Input v-model="draft"/>
  </main>
</template>

<script>

export default {
  // name: '',
  mixins: [],
  components: {
    Input: () => import(`@/components/depth/Input.vue`)
  },
  data () {
    return {

    }
  },
  model: {
    prop: 'data',
    event: 'change',
  },
  props: ['data'],
  computed: {
    draft: {
      get(){
        return this.data
      },
      set(draft){
        this.$emit('change', draft)
      },
    },
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
