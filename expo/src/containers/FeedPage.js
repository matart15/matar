import React from 'react'
import Post from './Post'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {
  // Platform,
  Text,
  View
} from 'react-native'

class FeedPage extends React.Component {
  getDerivedStateFromProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.feedQuery.refetch()
    }
  }

  render() {
    if (this.props.feedQuery.loading) {
      return (
        <View>
          <Text>Loading (from {process.env.REACT_APP_GRAPHQL_ENDPOINT})</Text>
        </View>
      )
    }

    return (
      <View>
        <Text>Feed</Text>
        {this.props.feedQuery.feed &&
          this.props.feedQuery.feed.map(post => (
            <Post
              key={post.id}
              post={post}
              refresh={() => this.props.feedQuery.refetch()}
              navigation={this.props.navigation}
              isDraft={!post.isPublished}
            />
          ))}
        {this.props.children}
      </View>
    )
  }
}

const FEED_QUERY = gql`
  query FeedQuery {
    feed {
      id
      text
      title
      isPublished
    }
  }
`

export default graphql(FEED_QUERY, {
  name: 'feedQuery', // name of the injected prop: this.props.feedQuery...
  options: {
    fetchPolicy: 'network-only'
  }
})(FeedPage)
