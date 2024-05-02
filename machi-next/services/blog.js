import axiosInstance, { fetcher } from './axios-instance'
import useSWR from 'swr'

export const publish = async (publishData = {}) => {
  return await axiosInstance.post('/blog/publish', publishData)
}
