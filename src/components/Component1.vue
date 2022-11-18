<template>
  <div>
    <q-page-container>
      <q-page>
        <p v-for="n in 15" :key="n">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
        </p>

        <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
          <q-btn fab icon="keyboard_arrow_up" color="accent"/>
        </q-page-scroller>
      </q-page>
    </q-page-container>
  </div>

<!--  <div>-->
<!--    <q-page-container>-->
<!--      <q-page padding>-->
<!--        <p v-for="n in 15" :key="n">-->
<!--          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?-->
<!--        </p>-->

<!--        <q-page-scroller expand position="top" :scroll-offset="150" :offset="[0, 0]">-->
<!--          <div class="col cursor-pointer q-pa-sm bg-accent text-white text-center">-->
<!--            Scroll back up...-->
<!--          </div>-->
<!--        </q-page-scroller>-->
<!--      </q-page>-->
<!--    </q-page-container>-->
<!--  </div>-->
</template>

<script setup></script>

<style scoped></style>
