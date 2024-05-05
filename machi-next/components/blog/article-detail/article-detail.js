import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import fetchArticles from '@/services/blog';
import styles from '@/styles/blog/article-detail.module.scss';

const ArticleDetail = () => {
    const [article, setArticle] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const getArticle = async () => {
            try {
                const data = await fetchArticles();
                const selectedArticle = data.find(item => item.article_id === id);
                if (selectedArticle) {
                    setArticle(selectedArticle);
                } else {
                    console.error(`Article with ID ${id} not found`);
                }
            } catch (error) {
                console.error('Error fetching article:', error);
            }
        };

        if (id) {
            getArticle();
        }
    }, [id]);

    if (!article) {
        return <p>Loading...</p>;
    }

    return (
        <div className={`container ${styles['article-text']}`}>
            <div className={styles['article-user']}>
                <img src="" alt="" />
                <span>{article.user_id_fk}</span>
            </div>
            <div className={styles['article-btn']}>
                <button>{article.article_category}</button>
            </div>
            <div className={styles['article-title']}>
                <h3>{article.article_title}</h3>
                <span>{article.article_createtime}</span>
            </div>
            <div>
                <div>{article.article_content}</div>
            </div>
        </div>
    );
};

export default ArticleDetail;
