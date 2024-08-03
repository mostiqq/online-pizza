import { Categories } from '@/components/shared/Categories'
import { Container } from '@/components/shared/Container'
import { SortPopup } from '@/components/shared/SortPopup'
import { Title } from '@/components/shared/Title'
import { TopBar } from '@/components/shared/TopBar'

export default function Home() {
	return (
		<>
			<Container className='mt-10'>
				<Title text='Все пиццы' size='lg' className='font-extrabold' />
			</Container>
			<TopBar />
		</>
	)
}
