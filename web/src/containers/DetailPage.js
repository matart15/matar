import React from 'react'
import { graphql, compose } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import gql from 'graphql-tag'

class DetailPage extends React.Component {
  render() {
    if (this.props.postQuery.loading) {
      return (
        <div>
          <div>Loading (from {process.env.REACT_APP_GRAPHQL_ENDPOINT})</div>
        </div>
      )
    }

    const { post } = this.props.postQuery

    const action = this._renderAction(post)

    return (
      <React.Fragment>
        <h1>{post.title}</h1>
        <p>{post.text}</p>
        {action}
      </React.Fragment>
    )
  }

  _renderAction = ({ id, isPublished }) => {
    if (!isPublished) {
      return (
        <React.Fragment>
          <a onClick={() => this.publishDraft(id)}>Publish</a>{' '}
          <a onClick={() => this.deletePost(id)}>Delete</a>
        </React.Fragment>
      )
    }
    return <a onClick={() => this.deletePost(id)}>Delete</a>
  }

  deletePost = async id => {
    await this.props.deletePost({
      variables: { id }
    })
    this.props.history.replace('/')
  }

  publishDraft = async id => {
    await this.props.publishDraft({
      variables: { id }
    })
    this.props.history.replace('/')
  }
}

const POST_QUERY = gql`
  query PostQuery($id: ID!) {
    post(id: $id) {
      id
      title
      text
      isPublished
    }
  }
`

const PUBLISH_MUTATION = gql`
  mutation publish($id: ID!) {
    publish(id: $id) {
      id
      isPublished
    }
  }
`

const DELETE_MUTATION = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`

export default compose(
  graphql(POST_QUERY, {
    name: 'postQuery',
    options: props => ({
      variables: {
        id: props.match.params.id
      }
    })
  }),
  graphql(PUBLISH_MUTATION, {
    name: 'publishDraft'
  }),
  graphql(DELETE_MUTATION, {
    name: 'deletePost'
  }),
  withRouter
)(DetailPage)
