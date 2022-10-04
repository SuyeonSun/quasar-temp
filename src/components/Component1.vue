<template>
  <!-- facebook / LinkedIn / Twitter / WhatsApp-->
  <!--  <q-btn color="black">-->
  <!--    <ShareNetwork-->
  <!--      network="WhatsApp"-->
  <!--      url="https://lindaojo.com/blog/awesome-article"-->
  <!--      title="Awesome Article"-->
  <!--      description="This is an awesome article for awesome readers"-->
  <!--      hashtags="Frontend, Programming"-->
  <!--    >-->
  <!--      <span>WhatsApp</span>-->
  <!--    </ShareNetwork>-->
  <!--  </q-btn>-->

  <ShareNetwork
    network="facebook"
    title="titleName"
    description="description"
    url="https://www.autocrypt.co.kr/"
  >
    <q-btn color="black" label="facebook" no-caps />
  </ShareNetwork>

  <ShareNetwork
    network="LinkedIn"
    title="titleName"
    description="description"
    url="https://www.autocrypt.co.kr/"
  >
    <q-btn color="black" label="LinkedIn" no-caps />
  </ShareNetwork>
</template>
