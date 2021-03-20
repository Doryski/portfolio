import React, { useContext } from 'react'
import { GlobalContext } from 'context'
import { Row, Submit } from './FormComponents'
import { MdSend } from 'react-icons/md'
import useDeviceDetect from '@/hooks/useDeviceDetect'

const SubmitForm = ({
	children,
	loading,
}: {
	children: React.ReactNode
	loading: boolean
}) => {
	const { content } = useContext(GlobalContext)
	const { isDesktop } = useDeviceDetect()
	return (
		<>
			<Row>
				<Submit type='submit'>
					{loading ? (
						<>{content?.contact?.sending}</>
					) : (
						<>
							{content?.contact?.submit}
							{isDesktop && <MdSend />}
						</>
					)}
				</Submit>
			</Row>
			{children}
		</>
	)
}

export default SubmitForm
