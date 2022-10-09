import { msRequest } from ".."

export function getGoodPriceData() {
  return msRequest.get({
    url: '/home/goodprice'
  })
}
