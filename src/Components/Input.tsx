import React from 'react'
import { KeyboardTypeOptions, StyleSheet, Text, TextInput } from 'react-native'

interface InputProps {
    placeholder: string,
    secureTextEntry?: boolean,
    type: string,
    value: string,
    handleInputChange: (type: string, value: string) => void,
    isRequire?: boolean, 
    keyboardType?: KeyboardTypeOptions, 
    errorMessage?: string
}

const Input: React.FC<InputProps> = ({
    placeholder,
    secureTextEntry = false,
    type,
    value,
    handleInputChange,
    isRequire = false, 
    keyboardType = "default", 
    errorMessage = "Field Required"
}) => {
    return (
        <>
            <TextInput
                style={[style.input, isRequire ? { borderColor: '#FF1744' } : { borderColor: '#E0E0E0' }]}
                placeholder={placeholder}
                placeholderTextColor='#757575'
                secureTextEntry={secureTextEntry}
                value={value}
                onChange={value => handleInputChange(type, value.nativeEvent.text)}
                keyboardType={keyboardType}
            />
            {isRequire && <Text style={style.textError}>
                {errorMessage}
            </Text>}
        </>
    )
}

export default Input

const style = StyleSheet.create({
    input: {
        height: 60,
        borderWidth: 2,
        borderRadius: 16,
        borderColor: '#E0E0E0',
        color: '#424242',
        marginHorizontal: 16,
        marginVertical: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        fontWeight: '500'
    },
    textError: {
        color: 'red',
        marginLeft: 24,
        marginVertical: 8,
    }
})