import React from 'react'
import {
  Linking,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Headers from '../Components/Headers'
import mainStyle from '../Styles/main'
import { useSelector } from 'react-redux'
import Avatar from '../Components/Avatar'
import LinearGradient from 'react-native-linear-gradient'

const ConfirmScreen = () => {

  const { Profile } = useSelector((state: any) => state.profile)

  const openLink = () => {
    if (Profile.profile.webSite.includes('http://') || Profile.profile.webSite.includes('https://')) {
      Linking.openURL(Profile.profile.webSite)
    } else Linking.openURL(`https://${Profile.profile.webSite}`)
  }

  return (
    <View style={[mainStyle.container, { justifyContent: 'space-between' }]}>
      <View>
        <Headers
          title={`Hello, ${Profile.profile.firstName}`}
          helpText={'Your super-awesome portfolio has been successfully submitted! The Preview below is what the community will see!'}
        />
        <Avatar
          selectedImage={Profile.profile.profilePicture}
        />
        <View style={{ alignItems: 'center', marginVertical: 32 }}>
          <TouchableOpacity
            onPress={() => openLink()}
          >
            <Text style={[mainStyle.text, { color: '#42A5F5', textDecorationLine: 'underline' }]}>
              {Profile.profile.webSite}
            </Text>
          </TouchableOpacity>
          <Text style={mainStyle.text}>
            {Profile.profile.firstName}
          </Text>
          <Text style={mainStyle.text}>
            {Profile.profile.email}
          </Text>
        </View>
      </View>
      <LinearGradient
          colors={['#FF1744', '#F44336']}
          style={[mainStyle.button, {marginBottom:32}]}
          start={{ x: 0.7, y: 0 }}
        >
          <TouchableOpacity
            style={[mainStyle.button, { width: '100%'}]}
          >
            <Text style={mainStyle.buttonText}>
              Log in
            </Text>
          </TouchableOpacity>
        </LinearGradient>
    </View>
  )
}

export default ConfirmScreen