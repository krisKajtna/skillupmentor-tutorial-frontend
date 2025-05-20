import { apiRoutes } from 'constants/apiConstants'
import { apiRequest } from './Api'
import { OrderType } from 'models/order'

export const fetchChart = async () =>
  apiRequest<undefined, { data: string; sum: string }[]>(
    'get',
    `${apiRoutes.ORDERS_PREFIX}/chart`,
  )

export const fetchOrders = async (pageNumber: number) =>
  apiRequest<undefined, OrderType[]>(
    'get',
    `${apiRoutes.ORDERS_PREFIX}?page=${pageNumber}`,
  )
