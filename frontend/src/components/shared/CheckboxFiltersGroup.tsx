'use client'
import { ChangeEvent, useState } from 'react'
import { Input } from '../ui/input'
import { FilterCheckbox, FilterCheckboxProps } from './FilterCheckbox'
import { Skeleton } from '../ui/skeleton'

type Item = FilterCheckboxProps

interface Props {
	title: string
	items: Item[]
	defaultItems?: Item[]
	limit?: number
	loading?: boolean
	searchInputPlaceholder?: string
	onClickCheckbox?: (id: string) => void
	defaultValue?: string[]
	className?: string
	selected?: Set<string>
	name?: string
}

export function CheckboxFiltersGroup({
	className,
	title,
	items,
	defaultItems,
	limit = 5,
	loading,
	name,
	searchInputPlaceholder = 'Поиск...',
	onClickCheckbox,
	selected,
	defaultValue
}: Props) {
	const [showAll, setShowAll] = useState(false)
	const [searchValue, setSearchValue] = useState('')

	if (loading) {
		return (
			<div className={className}>
				<p className='font-bold mb-3'>{title}</p>
				{...Array(limit)
					.fill(0)
					.map((_, index) => (
						<Skeleton key={index} className='mb-4 h-6 rounded-[8px]' />
					))}
			</div>
		)
	}

	const list = showAll
		? items.filter(item =>
				item.text.toLowerCase().includes(searchValue.toLowerCase())
			)
		: (defaultItems || items).slice(0, limit)

	const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}
	return (
		<div className={className}>
			<p className='font-bold mb-3'>{title}</p>
			{showAll && (
				<div className='mb-5'>
					<Input
						onChange={onChangeSearchInput}
						placeholder={searchInputPlaceholder}
						className='bg-gray-50 border-none'
					/>
				</div>
			)}
			<div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
				{list.map((item, index) => (
					<FilterCheckbox
						onCheckedChange={() => onClickCheckbox?.(item.value)}
						checked={selected?.has(item.value)}
						key={index}
						value={item.value}
						text={item.text}
						endAdornment={item.endAdornment}
						name={name}
					/>
				))}
			</div>
			{items.length > limit && (
				<div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
					<button
						onClick={() => setShowAll(!showAll)}
						className='text-primary mt-3'
					>
						{showAll ? 'Скрыть' : '+ Показать всё'}
					</button>
				</div>
			)}
		</div>
	)
}
