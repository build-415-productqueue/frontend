import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import axios from 'axios'
import '../styles/account.css'
import { URL } from '../actions'
import moment from 'moment'

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: true,
      project: {},
      newLink: false,
      linkForm: {
        link_type: '',
        link_href: ''
      }
    }
  }

  componentDidMount() {
    this.setState({ project: this.props.location.state.card })
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('data'))
    const projectId = this.props.match.params.id
    axios
      .get(
        `${URL}/api/projects/${
          this.props.location.state.card.user_id
        }/${projectId}`,
        {
          headers: {
            Authorization: token
          }
        }
      )
      .then(res => {
        this.setState({
          project: {
            ...this.state.project,
            comments: res.data.comments,
            links: res.data.links
          }
        })
      })
      .catch(err => {
        alert('something is wrong, please try again.')
      })
  }

  changeHandler = e => {
    this.setState({
      project: {
        ...this.state.project,
        [e.target.name]: e.target.value
      }
    })
  }

  editHandler = () => {
    if (!this.state.disabled) {
      this.setState({
        disabled: true
      })
    } else {
      this.setState({
        disabled: false
      })
    }
  }

  updateCheck = () => {
    if (
      !this.state.project.updated_at ||
      this.state.project.created_at === this.state.project.updated_at
    ) {
      return false
    } else {
      return true
    }
  }

  linkChange = e => {
    this.setState({
      linkForm: {
        ...this.state.linkForm,
        [e.target.name]: e.target.value
      }
    })
  }

  addLink = async e => {
    e.preventDefault()
    try {
      const res = await axios.post(
        `${URL}/api/projects/${this.props.match.params.id}/links`,
        this.state.linkForm,
        {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        }
      )
      this.setState({
        newLink: false,
        disabled: true,
        project: {
          ...this.state.project,
          links: res.data
        },
        linkForm: {
          link_type: '',
          link_href: ''
        }
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const user = JSON.parse(localStorage.getItem('data'))
    return (
      <div className="accform">
        <fieldset disabled={this.state.disabled}>
          <form>
            <p
              className={`${this.state.disabled ? 'edit' : 'cancel'}`}
              onClick={() => this.editHandler()}
            >
              {this.state.disabled ? 'EDIT' : 'CANCEL'}
            </p>

            <h2>{this.state.project.name}</h2>

            <h6 htmlFor="submittedBy">
              {this.state.project.first_name} {this.state.project.last_name},{' '}
              {this.state.project.company}{' '}
            </h6>

            <span>
              {' '}
              Created:{' '}
              {moment(
                this.state.project.created_at,
                'YYYY-MM-DDTkk:mm:ss.SSSZ'
              ).format('MMMM Do, YYYY')}
              {this.updateCheck()
                ? ` | ${moment(
                    this.state.project.updated_at,
                    'YYYY-MM-DDTkk:mm:ss.SSSZ'
                  ).format('MMMM Do, YYYY')}`
                : null}
            </span>

            <label htmlFor="status"> Status:</label>
            <select
              id="status"
              name="status"
              disabled={this.state.disabled}
              value={this.state.project.status}
              onChange={this.changeHandler}
            >
              <option defaultValue>Select Type</option>
              <option>Pending</option>
              {user.role === 'admin' ? <option>Approved</option> : null}
              {user.role === 'admin' ? <option>Denied</option> : null}
              {user.role === 'admin' ? <option>Working</option> : null}
              {user.role === 'user' ? <option>Complete</option> : null}
            </select>

            <label htmlFor="description"> Description:</label>
            <textarea
              className="description"
              type="text"
              id="description"
              name="description"
              onChange={this.changeHandler}
              value={this.state.project.description}
              disabled={this.state.disabled}
            />
            {this.state.disabled ? null : <button type="submit">Submit</button>}
          </form>
        </fieldset>
        <div>
          <h4> Project Links </h4>
          <button
            className="add-link"
            onClick={e => {
              e.preventDefault()
              this.setState({ newLink: !this.state.newLink })
            }}
          >
            Add New Link
          </button>
          {this.state.project.links &&
            this.state.project.links.map(link => (
              <div key={link.id}>
                <strong>{link.link_type}: </strong>
                <a
                  href={link.link_href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.link_href}
                </a>
              </div>
            ))}
          {this.state.newLink && (
            <form onSubmit={this.addLink} className="link-form">
              <div>
                <select
                  name="link_type"
                  value={this.state.linkForm.link_type}
                  onChange={this.linkChange}
                >
                  <option>Select Type</option>
                  <option>GitHub</option>
                  <option>Netlify</option>
                </select>
                <input
                  type="text"
                  name="link_href"
                  value={this.state.linkForm.link_href}
                  onChange={this.linkChange}
                />
              </div>
              <button>Add Link</button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  {}
)(Project)
