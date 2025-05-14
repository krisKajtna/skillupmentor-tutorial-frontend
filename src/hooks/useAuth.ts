import * as API from 'api/Api'
import { StatusCode } from 'constants/errorConstants'
import authStore from 'stores/auth.store'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { userStorage } from 'utils/localStorage'
import { routes } from 'constants/routesConstants'

const useAuth = () => {
  const navigate = useNavigate()
  const user = authStore.user
  const timeRef = useRef<any>(null)

  const refreshTokens = async () => {
    const response = await API.refreshToken()
    if (
      response.data?.statusCode === StatusCode.UNAUTHORIZED ||
      response.data?.statusCode === StatusCode.FORBIDDEN
    ) {
      await API.signout()
      userStorage.clearUser()
      authStore.signout()
      navigate(routes.HOME)
    } else {
      authStore.login(response.data)
    }
  }

  useEffect(() => {
    if (userStorage.getUser()) {
      ;(async () => {
        const response = await API.fetchUser()
        if (response.data.email) {
          authStore.login(response.data)
          clearInterval(timeRef.current)
          timeRef.current = setInterval(refreshTokens, 840000)
        } else if (response.data.statusCode === StatusCode.UNAUTHORIZED) {
          authStore.signout()
          userStorage.clearUser()
          navigate(routes.HOME)
        }
      })()
    }
  }, [])

  useEffect(() => {
    if (user) {
      clearInterval(timeRef.current)
      timeRef.current = setInterval(refreshTokens, 840000)
    }
  }, [user])
}

export default useAuth
