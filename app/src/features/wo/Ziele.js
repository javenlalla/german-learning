import React from 'react';
import Card from "../layout/Card";
import Gender from "../text/Gender";

const Ziele = () => {
  const destinations = [
    {
      wohin: <span>nach <Gender type="das">Spanien</Gender></span>,
      wo: <span>in <Gender type="das">Spanien</Gender></span>,
      woher: <span>aus <Gender type="das">Spanien</Gender></span>,
    },
    {
      wohin: <span>nach <Gender type="das">Paris</Gender></span>,
      wo: <span>in <Gender type="das">Paris</Gender></span>,
      woher: <span>aus <Gender type="das">Paris</Gender></span>,
    },
    {
      wohin: <span>nach <Gender type="das">Köln</Gender></span>,
      wo: <span>in <Gender type="das">Köln</Gender></span>,
      woher: <span>aus <Gender type="das">Köln</Gender></span>,
    },
    {
      wohin: <span>nach <Gender type="das">Italien</Gender></span>,
      wo: <span>in <Gender type="das">Italien</Gender></span>,
      woher: <span>aus <Gender type="das">Italien</Gender></span>,
    },
    {
      wohin: <span>in die <Gender type="plural">Bergen</Gender></span>,
      wo: <span>in den <Gender type="plural">Bergen</Gender></span>,
      woher: <span>aus den <Gender type="plural">Bergen</Gender></span>,
    },
    {
      wohin: <span>in die <Gender type="die">Stadt</Gender></span>,
      wo: <span>in der <Gender type="die">Stadt</Gender></span>,
      woher: <span>aus der <Gender type="die">Stadt</Gender></span>,
    },
    {
      wohin: <span>ins <Gender type="das">Gebirge</Gender></span>,
      wo: <span>im <Gender type="das">Gebirge</Gender></span>,
      woher: <span>aus dem <Gender type="das">Gebirge</Gender></span>,
    },
    {
      wohin: <span>in die <Gender type="die">Schweiz</Gender></span>,
      wo: <span>in der <Gender type="die">Schweiz</Gender></span>,
      woher: <span>aus der <Gender type="die">Schweiz</Gender></span>,
    },
    {
      wohin: <span>in die <Gender type="die">Türkei</Gender></span>,
      wo: <span>in der <Gender type="die">Türkei</Gender></span>,
      woher: <span>aus der <Gender type="die">Türkei</Gender></span>,
    },
    {
      wohin: <span>in die <Gender type="plural">USA</Gender></span>,
      wo: <span>in den <Gender type="plural">USA</Gender></span>,
      woher: <span>aus den <Gender type="plural">USA</Gender></span>,
    },
    {
      wohin: <span>in die <Gender type="die">Wüste</Gender></span>,
      wo: <span>in der <Gender type="die">Wüste</Gender></span>,
      woher: <span>aus der <Gender type="die">Wüste</Gender></span>,
    },
    {
      wohin: <span>in den <Gender type="der">Wald</Gender></span>,
      wo: <span>im <Gender type="der">Wald</Gender></span>,
      woher: <span>aus dem <Gender type="der">Wald</Gender></span>,
    },
    {
      wohin: <span>in den <Gender type="der">Dschungel</Gender></span>,
      wo: <span>im <Gender type="der">Dschungel</Gender></span>,
      woher: <span>aus dem <Gender type="der">Dschungel</Gender></span>,
    },
    {
      wohin: <span>in den <Gender type="der">Süden/Norden/Osten/Westen</Gender></span>,
      wo: <span>im <Gender type="der">Süden/Norden/Osten/Westen</Gender></span>,
      woher: <span>aus dem <Gender type="der">Süden/Norden/Osten/Westen</Gender></span>,
    },
    {
      wohin: <span>ins <Gender type="das">Hotel</Gender></span>,
      wo: <span>im <Gender type="das">Hotel</Gender></span>,
      woher: <span>aus dem <Gender type="das">Hotel</Gender></span>,
    },
    {
      wohin: <span>an den <Gender type="der">Bodensee</Gender></span>,
      wo: <span>am <Gender type="der">Bodensee</Gender></span>,
      woher: <span>aus dem <Gender type="der">Bodensee</Gender></span>,
    },
    {
      wohin: <span>an den <Gender type="der">Atlantik/Pazifik</Gender></span>,
      wo: <span>am <Gender type="der">Atlantik/Pazifik</Gender></span>,
      woher: <span>aus dem <Gender type="der">Atlantik/Pazifik</Gender></span>,
    },
    {
      wohin: <span>an die <Gender type="die">Mosel</Gender></span>,
      wo: <span>an der <Gender type="die">Mosel</Gender></span>,
      woher: <span>von der <Gender type="die">Mosel</Gender></span>,
    },
    {
      wohin: <span>an die <Gender type="die">Ostsee</Gender></span>,
      wo: <span>an der <Gender type="die">Ostsee</Gender></span>,
      woher: <span>von der <Gender type="die">Ostsee</Gender></span>,
    },
    {
      wohin: <span>ans <Gender type="das">Meer</Gender></span>,
      wo: <span>im/am <Gender type="das">Meer</Gender></span>,
      woher: <span>von/aus dem <Gender type="das">Meer</Gender></span>,
    },
    {
      wohin: <span>an der <Gender type="der">See</Gender></span>,
      wo: <span>im/am <Gender type="der">See</Gender></span>,
      woher: <span>von/aus dem <Gender type="der">See</Gender></span>,
    },
    {
      wohin: <span>an den <Gender type="der">Strand</Gender></span>,
      wo: <span>am <Gender type="der">Strand</Gender></span>,
      woher: <span>vom <Gender type="der">Strand</Gender></span>,
    },
    {
      wohin: <span>an die <Gender type="die">Küste</Gender></span>,
      wo: <span>an der <Gender type="die">Küste</Gender></span>,
      woher: <span>von der <Gender type="die">Küste</Gender></span>,
    },
    {
      wohin: <span>an den <Gender type="der">Fluss</Gender></span>,
      wo: <span>am <Gender type="der">Fluss</Gender></span>,
      woher: <span>vom <Gender type="der">Fluss</Gender></span>,
    },
    {
      wohin: <span>auf die <Gender type="die">Insel</Gender></span>,
      wo: <span>auf der <Gender type="die">Insel</Gender></span>,
      woher: <span>von der <Gender type="die">Insel</Gender></span>,
    },
    {
      wohin: <span>auf die <Gender type="die">Zugspitze</Gender></span>,
      wo: <span>auf der <Gender type="die">Zugspitze</Gender></span>,
      woher: <span>von der <Gender type="die">Zugspitze</Gender></span>,
    },
    {
      wohin: <span>aufs <Gender type="das">Land</Gender></span>,
      wo: <span>am <Gender type="das">Land</Gender></span>,
      woher: <span>vom <Gender type="das">Land</Gender></span>,
    },
    {
      wohin: <span>ins <Gender type="das">Büro</Gender></span>,
      wo: <span>im <Gender type="das">Büro</Gender></span>,
      woher: <span>vom <Gender type="das">Büro</Gender></span>,
    },
    {
      wohin: <span>ins <Gender type="das">Kino</Gender></span>,
      wo: <span>im <Gender type="das">Kino</Gender></span>,
      woher: <span>vom <Gender type="das">Kino</Gender></span>,
    },
    {
      wohin: <span>in den <Gender type="der">Park</Gender></span>,
      wo: <span>im <Gender type="der">Park</Gender></span>,
      woher: <span>vom <Gender type="der">Park</Gender></span>,
    },

    {
      wohin: <span>zur <Gender type="die">Party</Gender></span>,
      wo: <span>auf der <Gender type="die">Party</Gender></span>,
      woher: <span>von der <Gender type="die">Party</Gender></span>,
    },
    {
      wohin: <span>zur <Gender type="die">Hochzeit</Gender></span>,
      wo: <span>auf der <Gender type="die">Hochzeit</Gender></span>,
      woher: <span>von der <Gender type="die">Hochzeit</Gender></span>,
    },
    {
      wohin: <span>zum <Gender type="der">Fest</Gender></span>,
      wo: <span>auf dem <Gender type="der">Fest</Gender></span>,
      woher: <span>vom <Gender type="der">Fest</Gender></span>,
    },
  ]

  const destinationsRender = destinations.map((destination, i) => {
    return <tr>
      <td>{destination.wohin}</td>
      <td>{destination.wo}</td>
      <td>{destination.woher}</td>
    </tr>
  })

  return (
    <section className="section">
      <div className="row">
        <div>
          <Card cardTitle="Reiseziele">

            <div className="table-responsive text-nowrap">
              <table className="table">
                <thead>
                <tr>
                  <th>Ich fahre/gehe...</th>
                  <th>Ich bin...</th>
                  <th>Ich komme...</th>
                </tr>
                </thead>
                <tbody>
                {destinationsRender}
                </tbody>
              </table>
            </div>

          </Card>
        </div>
      </div>
    </section>
  )
}

export default Ziele;