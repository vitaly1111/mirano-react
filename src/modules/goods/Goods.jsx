
import './goods.scss'
import { Card } from "../card/Card"
import { Cart } from "../cart/Cart"
import { goodsArray } from "../../goodsArray.js"

export const Goods=() => {
	return <section className="goods">
		<div className="container goods__container">
			<div className="goods__box">
				<h2 className="goods__title">Цветы</h2>

				<ul className="goods__list">
					{
						goodsArray.map((item) => {
							return <li key={item.id} className="goods__item">
								<Card className='goods__card' {...item} />
							</li>

						})
					}


				</ul>
			</div>

			<Cart />

		</div>
	</section>
}