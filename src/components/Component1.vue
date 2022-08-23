<template>
  <Form v-slot="{ values }">
    <Field name="selectBox1" v-slot="{ value, field }">
      <q-select outlined model-value="value" v-bind="field" label="Outlined" />
    </Field>
    <Field name="selectBox2" v-slot="{ value, field }"> </Field>
  </Form>
</template>

<script setup></script>

<style scoped></style>
