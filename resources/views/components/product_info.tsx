// import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
// import axios from 'axios';
// import env from '#start/env';
//
// const stripePromise = env.get('STRIPE_PUBLIC_KEY');
//
// export function ProductInfo(props) {
//     const { product } = props;
//     const stripe = useStripe();
//     const elements = useElements();
//
//     const handlePurchase = async () => {
//         try {
//             const response = await axios.post('/payments/create-payment-intent', {
//                 amount: product.price * 100, // Convertir le prix en cents
//                 currency: 'eur'
//             });
//
//             const { clientSecret } = response.data;
//
//             const result = await stripe.confirmCardPayment(clientSecret, {
//                 payment_method: {
//                     card: elements.getElement(CardElement)
//                 }
//             });
//
//             if (result.error) {
//                 console.error(result.error.message);
//                 // Gérer l'erreur
//             } else {
//                 if (result.paymentIntent.status === 'succeeded') {
//                     console.log('Payment successful!');
//                     // Traiter le paiement réussi
//                 }
//             }
//         } catch (error) {
//             console.error('Error creating payment intent:', error);
//             // Gérer l'erreur
//         }
//     };
//
//     return (
//         <Elements stripe={stripePromise}>
//             <div class="flex flex-col w-full gap-5 lg:flex-row justify-center items-center lg:items-start p-4">
//                 <img class="h-1/3 lg:my-auto lg:h-2/3" src={product.thumbnailUrl} alt={product.name} />
//                 <div class="divider w-52 lg:divider-horizontal lg:!h-2/3 self-center"></div>
//                 <div class="flex flex-col gap-2 items-center lg:items-start lg:h-2/3 lg:my-auto">
//                     <h1 class="text-5xl font-semibold">{product.name}</h1>
//                     <h3>{product.description}</h3>
//                     {/* Vous pouvez ajouter d'autres éléments de votre interface utilisateur ici */}
//                     <CardElement className="card-element" />
//                     <button class="btn btn-primary" onclick={handlePurchase}>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
//                         Buy The Key Now!
//                     </button>
//                 </div>
//             </div>
//         </Elements>
//     );
// }

import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from 'axios';
import env from '#start/env';

const stripePromise = env.get('STRIPE_PUBLIC_KEY');

export function ProductInfo({ product }) {
    const handlePurchase = async (stripe, elements) => {
        try {
            const response = await axios.post('/payments/create-payment-intent', {
                amount: product.price * 100, // Convertir le prix en cents
                currency: 'eur'
            });

            const { clientSecret } = response.data;

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            });

            if (result.error) {
                console.error(result.error.message);
                // Gérer l'erreur
            } else {
                if (result.paymentIntent.status === 'succeeded') {
                    console.log('Paiement réussi !');
                    // Traiter le paiement réussi
                }
            }
        } catch (error) {
            console.error('Erreur lors de la création de l\'intention de paiement :', error);
            // Gérer l'erreur
        }
    };

    return (
        <Elements stripe={stripePromise}>
            <ProductInfoComponent product={product} handlePurchase={handlePurchase} />
        </Elements>
    );
}

function ProductInfoComponent({ product, handlePurchase }) {
    return (
        <div class="flex flex-col w-full gap-5 lg:flex-row justify-center items-center lg:items-start p-4">
            <img class="h-1/3 lg:my-auto lg:h-2/3" src={product.thumbnailUrl} alt={product.name} />
            <div class="divider w-52 lg:divider-horizontal lg:!h-2/3 self-center"></div>
            <div class="flex flex-col gap-2 items-center lg:items-start lg:h-2/3 lg:my-auto">
                <h1 class="text-5xl font-semibold">{product.name}</h1>
                <h3>{product.description}</h3>
                <CardElement className="card-element" />
                <button class="btn btn-primary" onclick={() => handlePurchase(stripePromise, useElements())}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                    Acheter maintenant !
                </button>
            </div>
        </div>
    );
}


// import Product from "#models/product";
// import { Rating } from "#components/rating";
// import { Html } from "@kitajs/html";
//
// type Props = {
//     product: Product
// }
//
// export function ProductInfo(props: Props) {
//     const { product } = props;
//
//     return (
//         <div class="flex flex-col w-full gap-5 lg:flex-row justify-center items-center lg:items-start p-4">
//             <img class="h-1/3 lg:my-auto lg:h-2/3" src={ product.thumbnailUrl } alt={ product.name } />
//             <div class="divider w-52 lg:divider-horizontal lg:!h-2/3 self-center"></div>
//             <div class="flex flex-col gap-2 items-center lg:items-start lg:h-2/3 lg:my-auto">
//                 <h1 class="text-5xl font-semibold">{ product.name }</h1>
//                 <h3> {product.description} </h3>
//                 <Rating product={product} />
//                 <h1 class="text-lg"> { product.price } €</h1>
//                 <button class="btn btn-primary"
//                         onclick={() => handlePurchase(product.id, product.price)}
//                 >
//                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
//                     Buy The Key Now!
//                 </button>
//             </div>
//
//         </div>
//     );
// }
