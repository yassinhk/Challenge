import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import mainStyle from '../Styles/main'
import { Actionsheet, ScrollView, } from 'native-base'
import Headers from '../Components/Headers'
import Avatar from '../Components/Avatar'
import Form from '../Components/Form'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useDispatch } from 'react-redux'
import { storeProfile } from '../Container/Redux/ProfileSlice'
import { ThunkDispatch } from '@reduxjs/toolkit'

const SignUpScreen = () => {

  const navigate = useNavigation<NativeStackNavigationProp<any>>()

  const [selectedImage, setSelectedImage] = useState<any>(undefined)
  const [isActionSheetOpen, setActionSheetOpen] = useState(false)

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  const options: any = {
    title: 'Select an image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const handleSelectImage = () => {
    setActionSheetOpen(true)
  }

  const onClose = () => {
    setActionSheetOpen(false)
  }

  const handleTakePicture = async () => {
    const result = await launchCamera(options);
    if (result.assets) setSelectedImage(result.assets[0])
    setActionSheetOpen(false)
  }

  const handleSelectImageFromGallery = async () => {
    const result = await launchImageLibrary(options);
    if (result.assets) setSelectedImage(result.assets[0])
    setActionSheetOpen(false)
  }

  const handleSubmitProfile = (data: any) => {
    const profile = { ...data, profilePicture: selectedImage }
    dispatch(storeProfile(profile))
    .unwrap()
    .then(()=> navigate.navigate("ConfirmScreen"))
  }

  return (
    <View style={mainStyle.container}>
      <ScrollView>
        <Headers 
            title='Profile Creation'
            helpText=' Use the form below to submit your portfolio. An Email and password are required.'
        />
        <Avatar
          handleSelectImage={handleSelectImage}
          selectedImage={selectedImage}
        />
        <Form
          handleSubmitForm={handleSubmitProfile}
        />
        <Actionsheet isOpen={isActionSheetOpen} onClose={onClose}>
          <Actionsheet.Content>
            <Actionsheet.Item onPress={handleTakePicture}>
              Take picture
            </Actionsheet.Item>
            <Actionsheet.Item onPress={handleSelectImageFromGallery}>
              Select from gallery
            </Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      </ScrollView>
    </View>
  )
}

export default SignUpScreen