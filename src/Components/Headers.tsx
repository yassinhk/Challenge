import { Heading, Text, View } from 'native-base'
import React from 'react'
import mainStyle from '../Styles/main'

interface headersProps {
    title: string,
    helpText:string
}

const Headers:React.FC<headersProps> = ({
    title,
    helpText
}) => {
    return (
        <View style={{ padding: 16 }}>
            <Heading size='2xl' ml="3">
                {title}
            </Heading>
            <View style={mainStyle.header}>
                <Text style={mainStyle.text}>
                    {helpText}
                </Text>
                
            </View>
        </View>
    )
}

export default Headers