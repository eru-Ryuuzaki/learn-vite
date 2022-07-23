import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { normalizePath } from "vite";
import path from "path";

// 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(path.resolve("./src/variable.scss"));

// https://vitejs.dev/config/
export default defineConfig({
  // 手动指定项目根目录位置
  // root: path.join(__dirname, 'src'),
  plugins: [react()],

  // css 相关的配置
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@import "${variablePath}";`,
      },
    },
  },
});
