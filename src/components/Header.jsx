import { useNavigate } from "react-router-dom";
import logo from "/logo.jpeg"
import prof from "/prof.jpeg"

export default function Header() {
  const navigate=useNavigate()
  return (
    <header className="bg-black py-4 px-3 md:px-20">
      <div className="flex items-center justify-between text-white gap-2">
        <img src={logo} alt="logo" className="size-12 object-cover cursor-pointer" onClick={()=>{
          navigate('/')
        }}/>
        

        <div className="flex items-center gap-2">
          <img
            src={prof}
            alt="profile image"
            className="size-10 object-cover rounded-full"
          />
          <div className="font-bold hidden sm:block">Sameh Mohamed</div>
        </div>
      </div>
    </header>
  );
}
