const initState = {
  projects: [],
  fetchingProjects: false,
}

const projectReducer = (state = initState, action) => {
  const newState = {
    ...state,
  }
  switch (action.type) {
    case 'FETCH_PROJECTS_STARTED':
      return {
        ...state,
        fetchingProjects: true,
      }

    case 'STORE_PROJECT':
      return {
        ...state,
        projects: [...state.projects, action.project],
      }

    case 'FETCH_PROJECTS_DONE':
      return {
        ...state,
        fetchingProjects: false,
      }

    case 'CREATE_PROJECT_STARTED':
      console.log(action)
      break

    case 'CREATE_PROJECT':
      return {
        ...state,
        projects: [...state.projects, action.project],
      }

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
