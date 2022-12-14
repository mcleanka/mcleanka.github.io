import React from "react";
import { Card, Col } from "react-bootstrap";
import { FaExternalLinkAlt } from "react-icons/fa";
import Moment from "react-moment";
import { IRepository } from "../types/Repository.type";

function RepositoryCard(props: IRepository) {

	return <Col
		xs={12}
		md={4}
		className="my-0 py-0"
	>
		<Card className="mb-3">
			<Card.Body>
				<Card.Title className="h6">{props.name?.replaceAll("-", ' ')}</Card.Title>
				<Card.Text className="mb-2 text-muted small">
					{
						props.description?.length > 100 ?
							<>
								{props.description?.substring(0, 105)} {" "}
								<FaExternalLinkAlt className="small" />
							</> : props.description
					}
				</Card.Text>

				<div className="text-center">
					<Card.Link className="text-decoration-none small" href="">
						<Moment date={props.created_at} fromNow />
					</Card.Link>
					<Card.Link className="small text-decoration-none" href={props.html_url} target="_blank">View {" "}  </Card.Link>
				</div>

			</Card.Body>
		</Card>
	</Col>
};

export default RepositoryCard;