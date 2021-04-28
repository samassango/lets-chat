import * as React from 'react';
import { View, Button } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon, body } from 'native-base';

const HomeScreen = ({ navigation }) => {
    return (
        <Container>
            <Content>
                <List>
                    <ListItem selected>
                        <Left>
                            <Text>Simon Mignolet</Text>
                        </Left>
                        <body>
                            Testing
                        </body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>Nathaniel Clyne</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>Dejan Lovren</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                </List>
            </Content>
        </Container>
    );
}

export default HomeScreen;