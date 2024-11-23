# React + TypeScript + Vite

## Ref

https://cmmnty-docs.notion.site/React-SPA-13d111c2425680549233f914f02a0f69

## install vite, and build project

https://cmmnty-docs.notion.site/vite-React-13d111c2425681be8dc2f405c7d367f0

```
pnpm create vite@latest
```



## install Tailwind CSS

https://cmmnty-docs.notion.site/Tailwind-CSS-13d111c2425681f68562c9fe87b58b37

1. tailwindcssと、その依存関係をインストールしてから、
必要な初期ファイルを生成します：

```
pnpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. tailwind.config.jsファイルに、パスを追加します：

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

## Setting React Router

> pnpm install react-router-dom@6

## Make Web Site

> pnpm install lucide-react