<template>
  <div class="q-pa-md" style="max-width: 350px">
    <div>1. basics</div>
    <q-list bordered separator>
      <q-item clickable>
        <q-item-section>Single line item</q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section>
          <q-item-label>Item with caption</q-item-label>
          <q-item-label caption>caption</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <div class="q-mt-md">2. QItemSection</div>
    <q-list bordered>
      <q-item>
        <q-item-section>
          <q-icon color="primary" name="bluetooth" />
        </q-item-section>
        <q-item-section>Icon as avatar</q-item-section>
      </q-item>
    </q-list>

    <div class="q-mt-md">3. side QItemSection</div>
    <q-list>
      <q-item>
        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption lines="2"
            >Secondary line text. Lorem ipsum dolor sit amet, consectetur
            adipiscit elit.</q-item-label
          >
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
          <q-icon name="star" color="yellow" />
          <div>
            <q-icon name="star" color="yellow" />
            <q-icon name="star" color="yellow" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>

    <div class="q-mt-md">4. general</div>
    <q-item-label header>General</q-item-label>
    <q-item tag="label" v-ripple>
      <q-item-section side top>
        <q-checkbox v-model="check1" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Notifications</q-item-label>
        <q-item-label caption>
          Notify me about updates to apps or games that I downloaded
        </q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script setup>
import { ref } from "vue";

const check1 = ref(false);
</script>

<style scoped></style>
