import React from 'react';
import CoffeeCard from './CoffeeCard';

export default class Exercise1 extends React.Component {
    render() {
        return (
            <div>
                <h2>Exercise 1</h2>
                <p>
                    In <code>Exercise1.js</code>, there is a component called <code>CoffeeCard.js</code> that is imported, but not used.
                </p>
                <ol>
                    <li>Render this component four times in <code>Exercise1.js</code> (one for each coffee drink).</li>
                    <li>Pass in the correct props.</li>
                </ol>
                <CoffeeCard drinkName="americano" price={4} />
                <CoffeeCard drinkName="latte" price={4} />
                <CoffeeCard drinkName="espresso" price={4} />
                <CoffeeCard drinkName="mocha" price={4} />
            </div>
        )
    }
}