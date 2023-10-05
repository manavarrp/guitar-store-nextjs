import { clientAxios } from "../config";

export const getGuitars = async () => {
  const response = await clientAxios.get("/guitarras?populate=image");
  return response.data;
};


export const getGuitarsByID = async (url) => {
  const response = await clientAxios.get(`/guitarras?filters[url]=${url}&populate=image`);
  //console.log({response})
  return response.data;
};


export const getBlogs = async () => {
  const response = await clientAxios.get(`/posts?populate=image`);
  return response.data;
};

export const getPostsByID = async (url) => {
  const response = await clientAxios.get(`/posts?filters[url]=${url}&populate=image`);
  //console.log({response})
  return response.data;
};


export const getBCourse = async () => {
  const response = await clientAxios.get(`/course?populate=image`);
  //console.log({response})
  return response.data;
};

