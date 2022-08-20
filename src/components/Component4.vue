<template>
  <div class="q-pa-md q-gutter-md">
    <div>4. Clickable dropdown using vue</div>
    <div class="drop-box">
      <button @click="toggleMenu" class="drop-btn">Dropdown</button>
      <div v-if="isMenuOpen" class="drop-content">
        <a
          @click="toggleMenu"
          :href="`${element.link}`"
          v-for="element in menu"
          :key="element"
          >{{ element.label }}</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const menu = [
  { link: "https://google.com", label: "Google" },
  { link: "#", label: "nothing" },
];
</script>

<style scoped lang="scss">
.drop-btn {
  background-color: #3498db;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

//.drop-btn:hover,
//.drop-btn:focus {
//  background-color: #2980b9;
//}

.drop-btn {
  &:hover,
  &:focus {
    background-color: #2980b9;
  }
}

// check
.drop-box {
  position: relative;
  display: inline-block;
}

// check
.drop-content {
  //display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.drop-content {
  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    &:hover {
      background-color: #ddd;
    }
  }
}
</style>
