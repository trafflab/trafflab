import React from 'react'
import { ArticlePageTemplate } from '../../updated/components/ru/templates/ArticlePage/ArticlePageTemplate';
import BlogCard from '../../updated/components/common/BlogCard/BlogCard';

const ArticlePagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  const handledDate = `${data.date.getDay()}.${data.date.getDate()}.${data.date.getFullYear()}`
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <ArticlePageTemplate
        article={{...data, date: handledDate}}
        content={data.body}
      />
      <BlogCard data={{
        cardImage: data.cardImage,
        cardTitle: data.cardTitle,
        cardText: data.cardText
      }}/>
    </div>
  )
}

export default ArticlePagePreview
