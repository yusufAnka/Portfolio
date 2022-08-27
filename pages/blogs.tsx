import React, { useEffect, useState } from "react";
import { getCollections } from "react-firebase-lib";
import BlogPostCard from "../app/Components/BlogPostCard/BlogPostCard";
import Button from "../app/Components/Button/Button";
import Title from "../app/Components/Title/Title";
import { IBlog } from "../app/utils";
import { db } from "../firebase";
import styles from "../styles/Blog.module.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState<IBlog[]>();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getCollections(db, "blogs");
        setBlogs(res);
      } catch (error: any) {
        console.log(error.message);
      }
    };
    getData();
  }, []);

  return (
    <>
      <section className={styles.blogs} id="blogs">
        <div className="container">
          <Title text="Latest Posts" />
          <div className={styles.row}>
            {blogs &&
              blogs?.map((blog) => <BlogPostCard key={blog.id} blog={blog} />)}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              className="app_btn second"
              style={{
                marginTop: "2em",
              }}
            >
              Show All Blogs
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
