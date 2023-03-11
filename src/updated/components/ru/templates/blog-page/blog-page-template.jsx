import * as React from 'react'
import * as styles from './blog-page-template.module.css';
import { Link } from 'gatsby';

import PageLayout from '../../layouts/page-layout/page-layout';
import { BlogPageList } from '../../sections';
import { BasicButton } from '../../../common/ui';

export default function BlogPageTemplate({ blogData }) {
  React.useEffect(() => {
    localStorage.setItem('lang', 'ru');
  }, [])
  return (
    <PageLayout>
      
      <div className={styles.content}>
        <BlogPageList articlesData={blogData}/>
        <Link to={'/ru/#blog'} className={styles.link}>
          <BasicButton text='В начало' handler={() => null}/>
        </Link>
      </div>

    </PageLayout>
  )
};
