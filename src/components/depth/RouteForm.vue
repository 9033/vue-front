<template>
  <main>
    <p>양식</p>
    RouteForm{{data}}
    <a-button @click="cancel">cancel</a-button>
    <Form
      v-model="alpha"
    />
    <Form
      v-model="data['beta']"
    />
  </main>
</template>

<script>

export default {
  // name: '',
  mixins: [],
  components: {
    Form: () => import(`@/components/depth/Form.vue`)
  },
  data () {
    return {
      data: {
        alpha: 'Alpha', // 해당하는 key에 초기값이 있어야함
        beta: 'Beta', // 해당하는 key에 초기값이 있어야함
      },
      default: {
        alpha: 'alpha',
        beta: 'beta',
      },
    }
  },
  model: {},
  props: [],
  computed: { // v-model=data['alpha'] 대신 computed 이용
    alpha: {
      get(){
        return this.data['alpha']
      },
      set(alpha){
        this.data['alpha'] = alpha
      },
    },
  },
  methods: {
    cancel(){ // 편집한 값을 다시 되돌림
      this.data = { ...this.default }
    }
  },
  watch: {
    alpha(){ // 됨
      console.log(this.alpha)
    },
    data(){ // 안됨
      console.log(this.data)
    },
    ['data.beta'](){ // 됨
      console.log(this.data.beta)
    },
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
