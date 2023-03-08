import * as React from 'react'
import * as styles from './BlogPageTemplate.module.css';
import { Link } from 'gatsby';

import PageLayout from '../../layouts/PageLayout/PageLayout';
import { BlogPageList } from '../../sections';
import { BasicButton } from '../../../common/ui';

export default function BlogPageTemplate({ blogData }) {

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
