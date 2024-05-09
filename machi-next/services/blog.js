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

export const fetchArticles = async () => {
  const response = await axiosInstance.get('/blog/articles')
  if (response.status !== 200) {
    console.error('Failed to fetch articles:', response.statusText)
    return
  }
  return response.data
}

// export const fetchCategorys = async () => {
//   const response = await axiosInstance.get('/blog/Categorys')
//   if (response.status !== 200) {
//     console.error('Failed to fetch Categorys:', response.statusText)
//     return
//   }
//   return response.data
// }

export const fetchRawArticle = async (url = 0) => {
  console.log('這裡')
  console.log(url)
  console.log('這裡')
  try {
    const response = await axiosInstance.get(`/blog/${url}`)
    if (response.status === 200) {
      return response.data
    } else {
      console.error('Failed to fetch article:', response.statusText)
      return []
    }
  } catch (error) {
    console.error('Error fetching article:', error)
    return []
  }
}

export async function searchArticles(keyword) {
  const response = await fetch(`/search?keyword=${keyword}`)

  if (!response.ok) {
    throw new Error(`Server responded with status code ${response.status}`)
  }

  const contentType = response.headers.get('Content-Type')
  if (!contentType || !contentType.includes('application/json')) {
    throw new Error('Server response is not JSON')
  }

  const data = await response.json()
  return data
}
