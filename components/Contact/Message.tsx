import React, { useContext } from 'react'
import { GlobalContext } from 'context'

import {
	Error,
	TextareaLabel,
	TextareaRow,
	Textarea,
	LabelText,
} from './FormComponents'
import { InputProps } from '../../types'
import { MdMessage } from 'react-icons/md'

const Message = ({ errors, register, required }: InputProps) => {
	const { content } = useContext(GlobalContext)
	const NAME = 'message'
	return (
		<TextareaRow>
			<TextareaLabel htmlFor={NAME}>
				<MdMessage />
				<LabelText required={required}>{content?.contact?.message}</LabelText>
			</TextareaLabel>
			<Textarea
				name={NAME}
				rows={10}
				cols={10}
				wrap='hard'
				ref={register({ required })}
			/>
			{errors.message && <Error>{content?.contact?.errors?.message}</Error>}
		</TextareaRow>
	)
}

export default Message
