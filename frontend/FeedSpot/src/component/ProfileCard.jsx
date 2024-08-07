import React from 'react'

const ProfileCard = () => {
  return (
    
        <div
            className="max-w-64 mt-4  bg-white shadow-xl rounded-lg text-gray-900">
            <div className="rounded-t-lg h-28 overflow-hidden">
              <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
              <img className="object-cover object-center h-32" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Woman looking front' />
            </div>
            <div className="text-center mt-2">
              <h2 className="font-semibold">{"username"}</h2>
              <p className="text-gray-500">@{"name"}</p>
              <p>{'Bio'}</p>
            </div>
             
            <div className="p-4 border-t mx-8 mt-2">
              <button className=" block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">My Profile</button>
            </div>
      </div>
   
  )
}

export default ProfileCard
