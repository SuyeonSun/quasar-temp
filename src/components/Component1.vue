<template>
  <div class="q-pa-md">
    <q-layout view="lHh Lpr lFf" container style="height: 400px" class="shadow-2 rounded-borders">
      <q-header reveal elevated>
        <q-toolbar>
          <q-toolbar-title>
            <strong>Quasar</strong>
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <!-- container -->
      <q-page-container>
        <q-page padding style="padding-top: 66px">
          <q-page-sticky expand position="top">
            <q-toolbar class="bg-accent text-white">
              <q-toolbar-title>
                Page Title
              </q-toolbar-title>
            </q-toolbar>
          </q-page-sticky>

          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup () {
    const $q = useQuasar()

    return {
      drawerLeft: ref($q.screen.width > 700),
      drawerRight: ref($q.screen.width > 500)
    }
  }
}
</script>