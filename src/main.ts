import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { Button, message } from "ant-design-vue"; // 引入部分 antd 组件
import "ant-design-vue/dist/antd.css";

const app = createApp(App);

app.use(Button).mount("#app");

app.config.globalProperties.$message = message;
