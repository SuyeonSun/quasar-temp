<template>
  <q-page>
    <q-item clickable v-ripple>
      <q-item-section>
        <div class="row items-center">
          <div class="q-mr-sm">Language</div>
          <div>
            <q-select
              v-model="locale"
              :options="options"
              dense
              outlined
              emit-value
              map-options
              options-dense
              style="min-width: 150px"
            />
          </div>
        </div>
      </q-item-section>
    </q-item>

    <!--    <q-btn :label="$t('title')" />-->
    <div>{{ t("title") }}</div>
    <!--    <span v-html="content"></span>-->
    <q-input
      v-model="value"
      :placeholder="t('searchPlaceholder')"
      outlined
      dense
    />
  </q-page>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";

const value = ref("");

const { t } = useI18n();

const { locale } = useI18n({ useScope: "global" });

const options = [
  { value: "en-US", label: "English" },
  { value: "ko", label: "Chinese" },
];
</script>
