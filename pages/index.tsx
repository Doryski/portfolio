import { GetStaticProps } from 'next'
import GlobalContextProvider from 'context'
import Layout from '@/components/Layout'
import translationPL from '../translations/pl'
import translationEN from '../translations/en'
import projects from 'store/projects'

// @ts-ignore
const Home = (props) => (
	<GlobalContextProvider data={props}>
		<Layout />
	</GlobalContextProvider>
)

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {
			en: translationEN,
			pl: translationPL,
			projects,
		},
	}
}

export default Home
