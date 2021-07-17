<template>
  <main>
    <a-input-number
      :value="value"
      @change="onChange"
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
  props: {
    value:{
      type: Number,
      default: 0,
    }
  },
  computed: {

  },
  methods: {
    onChange(v){
      this.$emit('change',v)
    }
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
