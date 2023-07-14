import React, { useState } from 'react'

const ListItem = ({ taskList }) => {

  let [done, setDone] = useState()

  const endTask = (id) => {
    setDone(!done)
  }

  const removeTask = (id) => {
  
  }

  return (
    <div>
				<h1>Your Tasks List</h1>
				{taskList.map((t) => (
					<div className='task-list' key={t.id}>
						<h3>{t.text}</h3>
						<p>{t.done == true ? 'Yes!' : 'Not done!'}</p>
            <p>Btn: {done == true ? 'Finished!' : 'Not done!'}</p>
            <div>
            <button onClick={() => endTask(t.id)}>Finish</button>
            <button onClick={() => removeTask(t.id)}>Remove</button>
            </div>
					</div>
				))}
			</div>
  )
}

export default ListItem