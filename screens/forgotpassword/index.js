import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Card, Content, Form, Item, Input, Button, ListItem, Left, Right, Icon } from 'native-base';
const ForgotPassword = ({ navigation }) => {
    return (
        <Container style={styles.container}>
            <Content contentContainerStyle={styles.content}>
                <View style={{}}>
                    <Icon type="Entypo" style={styles.mainIcon} name="chat" />
                    <Text style={styles.mainText}>Let's Chat</Text>
                </View>
                <Form style={styles.form}>
                    <Item style={styles.item} rounded>
                        <Icon type='MaterialCommunityIcons' name='email' style={styles.iconInput} />
                        <Input placeholder="Email" />
                    </Item >
                    <Button style={styles.btnlogin} primary block>
                        <Text style={styles.loginText} >Password Reset</Text>
                    </Button>

                </Form>
                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                    <Button transparent onPress={() => navigation.navigate('Login')} >
                        <Text style={styles.btnLink}>Back To Login?</Text>
                    </Button>
                </View>
            </Content>
        </Container>
    );
}
const styles = StyleSheet.create({
    container: {},
    content: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    form: {
        width: '100%',
        padding: 15,
    },
    item: { margin: 10 },
    loginText: {
        color: '#ffffff'
    },
    btnlogin: {
        borderRadius: 50
    },
    btnLink: {
        color: '#001df5',
        fontWeight: 'bold'
    },
    btnSocial: {
        borderRadius: 50,
        width: '50%'
    },
    iconInput: {
        color: '#001df5'
    },
    mainIcon: {
        width: '40%',
        height: '20%',
        color: '#001df5'
    },
    mainText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#001df5'
    }
});

export default ForgotPassword;