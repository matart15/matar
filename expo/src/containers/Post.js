// @flow
import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'

type Props = {
  post: {
    id: number,
    title: string
  }
}
export default (props: Props): React.Element => {
  let { title } = props.post
  if (props.isDraft) {
    title = `${title} (Draft)`
  }
  console.log('navigation', props)
  const { navigate } = props.navigation

  return (
    <TouchableOpacity
      className="no-underline ma1"
      to={`/post/${props.post.id}`}
      onPress={() => {
        navigate(
          'PostStack',
          {},
          NavigationActions.navigate('DetailPage', { id: props.post.id })
        )
      }}>
      <View>
        <Text className="f3 black-80 fw4 lh-solid">{title}</Text>
        <Text className="black-80 fw3">{props.post.text}</Text>
      </View>
    </TouchableOpacity>
  )
}
