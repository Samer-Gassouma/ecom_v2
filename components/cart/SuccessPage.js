import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Success(props) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    if(window.location.pathname === '/Success') {
    const { sessionId } = props;
    return(
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Success! Your order has been placed.</h1>
      <p className="text-lg text-gray-600 mb-8">Thank you for your purchase.</p>
      <p className="text-lg text-gray-600 mb-8">Your order ID is: {sessionId}</p>
      <Link href="/">
        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Continue Shopping
        </a>
      </Link>
    </div>
    )
    }
    }