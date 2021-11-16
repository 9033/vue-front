<template>
  <main>
    <table>
      <tr v-for="(c, tr_idx) in (new Array(30))" :key="`tr-${tr_idx}`">
        <td v-for="(c, td_idx) in (new Array(30))" :key="`tr-${tr_idx}-td-${td_idx}`">
          <div></div>
        </td>
      </tr>
    </table>
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
table {
  border: 3px dashed tomato;
}
table div {
  width: 100px;
  height: 100px;
}
table td {
  border: 1px dashed tomato;
}
main {
  width: calc( 100vw - 120px);
  height: calc( 100vh - 120px);
  overflow: scroll;
}
</style>
