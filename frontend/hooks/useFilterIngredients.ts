import { Ingredient } from '@prisma/client'
import { useEffect, useState } from 'react'
import { Api } from '../services/api-client'

interface ReturnProps {
	ingredients: Ingredient[]
	loading: boolean
}

export function useFilterIngredients(): ReturnProps {
	const [ingredients, setIngredients] = useState<Ingredient[]>([])
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		async function getIngredients() {
			try {
				setLoading(true)
				const ingredients = await Api.ingredients.getAll()
				setIngredients(ingredients)
			} catch (error) {
				console.error(error)
			} finally {
				setLoading(false)
			}
		}

		getIngredients()
	}, [])
	return { ingredients, loading }
}
