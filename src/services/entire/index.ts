import { msRequest } from '..'

export function requestEntireRoomList<T>(offset = 0, size = 20) {
  return msRequest.get<T>({
    url: '/entire/list',
    params: {
      offset,
      size
    }
  })
}
