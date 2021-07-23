<template>
  <main>
    <YourComponent
      :title="title"
    />
  </main>
</template>

<script>

export default {
  // name: '',
  mixins: [],
  components: {
    YourComponent: {
      name: 'YourComponent',
      props: ['title'],
      render(h){
        let t = []
        for(let _t of this.title){
          t.push(<p>{_t.name}</p>)
          if(Array.isArray(_t.title)){
            t.push(<YourComponent title={_t.title}></YourComponent>)
          }
        }
        return (
          <main>
            { t }
          </main>
        )
      }
    },
  },
  data () {
    return {
      title:[
        {
          name: '대통령',
          title: [
            {
              name: '노무현',
            },
            {
              name: '이명박',
            },
          ],
        },
        {
          name: '뜨어큰',
        },
        {
          name: '서울',
          title: [
            {
              name: '노원구',
              title: [
                {
                  name: '월계',
                },
                {
                  name: '상계',
                },
              ],
            },
            {
              name: '도봉구',
            },
          ],
        },
      ],
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
