import React, { useContext, useState } from 'react'
import ShowMore from './ShowMore'
import Card from './Card'
import { Project } from '@/types'
import { GlobalContext } from 'context'

const CardsWrapper = () => {
	const { projects } = useContext(GlobalContext)
	const [showNumber, setShowNumber] = useState(3)
	const showMoreProjects = () => setShowNumber((showNumber) => showNumber + 3)

	return (
		<div>
			{projects?.slice(0, showNumber).map((project: Project) => (
				<Card key={project.pl.name} project={project} />
			))}
			{showNumber <= projects?.length && (
				<ShowMore handleClick={showMoreProjects} />
			)}
		</div>
	)
}

export default CardsWrapper
