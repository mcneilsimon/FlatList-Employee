import React, { Component } from 'react';
import { List, ListItem } from 'react-native-elements';
import { FlatList, View } from 'react-native';

class DisplayingData extends Component {
    
    renderSeperator = () => {
        return (
            <View
                style={{
                height: 1,
                width: '80%',
                backgroundColor: '#CED0CE',
                marginLeft: '14%'
                }}
            />
        );
    };

    render() {
        return (
            <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                <FlatList
                    data={this.props.data}
                    ItemSeparatorComponent={this.renderSeperator}
                    renderItem={({ item }) => (
                        <ListItem
                            roundAvatar
                            title={`${item.name.first} ${item.name.last}`}
                            subtitle={item.email}
                            avatar={{ uri: item.picture.thumbnail }}
                            containerStyle={{ borderBottomWidth: 0 }}
                        />
                    )}
                    keyExtractor={item => item.email}
                />
        </List>
        );
    }
}


export default DisplayingData;

