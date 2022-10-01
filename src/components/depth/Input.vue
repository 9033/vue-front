<template>
  <main>
    <!-- Input <code>{{data}}</code> -->
    <label for="text-input">{{label}}</label>
    <a-input id="text-input" class="input-box" v-model="draft"></a-input>
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
  model: {
    prop: 'data',
    event: 'change',
  },
  props: ['data', 'label'],
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
.input-box{
  width: 512px;
}
</style>
