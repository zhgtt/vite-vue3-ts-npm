<script setup="props, { emit }" lang="ts">
import { Calendar, Button } from "ant-design-vue";
import { ref, defineProps } from "vue";

// js 写法
// const props = defineProps({
//   title: {
//     type: String,
//     default: "按钮", // 默认值
//     required: false,
//   },
// });

interface Props {
  title?: string;
}
withDefaults(defineProps<Props>(), {
  // title: "按钮",
  title: () => "按钮",
});

// type Props = {
//   title?: string;
// };

// defineProps<Props>();

const onClick = () => {
  // emit('onSubmit', )
};
</script>

<template>
  <!-- <Calendar /> -->
  <Button type="primary" @click="onClick">{{ title }}</Button>
</template>
