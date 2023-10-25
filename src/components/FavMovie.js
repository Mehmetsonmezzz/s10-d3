import { useDispatch } from "react-redux";
import { deleteFavorite } from "./store/actions/favAction";

export default function FavMovie({ id, title }) {
  const dispatch = useDispatch();

  const deleteFavHandler = () => {
    dispatch(deleteFavorite(id));
  };

  return (
    <div className="flex p-3 pl-4 bg-white mb-2 shadow items-center group">
      <div className="pr-4 flex-1">{title}</div>
      <button
        onClick={deleteFavHandler}
        className="px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100"
      >
        Çıkar
      </button>
    </div>
  );
}
