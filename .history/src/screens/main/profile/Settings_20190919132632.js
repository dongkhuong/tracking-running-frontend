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
						iconName='your-icon-name'/>
					<SwitchRow 
						text='Switch Row' 
						iconName='your-icon-name' />
					<CheckRow 
						text='Check Row'
						iconName='your-icon-name'
						_color='#000' />
					<SliderRow 
						text='Slider Row'
						iconName='your-icon-name'
						_color='#000'
						_min={0}
						_max={100} />
				</SectionRow>
			</ReactNativeSettingsPage>
		)
	}
}

export default Settings