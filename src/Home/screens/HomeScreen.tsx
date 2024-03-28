import { useFormik } from 'formik';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Modal, Portal, Text, TextInput } from 'react-native-paper';
import { Header, ListItems } from '../../core/components';
import { useListItems } from '../../core/hooks/useListItems';
import { theme } from '../../core/theme/theme';

export const HomeScreen = () => {
	const { listItemsData, addItem, openModal, setOpenModal } = useListItems();
	const containerStyle = {
		backgroundColor: theme.colors.primaryContainer,
		padding: 20,
		gap: 10,
	};

	const handleSubmit = () => {
		if (!!formik.values.title) {
			addItem({
				...formik.values,
			});
		}
	};

	const formik = useFormik({
		initialValues: {
			title: '',
			description: '',
			status: true,
			date: new Date(),
		},
		validationSchema: {},
		onSubmit: handleSubmit,
	});

	return (
		<View style={styles.container}>
			<ScrollView>
				<Header openModal={() => setOpenModal(true)} />
				<ListItems
					subheader='List Items'
					data={listItemsData}
				/>
			</ScrollView>
			<Portal>
				<Modal
					visible={openModal}
					dismissable={false}
					onDismiss={() => setOpenModal(false)}
					contentContainerStyle={containerStyle}
				>
					<Text>Example Modal. Click outside this area to dismiss.</Text>
					<TextInput
						label='Title'
						value={formik.values.title}
						onChangeText={formik.handleChange}
					></TextInput>
					<TextInput
						label='Description'
						value={formik.values.description}
						onChangeText={formik.handleChange}
					></TextInput>
					<Button
						mode='contained'
						onPress={formik.submitForm}
					>
						Save
					</Button>
					<Button
						mode='outlined'
						onPress={formik.submitForm}
					>
						Close
					</Button>
				</Modal>
			</Portal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 2,
		marginTop: 22,
		width: '100%',
		backgroundColor: '#e6e6e6',
	},
	transparent: {
		alignItems: 'center',
		backgroundColor: '#0001',
	},
});
