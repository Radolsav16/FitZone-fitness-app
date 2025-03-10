import { useState , useEffect} from "react";
import { Link, useSearchParams } from 'react-router'
import styles from "./Blog.module.css";
import Card from "./card/Card";
import axios from "axios";
import NoData from "../no-data/NoData";


import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { sortOptions } from "../../utils/selectionData";





export default function Blog() {
  const [data, setData] = useState([]);
 
  const [searchParams] = useSearchParams();

  const [displayedPost,SetDesplayPost] = useState([]);

 
  useEffect(() => {
    (async () => {
      const res = await axios.get("http://localhost:3030/blog/posts", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.data;
      setData(result);
    })();
  }, []);


  useEffect(()=>{
    const filter = Object.fromEntries(searchParams).sortedBy;

    if(filter === 'health'){
      console.log('here')
      SetDesplayPost([...data].filter(post => post.category === 'Health'));
    }else if(filter === 'motivation'){
      SetDesplayPost([...data].filter(post => post.category === 'Motivation'));
    }else if(filter === 'nutrition'){
      SetDesplayPost([...data].filter(post => post.category === 'Nutrition'));
    }else if(filter === 'fitness'){
      SetDesplayPost([...data].filter(post => post.category === 'Fitness'));
    }else{
      SetDesplayPost([...data]);
    }

  },[data,searchParams])


  return (
    <>
      <div className={styles["container"]}>
      <Menu as="div" className="relative inline-block text-left">
    <div>
        <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus-visible:outline-none">
            Sort
        </MenuButton>
    </div>

    <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white ring-1 shadow-2xl ring-black/5 transition focus:outline-none data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
    >
        <div className="py-1">
            {sortOptions.map((option) => (
                <MenuItem key={option.name}>
                    <Link
                        to={option.href}
                        className="text-gray-500 block px-4 py-2 text-sm data-focus:bg-gray-100 focus:outline-none"
                    >
                        {option.name}
                    </Link>
                </MenuItem>
            ))}
        </div>
    </MenuItems>
</Menu>

        {displayedPost.length ? (
          displayedPost.map((post) => (
            <>
              <Card key={post._id} post={post} />
            </>
          ))
        ) : (
          <NoData
            preText={"There are no posts yet 📝 !"}
            mainText={
              "Be the first to create an amazing post and share your thoughts!"
            }
          />
        )}
      </div>
    </>
  );
}
