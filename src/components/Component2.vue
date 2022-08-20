<template>
  <div class="q-pa-md q-gutter-md">
    <div>2. Submenus (side, anchor)</div>
    <q-btn color="primary" label="Click me" style="width: 280px">
      <q-menu fit>
        <q-list dense>
          <q-item clickable v-close-popup>
            <q-item-section>Menu1</q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-item-section>Menu2</q-item-section>
          </q-item>
          <q-separator />

          <q-item clickable>
            <q-item-section>Menu3</q-item-section>
            <q-item-section side>
              <q-icon name="keyboard_arrow_right" />
            </q-item-section>

            <q-menu self="top start" anchor="top end">
              <q-list>
                <q-item v-for="n in 3" :key="n" dense clickable>
                  <q-item-section> Submenu </q-item-section>
                  <q-item-section side>
                    <q-icon name="keyboard_arrow_right" />
                  </q-item-section>
                  <!-- anchor self-->
                  <q-menu anchor="top end" self="top start">
                    <q-list>
                      <q-item v-for="n in 3" :key="n" dense clickable>
                        <q-item-section>3rd level item</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-item>
              </q-list>
            </q-menu>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
</template>

<script setup lang="js"></script>

<style scoped></style>
