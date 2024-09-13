import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BiDislike, BiLike } from 'react-icons/bi';
import Loading from './Loading';
import { FaEye } from 'react-icons/fa';
export default function PostDetails() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/posts/${postId}/comments`
        );
        const data = await response.json();
        const response2 = await fetch(`https://dummyjson.com/posts/${postId}`);
        const data2 = await response2.json();
        setComments(data.comments);
        setPost(data2);
        setLoading(false);
      } catch (err) {
        throw new Error('error while fetching ...', err);
      }
    };
    fetchData();
  }, [postId]);
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center gap-4 my-10">
        <div>
          <Loading />
        </div>
      </div>
    );
  }
  const { id, title, body, tags, reactions, views } = post;
  const itm = comments[0];
  console.log(comments);
  // console.log(post);
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-10 px-4">
      <div className="grid grid-cols-1 w-fit gap-3 max-w-fit lg:px-32">
        <div className="border-gray-200 border-2 py-6 px-3 w-fit shadow-md ">
          <div>
            {/* title */}
            <div className="text-xl md:w-96 w-72 text-center">{title}</div>

            {/* body */}
            <p className="font-light text-lg sm:w-96 w-72 lg:w-auto  ml-4">
              {body}
            </p>
          </div>

          {/* tags */}
          <div className="flex items-center flex-wrap gap-1 md:gap-3 my-6">
            {tags.map((item, index) => (
              <div
                className="font-semibold text-white bg-black py-1 px-5 rounded-2xl"
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
          <hr />
          {/* reactions and views */}
          <div className="flex items-center justify-between mt-2">
            <div className="flex gap-6 items-center">
              <div className="flex gap-2 items-center">
                <BiLike />
                {reactions.likes}
              </div>
              <div className="flex gap-2 items-center">
                <BiDislike />
                {reactions.dislikes}
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <FaEye />
              {views}
            </div>
          </div>
        </div>
        <div className="border w-auto p-5 shadow-md">
          {comments.map((itm) => (
            <div className="my-5" key={itm.id}>
              {/* user */}
              <div className="flex gap-2 items-center">
                <img src="/user.png" alt="user profile" className="size-8" />
                <div className="font-semibold">{itm.user.fullName}</div>
              </div>

              {/* comment */}
              <p className="font-light my-3 ml-6">{itm.body}</p>

              {/* reactions */}
              <div className="flex items-center gap-2 ml-6">
                <BiLike />
                {itm.likes}
              </div>
              <hr className='my-5'/>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
}
