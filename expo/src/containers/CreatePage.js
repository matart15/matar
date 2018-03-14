// @flow
import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { TouchableOpacity, Text, View, TextInput } from 'react-native'

class CreatePage extends React.Component {
  state = {
    title: '',
    text: ''
  }

  handlePost = async () => {
    // e.preventDefault()
    const { title, text } = this.state
    const draftCreated = await this.props.createDraftMutation({
      variables: { title, text }
    })
    console.log('draft created', draftCreated)
    this.props.history.replace('/drafts')
  }

  render() {
    return (
      <View>
        <Text>Create Draft</Text>
        <TextInput
          autoFocus
          onChangeText={(title: string) => {
            this.setState({ title })
          }}
          placeholder="Title"
          type="text"
          value={this.state.title}
        />
        <TextInput
          multiline
          numberOfLines={4}
          cols={50}
          onChangeText={(text: string) => {
            this.setState({ text })
          }}
          placeholder="Content"
          rows={8}
          value={this.state.text}
        />
        <TouchableOpacity
          disabled={!this.state.text || !this.state.title}
          onPress={this.handlePost}>
          <Text>Create1</Text>
        </TouchableOpacity>
        <View>
          <Text> or cancel</Text>
        </View>
      </View>
    )
  }
}

// const CREATE_DRAFT_MUTATION = gql`
//   mutation CreateDraftMutation($title: String!, $text: String!) {
//     createDraft(title: $title, text: $text) {
//       id
//       title
//       text
//     }
//   }
// `

// const CreatePageWithMutation = graphql(CREATE_DRAFT_MUTATION, {
//   name: 'createDraftMutation' // name of the injected prop: this.props.createDraftMutation...
// })(CreatePage)

export default CreatePage // WithMutation
