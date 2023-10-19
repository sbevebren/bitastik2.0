import NewsForm from "@/components/news/NewsForm";
import { useRouter } from "next/router";
import {refreshNews} from '@/pages/newsroom'
function AddNewsPage() {

  const router = useRouter()
  async function addNews(data) {
    await fetch(`/api/news`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    router.push('/newsroom');
  }
  return <NewsForm addNews={addNews}/>;
}

export default AddNewsPage;

