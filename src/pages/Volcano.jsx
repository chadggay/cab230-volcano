import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VolcanoDetails from "../components/VolcanoDetails";
import { useAuth } from "../hooks/useAuth";
import { useVolcano } from "../hooks/useVolcano";
import PopulatedWithin from "../components/PopulatedWithin";
import ErrorAlert from "../components/ErrorAlert";

export default function Volcano() {
  const { volcanoId } = useParams();
  const { isAuthenticated } = useAuth();
  const populatedWithinKms = [5, 10, 30, 100];

  const { loading, volcano, error } = useVolcano(volcanoId);
  const [populatedWithin, setPopulatedWithin] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      const populatedWithin = populatedWithinKms.map((kms) => {
        const label = `Within ${kms} km`;
        const value = volcano[`population_${kms}km`];
        return {
          label,
          value,
        };
      });

      setPopulatedWithin(populatedWithin);
    }
  }, [isAuthenticated, volcano]);

  if (error) {
    return (
      <div className="mt-10">
        <ErrorAlert error={error.message} />
      </div>
    );
  }

  return (
    <div className="mt-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {volcano.name}
        </h1>
      </div>

      <section aria-labelledby="information-heading" className="mt-4">
        <h2 id="information-heading" className="sr-only">
          Volcano information
        </h2>

        {!loading ? <VolcanoDetails volcano={volcano} /> : <p>"Loading..."</p>}

        {isAuthenticated ? (
          <PopulatedWithin populatedWithin={populatedWithin} />
        ) : (
          <>
            <h2 className="mt-10 text-lg font-bold tracking-tight text-gray-900 sm:text-xl mb-2">
              Population Information
            </h2>
            <p className="text-sm text-gray-500">
              You must be logged in to view population information.
            </p>
          </>
        )}
      </section>
    </div>
  );
}
