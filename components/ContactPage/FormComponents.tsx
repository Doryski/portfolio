import styled from 'styled-components'
import { Button } from '../shared/Button'

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 90%;
	margin: 0 auto;
	@media only screen and (min-width: 370px) {
		max-width: none;
	}
	@media only screen and (min-width: 900px) {
		margin: 0 auto;
		width: 80%;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: start;
	}
`
export const Input = styled.input`
	margin-top: 1em;
	font-size: 1em;
	width: 100%;
	height: 3em;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
	border-top-left-radius: 7px;
	border-bottom-right-radius: 7px;
	padding-left: 0.3em;
	box-shadow: none;
	&:hover,
	&:focus {
		border-bottom-width: 2px;
	}
	@media only screen and (min-width: 900px) {
		width: 350px;
	}
	@media only screen and (min-width: 1225px) {
		width: 400px;
	}
`
export const EmailInput = styled(Input)`
	margin-top: 2em;
`

export const Label = styled.label`
	display: flex;
	position: absolute;
	left: 0;
	top: -10px;
	font-weight: bold;
	@media only screen and (min-width: 900px) {
		font-size: 125%;
		top: -13px;
	}
`
export const EmailLabel = styled(Label)`
	top: 6px;
	@media only screen and (min-width: 900px) {
		top: 4px;
	}
`

export const LabelText = styled.span`
	margin-left: 0.5em;
	@media only screen and (max-width: 900px) {
		margin: auto auto auto 0.5em;
	}
`

export const Row = styled.section`
	position: relative;
	margin-top: 1em;
	min-width: none;
	width: 100%;
	max-width: auto;
	@media only screen and (min-width: 370px) {
		max-width: 90%;
	}
	@media only screen and (min-width: 400px) {
		max-width: 80%;
	}
	@media only screen and (min-width: 450px) {
		min-width: 300px;
		width: 50%;
		max-width: none;
	}
	@media only screen and (min-width: 900px) {
		display: flex;
		flex-direction: column;
		&:nth-of-type(2) {
			margin-top: 1.5em;
			width: auto;
		}
	}
`

export const SubmitMessage = styled.span`
	padding: 2em;
	font-size: 1.5rem;
`
export const Error = styled.span<{ fontSize?: string }>`
	font-weight: bold;
	font-size: ${({ fontSize }) => fontSize || '0.8rem'};
	@media only screen and (min-width: 900px) {
		margin-top: 0.3em;
	}
	color: rgb(207, 0, 0);
`
export const Textarea = styled.textarea`
	resize: none;
	font-size: 1em;
	width: 100%;
	height: 206px;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
	border-top-left-radius: 7px;
	border-bottom-right-radius: 7px;
	padding: 0.3em;
	box-shadow: none;
	margin-top: 1em;
	&:hover,
	&:focus {
		border-bottom-width: 2px;
	}
	@media only screen and (min-width: 900px) {
		width: 350px;
		margin: 0;
	}
	@media only screen and (min-width: 1024px) {
		width: 400px;
	}
`
export const TextareaLabel = styled(Label)`
	top: -9px;
	@media only screen and (min-width: 900px) {
		top: -30px;
	}
`
export const TextareaRow = styled(Row)`
	margin-top: 2em;
`

export const Submit = styled(Button)`
	float: right;
	cursor: pointer;
	font-size: 1em;
	border-radius: 50px;
	display: flex;
	justify-content: space-evenly;
	width: 65%;
	margin-left: auto;
	align-items: center;
`
