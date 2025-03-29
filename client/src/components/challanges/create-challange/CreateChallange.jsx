
import Input from "../../util/default-input-item/Input";
import SelectElement from "./SelectElement";
import { useNavigate } from "react-router-dom";
import {
  challangeTypeOptions,
  difficultyOptions,
  durationOptions,
  equipmentOptions,
} from "../../../utils/selectionData";
import { ErrorSetter } from "../../../utils/Errors";
import { useCreateChallange } from "../../../api/challangeApi";
import { useUserContext } from "../../../contexts/UserContext";

export default function CreateChallange() {
  const navigate = useNavigate();
  const {id} = useUserContext()

  const {handleDataOnChange , SetErrors , errors , createChallange,dataState} = useCreateChallange()

 

  const createChallangeHandler = async (formData) =>{
      const data = Object.fromEntries(formData);
   
      if (!data.name) {
        return ErrorSetter(
          errors,
          SetErrors,
          "name",
          "Challange name is required!"
        );
      } else if (data.type === ' ') {
        
        return ErrorSetter(
          errors,
          SetErrors,
          "type",
          "Challange Type is required!"
        );
      } else if (data.difficulty === " ") {
        return ErrorSetter(
          errors,
          SetErrors,
          "difficulty",
          "Challange Difficulty is required!"
        );
      } else if (data.duration === " ") {
        return ErrorSetter(
          errors,
          SetErrors,
          "duration",
          "Challange Duration is required!"
        );
      }else if (data.equipment === " ") {
        return ErrorSetter(
          errors,
          SetErrors,
          "equipment",
          "Challange Equipment is required!"
        );
      } else if (!data.image) {
        return ErrorSetter(
          errors,
          SetErrors,
          "image",
          "Challange Image is required!"
        );
      } else if (!data.description) {
        return ErrorSetter(
          errors,
          SetErrors,
          "description",
          "Challange Description is required!"
        );
      }

      await createChallange(data,id)

      navigate('/fitzone/challenges');
  }


  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          {" "}
          Create Challenge 💪
        </h2>
      </div>
      <form action={createChallangeHandler} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Challenge Name
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border-2 border-gray-500 placeholder:text-gray-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-600 sm:text-sm"
                onChange={handleDataOnChange}
                value={dataState.name}
              />
              {errors["name"] && (
                <p className="mt-2 text-sm text-red-600 font-bold">
                  {errors?.name}
                </p>
              )}
            </div>
          </div>
          <div>
            <label className="text-lg font-semibold">Challenge Type</label>
            <SelectElement
              name={"type"}
              options={challangeTypeOptions}
              onChangeHandler={handleDataOnChange}
              value={dataState.type}
            />
            {errors["type"] && (
              <p className="mt-2 text-sm text-red-600 font-bold">
                {errors?.type}
              </p>
            )}
          </div>

          <div>
            <label className="text-lg font-semibold">Difficulty Level</label>
            <SelectElement
              name={"difficulty"}
              options={difficultyOptions}
              onChangeHandler={handleDataOnChange}
              value={dataState.difficulty}

            />
            {errors["difficulty"] && (
              <p className="mt-2 text-sm text-red-600 font-bold">
                {errors?.difficulty}
              </p>
            )}
          </div>

          <div>
            <label className="text-lg font-semibold">Duration</label>
            <SelectElement
              name={"duration"}
              options={durationOptions}
              onChangeHandler={handleDataOnChange}
              value={dataState.duration}
            />
            {errors["duration"] && (
              <p className="mt-2 text-sm text-red-600 font-bold">
                {errors?.duration}
              </p>
            )}
          </div>

          <div>
            <label className="text-lg font-semibold">Required Equipment</label>
            <SelectElement
              name={"equipment"}
              options={equipmentOptions}
              onChangeHandler={handleDataOnChange}
              value={dataState.equipment}
            />
            {errors["equipment"] && (
              <p className="mt-2 text-sm text-red-600 font-bold">
                {errors?.equipment}
              </p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="image"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Image
            </label>
            <div className="mt-2.5">
              <Input
                name={"image"}
                type={"text"}
                placeholder={"Image"}
                onChangeHandler={handleDataOnChange}
                value={dataState.image}
              />
              {errors["image"] && (
                <p className="mt-2 text-sm text-red-600 font-bold">
                  {errors?.image}
                </p>
              )}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Description
            </label>
            <div className="mt-2.5">
              <textarea
                id="description"
                name="description"
                rows={4}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border-2 border-gray-500 placeholder:text-gray-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-600 sm:text-sm"
                placeholder="Description"
                onChange={handleDataOnChange}
                value={dataState.description}
              />
              {errors["description"] && (
                <p className="mt-2 text-sm text-red-600 font-bold">
                  {errors?.description}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create Challange
          </button>
        </div>
      </form>
    </div>
  );
}
