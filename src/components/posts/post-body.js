import post from '../../styles/post.module.css'

export const PostBody = ({ content }) => {
  return (
    <div className="mx-auto">
      <div
        className={`${post['markdown']} prose dark:prose-invert`}
        dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  )
}
