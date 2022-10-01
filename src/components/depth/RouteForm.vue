<template>
  <main>
    <section>
      <p>양식</p>
      <pre>{{JSON.stringify(data, null, 2)}}</pre>
      <a-button @click="cancel">cancel</a-button>
      <Form
        v-model="alpha"
      />
      <Form
        v-model="data['beta']"
      />
    </section>
    <section>
      <p>사람</p>
      <pre>{{JSON.stringify(human, null, 2)}}</pre>
      <Form2
        :cols="['이름','나이','성별']"
        v-model="human"
      />
      <Form2
        :cols="['취미','특기','주소']"
        v-model="human"
      />
    </section>
  </main>
</template>

<script>

export default {
  // name: '',
  mixins: [],
  components: {
    Form: () => import(`@/components/depth/Form.vue`),
    Form2: () => import(`@/components/depth/Form2.vue`),
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
      human: {
        '이름': '',
        '나이': '',
        '성별': '',
        '취미': '',
        '특기': '',
        '생년월일': '',
        '주소': '',
        '학위': '',
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
    ['human'](){ // 안됨
      console.log(this.human)
    },
    ['human.나이'](){ // 됨
      console.log('나이', this.human['나이'])
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
section {
  border: 1px solid black;
  margin-top: 2px;
  margin-bottom: 2px;
}
</style>
