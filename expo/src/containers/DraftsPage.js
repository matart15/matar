import React from 'react'
import Post from './Post'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Text, View } from 'react-native'

class DraftsPage extends React.Component {
  getDerivedStateFromProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.draftsQuery.refetch()
    }
  }

  render() {
    if (this.props.draftsQuery.loading) {
      return (
        <View className="flex w-100 h-100 items-center justify-center pt7">
          <Text>Loading (from {process.env.REACT_APP_GRAPHQL_ENDPOINT})</Text>
        </View>
      )
    }

    return (
      <View>
        <View className="flex justify-between items-center">
          <Text>Drafts</Text>
        </View>
        {this.props.draftsQuery.drafts &&
          this.props.draftsQuery.drafts.map(draft => (
            <Post
              key={draft.id}
              post={draft}
              navigation={this.props.navigation}
              refresh={() => this.props.draftsQuery.refetch()}
              isDraft={!draft.isPublished}
            />
          ))}
        {this.props.children}
      </View>
    )
  }
}

const DRAFTS_QUERY = gql`
  query DraftsQuery {
    drafts {
      id
      text
      title
      isPublished
    }
  }
`

export default graphql(DRAFTS_QUERY, {
  name: 'draftsQuery', // name of the injected prop: this.props.feedQuery...
  options: {
    fetchPolicy: 'network-only'
  }
})(DraftsPage)
