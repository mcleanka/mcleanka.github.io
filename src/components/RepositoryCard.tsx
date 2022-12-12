import React from "react";
import { Card, Col } from "react-bootstrap";
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
				<Card.Title>{props.name?.replaceAll("-", ' ')}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">{props.full_name}</Card.Subtitle>
				<Card.Text>{props.description}</Card.Text>
				<Card.Link className="text-decoration-none" href="">
					{'Updated: '}
					<Moment date={props.pushed_at} fromNow />
				</Card.Link>
				<Card.Link href={props.html_url}>View On Git</Card.Link>
			</Card.Body>
		</Card>
	</Col>
};

export default RepositoryCard;