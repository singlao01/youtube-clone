import React, { useState } from 'react';
import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import like2 from '../../assets/like2.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';
import nature from '../../assets/nature.jpeg'

const PlayVideo = () => {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const handleLike = () => {
    if (!liked) {
      setCount(count + 1);
    }
    setLiked(!liked);
  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (commentText !== '') {
      const newComment = {
        id: comments.length + 1,
        user: 'You',
        date: 'Just Now',
        text: commentText,
        likes: 0,
      };
      setComments([...comments, newComment]);
      setCommentText('');
    }
  };

  return (
    <div className="play-video">
      <video className='videoplay' src={video1} controls autoPlay muted></video>
      <h3>Discover The Nature</h3>
      <div className="play-video-info">
        <p>200k Views &bull; 2 Days Ago</p>
        <div>
          <span onClick={handleLike}>
            <img className={liked ? 'like2' : 'like'} src={liked ? like2 : like} alt='' /> {count}
          </span>
          <span><img src={dislike} alt='' /> 2 </span>
          <span><img src={share} alt='' /> Share </span>
          <span><img src={save} alt='' /> Save </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={nature} alt="" />
        <div>
          <p>Nature Beauty</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>"Nature's beauty is a gift that cultivates appreciation and gratitude."</p>
        <p>Like and Comment</p>
        <hr />
        <h4>{comments.length} Comments</h4>
        {comments.map((comment) => (
          <div className="Comment" key={comment.id}>
            <img src={user_profile} alt="" />
            <div>
              <h3>{comment.user} <span>{comment.date}</span></h3>
              <p>{comment.text}</p>
              {/* <div className="comment-action">
                <img className='commentlike' src={like} alt='' />
                <span>{comment.likes}</span>
                <img src={dislike} alt='' />
              </div> */}
            </div>
          </div>
        ))}
        <div className="Comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Your Name <span>Just Now</span></h3>
            <textarea
              value={commentText}
              onChange={handleCommentChange}
              placeholder="Add a comment..."
            ></textarea>
            <button onClick={handleCommentSubmit}>Comment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
