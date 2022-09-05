<template>
  <div class="text-orange">7. html select</div>
  <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>

  <form>
    <label for="cars">Choose a car:</label>
    <select name="cars" id="cars">
      <optgroup label="Swedish Cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
      </optgroup>
      <optgroup label="German Cars">
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </optgroup>
    </select>
  </form>

  <!--  <select size="6" style="overflow: scroll">-->
  <!--    <option v-for="o in options">{{ o }}</option>-->
  <!--  </select>-->
</template>

<script setup></script>

<style scoped></style>
