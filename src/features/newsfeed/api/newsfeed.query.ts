import { useQuery, useMutation, useQueryClient  } from "react-query";

import { axios } from "lib/axios";
import { Post } from "../types/post.type";


export const getPosts = async (): Promise<Post[]> => {
  const response = await axios.get('/api/posts');
  return response.data.posts;
};

export const addPost = (post: Post): Promise<Post> => {
  return axios.post('/api/post/create', post);

}

export const useGetPosts = () => {
  return useQuery<Post[], Error>({
    queryKey: 'posts',
    queryFn: () => getPosts(),
  });
};

export const useAddPost = () => {
  const queryClient = useQueryClient();

  return useMutation(
    addPost, 
    {
      onMutate: async newPost => {
        await queryClient.cancelQueries('posts');
        const previousPostData = queryClient.getQueriesData('posts');

        queryClient.setQueryData(
          'posts',
          oldData => {
            return [
              ...oldData as Post[],
              newPost,
            ]
          }
        )

        return { previousPostData };
      },
    }
  );
}