import { PageMain } from "../../components/PageMain";
import { formatCurrency } from "../../utils/formatCurrency";

const plans = [
  { id: 1, pacote: 'simple', price: 10 },
  { id: 2, pacote: 'custom', price: 15 },
  { id: 3, pacote: 'combo', price: 20 },
]

function Home() {
  return (
    <PageMain>

      <ul className="plans__container">
        {plans.map(item => (
          <li className="plans__item" key={item.id}>
            <h2>{item.pacote}</h2>
            <div className="plans__price">
              <p>{formatCurrency(item.price)}</p>
              <small>Per Month</small>
            </div>
            <button className="plans__btn">Select Plan</button>
          </li>
        ))}
      </ul>

    </PageMain>
  )
}

export default Home;
