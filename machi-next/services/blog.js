import axiosInstance, { fetcher } from './axios-instance'
import useSWR from 'swr'

export const publish = async (publishData = {}) => {
  return await axiosInstance.post('/blog/publish', publishData)
}

export function upload(file) {
  return new Promise((resolve, reject) => {
    const formData = new FormData()
    formData.append('articleImage', file)
    axiosInstance
      .post('/blog/upload', formData)
      .then((response) => {
        console.log(response)
        return response.data
      })
      .then((result) => {
        console.log(`upload result : ${result.url}`)
        resolve({
          default: result.url,
        })
      })
      .catch(reject)
  })
}
