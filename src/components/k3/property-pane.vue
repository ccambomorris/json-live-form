<template>
  <LiveForm :schema="schema" v-model="data" @change="onChanged" />
</template>

<script setup lang="ts">
import LiveForm from "~/packages/liveform/components/LiveForm.vue";

const props = defineProps({
  schema: { type: Object, default: {} },
  data: { type: Object, default: {} },
});

const emits = defineEmits(["update:data"]);

const onChanged = () => {
  console.log(`changed: ${props.data.name}`);
  emits("update:data", props.data);
};
</script>

<style scoped lang="scss"></style>
