import React, { useState } from 'react'
import ShowMore from './ShowMore'
import Card from './Card'
import useApi from '@/hooks/useApi'
import { Project } from '@/types'

const CardsWrapper = () => {
	const [showNumber, setShowNumber] = useState(3)
	const showMoreProjects = () => setShowNumber((showNumber) => showNumber + 3)
	const { data: projects } = useApi(
		(typeof window !== 'undefined' && window.location.origin) + '/api/projects'
	)

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
