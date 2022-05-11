import React from 'react';
import Card from "./Card";

const Section = (props) => {
  return (
    <section className="section">
      <div className="row">
        <div>
          <Card>
            {props.children}
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Section;