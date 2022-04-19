<template>
  <div ref="codeBlock" class="codeBlock">
    <pre :class="languageClass">
      <code>{{ codeValue }}</code>
    </pre>
  </div>
</template>

<script setup lang="ts">
import Prism from "prismjs";

const props = defineProps({
  modelValue: { type: Object, default: {} },
  language: { type: String, default: "javascript" },
});

const codeBlock = ref(null);

const codeValue = computed(() => {
  switch (props.language) {
    default:
      return JSON.stringify(props.modelValue, null, 2);
  }
});
const languageClass = computed(() => {
  return `language-${props.language}`;
});

onMounted(() => {
  Prism.highlightAllUnder(codeBlock.value);
});

onUpdated(() => {
  Prism.highlightAllUnder(codeBlock.value);
});
</script>

<style scoped lang="scss"></style>
