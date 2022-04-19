<template>
  <div class="page-container flex flex-row">
    <div class="editor flex-none flex flex-row flex-grow-1">
      <K3CodeHighlight v-model="schema" />
      <K3CodeHighlight v-model="data" :key="dataUpdater" />
    </div>
    <div class="property flex">
      <K3PropertyPane :schema="schema" :data="data" />
    </div>
  </div>
</template>

<script setup lang="ts">
const dataUpdater = ref(0);
const schema = ref({
  labelWidth: "130px",
  rows: [
    {
      type: "text",
      readonly: false,
      field: "name",
      options: "",
      optionLabel: "",
      optionValue: "",
      label: "name",
      columns: [],
      criteria: ["enabled", "==", true],
    },
    {
      type: "date",
      field: "date",
      label: "date",
    },
    {
      type: "number",
      field: "number",
      label: "number",
    },
    {
      type: "text",
      field: "description",
      label: "description",
    },
    {
      field: "password",
      type: "password",
      label: "password",
    },
    {
      type: "text",
      readonly: true,
      field: "description",
      label: "readonly",
    },
    {
      type: "checkbox",
      field: "enabled",
      label: "show name field",
    },
    {
      type: "textarea",
      field: "name",
      label: "textarea",
    },
    {
      type: "radio",
      field: "select",
      label: "Radio example 1",
      optionLabel: "name",
      optionValue: "value",
      options: [
        {
          name: "Inline Option A",
          value: "A",
        },
        {
          name: "Inline Option B",
          value: "B",
        },
        {
          name: "Inline Option C",
          value: "C",
        },
      ],
    },
    {
      type: "radio",
      field: "select",
      label: "Radio example 2",
      options: "sampleArray",
      optionLabel: "label",
      optionValue: "value",
    },
    {
      type: "radio",
      field: "select",
      label: "Radio example 3",
      options: ["A", "B", "C", "D"],
    },
    {
      type: "select",
      field: "select",
      label: "Select example 1",
      optionLabel: "name",
      optionValue: "value",
      options: [
        {
          name: "Inline Option A",
          value: "A",
        },
        {
          name: "Inline Option B",
          value: "B",
        },
        {
          name: "Inline Option C",
          value: "C",
        },
      ],
    },
    {
      type: "select",
      field: "select",
      label: "Select example 2",
      options: "sampleArray",
      optionLabel: "label",
      optionValue: "value",
    },
    {
      type: "select",
      field: "select",
      label: "Select example 3",
      options: ["A", "B", "C", "D"],
    },
    {
      type: "nested",
      field: "nested",
      label: "Nested Editor",
      columns: [
        {
          type: "text",
          field: "name",
          label: "username",
        },
        {
          type: "select",
          field: "role",
          label: "role",
          options: ["user", "admin", "super-admin"],
        },
        {
          type: "nested",
          field: "relationships",
          label: "friends",
          columns: [
            {
              type: "text",
              field: "name",
              label: "name",
            },
            {
              type: "select",
              field: "relationship",
              label: "relationship",
              options: ["friend", "family", "enemy"],
            },
          ],
        },
      ],
    },
  ],
});
const data = ref({
  name: "Test component",
  description: "lorem ipsum",
  password: "Secret!",
  enabled: true,
  date: "12/03/2020",
  number: 42,
  select: "A",
  sampleArray: [
    {
      label: "External Option A",
      value: "A",
    },
    {
      label: "External Option B",
      value: "B",
    },
  ],
  nested: [
    {
      name: "Bob",
      role: "admin",
      value: "50",
      relationships: [
        {
          name: "Jim",
          relationship: "friend",
        },
      ],
    },
    {
      name: "Ann",
      role: "user",
      value: "Bob",
      relationships: [
        {
          name: "Jim",
          relationship: "friend",
        },
      ],
    },
  ],
});

watch(
  () => data,
  () => {
    console.log();
    dataUpdater.value = dataUpdater.value++;
  }
);
</script>

<style scoped lang="scss">
.page-container {
  .property {
    border: 1px solid green;
    margin: 0;
    padding: 0;
    min-width: 20rem;
    height: 100%;
    overflow-y: auto;

    box-shadow: 10px 10px 17px -13px rgb(0 0 0 / 25%);
    background-color: rgba(27, 30, 36, 0.836);
    color: #fff;
  }
}
</style>
