<template>
  <main>
    <Cal :myname="aaa" />
    <AInputNumber/>
  </main>
</template>

<script>
import Cal from '@/components/Cal.vue' //하위 컴포넌트를 임포트함. (이 컴포넌트와는 파일명과 컴포넌트명이 같고 위치는 다름.)
import AInputNumber from '@/components/AInputNumber.vue'

export default {
  components: {
    Cal,//imported component가 template에 뿐만 아니라 여기에도 있어야함.
    AInputNumber
  },
  data(){//정의할 변수를 넣은 Object를 반드시 리턴해야함. (그래서 반드시 함수여야함.)
    console.log("Cal data");
    return{//변수 정의하는 부분
      aaa:"한조2"
    }
  },
  mounted(){
  },
}
</script>

<style>

</style>