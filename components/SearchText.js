import React from 'react';
import { Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

export class SearchText extends React.Component {
    render() {
        return (
            <React.Fragment>
                <FormLabel>Search an Artist</FormLabel>
                <FormInput onChangeText={() => {}} />
                <Button title='Search' onPress={() => {}} />
            </React.Fragment>
        )
    }
}

