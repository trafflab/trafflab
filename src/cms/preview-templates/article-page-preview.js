import React from 'react'
import { ArticlePageCmsTemplate, BlogCardCmsTemplate } from '../../updated/components/cms-templates';

const ArticlePagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  const handledDate = `${data.date.getDay()}.${data.date.getDate()}.${data.date.getFullYear()}`
  console.log(data);
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <ArticlePageCmsTemplate
        article={{...data, date: handledDate}}
        content={data.body}
      />
      <BlogCardCmsTemplate data={{
        cardImage: data.cardImage,
        cardTitle: data.cardTitle,
        cardText: data.cardText
      }}/>
    </div>
  )
}

export default ArticlePagePreview
