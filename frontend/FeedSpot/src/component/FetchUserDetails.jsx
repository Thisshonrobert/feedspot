import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { PostsAtom } from '../store/atoms/PostAtom';
import axios from 'axios';

export default function FetchUserDetails(){
    const setDetials = useSetRecoilState(PostsAtom);
    useEffect(()=>{
      axios.get('http://localhost:3000/api/v1/user_details',{
        headers:{
          'Authorization': "Bearer " + localStorage.getItem('token')
        }
      }).then((res)=>setDetials(res.data.details))
      },[setDetials])

  return null;
};

