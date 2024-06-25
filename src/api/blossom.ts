import { defaultRequest as rq } from './request'
import type { R } from './request'

/**
 * 文档树状列表
 * @param params
 * @returns
 */
export const docTreeOpenApi = (params?: object): Promise<R<any>> => {

  return rq.get<R<any>>('/docTree.json')
}

/**
 * 文章详情
 * @param params
 * @returns
 */
export const articleInfoOpenApi = (params?: object): Promise<R<any>> => {
  return rq.getFile<R<any>>('/doc/20151/doc.html')
}
