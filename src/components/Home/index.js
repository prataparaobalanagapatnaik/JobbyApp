/* import {Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  console.log(jwtToken)

  return (
    <div className="home-route-bg">
      <div className="home-route">
        <h1 className="home-section-title">Find The Job That Fits Your Life</h1>
        <p className="home-section-para">
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <Link to="/jobs">
          <button type="button" className="find-jobs-button">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  )
}
export default Home
*/

import Cookies from 'js-cookie'
import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  console.log(jwtToken)

  return (
    <div className="home-route-bg">
      <div className="container todos-bg-container">
        <div className="row">
          <div className="col-12">
            <h1 className="todos-heading">Todos</h1>
            <h1 className="create-task-heading">
              Create <span className="create-task-heading-subpart">Task</span>
            </h1>
            <input
              type="text"
              id="todoUserInput"
              className="todo-user-input"
              placeholder="What needs to be done?"
            />
            <button className="button" id="addTodoButton">
              Add
            </button>
            <h1 className="todo-items-heading">
              My <span className="todo-items-heading-subpart">Tasks</span>
            </h1>
            <button className="button" id="saveTodoButton">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
