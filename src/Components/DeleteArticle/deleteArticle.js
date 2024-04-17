import { useRouter } from "next/navigation";
import CrossIcon from "../Icons";

export default function DeleteArticle(props) {
  const router = useRouter();
  const id = props.id;
  const deleteArticle = async () => {
    let data = await fetch("http://localhost:3000/api/article/" + id, {
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
