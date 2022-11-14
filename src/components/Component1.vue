<template>
  <div class="h3">1. fullscreen</div>
<!--  <div class="fullscreen" style="background-color:lightskyblue"></div>-->

  <div class="h3">2. full-width</div>
  <div style="width: 300px; height: 300px; background-color:lightskyblue">
    <div style="height: 100px; background-color: yellow" class="full-width" ></div>
  </div>

  <div class="h3">3. position: relative</div>
  <div>relative position is positioned relative to its normal position</div>
  <div style="position: relative; left: 30px">
    This div element has position: relative;
  </div>

  <div class="h3">4. position: fixed</div>
  <div style="position: fixed; bottom: 0; right: 0; width: 300px; background-color: pink">
    An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled:
  </div>

  <div class="h3">5. position: absolute</div>
  <!--<div style="position: relative; width: 400px; height: 200px; border: 3px solid black">-->
    <div style="position: absolute; top: 50%; right: 0px;">This div has position:absolute;</div>
  <!--</div>-->

  <div class="h3">6. fixed</div>
  <div class="fixed" style="background-color: darkred; width: 50px; height: 50px; top: -30px; right: 0"></div>

  <div class="h3">7. fixed</div>
  <div style="width: 600px; height: 600px; border: solid 2px black;" class="relative-position">
    <div style="width: 20px; height: 20px; background-color: deeppink"
    class="absolute-center"
    ></div>
  </div>


</template>

<script setup>
import {useQuasar} from 'quasar'

const $q = useQuasar();

const showNotif = (position) => {
  $q.notify({
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quisquam non ad sit assumenda consequuntur esse inventore officia. Corrupti reiciendis impedit vel, fugit odit quisquam quae porro exercitationem eveniet quasi.',
    color: 'primary',
    position,
    multiLine: true,
  })
}
</script>

<style scoped></style>
