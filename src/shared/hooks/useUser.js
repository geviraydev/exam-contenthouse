import { useSelector } from 'react-redux'

import useLatestEntity from '@hooks/useLatestEntity'
import useThunkDispatch from '@hooks/useThunkDispatch'

import * as userActions from '@redux/modules/user'

function createUser(userParams, dispatch){
  const { createUser: createFn } = userActions

  return dispatch(createFn(userParams))
}

function updateUser(userParams, dispatch){
  const { updateUser: updateFn } = userActions

  return dispatch(updateFn(userParams))
}

function deleteUser(user, dispatch){
  const { deleteUser: deleteFn } = userActions

  return dispatch(deleteFn(user))
}

const useUser = (initUser = {}) => {
    const { entity: user } = useLatestEntity(initUser, 'users')

    const dispatch = useThunkDispatch()

    const { creating, deleting, loading, updating } = useSelector(reduxState => reduxState.users)

    return {
      user,
      callbacks: {
        updateUser: userParams => updateUser(userParams, dispatch),
        createUser: userParams => createUser(userParams, dispatch),
        deleteUser: userParams => deleteUser(userParams, dispatch),
      },
      creating,
      deleting,
      loading,
      updating,
    }
}

export default useUser
