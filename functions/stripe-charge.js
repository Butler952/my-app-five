const stripe = require('stripe')('sk_test_pnYm30FYo0qWAIZGKT1gE6Jl00Y0hCOw9D')

exports.handler = async function (event) {
    const {
        tokenId,
        email,
        name,
        description,
        amount
    } = JSON.parse(event.body)

    const customer = await stripe.customers.create({
        description: email,
        source: tokenId
    })

    await stripe.charges.create ({
        customer: customer.id,
        amount,
        name,
        description,
        currency: 'gbp'
    })
}