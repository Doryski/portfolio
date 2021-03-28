import React, { useContext } from 'react'
import { GlobalContext } from 'context'
import { Row, Error, LabelText, EmailLabel, EmailInput } from './FormComponents'
import { EMAIL_REGEX } from '../../helpers/utils'
import { InputProps } from '../../types'
import { MdEmail } from 'react-icons/md'

const Email = ({ errors, register, required }: InputProps) => {
	const { content } = useContext(GlobalContext)
	const NAME = 'email'
	return (
		<Row>
			<EmailLabel htmlFor={NAME}>
				<MdEmail />
				<LabelText required={required}>{content?.contact?.email}</LabelText>
			</EmailLabel>
			<EmailInput
				name={NAME}
				placeholder='example@address.com'
				ref={register({
					required,
					pattern: EMAIL_REGEX,
				})}
			/>
			{errors.email && errors.email.type === 'required' && (
				<Error>{content?.contact?.errors?.email}</Error>
			)}
			{errors.email && errors.email.type === 'pattern' && (
				<Error>{content?.contact?.errors?.emailPattern}</Error>
			)}
		</Row>
	)
}

export default Email
