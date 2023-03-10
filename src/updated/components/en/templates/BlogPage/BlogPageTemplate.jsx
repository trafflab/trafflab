import * as React from 'react'
import * as styles from './BlogPageTemplate.module.css';
import { Link } from 'gatsby';

import PageLayout from '../../layouts/PageLayout/PageLayout';
import { BlogPageList } from '../../sections';
import { BasicButton } from '../../../common/ui';

export default function BlogPageTemplate({ blogData }) {
  React.useEffect(() => {
    localStorage.setItem('lang', 'en');
  }, [])
  return (
    <PageLayout>
      
      <div className={styles.content}>
        <BlogPageList articlesData={blogData}/>
        <Link to={'/en/#blog'} className={styles.link}>
          <BasicButton text='В начало' handler={() => null}/>
        </Link>
      </div>

    </PageLayout>
  )
};
