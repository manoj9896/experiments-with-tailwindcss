import { ArticlesApi } from "../api/articles";
import { Article } from "./articles.service";

const articlesListContainer = document.getElementById(
    "articles-list-container"
)!;

const articlesApi = new ArticlesApi();

export function displayArticlesList() {
    articlesApi.getArticles().then((articles: Article[]) => {
        articlesListContainer.innerHTML = articles
            .map((article: Article, index: number) => {
                return `
                    <li
                        title=${article.title}
                        class="border-2 border-solid border-blue-400 drop-shadow-2xl shadow-lg rounded-lg p-3"
                    >
                        Article ${index + 1}
                    </li>
                `;
            })
            .join("");
    });
}
