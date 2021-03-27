import React, { useContext } from 'react'
import { GlobalContext } from 'context'
import CardsWrapper from './CardsWrapper'
import SectionName from '../shared/SectionName'
import PageWrapper from '../shared/PageWrapper'

const PortfolioPage = () => {
	const { content } = useContext(GlobalContext)

	return (
		<PageWrapper id='portfolio'>
			<SectionName>{content?.portfolio?.sectionName}</SectionName>
			<CardsWrapper />
		</PageWrapper>
	)
}

export default PortfolioPage
