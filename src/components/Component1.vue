<template>
  <!-- facebook / LinkedIn / Twitter / WhatsApp-->
  <q-btn color="black">
    <ShareNetwork
      network="WhatsApp"
      url="https://lindaojo.com/blog/awesome-article"
      title="Awesome Article"
      description="This is an awesome article for awesome readers"
      hashtags="Frontend, Programming"
    >
      <span>WhatsApp</span>
    </ShareNetwork>

    <!--    <ShareNetwork-->
    <!--        network="facebook"-->
    <!--        url="https://lindaojo.com/blog/awesome-article"-->
    <!--        title="Awesome Article"-->
    <!--        description="This is an awesome article for awesome readers"-->
    <!--        hashtags="Frontend, Programming"-->
    <!--    >-->
    <!--      <q-btn color="black" label="facebook" no-caps />-->
    <!--    </ShareNetwork>-->
  </q-btn>
</template>

<script setup></script>

<style scoped></style>
