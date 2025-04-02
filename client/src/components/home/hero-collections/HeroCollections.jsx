import { Link } from "react-router";
import { collections } from "../../../utils/selectionData";

export default function HeroCollections() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {collections.map((c) => (
                <Link to={"/fitzone/shop"} key={c.imageUrl}>
                  <div className="group relative">
                    <img
                      alt={c.p}
                      src={c.imageUrl}
                      className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                    />
                    <h3 className="mt-6 text-sm text-gray-500">
                      <span className="absolute inset-0" />
                      {c.span}
                    </h3>
                    <p className="text-base font-semibold text-gray-900">
                      {c.p}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
