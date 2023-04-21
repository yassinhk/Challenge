
import { Image, View } from 'native-base'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import mainStyle from '../Styles/main'


interface AvatarProps {
    selectedImage: any,
    handleSelectImage?: () => void
}

const Avatar: React.FC<AvatarProps> = ({
    handleSelectImage,
    selectedImage
}) => {

    return (
        <View style={{ alignItems: 'center' }}>

            <TouchableOpacity
                style={style.imageContainer}
                onPress={handleSelectImage}
            >
                {
                    selectedImage ? <>
                        <Image source={{ uri: selectedImage?.uri }} alt='img' style={style.imageContainer} />
                    </>
                        : handleSelectImage ? <>

                            <Text style={[mainStyle.text, { fontSize: 20, textAlign: 'center' }]}>
                                Tap to add avatar
                            </Text>
                        </> : <></>
                }
            </TouchableOpacity>

        </View >
    )
}

export default Avatar

const style = StyleSheet.create({
    imageContainer: {
        height: 200,
        width: 150,
        backgroundColor: '#E0E0E0',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center'
    }
})