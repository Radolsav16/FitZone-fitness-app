import { useEffect, useState } from "react";
import { useLoadingContext } from "../providers/LoadingProvider";
import {
  getAllExercises,
  getOneExercise,
  getTargetMuscleExercises,
} from "../utils/requester";

export const useExerciseDetails = (id) => {
  const [exercise, SetExercise] = useState({});
  const { showLoading, hideLoading } = useLoadingContext();

  useEffect(() => {
    (async () => {
      showLoading();
      const exercise = await getOneExercise(id);
      hideLoading();
      SetExercise(exercise);
    })();
  }, []);

  return {
    exercise,
  };
};

export const useTargetExercise = (target) => {
  const [exercises, SetExercises] = useState([]);
  const { showLoading, hideLoading } = useLoadingContext();

  useEffect(() => {
    (async () => {
      showLoading();
      const exercises = await getTargetMuscleExercises(target);
      hideLoading();
      SetExercises(exercises);
    })();
  }, []);

  return {
    exercises,
  };
};

export const useExercises = () => {
  const [exercises, SetExercises] = useState([]);
  const [page, SetCurrentPage] = useState(1);
  const [offset, SetOffset] = useState(0);
  const { showLoading, hideLoading } = useLoadingContext();

  useEffect(() => {
    (async () => {
      showLoading();
      const exercises = await getAllExercises(offset);
      hideLoading();
      SetExercises(exercises);
      SetOffset((page - 1) * 9);
    })();
  }, [page, offset]);

  return {
    page,
    SetCurrentPage,
    exercises,
    SetOffset,
  };
};
