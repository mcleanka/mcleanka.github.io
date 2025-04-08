import React from "react";
import { IExperience } from "../types/Experience.type";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { FaBriefcase } from "react-icons/fa";

const ExperienceCard: React.FunctionComponent<IExperience> = (
  props: IExperience
) => {
  return (
    <React.Fragment>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
        contentArrowStyle={{ borderRight: "7px solid  white" }}
        date={props.StartDate + " - " + props.EndDate}
        iconStyle={{ background: "#006699", color: "rgb(39, 40, 34)" }}
        icon={<FaBriefcase />}
        key={props.Id}
      >
        <h3 className="vertical-timeline-element-title h5">
          {props.CompanyName}
        </h3>
        <h4 className="vertical-timeline-element-subtitle small">
          {props.JobTitle}
        </h4>

        <p>{props.JobDescription.join(" ")}</p>
      </VerticalTimelineElement>
    </React.Fragment>
  );
};

export default ExperienceCard;
