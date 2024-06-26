import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './src/Home/screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ListItemsProvider } from './src/core/contexts/listItemsContext';
import { PaperProvider } from 'react-native-paper';
import { theme } from './src/core/theme/theme';

export default function App() {
	return (
		<SafeAreaProvider>
			<PaperProvider theme={theme}>
				<ListItemsProvider>
					<View style={styles.container}>
						<HomeScreen />
					</View>
				</ListItemsProvider>
			</PaperProvider>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
