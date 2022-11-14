<template>
  <div class="h3">1. wrapping</div>
  <div class="column" style="height: 300px; max-height: 100%">
    <div class="col-9" style="background-color: #31CCEC; height: 100px">.col-9</div>
    <div class="col-5" style="background-color: yellow">
      .col-5
      <br>Since 9 + 5 = 14 &gt; 12, this 5-row-wide div
      <br>gets wrapped onto a new line as one
      <br>contiguous unit.
    </div>
    <div class="col-6" style="background-color: cornflowerblue">
      .col-6
      <br>Subsequent rows
      <br>continue along the
      <br>new line.
    </div>
  </div>

  <div class="h3">2. nesting</div>
  <div class="column" style="height: 200px; background-color: beige">
    <div class="col-auto">.col-auto</div>
    <div class="col column" >
      <div class="col-8" style="background-color: orange">
        .col-8
      </div>
      <div class="col-4" style="background-color: yellow">
        .col-4
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
