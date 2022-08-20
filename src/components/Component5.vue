<template>
  <div class="drop-down">
    <div>5. Clickable dropdown using css, js</div>
    <button @click="toggleMenu()" class="button">Drop</button>
    <div style="display: none" id="drop-content">
      <a hreaf="#">Menu1</a>
      <a hreaf="#">Menu2</a>
      <a hreaf="#">Menu3</a>
      <a hreaf="#">Menu4</a>
      <a hreaf="#">Menu5</a>
    </div>

    <div class="q-pt-lg">5-1. display: none과 visibility: hidden의 차이</div>
    <div id="a" class="box">a</div>
    <div id="b" class="box">b</div>
    <div id="c" class="box">c</div>

    <div class="q-pt-lg">5-2. position 속성</div>
    <div id="static1">1. static</div>
    <div id="static2">2. relative</div>
    <div id="static3-parent">
      <div id="static3">
        3. absolute: static을 제외한 가장 가까운 상위 요소를 기준으로 배치
      </div>
    </div>
  </div>
</template>

<script setup>
const toggleMenu = () => {
  let click = document.getElementById("drop-content");
  if (click.style.display === "none") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
};
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  /*display: inline;*/
  /*display: none;*/
  /*display: block;*/
  display: inline-block;
}

#a {
  background-color: yellow;
  visibility: hidden;
}

#b {
  background-color: #2f9d27;
  display: none;
}

#c {
  background-color: #f29661;
}

#static1 {
  width: 100px;
  height: 100px;
  background-color: green;
  position: static;
}

#static2 {
  width: 100px;
  height: 100px;
  background-color: yellow;
  position: relative;
  left: 100px;
}

#static3 {
  width: 100px;
  height: 100px;
  background-color: red;
  position: absolute;
  left: 50px;
}

#static3-parent {
  width: 100px;
  height: 100px;
  background-color: black;
  position: relative;
}
</style>
