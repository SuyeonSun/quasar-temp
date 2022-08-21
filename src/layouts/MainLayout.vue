<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-dark text-white">
      <q-toolbar class="row justify-between items-center">
        <div class="row">
          <q-toolbar-title class="column items-center q-my-sm q-mx-md">
            <div class="text-h6 text-weight-bold">EVIQ CSMS</div>
            <div class="text-caption">ver 1.0.0</div>
          </q-toolbar-title>
          <header-item
            v-for="item in menu"
            :title="item.title"
            :path="item.path"
            :children="item.children"
          ></header-item>
        </div>
        <div class="q-mx-md">user</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import HeaderItem from "components/HeaderItem";

const menu = [
  {
    title: "충전인프라 관리",
    path: "/",
    children: [
      {
        title: "충전기 관리",
        path: "/",
      },
    ],
  },
  {
    title: "충전 내역",
    path: "/",
  },
];
</script>
