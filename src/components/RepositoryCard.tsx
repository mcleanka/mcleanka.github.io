import React from "react";
import { Card, Col } from "react-bootstrap";
import { FaCircle } from "react-icons/fa";
import Moment from "react-moment";

export interface IRepository {
	name: string;
	full_name: string;
	description: string;
	pushed_at: string;
	html_url: string
}


function RepositoryCard(props: IRepository) {

	return <Col
		xs={12}
		md={4}
		className="my-0 py-0"
	>
		<Card className="mb-3">
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">{props.full_name}</Card.Subtitle>
				<Card.Text>{props.description}</Card.Text>
				<Card.Link className="text-decoration-none" href="">
					{/* <small>{<FaCircle />}</small> */}
					{'Updated: '}
					<Moment date={props.pushed_at} fromNow />
				</Card.Link>
				<Card.Link href={props.html_url}>View On Git</Card.Link>
			</Card.Body>
		</Card>
	</Col>
};

export default RepositoryCard;