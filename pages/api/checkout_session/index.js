// pages/api/checkout_sessions.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_SECRETE_STRIPE_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { cart, email } = req.body;

            const lineItems = cart.map(item => {
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: item.name,
                        },
                        unit_amount: parseInt(item.price * 100,) // Convert price to cents
                    },
                    quantity: item.quantity,
                };
            });

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                customer_email: email,
                line_items: lineItems,
                mode: 'payment',
                
                success_url: `${req.headers.origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/feeds?payment_error={CHECKOUT_SESSION_ID}`,
            });



            res.status(200).json({ id: session.id });
        } catch (error) {
            res.status(500).json({ statusCode: 500, message: error.message });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}

