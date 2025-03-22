import React from 'react';

function Sidebar({ activeTab, setActiveTab }) {

  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser).name : "Guest";
 
  return (
    <div className='w-full sm:w-1/5 bg-gradient-to-t from-slate-700 to-slate-200 p-6 pt-28 '>
      <h2 className='text-2xl font-bold mb-8 text-center'>Your Section</h2>
      <div className="avatar mt-16 mb-16 flex justify-center items-center flex-col space-y-4 sm:space-y-12 sm:space-x-2">
        <div className="w-32 rounded  ">
          <img src="https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=0&k=20&c=4RMhqIXcJMcFkRJPq6K8h7ozuUoZhPwKniEke6KYa_k=" />
        </div>
        <p className='text-center text-black text-2xl'>{[` ${user}`]}</p>
      
      </div>

      <ul className='space-y-4'>
        <li>
          <button onClick={() => setActiveTab('cart')} className={`w-full text-left p-2 rounded-md ${activeTab === 'cart' ? 'bg-black text-white' : 'text-black'}`}>
            View Cart 🛒
          </button>
        </li>
        <li>
          <button onClick={() => setActiveTab('fav')} className={`w-full text-left p-2 rounded-md ${activeTab === 'fav' ? 'bg-black text-white' : 'text-black'}`}>
            Favorites ❤️
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
