import React, { useContext, useReducer, useRef } from 'react'
import { GlobalContext } from 'context'
import SectionName from '../shared/SectionName'
import { useForm } from 'react-hook-form'
import SubmitForm from './SubmitForm'
import Message from './Message'
import Email from './Email'
import Name from './Name'
import { Form, SubmitMessage } from './FormComponents'
import postMessage from '../../helpers/postMessage'
import PageWrapper from '../shared/PageWrapper'
import { FORMSPREE_LINK } from '../../helpers/utils'
import useDialogHandler from '../../hooks/useDialogHandler'
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick'
import SubmitFormModal from './SubmitFormModal'
import { ModalClose, ModalBlur, ModalContent } from './ModalStyled'
import useDeviceDetect from '@/hooks/useDeviceDetect'
import { initialSubmit, reducer } from '@/helpers/submitReducer'

export const openModal = (openFn: () => void, messageFn: () => void) => {
	openFn()
	messageFn()
}

const ContactPage = () => {
	const { content } = useContext(GlobalContext)
	const { isMobile } = useDeviceDetect()
	const { register, handleSubmit, errors, reset } = useForm()
	const [submit, dispatch] = useReducer(reducer, initialSubmit)
	const { isDialogOpen: isModalOpen, open, close } = useDialogHandler(false)
	const dialogRef = useRef<HTMLDivElement>(null!)
	useDetectOutsideClick(dialogRef, close)

	const onSubmit = handleSubmit(async (data) => {
		dispatch({ type: 'LOADING', payload: true })
		await postMessage(
			FORMSPREE_LINK,
			data,
			() =>
				openModal(open, () => {
					dispatch({ type: 'SUCCESS', payload: true })
					reset()
				}),
			() => openModal(open, () => dispatch({ type: 'FAILURE', payload: true }))
		)
		dispatch({ type: 'LOADING', payload: false })
	})

	const inputProps = { errors, register }
	const name = <Name {...inputProps} />
	const email = <Email {...inputProps} />
	const message = <Message {...inputProps} />
	const submitForm = (
		<SubmitForm loading={submit.loading}>
			<SubmitFormModal isModalOpen={isModalOpen}>
				<ModalBlur>
					<ModalContent ref={dialogRef}>
						<ModalClose onClick={close} />
						<SubmitMessage>
							{submit.success && content?.contact?.success}
							{submit.failure && content?.contact?.failure}
						</SubmitMessage>
					</ModalContent>
				</ModalBlur>
			</SubmitFormModal>
		</SubmitForm>
	)

	return (
		<PageWrapper id='contact'>
			<SectionName>{content?.contact?.sectionName}</SectionName>
			<Form onSubmit={onSubmit}>
				{isMobile ? (
					<>
						{name}
						{email}
						{message}
						{submitForm}
					</>
				) : (
					<>
						<section>
							{name}
							{email}
						</section>
						<section>
							{message}
							{submitForm}
						</section>
					</>
				)}
			</Form>
		</PageWrapper>
	)
}

export default ContactPage
