import { Container } from '@/components/shared/Container'
import { Filters } from '@/components/shared/Filters'
import { ProductsGroupList } from '@/components/shared/ProductsGroupList'
import { Title } from '@/components/shared/Title'
import { TopBar } from '@/components/shared/TopBar'

export default function Home() {
	return (
		<>
			<Container className='mt-10'>
				<Title text='Все пиццы' size='lg' className='font-extrabold' />
			</Container>
			<TopBar />
			<Container className='pb-14 mt-10'>
				<div className='flex gap-[60px]'>
					<div className='w-[250px]'>
						<Filters />
					</div>
					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							<ProductsGroupList
								title='Пиццы'
								items={[
									{
										id: 1,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										price: 599,
										items: [{ price: 599 }]
									},
									{
										id: 2,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										price: 599,
										items: [{ price: 599 }]
									},
									{
										id: 3,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										price: 599,
										items: [{ price: 599 }]
									},
									{
										id: 4,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										price: 599,
										items: [{ price: 599 }]
									},
									{
										id: 5,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										price: 599,
										items: [{ price: 599 }]
									},
									{
										id: 6,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										price: 599,
										items: [{ price: 599 }]
									}
								]}
								categoryId={1}
							/>
							<ProductsGroupList
								title='Завтрак'
								items={[
									{
										id: 1,
										name: 'Омлет с беконом',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7970326512C89366583FF997CA9E.avif',
										price: 209,
										items: [{ price: 209 }]
									},
									{
										id: 2,
										name: 'Омлет с беконом',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7970326512C89366583FF997CA9E.avif',
										price: 209,
										items: [{ price: 209 }]
									},
									{
										id: 3,
										name: 'Омлет с беконом',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7970326512C89366583FF997CA9E.avif',
										price: 209,
										items: [{ price: 209 }]
									},
									{
										id: 4,
										name: 'Омлет с беконом',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7970326512C89366583FF997CA9E.avif',
										price: 209,
										items: [{ price: 209 }]
									},
									{
										id: 5,
										name: 'Омлет с беконом',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7970326512C89366583FF997CA9E.avif',
										price: 209,
										items: [{ price: 209 }]
									},
									{
										id: 6,
										name: 'Омлет с беконом',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7970326512C89366583FF997CA9E.avif',
										price: 209,
										items: [{ price: 209 }]
									}
								]}
								categoryId={2}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
