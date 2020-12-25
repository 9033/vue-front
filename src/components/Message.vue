<template>
  <main>
    <slot
      name="myButton"
      :clicked="clicked"
    >
      <a-button
        @click="clicked"
      >
        Message
      </a-button>
    </slot>
  </main>
</template>

<script>

export default {
  name:'Message',
  data () {
    return {
      myMessage:'Message',
    }
  },
  methods: {
    clicked(){
      this.$message.success(this.myMessage)
    }
  },
}
</script>

<style scoped>

</style>
