<template>
  <div id="min" class='field'>
    <h1 title="누나품">루나폴</h1>
    <p>적중: <a-input-number :min="0" type="number" :class="underMinClass" title="적중" v-model="spec['적중']"/></p>
    <p>치명: <a-input-number :min="0" type="number" title="치명" v-model="spec['치명']"/></p>
    <p>만적: {{ luna['만적'] }}</p>
    <p>치명 보정: {{ luna['치명'] }}%</p>
    <p>치명 보정 + 라이트닝 (10%): {{ luna['치명']+10 }}%</p>
  </div>
</template>

<script>
export default {
  computed: {
    underMinClass() {
      return (this.spec['적중'] < this.luna['만적']) ? 'underMin' : '';
    },
    luna() {
      const reqSpec = {
        '적중': 2100,
        '치명': 80,
      }

      return {
        '만적': reqSpec['적중'],
        '치명': Number(this.spec['치명']) + Number((this.spec['적중'] - reqSpec['적중']) / 50)
      }
    }
  },
  data() {
    return {
      spec: {
        '적중': 2100,
        '치명': 70,
      }
    }
  }
}
</script>

<style scoped>
body {
  background-color: lightblue;
}

/* horizon align */
.field {
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
}

div.field>* {
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
}

/* font size */
div.field>p,
div.field>p>input {
  font-size: x-large;
}

/* under cut off */
.underMin {
  background-color: red;
}
</style>