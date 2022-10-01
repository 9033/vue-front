<template>
  <main>
    <P>오늘도 작업 하다가 잘 안되는 부분만 따로 떼서 테스트</P>
    <P>하위 컴포넌트에서 입력값을 변경시 상위 컴포넌트로 값이 넘어감</P>
    <P>cancel버튼을 누르면 상위 컴포넌트에 있던 변경전의 값이 하위 컴포넌트에 적용</P>
    <RouteForm/>
    <P>@change를 지정하는 대신 v-model를 지정</P>
    <P>watch 대신 computed의 setter로 변경하는 이벤트를 발생 시킴</P>
    <P>최상단의 Object에서 사용하는 key값에 초기값을 넣어야함</P>
  </main>
</template>

<script>

export default {
  // name: '',
  mixins: [],
  components: {
    RouteForm: () => import(`@/components/depth/RouteForm.vue`)
  },
  data () {
    return {

    }
  },
  model: {},
  props: [],
  computed: {

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
