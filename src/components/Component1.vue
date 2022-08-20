<template>
  <div class="q-pa-md">
    <div>1. basics</div>
    <q-btn-dropdown split color="black" label="Dropdown Button" icon="folder">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Photos</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-item clickable v-close-popup @click="onItemClick">
        <q-item-section>
          <q-item-label>Articles</q-item-label>
        </q-item-section>
      </q-item>
    </q-btn-dropdown>

    <div>2. label slot</div>
    <q-btn-dropdown split color="cyan" push @click="onMainClick">
      <template v-slot:label>
        <div class="row items-center no-wrap">
          <q-icon left name="map" />
          <div class="text-center">Custom<br />Content</div>
        </div>
      </template>
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
            <q-avatar icon="folder" color="primary" text-color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Photos</q-item-label>
            <q-item-label caption>February 22, 2016</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="info" color="amber" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>

    <div class="q-mt-md">3. hoverable dropdown btn using css</div>
    <div class="drop-down">
      <button class="drop-btn">Dropdown</button>
      <div class="drop-down-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  </div>
</template>

<script setup>
const onMainClick = () => {
  console.log("=== Clicked an main item");
};

const onItemClick = () => {
  console.log("=== Clicked an item");
};
</script>

<style scoped>
.drop-btn {
  background-color: #4caf50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.drop-down {
  position: relative;
  display: inline-block;
}

.drop-down-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.drop-down-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.drop-down:hover .drop-down-content {
  display: block;
}

.drop-down:hover .drop-btn {
  background-color: #3e8e41;
}
</style>
