import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getCollection } from "react-firebase-lib";
import { format } from "timeago.js";
import Meta from "../../app/Components/Meta/Meta";
import { IBlog } from "../../app/utils";
import { db } from "../../firebase";
import styles from "./style.module.css";

const BlogDetails = () => {
  const [blogDetails, setBlogDetails] = useState<IBlog>();
  const {
    query: { title },
  } = useRouter();

  useEffect(() => {
    if (title) {
      const getSingleData = async () => {
        try {
          const res = await getCollection("blogs", db, title as string);
          setBlogDetails(res as IBlog);
        } catch (error: any) {
          console.log(error.message);
        }
      };
      getSingleData();
    }
  }, []);

  return (
    <>
     { blogDetails && <Meta title={`Razu Islam - ${blogDetails.title}`} />}
      <section className={styles.blog}>
        <div className="container">
          {blogDetails && (
            <div className={styles.blogContent}>
              <div className={styles.blogImg}>
                <img src={blogDetails.thumbnail} alt={blogDetails.title} />
              </div>

              <div className={styles.header}>
                <h1 className={styles.title}>
                  Post Title: {blogDetails.title}
                </h1>
                <h3>Post By: Admin</h3>
              </div>
              <div style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between"
              }}>
                {/* Time Ago */}
              <p className={styles.timeAgo}>
                Post Time:
                {format(blogDetails.date)}
              </p>
              {/* Category */}
              <p className={styles.timeAgo}>
                Blog Category: { blogDetails.category }
              </p>
              </div>
              {/* Show Element */}
              <div className={styles.content}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: blogDetails.content,
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
