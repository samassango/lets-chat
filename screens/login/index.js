import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Card, Content, Form, Item, Input, Button, ListItem, Left, Right, Icon } from 'native-base';
const LoginScreen = ({ navigation }) => {
    return (
        <Container style={styles.container}>
            <Content contentContainerStyle={styles.content}>
                <View style={{}}>
                    <Icon type="Entypo" style={styles.mainIcon} name="chat" />
                    <Text style={styles.mainText}>Let's Chat</Text>
                </View>
                <Form style={styles.form}>
                    <Item style={styles.item} rounded>
                        <Icon type='FontAwesome' name='user' style={styles.iconInput} />
                        <Input placeholder="Username" />
                    </Item >
                    <Item style={styles.item} rounded>
                        <Icon type='FontAwesome' name='lock' style={styles.iconInput} />
                        <Input placeholder="Password" />
                    </Item>
                    <Button style={styles.btnlogin} onPress={() => navigation.navigate('Home')} primary block>
                        <Text style={styles.loginText} >Login</Text>
                    </Button>
                    <ListItem transparent noBorder>
                        <Left>
                            <Button transparent onPress={() => navigation.navigate('ForgotPassword')}>
                                <Text style={styles.btnLink}>Forgot Password?</Text>
                            </Button>
                        </Left>

                        <Right>
                            <Button transparent onPress={() => navigation.navigate('Register')} >
                                <Text style={styles.btnLink}>Signup?</Text>
                            </Button>
                        </Right>
                    </ListItem>
                </Form>
                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#001df5' }} />
                    <View>
                        <Text style={{ width: 50, textAlign: 'center', color: '#001df5' }}>OR</Text>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#001df5' }} />

                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                    <View style={{ flex: 1, height: 0, backgroundColor: '#001df5' }} >
                        <Button style={styles.btnlogin} primary block>
                            <Icon type="FontAwesome" name='google' />
                            <Text style={styles.loginText} >Connect with Google</Text>
                        </Button>
                    </View>
                    <View>
                        <Text style={{ width: 20, textAlign: 'center', color: '#001df5' }}></Text>
                    </View>
                    <View style={{ flex: 1, height: 0, backgroundColor: '#001df5' }} >
                        <Button style={styles.btnlogin} primary block>
                            <Icon type="FontAwesome" name='facebook' />
                            <Text style={styles.loginText} >Connect with Facebook</Text>
                        </Button>
                    </View>

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
export default LoginScreen;