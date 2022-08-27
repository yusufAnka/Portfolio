import Image from 'next/image';
import React from 'react'
import { IBlog } from '../../utils'
import styles from './style.module.css';
import { format } from 'timeago.js'
import { useRouter } from 'next/router';

interface IProps{
    blog:IBlog
}

const BlogPostCard:React.FC<IProps> = ({ blog }) => {

  const router = useRouter()

  return (
    <>
    <div className={styles.blogCard} onClick={() => router.push(`/blogDetails/${blog.id}`)}>
        {/* Image */}
        <div className={styles.img}>
            <Image src={blog.thumbnail} width={330} height={150} />
        </div>
        {/* Information */}
        <div className={styles.details}>
            <h2>{blog.title?.substring(0, 20)}...</h2>
            <div className={styles.date}>{format(blog.date)} . Admin</div>
        </div>
    </div>
    </>
  )
}

export default BlogPostCard