<template>
  <main class="TransitionAndAnimation">
    <section class="mario-world">
      <div class="world-map" id="mario_1-1">
        <div class="world-title element-center">
          <p class="element-center">world 1-1</p>
        </div>
      </div>
    </section>
    <section class="mario-world">
      <div class="world-map" id="mario_2-2">
        <div class="world-title element-center">
          <p class="element-center">world 2-2</p>
        </div>
      </div>    
    </section>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url(../style/TransitionAndAnimation.css);
#mario_1-1{
  background-image: url(../assets/mario-1-1.gif);
}
#mario_2-2{
  background-image: url(../assets/mario-2-2.gif);
}
</style>
