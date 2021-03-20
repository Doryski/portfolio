import React from 'react'
import ReactDom from 'react-dom'
import ClientOnly from '../shared/ClientOnly'

const SubmitFormModal = ({
	isModalOpen,
	children,
}: {
	isModalOpen: boolean
	children: React.ReactNode
}) => {
	if (!isModalOpen) return null

	return (
		<ClientOnly>
			{ReactDom.createPortal(
				<>{children}</>,
				document.getElementById('submitForm')!
			)}
		</ClientOnly>
	)
}

export default SubmitFormModal
