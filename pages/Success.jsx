import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const { session_id } = router.query;

    return(
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Success! Your order has been placed.</h1>
      <p className="text-lg text-gray-600 mb-8 font-bold">Thank you for your purchase.</p>
      <p className="text-lg text-gray-600 mb-8 font-bold">Your order ID is: {session_id}</p>
      <Link href="/">
        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Continue Shopping
        </a>
      </Link>
    </div>
    )
    
}
