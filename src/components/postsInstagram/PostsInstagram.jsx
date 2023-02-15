import React, { useEffect } from "react";
import PostsInstagramHeroe from "./PostsInstagramHeroe";

const PostsInstagram = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="postsinstagram__container">
      <PostsInstagramHeroe />
      <div className="post__container">
        <script src="https://snapwidget.com/js/snapwidget.js"></script>
        <iframe
          src="https://snapwidget.com/embed/1024920"
          className="post"
          allowtransparency="true"
          frameborder="0"
          title="post"
        ></iframe>
      </div>
    </section>
  );
};

export default PostsInstagram;


