<template>
  <div class="q-pa-md" style="max-width: 500px">
    <div>6. navigation menu using css, js</div>
    <div class="nav-bar">
      <a href="#">Home</a>
      <div class="sub-nav">
        <button class="sub-nav-btn">About</button>
        <div class="sub-nav-content">
          <a href="#">Company</a>
          <a href="#">Team</a>
          <a href="#">Careers</a>
        </div>
      </div>
    </div>

    <!-- test -->
    <div class="test q-pt-md">
      <div>6-1. display: block test</div>
      <button class="test-btn">test</button>
      <div class="test-content">
        <a>Content</a>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.nav-bar {
  overflow: hidden;
  background-color: #333;
}

.nav-bar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.sub-nav {
  float: left;
  overflow: hidden;
}

.sub-nav .sub-nav-btn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  margin: 0;
}

.nav-bar a:hover,
.sub-nav:hover,
.sub-nav-btn {
  background-color: red;
}

.sub-nav-content {
  display: none;
  position: absolute;
  left: 100px;
  background-color: red;
  width: 300px;
  z-index: 1;
}

.sub-nav-content a {
  float: left;
  color: white;
  text-decoration: none;
}

.sub-nav-content a:hover {
  background-color: #eee;
  color: black;
}

/* When you move the mouse over the subnav container, open the subnav content */
.sub-nav:hover .sub-nav-content {
  display: block;
}

/* test */
.test-content {
  display: none;
}

.test:hover .test-content {
  display: block;
}
</style>
