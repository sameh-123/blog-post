import { useEffect, useRef, useState } from 'react';
import Post from './Post';
import { FaSearch } from 'react-icons/fa';
import Loading from './Loading';
export default function Home() {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(11);
  const [isLoading, setIsLoading] = useState(true);
  const [search,setSearch] = useState('');
  const inputRef=useRef(null)
  console.log(search);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const str = search != '' ? `/search?q=${search}` : '';
        const respons = await fetch('https://dummyjson.com/posts' + str);
        const data = await respons.json();
        const arr = data.posts.slice(0, Math.min(limit, data.posts.length));
        setPosts(arr);
        setIsLoading(false)
        console.log(inputRef)
        
      } catch (err) {
        throw new Error('error while getting data', err);
      }
    };
    fetchData();
  }, [limit, search]);
  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center gap-4 my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Loading />
          <Loading />
          <Loading />
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-10">
      <div className="flex items-center gap-2">
        <FaSearch className="cursor-pointer" />
        <input
          type="text"
          placeholder="search posts...."
          value={search}
          ref={inputRef}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="py-1 px-3 rounded-3xl outline-none text-black bg-slate-200"
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((item) => (
          <Post key={item.id} {...item} />
        ))}
        <div
          onClick={() => {
            setLimit(34 - limit);
          }}
          className="border-gray-200 border-2 py-3 w-auto shadow-md flex items-center justify-center font-light text-2xl"
        >
          {`see ${limit == 11 ? 'more' : 'less'} ...`}
        </div>
      </div>
    </div>
  );
}
