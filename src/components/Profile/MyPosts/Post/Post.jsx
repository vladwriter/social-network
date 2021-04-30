import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" alt="" />
      { props.message }
      <div>
        <span>Like {props.likesCount}</span>
      </div>
    </div>
  );
}

export default Post;