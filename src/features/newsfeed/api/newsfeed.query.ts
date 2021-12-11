import { useQuery, useMutation  } from "react-query";

import { axios } from "lib/axios";
import { Post } from "../types/post.type";


export const getPosts = async (): Promise<Post[]> => {
  const response = await axios.get('/api/posts');
  return response.data.posts;
};

export const addPost = (post: Post): Promise<Post> => {
  console.log(post);

  return axios.post('/api/post/create', post);

  // console.log('triggered');
  // console.log(response);

  // return response.data.post;
}

export const useGetPosts = () => {
  return useQuery<Post[], Error>({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  });
};

export const useAddPost = () => {
  return useMutation({
    mutationKey: ['addpost'],
    mutationFn: (post: Post) => addPost(post),
  })
}