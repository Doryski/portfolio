import React, { useContext, useRef, useState } from 'react'
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

export const openModal = (openFn: () => void, messageFn: () => void) => {
	openFn()
	messageFn()
}

const ContactPage = () => {
	const { content } = useContext(GlobalContext)
	const { isMobile } = useDeviceDetect()
	const { register, handleSubmit, errors, reset } = useForm()
	const [success, setSuccess] = useState(false)
	const [failure, setFailure] = useState(false)
	const { isDialogOpen: isModalOpen, open, close } = useDialogHandler(false)
	const [loading, setLoading] = useState(false)
	const dialogRef = useRef<HTMLDivElement>(null!)
	useDetectOutsideClick(dialogRef, close)
	const onSubmit = handleSubmit(async (data) => {
		setLoading(true)
		await postMessage(
			FORMSPREE_LINK,
			data,
			() =>
				openModal(open, () => {
					setSuccess(true)
					reset()
				}),
			() => openModal(open, () => setFailure(true))
		)
		setLoading(false)
	})
	const formElementProps = { errors, register }

	const name = <Name {...formElementProps} />
	const email = <Email {...formElementProps} />
	const message = <Message {...formElementProps} />
	const submitForm = (
		<SubmitForm loading={loading}>
			<SubmitFormModal isModalOpen={isModalOpen}>
				<ModalBlur>
					<ModalContent ref={dialogRef}>
						<ModalClose onClick={close} />
						<SubmitMessage>
							{success && content?.contact?.success}
							{failure && content?.contact?.failure}
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
