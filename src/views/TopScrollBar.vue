<template>
  <main>
    <a-anchor>
      <div class="on-top-scroll-bar">
        <div>
        </div>
      </div>
    </a-anchor>
    <div class="content">
      <table>
        <tr v-for="(c, tr_idx) in (new Array(30))" :key="`tr-${tr_idx}`">
          <td v-for="(c, td_idx) in (new Array(30))" :key="`tr-${tr_idx}-td-${td_idx}`">
            <div></div>
          </td>
        </tr>
      </table>
    </div>
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
    // sync size
    const onresize = ()=>{
      const content = document.querySelector("div.content")
      const topScrollBarContent = document.querySelector("div.on-top-scroll-bar div")
      topScrollBarContent.style.width = `${content.scrollWidth}px`
    }
    onresize()
    // sync scroll
    const content = document.querySelector("div.content")
    const topScrollBar = document.querySelector("div.on-top-scroll-bar")
    const set = (e1, e2) => {
      const f = t => e => {
        t.scrollLeft = e.target.scrollLeft
      }
      e1.onscroll = f(e2)
      e2.onscroll = f(e1)
    }
    set(content, topScrollBar)
    // content.onresize = onresize
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
div.on-top-scroll-bar {
  width: calc( 100vw - 120px);
  /* height: calc( 100vh - 120px); */
  overflow-x: scroll;
  overflow-y: hidden;
  position: sticky;
}
div.on-top-scroll-bar div {
  height: 1px;
}
div.content {
  width: calc( 100vw - 120px);
  /* height: calc( 100vh - 120px); */
  height: fit-content;
  overflow-x: scroll;
}
</style>
