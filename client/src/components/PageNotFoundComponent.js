import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import { Link } from "react-router-dom";

const PageNotFoundComponent = () => {
  return (
    <div>
      <Container>
        <Jumbotron>
          <p className="lead">
            Oh no, 404. It looks like we couldn't find what you were looking for.
          </p>
          <h4>
            Let Julie take you away from here and help find you something better.
          </h4>
          <hr className="my-2" />
          <p className="lead">
            <Link to={"/"}>
              <Button color="primary">Find Something Better!</Button>
            </Link>
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default PageNotFoundComponent;