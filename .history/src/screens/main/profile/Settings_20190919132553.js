// import React, { Component } from "react"
// import { View, Text } from "react-native"
// class Settings extends Component {
//     render() {
//         // const { navigation } = this.props
//         return (
//             <View>
//                 <Text>Settings</Text>
//             </View>
//         );
//     }
// }
export default Settings

import React from 'react';
import ReactNativeSettingsPage, { 
	SectionRow, 
	NavigateRow,
	CheckRow
} from 'react-native-settings-page';

class Settings extends React.Component {
	// TODO: implement your navigationOptions
	state = {
		check: false,
		switch: false,
		value: 40
	}
	_navigateToScreen = () => {
		const { navigation } = this.props
		navigation.navigate('Your-Screen-Name');
	}
	render() {
		return (
			<ReactNativeSettingsPage>
				<SectionRow text='Usage'>
					<NavigateRow
						text='Navigate Row'
						iconName='your-icon-name'
						onPressCallback={this._navigateToScreen} />
					<SwitchRow 
						text='Switch Row' 
						iconName='your-icon-name'
						_value={this.state.switch}
						_onValueChange={() => { this.setState({ switch: !this.state.switch }) }} />
					<CheckRow 
						text='Check Row'
						iconName='your-icon-name'
						_color='#000'
						_value={this.state.check}
						_onValueChange={() => { this.setState({ check: !this.state.check }) }} />
					<SliderRow 
						text='Slider Row'
						iconName='your-icon-name'
						_color='#000'
						_min={0}
						_max={100}
						_value={this.state.value}
						_onValueChange={value => { this.setState({ value }) }} />
				</SectionRow>
			</ReactNativeSettingsPage>
		)
	}
}

export default Settings