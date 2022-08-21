<template>
  <q-btn-dropdown
    v-if="props.children"
    color="white"
    flat
    stretch
    :label="props.title"
    :content-style="{
      backgroundColor: '#1d1d1d',
      color: 'white',
      borderRadius: '0px',
    }"
  >
    <q-list>
      <q-item
        v-for="element in props.children"
        :key="element"
        clickable
        @click="handleRouter(element.path)"
      >
        <q-item-section>
          <q-item-label>{{ element.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
  <q-btn
    v-else
    color="white"
    flat
    stretch
    :label="props.title"
    @click="handleRouter(props.path)"
  />
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  title: String,
  path: String,
  children: Array,
});

const $router = useRouter();

const handleRouter = (path) => {
  $router.push(path);
};
</script>

<style scoped></style>
