import { View, Text, Image, StyleSheet } from 'react-native'
import React from ' react'
import app from './../../assets/images/app.
export default function Login() {
return (
<View>
<Image source={app}
style={styles.appImage}
/>
</View>
)
} I
const styles = StyleSheet.create({
appImage:{
width:300,
height:500,
objectFit: 'contain'
}
})