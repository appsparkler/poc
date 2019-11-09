import React, {useState} from 'react'
import {useFirebase} from 'react-redux-firebase'
import cardify from '../materialize/Cardify.react'
import containerify from '../materialize/Containerify.react'


// import {connect} from 'react-redux'
// import {createProject} from '../../store/actions/project'


function CreateProject() {
  const firebase = useFirebase()
  const [title, changeTitle] = useState('')
  const [content, changeContent] = useState('')
  const project = {
    title, changeTitle,
    content, changeContent,
  }
  // const [inputVal, changeInput] = useState('')
  return getJSX.call(null, {
    handleChange: handleChange.bind(null, project),
    handleSubmit: handleSubmit.bind(null, project, firebase),
  })
  // return (<div>Hello World</div>)
}
// export class CreateProject extends Component {
// constructor() {
//   super()
//   this.state = {
//     title: '',
//     content: '',
//   }
// }

//   handleSubmit(e) {
//     const firebase = useFirebase()
//     console.log(firebase)
//     e.preventDefault()
//     e.stopPropagation()
//     this.props.createProject(this.state)
//     // firebase.push('projects', {
//     //   ...this.state,
//     //   authorFirstName: 'Akash',
//     //   authorLastname: 'Shah',
//     // })
//   }
//
//   return getJSX.call({handleChange, handleSubmit})
// }

function handleSubmit({title, content}, firebase, e) {
  e.preventDefault()
  e.stopPropagation()
  firebase.push('projects', {
    title,
    content,
    authorFirstName: 'Akash',
    authorLastname: 'Shah',
  })
}

function handleChange(project, e) {
  if (e && e.target && e.target.id === 'title') {
    return project.changeTitle(e && e.target && e.target.value)
  } else if (e && e.target && e.target.id === 'content') {
    return project.changeContent(e && e.target && e.target.value)
  }
}

function getJSX({handleSubmit, handleChange}) {
  return (
    <form onSubmit={handleSubmit} className="white">
      <h4 className="grey-text text-darken-3">Create new project</h4>
      <div className="input-field">
        <label htmlFor="title">
    Title
        </label>
        <input
          id="title"
          type="text"
          onChange={handleChange} />
      </div>
      <div className="input-field">
        <label htmlFor="content">
          Content
        </label>
        <textarea
          className="materialize-textarea"
          id="content"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="input-field">
        <button
          className="btn pink lighten-1 z-depth-0"
          type="submit">
          Create
        </button>
      </div>
    </form>
  )
}

export default containerify(cardify(CreateProject))
