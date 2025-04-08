import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
// import Moment from "react-moment";
import { IRepository } from "../types/Repository.type";

function RepositoryCard(props: IRepository) {
  return (
    <div className="my-0 py-0">
      <div className="mb-3">
        <div>
          <div className="h6">{props.name?.replaceAll("-", " ")}</div>
          <div className="mb-2 text-muted small">
            {props.description?.length > 100 ? (
              <>
                {props.description?.substring(0, 105)}{" "}
                <FaExternalLinkAlt className="small" />
              </>
            ) : (
              props.description
            )}
          </div>

          <div className="text-center">
            <div className="text-decoration-none small">
              {/* <Moment date={props.created_at} fromNow /> */}
            </div>
            <div
              className="small text-decoration-none"
              // href={props.html_url}
              // target="_blank"
            >
              View{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepositoryCard;
