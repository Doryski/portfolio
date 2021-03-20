import styled from 'styled-components'
import { MdClose } from 'react-icons/md'

export const ModalBlur = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
	background-color: rgba(0, 0, 0, 0.3);
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
`
export const ModalContent = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: white;
	min-width: 300px;
	min-height: 200px;
	width: 50%;
	height: 50%;
	border-radius: 25px;
	position: relative;
`
export const ModalClose = styled(MdClose)`
	position: absolute;
	right: 10px;
	top: 10px;
	width: 2.5em;
	height: 2.5em;
	cursor: pointer;
`
