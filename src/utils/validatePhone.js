export default function validatePhone(phoneNumber) {
	const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
	return regex.test(phoneNumber)
		? { phone: phoneNumber, validPhone: true }
		: { validPhone: false };
	// or :
	// ? this.setState({ phone: phoneNumber, validPhone: true })
	//   : this.setState({ validPhone: false });
}
