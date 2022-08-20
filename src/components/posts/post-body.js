import post from '../../styles/post.module.css'

export const PostBody = ({ content }) => {
  return (
    <div className="mx-auto">
      <article
        className={`${post['markdown']} prose`}
        dangerouslySetInnerHTML={{ __html: content }}></article>
    </div>
  )
}
