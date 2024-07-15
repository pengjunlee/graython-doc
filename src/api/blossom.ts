import { defaultRequest as rq } from './request'
import type { R } from './request'

/**
 * 文档树状列表
 * @param params
 * @returns
 */
export const docTreeOpenApi = (params?: object): Promise<any> => {
  return rq.getFile<any>('/docTree')
}

/**
 * 文章详情
 * @param params
 * @returns
 */
export const articleInfoOpenApi = (id: string): Promise<R<any>> => {
  return rq.getFile<R<any>>('/doc/'+id+'/doc.html')
}
