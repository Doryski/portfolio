import React, { useContext } from 'react'
import { GlobalContext } from 'context'
import styled from 'styled-components'
import CardShow from './CardShow'
import { Project } from '../../types'
import useDeviceDetect from '@/hooks/useDeviceDetect'

const Card = ({ project }: { project: Project }) => {
	const { language } = useContext(GlobalContext)
	const { isDesktop } = useDeviceDetect()
	const projectInfo = language === 'en' ? project.en : project.pl
	const projectName = <ProjectName>{projectInfo.name}</ProjectName>
	const cardDescription = (
		<CardDescriptionWrapper>
			<CardDescription>{project.tools}</CardDescription>
		</CardDescriptionWrapper>
	)
	const projectImg = !!project.imgSrc && (
		<Img src={project.imgSrc} alt={projectInfo.name} />
	)

	return (
		<ItemWrapper>
			{isDesktop ? (
				<>
					<Column>{projectImg}</Column>
					<Column>
						{projectName}
						{cardDescription}
						<CardShow project={project} />
					</Column>
				</>
			) : (
				<>
					<Row>{projectImg}</Row>
					<Row>
						{projectName}
						{cardDescription}
						<CardShow project={project} />
					</Row>
				</>
			)}
		</ItemWrapper>
	)
}
export const ItemWrapper = styled.article`
	width: 80%;
	margin: 0 auto;
	display: flex;
	padding: 4em 2em;
	border-radius: 15px;
	border: none;
	background: white;
	margin-top: 70px;
	max-height: 353px;
	box-shadow: 0 36px 30px -15px rgb(0 0 0 / 10%);
	transition: all 0.4s ease;

	&:first-of-type {
		margin-top: 0;
	}
	div:last-of-type {
		margin-left: 2em;
	}
	&:nth-of-type(even) {
		flex-direction: row-reverse;
		div:last-of-type {
			margin-left: 0;
			margin-right: 2em;
		}
	}
	@media only screen and (max-width: 1225px) {
		padding: 2em;
	}
	@media only screen and (max-width: 900px) {
		flex-direction: column;
		max-height: none;
		min-height: 354px;
		&:nth-of-type(even) {
			flex-direction: column;
		}
		div {
			margin: 0 !important;
		}
	}
	@media only screen and (max-width: 400px) {
		width: 90%;
	}
	@media only screen and (min-width: 900px) {
		&:hover {
			box-shadow: 0 20px 60px 0 rgb(0 0 0 / 40%);
			transform: translate(0, -10px);
		}
	}
`
export const Column = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 50%;
	justify-content: space-between;
	&:first-of-type {
		justify-content: center;
	}
`
export const Row = styled(Column)`
	@media only screen and (max-width: 900px) {
		height: 50%;
		width: 100%;
		justify-content: space-evenly;
	}
`

export const CardDescriptionWrapper = styled.div`
	margin: 0 !important;
	@media only screen and (min-width: 900px) {
		padding: 0 2em;
	}
`

export const CardDescription = styled.p`
	text-align: center;
	color: #6f6d6b;
`
export const Img = styled.img`
	max-height: 100%;
	width: auto;
	max-width: 100%;
`
export const ProjectName = styled.h1`
	text-align: center;
	@media only screen and (max-width: 900px) {
		padding: 1em 0;
	}
	@media only screen and (max-width: 370px) {
		padding: 1em 0;
		font-size: 1.3rem;
	}
`

export default Card
