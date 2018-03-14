import React from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import { TouchableOpacity, Text, View } from 'react-native'

class DetailPage extends React.Component {
  render() {
    const { navigate = () => {} } = this.props.navigation
    if (this.props.postQuery.loading) {
      return (
        <div className="flex w-100 h-100 items-center justify-center pt7">
          <div>Loading (from {process.env.REACT_APP_GRAPHQL_ENDPOINT})</div>
        </div>
      )
    }

    const { post } = this.props.postQuery

    const action = this._renderAction(post)

    return (
      <View>
        <Text className="f3 black-80 fw4 lh-solid">{post.title}</Text>
        <Text className="black-80 fw3">{post.text}</Text>
        {action}
      </View>
    )
  }

  _renderAction = ({ id, isPublished }) => {
    if (!isPublished) {
      return (
        <View>
          <TouchableOpacity
            className="f6 dim br1 ba ph3 pv2 mb2 dib black pointer"
            onClick={() => this.publishDraft(id)}>
            <Text>Publish</Text>
          </TouchableOpacity>{' '}
          <TouchableOpacity
            className="f6 dim br1 ba ph3 pv2 mb2 dib black pointer"
            onClick={() => this.deletePost(id)}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      )
    }
    return (
      <a
        className="f6 dim br1 ba ph3 pv2 mb2 dib black pointer"
        onClick={() => this.deletePost(id)}>
        Delete
      </a>
    )
  }

  deletePost = async id => {
    await this.props.deletePost({
      variables: { id }
    })
    // this.props.history.replace('/')
  }

  publishDraft = async id => {
    await this.props.publishDraft({
      variables: { id }
    })
    // this.props.history.replace('/')
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
  })
)(DetailPage)
