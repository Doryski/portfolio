import React, { useContext } from 'react'
import Card from './Card'
import { Project } from '@/types'
import { GlobalContext } from 'context'

const CardsWrapper = () => {
	const { projects } = useContext(GlobalContext)

	return (
		<div>
			{projects.map((project: Project) => (
				<Card key={project.pl.name} project={project} />
			))}
		</div>
	)
}

export default CardsWrapper
