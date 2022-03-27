# random-users

This is a Random Users webpage which will call random-users-api.

## Environment

Node v14.18.1
Vue 3 @vue/cli 4.5.15
Tailwind CSS
Pug template engine

## Move to project folder

```sh
cd random-users
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Problems and solutions

### Pagination rendering 問題

1. 問題一：要怎麼處理過長的 pagination 問題？
   一開始看設計稿是顯示 current page 左右兩頁，以及第一頁和最後一頁，其他的部分都是用 ... 來隱藏
   起初沒有頭緒，在 stackoverflow 上面找到一篇文章，參考他的做法並稍做修改，完成設計稿的要求
   https://stackoverflow.com/questions/65857993/how-to-limit-pagination-buttons-in-vue

2. 問題二：要怎麼處理以上的邏輯，又要同時顯示 ... 及第一頁和最後一頁？
   以上邏輯處理了第一個問題」，但是和設計稿還是不一樣，無法顯示第一頁和最後一頁
   思考之後，決定用 v-if 來做控制，當頁面過長且當前頁面不在開頭和結尾時，會顯示第一頁和最後一頁給使用者的點選

### 切換顯示人數之後，當前存入的 current page 可能會超過 total page 問題

一開始假設資料有 50 筆，每頁顯示 10 筆的話會有 5 頁
但是在第 5 頁切換成顯示每頁 50 筆資料的話就只會有 1 頁
如果依照當前存入的資料還是會在第 1 頁而沒有資料的狀況
因此在 onUpdated 加入條件式，當 current page > total page 就重新導入第一頁
