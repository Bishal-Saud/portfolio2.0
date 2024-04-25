import { useRouter } from "next/navigation";
import CrossIcon from "../Icons";
import { FRONTEND_URL } from "@/untill/frontEnd_Url";

export default function DeleteArticle(props) {
  const router = useRouter();
  const id = props.id;
  const deleteArticle = async () => {
    let data = await fetch(`${FRONTEND_URL}/api/article/` + id, {
      method: "DELETE",
    });
    data = await data.json();
    if (data.success) {
      alert(data.result);
      window.location.reload();
      router.push("/articles");
    }
  };

  return (
    <>
      <button key={id} onClick={deleteArticle}>
        <CrossIcon />
      </button>
    </>
  );
}
