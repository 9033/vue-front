<template>
  <main>
    <a-input-number
      :formatter="formatter"
      :parser="parser"
      v-model="value"
    />
  </main>
</template>

<script>
/*
3자리수 콤마.
1. 정수일때: 음수일때 콤마 추가.
2. 소수점이 있을때: 소수점 앞만 콤마 추가.
3. 소수점을 입력하기 시작했을때: 소수점까지 나오게함.
4. 화살표를 클릭했을때: formatter에 value가 정수로 들어옴.
5. -를 입력하고 화살표를 클릭했을때: 0으로 취급.
6. 숫자를 계속 입력할때: 보이는 값(String)과 저장하는 값(Number)이 달라저서 유효 자리수 제한.
*/
export default {
  // name: 'AInputNumber', // 지정하면 스택 초과 오류.
  mixins: [],
  components: {

  },
  data () {
    return {
      value:0,
      valueNumber:0,
      valueString:'0',
    }
  },
  model: {},
  props: [],
  computed: {

  },
  methods: {
    countDigits(stringNumber){ // 유효자리수
      const digits = stringNumber.match(/\d/g) || []
      return digits.length
    },
    parseNumber(stringNumber){
      if(stringNumber === '-')return 0 // 음수를 입력하기 시작할떄
      return Number(stringNumber.replace(/[,]/g,''))
    },
    formatNumber(stringNumber){
      const a = stringNumber.match(/[-]{0,1}[\d,]*/) || [''] // 음수기호 + 소숫점 앞.
      const b = stringNumber.match(/[.]\d*/) || [''] // 소숫점 + 소숫점 뒤.
      // console.log(a,b);
      return a[0].replace(/[,]/g,'').replace(/\B(?=(\d{3})+(?!\d))/g, ",") + b[0];
    },
    formatter(value){
      // console.log('formatter', value, typeof value);
      // console.log('valueString', this.valueString, 'valueNumber', this.valueNumber);
      if(typeof value === 'string'){ // 화면갱신
        return this.valueString
      }
      // if(typeof value === 'number') // 사용자 입력 parser실행후 혹은 화살표 누름
      if(this.valueNumber === value){
        return this.valueString 
      }
      // 화살표 누름
      this.value = this.parser(`${value}`)
      // if(this.countDigits(`${value}`) > 15){
      //   this.value = this.valueNumber
      // }
      // this.valueNumber = value
      // this.valueString = this.formatNumber(`${value}`)
      return this.valueString
    },
    parser(value){ // 사용자 입력 해석
      // console.log('parser', value, typeof value)
      const nValue = this.parseNumber(value)
      if(Number.isNaN(nValue) || this.countDigits(value) > 15){ // 입력에 오류가 있으면 이전 숫자 유지.
        return this.valueNumber
      }
      this.valueNumber = nValue
      this.valueString = this.formatNumber(value)
      return this.valueNumber
    },
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
