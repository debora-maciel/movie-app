'use client';
import { useRouter, useSearchParams } from 'next/navigation';

const Detail = () => {
    const router = useSearchParams();

    // Get the query parameter from the URL
    const keyword1 = router.keys;

    return <button type="button">
        Dashboard {keyword1.name}
    </button>
}

export default Detail;