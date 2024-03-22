// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import topLevelAwait from "file:///F:/project/platform-admin/node_modules/.pnpm/vite-plugin-top-level-await@1.4.1_vite@4.3.2/node_modules/vite-plugin-top-level-await/exports/import.mjs";
import { defineConfig } from "file:///F:/project/platform-admin/node_modules/.pnpm/vite@4.3.2_@types+node@18.19.6_sass@1.69.7/node_modules/vite/dist/node/index.js";
import vue from "file:///F:/project/platform-admin/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@4.3.2_vue@3.4.14/node_modules/@vitejs/plugin-vue/dist/index.mjs";

// src/config/proxy.ts
var proxy_default = {
  "/api": {
    target: "http://192.168.11.111:4040/api",
    changeOrigin: true,
    rewrite: (path2) => path2.replace(/^\/api/, "")
  },
  "/heibai": {
    target: "http://192.168.11.111:4040/api",
    changeOrigin: true,
    rewrite: (path2) => path2.replace(/^\/heibai/, "")
  },
  "/shengfa": {
    target: "http://192.168.11.35:4040/api",
    changeOrigin: true,
    rewrite: (path2) => path2.replace(/^\/shengfa/, "")
  },
  "/prod": {
    target: "https://brain-api.ztxkol.com/api",
    changeOrigin: true,
    rewrite: (path2) => path2.replace(/^\/prod/, "")
  }
};

// vite.config.ts
import { createSvgIconsPlugin } from "file:///F:/project/platform-admin/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@4.3.2/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import path from "path";
var __vite_injected_original_import_meta_url = "file:///F:/project/platform-admin/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      symbolId: "icon-[dir]-[name]"
    }),
    topLevelAwait({
      promiseExportName: "__tla",
      promiseImportName: (i) => `__tla_${i}`
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "./src/styles/variable.scss";'
      }
    }
  },
  server: {
    port: 8888,
    open: true,
    proxy: proxy_default
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic3JjL2NvbmZpZy9wcm94eS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6XFxcXHByb2plY3RcXFxccGxhdGZvcm0tYWRtaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXHByb2plY3RcXFxccGxhdGZvcm0tYWRtaW5cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L3Byb2plY3QvcGxhdGZvcm0tYWRtaW4vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcclxuaW1wb3J0IHRvcExldmVsQXdhaXQgZnJvbSAndml0ZS1wbHVnaW4tdG9wLWxldmVsLWF3YWl0J1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IHByb3h5IGZyb20gJy4vc3JjL2NvbmZpZy9wcm94eSdcclxuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICAgIHZ1ZSgpLFxyXG4gICAgICAgIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcclxuICAgICAgICAgICAgaWNvbkRpcnM6IFtwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9hc3NldHMvaWNvbnMnKV0sXHJcbiAgICAgICAgICAgIHN5bWJvbElkOiAnaWNvbi1bZGlyXS1bbmFtZV0nLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHRvcExldmVsQXdhaXQoe1xyXG4gICAgICAgICAgICBwcm9taXNlRXhwb3J0TmFtZTogJ19fdGxhJyxcclxuICAgICAgICAgICAgcHJvbWlzZUltcG9ydE5hbWU6IChpKSA9PiBgX190bGFfJHtpfWAsXHJcbiAgICAgICAgfSksXHJcbiAgICBdLFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY3NzOiB7XHJcbiAgICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4gICAgICAgICAgICBzY3NzOiB7XHJcbiAgICAgICAgICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxEYXRhOiAnQGltcG9ydCBcIi4vc3JjL3N0eWxlcy92YXJpYWJsZS5zY3NzXCI7JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICAgIHBvcnQ6IDg4ODgsXHJcbiAgICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgICBwcm94eSxcclxuICAgIH0sXHJcbn0pXHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxccHJvamVjdFxcXFxwbGF0Zm9ybS1hZG1pblxcXFxzcmNcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxwcm9qZWN0XFxcXHBsYXRmb3JtLWFkbWluXFxcXHNyY1xcXFxjb25maWdcXFxccHJveHkudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L3Byb2plY3QvcGxhdGZvcm0tYWRtaW4vc3JjL2NvbmZpZy9wcm94eS50c1wiO2V4cG9ydCBkZWZhdWx0IHtcclxuICAgICcvYXBpJzoge1xyXG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly8xOTIuMTY4LjExLjExMTo0MDQwL2FwaScsXHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgIHJld3JpdGU6IChwYXRoOiBzdHJpbmcpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcnKSxcclxuICAgIH0sXHJcblxyXG4gICAgJy9oZWliYWknOiB7XHJcbiAgICAgICAgdGFyZ2V0OiAnaHR0cDovLzE5Mi4xNjguMTEuMTExOjQwNDAvYXBpJyxcclxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgcmV3cml0ZTogKHBhdGg6IHN0cmluZykgPT4gcGF0aC5yZXBsYWNlKC9eXFwvaGVpYmFpLywgJycpLFxyXG4gICAgfSxcclxuXHJcbiAgICAnL3NoZW5nZmEnOiB7XHJcbiAgICAgICAgdGFyZ2V0OiAnaHR0cDovLzE5Mi4xNjguMTEuMzU6NDA0MC9hcGknLFxyXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICByZXdyaXRlOiAocGF0aDogc3RyaW5nKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9zaGVuZ2ZhLywgJycpLFxyXG4gICAgfSxcclxuXHJcbiAgICAnL3Byb2QnOiB7XHJcbiAgICAgICAgdGFyZ2V0OiAnaHR0cHM6Ly9icmFpbi1hcGkuenR4a29sLmNvbS9hcGknLFxyXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICByZXdyaXRlOiAocGF0aDogc3RyaW5nKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9wcm9kLywgJycpLFxyXG4gICAgfSxcclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1RLFNBQVMsZUFBZSxXQUFXO0FBQ3RTLE9BQU8sbUJBQW1CO0FBQzFCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUzs7O0FDSDRRLElBQU8sZ0JBQVE7QUFBQSxFQUN2UyxRQUFRO0FBQUEsSUFDSixRQUFRO0FBQUEsSUFDUixjQUFjO0FBQUEsSUFDZCxTQUFTLENBQUNBLFVBQWlCQSxNQUFLLFFBQVEsVUFBVSxFQUFFO0FBQUEsRUFDeEQ7QUFBQSxFQUVBLFdBQVc7QUFBQSxJQUNQLFFBQVE7QUFBQSxJQUNSLGNBQWM7QUFBQSxJQUNkLFNBQVMsQ0FBQ0EsVUFBaUJBLE1BQUssUUFBUSxhQUFhLEVBQUU7QUFBQSxFQUMzRDtBQUFBLEVBRUEsWUFBWTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLElBQ2QsU0FBUyxDQUFDQSxVQUFpQkEsTUFBSyxRQUFRLGNBQWMsRUFBRTtBQUFBLEVBQzVEO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixjQUFjO0FBQUEsSUFDZCxTQUFTLENBQUNBLFVBQWlCQSxNQUFLLFFBQVEsV0FBVyxFQUFFO0FBQUEsRUFDekQ7QUFDSjs7O0FEbkJBLFNBQVMsNEJBQTRCO0FBQ3JDLE9BQU8sVUFBVTtBQU44SSxJQUFNLDJDQUEyQztBQVNoTixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTO0FBQUEsSUFDTCxJQUFJO0FBQUEsSUFDSixxQkFBcUI7QUFBQSxNQUNqQixVQUFVLENBQUMsS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFHLGtCQUFrQixDQUFDO0FBQUEsTUFDMUQsVUFBVTtBQUFBLElBQ2QsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLE1BQ1YsbUJBQW1CO0FBQUEsTUFDbkIsbUJBQW1CLENBQUMsTUFBTSxTQUFTO0FBQUEsSUFDdkMsQ0FBQztBQUFBLEVBQ0w7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNILEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDeEQ7QUFBQSxFQUNKO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDRCxxQkFBcUI7QUFBQSxNQUNqQixNQUFNO0FBQUEsUUFDRixtQkFBbUI7QUFBQSxRQUNuQixnQkFBZ0I7QUFBQSxNQUNwQjtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTjtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogWyJwYXRoIl0KfQo=
