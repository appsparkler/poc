import React, {useState} from 'react'

function handleSubmit(setSongs, songs, evt) {
  evt.preventDefault()
  evt.stopPropagation()
  const form = evt.target
  const formData = new FormData(form)
  const song = formData.get('song').trim()
  if (song) {
    setSongs([
      ...songs,
      {
        title: formData.get('song'),
        id: new Date().getTime().toString(),
      },
    ])
  }
  form.reset()
}

const SongList = () => {
  const [songs, setSongs] = useState([
    {title: 'Song 1', id: '1'},
    {title: 'Song 2', id: '2'},
    {title: 'Song 3', id: '3'},
  ])

  return (
    <div className="SongList">
      <form
        className="mt-2 rounded-0"
        onSubmit={handleSubmit.bind(null, setSongs, songs)}>
        <div className="input-group mb-3 rounded-0">
          <input
            type="text"
            className="form-control rounded-0"
            placeholder="Add new song..."
            name="song"
          / >
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary rounded-0"
              type="submit"
            >
            Add Song
            </button>
          </div>
        </div>
      </form>

      <ul className={`list-group rounded-0 mt-2 border border-primary`}>
        {songs.map((song)=>(
          <li
            key={song.id}
            className={`list-group-item rounded-0`}
          >
            { song.title }
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SongList
