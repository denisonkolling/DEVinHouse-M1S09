import React, { useState } from 'react'

const ListItem = ({ taskList }) => {

  let [done, setDone] = useState()

  const endTask = (id) => {
    setDone(done = true)
  }


  return (
    <div>
				<h1>Your Tasks List</h1>
				{taskList.map((t) => (
					<div key={t.id}>
						<h3>{t.text}</h3>
						<p>Ready? {t.done == true ? 'Yes!' : 'Not done!'}</p>
            <p>Done Button: {done == true ? 'Finished!' : 'Not done!'}</p>
            <button onClick={() => endTask(t.id)}>Finish</button>
					</div>
				))}
			</div>
  )
}

export default ListItem