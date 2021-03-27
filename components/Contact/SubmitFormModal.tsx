import React from 'react'
import ReactDom from 'react-dom'
import ClientOnly from '../shared/ClientOnly'

const SubmitFormModal = ({
	isOpen,
	children,
}: {
	isOpen: boolean
	children: React.ReactNode
}) => {
	if (!isOpen) return null

	return (
		<ClientOnly>
			{ReactDom.createPortal(
				<>{children}</>,
				document?.getElementById('submitForm')!
			)}
		</ClientOnly>
	)
}

export default SubmitFormModal
