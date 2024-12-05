import { DefaultTheme, defineConfig } from 'vitepress';
import fs from 'node:fs';
import { fileURLToPath, URL } from 'node:url';
import vueJsx from '@vitejs/plugin-vue-jsx';

function genComponentSidebar(sidebarOpt?: DefaultTheme.SidebarItem[]) {
  if (!sidebarOpt) {
    sidebarOpt = [];
  }
  const files = fs.readdirSync('./docs/components');

  const fileNameList: string[] = [];
  files.map((file) => {
    fileNameList.push(file);
  });

  const componentItems: DefaultTheme.SidebarItem[] = [];
  fileNameList.forEach((name) => {
    const link = name.split('.')[0];
    if (link === 'index') {
      return;
    }
    let tempName: string | string[] = link.split('');
    tempName[0] = tempName[0].toLocaleUpperCase();
    tempName = tempName.join('');
    const item = {
      text: `Sketch${tempName}`,
      link: `/components/${link}`,
    };
    componentItems.push(item);
  });
  sidebarOpt = [...sidebarOpt, ...componentItems];
  return sidebarOpt;
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Sketch UI',
  description: '练手组件库项目而已',
  base: '/vue-sketch-ui/',
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
    plugins: [vueJsx()],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components' },
    ],

    sidebar: [
      {
        text: 'Components',
        items: genComponentSidebar(),
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/Ys-OoO/vue-sketch-ui' }],
  },
});
