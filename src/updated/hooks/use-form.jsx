import React from 'react';

export default function useForm(initialValues = {}) {
	const [values, setValues] = React.useState(initialValues);
	const [isValid, setIsValid] = React.useState(false);

	const handleChange = evt => {
		const target = evt.target;
		const name = target.name;
		const value =
			target.type === 'checkbox' ? target.checked : target.value;

		setValues({ ...values, [name]: value });
		setIsValid(target.closest('form').checkValidity());
	};

	const handleReset = React.useCallback(
		(newValues = {}, newIsValid = false) => {
			setValues(newValues);
			setIsValid(newIsValid);
		}
	);

	return { values, handleChange, isValid, handleReset };
}
