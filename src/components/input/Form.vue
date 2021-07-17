<!--
value1이나 value2의 값을 변경하면 value3을 업데이트
-->
<template>
  <main>
    <section>
      <h1>
        value1 + value2 = value3
      </h1>
      {{ values }}
      <InputNumber
        size="large"
        :value="values.value1"
        @change="v=>{ onChange('value1', v) }"
      />
      <InputNumber
        size="large"
        :value="values.value2"
        @change="v=>{ onChange('value2', v) }"
      />
      <InputNumber
        size="large"
        :value="values.value3"
        @change="v=>{ onChange('value3', v) }"
      />
    </section>
    <br>
    <section>
      <h1>
        무력 + 지력 + 정치 + 매력 = 합계
      </h1>
      {{ namedValues }}
      <div
        class="form-input"
        v-for="name in Object.keys(namedValues)"
        :key="name"
      >
        <label>{{ name }}</label>
        <InputNumber
          size="large"
          :value="namedValues[name]"
          @change="v=>{ onChangePoint(name, v) }"
        />
      </div>
    </section>
  </main>
</template>

<script>
import InputNumber from '@/components/input/InputNumber.vue'

export default {
  // name: '',
  mixins: [],
  components: {
    InputNumber,
  },
  data () {
    return {
      values:{
        value1:0,
        value2:0,
        value3:0,
      },
      namedValues:{
        '무력':0,
        '지력':0,
        '정치':0,
        '매력':0,
        '합계':0,
      },
    }
  },
  model: {},
  props: [],
  computed: {

  },
  methods: {
    calValues(){
      this.values['value3'] = this.values['value1'] + this.values['value2']
    },
    onChange(name, v){
      this.values[name] = v
      this.calValues()
    },
    onChangePoint(name, v){
      this.namedValues[name] = v
      let total = 0
      for(let name of ['무력','지력','정치','매력']){
        total += this.namedValues[name]
      }
      this.namedValues['합계'] = total
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
.form-input{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
