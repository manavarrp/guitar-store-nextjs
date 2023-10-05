import { useCallback, useEffect, useState } from "react";
import { getBlogs } from "../service";

const useGetListPosts = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const getListPosts = useCallback(async() => {
    try {
      setLoading(true);
      const response = await getBlogs();
      //console.log(response);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getListPosts();
  }, [getListPosts]);

  return { loading, posts, getListPosts };
};

export default useGetListPosts;
