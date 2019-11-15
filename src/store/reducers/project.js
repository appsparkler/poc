const initState = {
  projects: [],
}

const projectReducer = (state = initState, action) => {
  const newState = {
    ...state,
  }
  switch (action.type) {
    case 'FETCH_PROJECTS_STARTED':
      console.log('fetching projects started')
      break

    case 'STORE_PROJECT':
      return {
        ...state,
        projects: [...state.projects, action.project],
      }

    case 'STORE_PROJECTS_DONE':
      console.log('store projects done...')
      break

    case 'CREATE_PROJECT_STARTED':
      console.log(action)
      break

    case 'CREATE_PROJECT':
      console.log(action)
      break

    case 'CREATE_PROJECT_DONE':
      console.log(action)
      break

    case 'CREATE_PROJECT_ERROR':
      console.log(action)
      break

    default:
      break
  }
  return newState
}

export default projectReducer
