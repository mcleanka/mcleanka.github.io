import React, { FC, ReactElement, useEffect, useState } from "react";
import { FaAward, FaGraduationCap } from "react-icons/fa";
import { NotFound } from "../components";
import { award } from "../services";
import { IAwards } from "../types/Award.type";

const Awards: FC<{}> = (): ReactElement => {
  const [awards, setAwards] = useState<IAwards[]>([]);

  async function getAwards(): Promise<void> {
    await award
      .list("/awards", {})
      .then<void, never>((result) => setAwards(result));
  }

  useEffect(() => {
    getAwards();
  }, []);

  return (
    <section className="resume-section awards" id="awards">
      <div className="resume-section-content">
        <h2 className="mb-5">{"Awards & Certifications"}</h2>
        {awards.length > 0 && (
          <div className="row">
            {awards?.map((award: any, key: number) => (
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                key={key}
              >
                <div className="icon-box">
                  <div className="icon">
                    [<FaAward />, <FaGraduationCap />
                    ]?.{award.Icon}
                  </div>
                  <h4>
                    <a href="./">{award.Title}</a>
                  </h4>
                  <p>{award.Description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {!awards.length && (
          <NotFound title="No award(s) or certification(s) found" />
        )}
      </div>
    </section>
  );
};

export default Awards;
