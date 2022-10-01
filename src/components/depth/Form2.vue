<template>
  <main>
    <p>여러 입력 칸</p>
    <!-- <pre>{{JSON.stringify(data, null, 2)}}</pre> -->
    <span v-for="col in cols" :key="col">
      <Input
        :label="col"
        v-model="draft[col]"
      />
    </span>
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
  props: ['data', 'cols'],
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
