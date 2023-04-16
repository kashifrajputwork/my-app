import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	// Example: const useMemoVariables = useMemo(() => ({ item: 1 }), []);

	const [isModalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};
	const showModal = () => setModalVisible(true);
	const hideModal = () => setModalVisible(false);

	// @Start(Modal_Forgot_Password)
	const [is_Modal_Forgot_Password, set_Is_Modal_Forgot_Password] = useState(false);
	const toggle_Modal_Forgot_Password = () => {
		set_Is_Modal_Forgot_Password(!is_Modal_Forgot_Password);
	};
	// @End(Modal_Forgot_Password)

	// @Start(Modal_Account_Disabled)
	const [is_Modal_Account_Disabled, set_Is_Modal_Account_Disabled] = useState(false);
	const toggle_Modal_Account_Disabled = () => {
		set_Is_Modal_Account_Disabled(!is_Modal_Account_Disabled);
	};
	// @End(Modal_Account_Disabled)

	// @Start(Modal_Amount_Too_High)
	const [is_Modal_Amount_Too_High, set_Is_Modal_Amount_Too_High] = useState(false);
	const toggle_Modal_Amount_Too_High = () => {
		set_Is_Modal_Amount_Too_High(!is_Modal_Amount_Too_High);
	};
	// @End(Modal_Amount_Too_High)

	// @Start(Modal_Cancel_Bet)
	const [is_Modal_Cancel_Bet, set_Is_Modal_Cancel_Bet] = useState(false);
	const toggle_Modal_Cancel_Bet = () => {
		set_Is_Modal_Cancel_Bet(!is_Modal_Cancel_Bet);
	};
	// @End(Modal_Cancel_Bet)

	// @Start(Modal_Request_User_Access)
	const [is_Modal_Request_User_Access, set_Is_Modal_Request_User_Access] = useState(false);
	const toggle_Modal_Request_User_Access = () => {
		set_Is_Modal_Request_User_Access(!is_Modal_Request_User_Access);
	};
	// @End(Modal_Request_User_Access)

	// @Start(Modal_Reset_Password)
	const [is_Modal_Reset_Password, set_Is_Modal_Reset_Password] = useState(false);
	const toggle_Modal_Reset_Password = () => {
		set_Is_Modal_Reset_Password(!is_Modal_Reset_Password);
	};
	// @End(Modal_Reset_Password)

	// @Start(Modal_Suspend_User)
	const [is_Modal_Suspend_User, set_Is_Modal_Suspend_User] = useState(false);
	const toggle_Modal_Suspend_User = () => {
		set_Is_Modal_Suspend_User(!is_Modal_Suspend_User);
	};
	// @End(Modal_Reset_Password)

	const [userLoginText, setUserLoginText] = useState('C123456');
	const [destinationScreen, setDestinationScreen] = useState('');

	const checkUserType = inputText => {
		const regexUser = /^[Cc]\d{6}$/;
		const regexManager = /^[Gg]\d{6}$/;
		if (regexUser.test(inputText)) {
			console.log('User status');
			setDestinationScreen('CauteleiroHomeScreen');
			return 'RegisterScreen';
		} else if (regexManager.test(inputText)) {
			console.log('Manager status');
			setDestinationScreen('ManagerHomeScreen');
			return 'RegisterScreen';
		} else {
			console.log('String doesnt match the validation');
			return 'LoginScreen';
		}
	};
	return (
		<AuthContext.Provider
			value={{
				destinationScreen,
				setDestinationScreen,
				isModalVisible,
				setModalVisible,
				showModal,
				hideModal,
				toggleModal,
				userLoginText,
				setUserLoginText,
				checkUserType,
				is_Modal_Forgot_Password,
				toggle_Modal_Forgot_Password,
				is_Modal_Account_Disabled,
				toggle_Modal_Account_Disabled,
				is_Modal_Amount_Too_High,
				toggle_Modal_Amount_Too_High,
				is_Modal_Cancel_Bet,
				toggle_Modal_Cancel_Bet,
				is_Modal_Request_User_Access,
				toggle_Modal_Request_User_Access,
				is_Modal_Reset_Password,
				toggle_Modal_Reset_Password,
				is_Modal_Suspend_User,
				toggle_Modal_Suspend_User,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;