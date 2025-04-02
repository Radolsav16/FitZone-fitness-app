import { useCreateReview } from "../../../api/reviewsApi";
import { useUserContext } from "../../../contexts/UserContext";
import { useFormState } from "../../../hooks/FormStateHook";
import { ratingOptions } from "../../../utils/selectionData";
import SelectElement from "../../util/SelectElement";

export default function ShopReviewForm({ cancel, productId, setReviews }) {
  const { createReview } = useCreateReview();
  const { id } = useUserContext();
  const { dataState, handleDataOnChange } = useFormState({
    title: "",
    rating: 0,
    review: "",
  });

  const onReviewHandler = async (formData) => {
    const data = Object.fromEntries(formData);
    data.rating = Number(data.rating);
    const review = await createReview(data, id, productId);
    setReviews((oldState) => [...oldState, review]);
    cancel();
  };

  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-11/12 relative">
          <button
            onClick={cancel}
            className="absolute top-0 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold focus:outline-none"
          >
            &times;
          </button>

          <h3 className="text-2xl font-bold text-gray-800 text-center">
            Leave Review
          </h3>
          <form className="mt-4 space-y-4" action={onReviewHandler}>
            <input
              type="text"
              name="title"
              placeholder="Title of review"
              value={dataState.title}
              onChange={handleDataOnChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            <SelectElement
              options={ratingOptions}
              name={"rating"}
              onChangeHandler={handleDataOnChange}
            />
            <textarea
              name="review"
              placeholder="Your Review"
              value={dataState.review}
              onChange={handleDataOnChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none h-24 resize-none"
              required
            ></textarea>

            {/* Buttons: Cancel + Submit */}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={cancel}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-400 transition duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
