<script setup>
import {ref} from 'vue';

const val = ref(true)
</script>

<template>
  <div style="width: 600px">
  <table style="width: 100%;">
    <tr>
      <td colspan="2" class="text-center" style="background-color:#FAF9Fb">메뉴</td>
      <td class="text-center" style="background-color:#FAF9Fb">보기 권한</td>
      <td class="text-center" style="background-color:#FAF9Fb">수정 권한</td>
      <td class="text-center" style="background-color:#FAF9Fb">삭제 권한</td>
      <td class="text-center" style="background-color:#FAF9Fb">쓰기 권한 권한</td>
    </tr>

    <tr>
      <td rowspan="2">충전인프라 관리</td>
      <td>충전소 관리</td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
    </tr>

    <tr>
      <td>충전기 관리</td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
    </tr>

    <tr>
      <td colspan="2">충전 내역</td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
    </tr>

    <tr>
      <td rowspan="2">회원 목록</td>
      <td>온라인 회원 목록</td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
    </tr>

    <tr>
      <td>오프라인 회원 목록</td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
    </tr>

    <tr>
      <td rowspan="3">시스템 설정</td>
      <td>공지사항</td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
    </tr>

    <tr>
      <td>관리자 계정 관리</td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
    </tr>

    <tr>
      <td>소속 그룹 관리</td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
    </tr>
  </table>
  </div>
</template>

<style scoped lang="scss">
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
