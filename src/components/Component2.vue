<template>
  <q-item clickable v-ripple>
    <q-item-section>
      <q-item-label>Language</q-item-label>
      <q-item-label>
        <q-select
          v-model="locale"
          :options="localeOptions"
          dense
          emit-value
          map-options
          options-dense
          style="min-width: 150px"
        />
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n({ useScope: "global" });

const localeOptions = [
  { value: "en-US", label: "English" },
  { value: "ko", label: "Korean" },
];
</script>
