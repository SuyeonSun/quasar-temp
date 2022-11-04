<template>
  <div class="html">
    <div class="nav">
      <ul>
        <li><a href="#anchor-1"> anchor-1 </a></li>
        <li><a href="#anchor-2"> anchor-2 </a></li>
        <li><a href="#anchor-3"> anchor-3 </a></li>
      </ul>
    </div>
    <div class="content">
      <!-- 핵심: scroll-margin-top: 95px; -->
      <section
        id="anchor-1"
        style="
          background-color: #6d829b;
          height: 600px;
          scroll-margin-top: 95px;
        "
      >
        Your stuff here
      </section>
      <section
        id="anchor-2"
        style="
          background-color: #b3bdca;
          height: 600px;
          scroll-margin-top: 95px;
        "
      >
        Your stuff here
      </section>
      <section
        id="anchor-3"
        style="
          background-color: #dcd9d8;
          height: 600px;
          scroll-margin-top: 95px;
        "
      >
        Your stuff here
      </section>
    </div>
  </div>
</template>

<style scoped>
.nav {
  top: 0;
  position: fixed;
  width: 100%;
  height: 95px;
  background-color: darkgrey;
  overflow: hidden;
}

.content {
  margin-top: 95px;
}
</style>
