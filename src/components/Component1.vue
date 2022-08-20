<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <div>1. Basics</div>
      <q-btn color="primary" label="Basic Menu">
        <q-menu>
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>New Tab</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>New Tab</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>New Tab</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn color="secondary" label="Auto-close-menu">
        <!-- auto close: Allows any click/tap in the menu to close it -->
        <q-menu :auto-close="false">
          <q-list>
            <q-item clickable>
              <q-item-section>New Tab</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <!-- touch-position, rounded-borders, cursor-pointer, v-close-popup-->
      <div style="max-width: 300px" class="bg-amber rounded-borders">
        <div class="fit flex flex-center text-center non-selectable">
          Click me
        </div>
        <q-menu touch-position>
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>Branches</q-item-section>
            </q-item>
            <q-item>
              <q-item-section>Branches</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </div>
    </div>
  </div>
</template>

<script setup lang="js"></script>

<style scoped></style>
