import { BiDislike, BiLike } from 'react-icons/bi';
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Post({ id, body, title, reactions, tags, views }) {
  const navigate=useNavigate()
  return (
    <div className="border-gray-200 border-2 py-6 px-3 w-fit shadow-md">
      <div className='cursor-pointer' onClick={()=>{
        console.log(id);
        navigate(`/${id}`)
      }}>
        {/* title */}
        <div className="text-xl md:w-96 w-72 overflow-hidden whitespace-nowrap">
          {title}
        </div>

        {/* body */}
        <p className="font-light text-lg sm:w-96 w-72 line-clamp-3 ml-4">
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
  );
}
