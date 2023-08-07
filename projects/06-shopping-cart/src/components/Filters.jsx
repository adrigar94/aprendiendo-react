/* eslint-disable react/prop-types */
import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters() {
    const {filters, setFilters} = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangePrice = (event) => {        
        setFilters(prevStat => ({
            ...prevStat,
            minPrice: event.target.value
        }))
    }
    const handleChangeCategory = (event) => {
        setFilters(prevStat => ({
            ...prevStat,
            category: event.target.value,
        }))
    }

    return (
        <section className="filters">

            <div>
                <label htmlFor={minPriceFilterId}>Min Price</label>
                <input onChange={handleChangePrice}
                    type="range"
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                    <option value="home-decoration">Home Decoration</option>
                    <option value="groceries">Groceries</option>
                </select>
            </div>

        </section>
    )
}