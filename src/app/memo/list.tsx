import { View, StyleSheet } from 'react-native'
import { useEffect } from 'react'

import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'

import { router, useNavigation } from 'expo-router'
import LogOutBotton from '../../components/LogOutButton'

const handlePress = (): void => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  const navigaition = useNavigation()
  useEffect(() => {
    navigaition.setOptions({
      headerRight: () => { return <LogOutBotton /> }
    })
  }, [])
  return (
    <View style= {styles.container}>

        <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        </View>
        <CircleButton onPress={handlePress}>
          <Icon name='plus' size={40} color='#ffffff' />
        </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})
export default List
