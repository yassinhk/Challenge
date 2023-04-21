import React, { useState } from 'react'
import Input from './Input'
import { Text, View } from 'native-base'
import { TouchableOpacity } from 'react-native'
import mainStyle from '../Styles/main'
import LinearGradient from 'react-native-linear-gradient'

interface FormsProps {
    handleSubmitForm: (data:any) => void
}

const Form: React.FC<FormsProps> = ({
    handleSubmitForm
}) => {

    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [webSite, setWebSite] = useState('')

    const [isEmailError, setEmailError] = useState(false)
    const [isPasswordError, setPasswordError] = useState(false)
    const [mailErrorMessage, setMailErrorMessage] = useState('')
    const handleInputChange = (input: string, value: string) => {
        switch (input) {
            case 'firstName':
                setFirstName(value)
                break;
            case 'email':
                setEmail(value)
                if(value) setEmailError(false)
                break;
            case 'password':
                setPassword(value)
                if(value) setPasswordError(false)
                break;
            case 'webSite' : 
                setWebSite(value)
                break;
        }
    }

    const isValidMail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);

    }

    const submitForm = () => {
        if(!email){
            setEmailError(true)
            setMailErrorMessage('Field Required')
        }
        if(!password) {
            setPasswordError(true)
        }
        if(!isValidMail()) {
            setEmailError(true)
            setMailErrorMessage("Check the mail format")
        }
        if(email && isValidMail() && password){
            handleSubmitForm({
                firstName,
                email,
                password,
                webSite
            })
        }
        
    }

    return (
        <View style={{ margin: 16, flex: 1, justifyContent: 'space-between' }}>
            <View>
                <Input
                    placeholder='First Name'
                    type="firstName"
                    handleInputChange={handleInputChange}
                    value={firstName}
                />
                <Input
                    placeholder='Email'
                    type="email"
                    handleInputChange={handleInputChange}
                    value={email}
                    isRequire={isEmailError}
                    keyboardType="email-address"
                    errorMessage={mailErrorMessage}
                />
                <Input
                    placeholder='Password'
                    type="password"
                    handleInputChange={handleInputChange}
                    secureTextEntry={true}
                    value={password}
                    isRequire={isPasswordError}
                />
                <Input
                    placeholder='Website'
                    type="webSite"
                    handleInputChange={handleInputChange}
                    value={webSite}
                    keyboardType='url'
                />
            </View>
            <LinearGradient
                colors={['#FF1744', '#F44336']}
                style={mainStyle.button}
                start={{ x: 0.7, y: 0 }}
            >
                <TouchableOpacity
                    style={[mainStyle.button, { width: '100%' }]}
                    onPress={submitForm}
                >
                    <Text style={mainStyle.buttonText}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}

export default Form