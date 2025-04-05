module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
// 假设有 articles 数据
const articles = [
  { title: "文章1", url: "/article1" },
  { title: "文章2", url: "/article2" }
];

const list = `<ul>${articles.map(a => `<li><a href="${a.url}">${a.title}</a></li>`).join('')}</ul>`;
