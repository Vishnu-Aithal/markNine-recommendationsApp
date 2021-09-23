import "./styles.css";
import React, { useState } from "react";

const placesDB = {
  Hills: [
    {
      name: "Savandurga",
      info:
        "With its two popular trails as Billigudda and Karigudaa, this picturesque place offers an easy to moderate trekking experience to trekkers along with its awe-inspiring views.",
      rating: "5/5"
    },
    {
      name: "ShivaGange",
      info:
        "Shivagange is one of the tourist places of Bangalore which is located on a hill and is a favorite destination for pilgrims and hikers. The Shiva temple attracts tourists here and there is a waterfall called Ganga that gives the name Shivagange to the place.",
      rating: "5/5"
    },
    {
      name: "Nandi Hills",
      info:
        "Nandi Hills is one of the popular tourist spots near Bangalore. This is an age old hill fortress that offers an ideal location for trekking. There is a giant statue of Nandi at the doors of Yoga Nandeeshwara Temple which gives the hills its name.",
      rating: "4/5"
    }
  ],
  Lakes: [
    {
      name: "Ulsoor Lake",
      info:
        "Spanning over 120 acres with lush trees, islands, and interesting avifauna, Ulsoor Lake aka Halasuru Lake is one of the largest and the oldest in the city.",
      rating: "5/5"
    },
    {
      name: "Lal Bagh Lake",
      info:
        "Another must-visit lake in Bangalore, Lal Bagh Lake is a photographer’s delight. Situated inside Lal Bagh Botanical Gardens, one of the most iconic landmarks in the city and a lush green paradise with flowers and trees from around the world",
      rating: "4/5"
    },
    {
      name: "Sankey Tank",
      info:
        "This man-made lake nestled in the suburbs of Malleswaram epitomizes everything calm and beautiful. This is the kind of place where bookworms love to spend some peaceful time",
      rating: "4/5"
    }
  ],
  Parks: [
    {
      name: "Wonderla",
      info:
        "This 75-acre park is packed with every conceivable fun ride and water rides ",
      rating: "5/5"
    },
    {
      name: "Innovative Filmcity",
      info:
        " This amusement park near Bangalore is a wonderful combination of themed entertainment and fun rides for the family.",
      rating: "4/5"
    },
    {
      name: "Snow City",
      info:
        "This unique amusement park in Bangalore is strewn with snow animals, igloos, slides and a beautifully-designed snow castle.",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [list, setList] = useState("Hills");

  return (
    <div className="App">
      <header className="container header">
        <h1>Recommendations App</h1>
      </header>
      <div className="container container-top">
        <h2>
          Weekend getaways near Bengaluru <span>🌄</span>{" "}
        </h2>
        <small>
          Here are some places near Bengaluru city for a one day trip
        </small>
      </div>
      <div className="container btn-container">
        <button className="btn" onClick={() => setList("Hills")}>
          Hills
        </button>
        <button className="btn" onClick={() => setList("Lakes")}>
          Lakes
        </button>
        <button className="btn" onClick={() => setList("Parks")}>
          Resorts / Amusement Parks
        </button>
      </div>
      <hr></hr>
      <div className="container list-container">
        <ul>
          <h3>{list}</h3>
          {placesDB[list].map((place) => (
            <li>
              <span>{place.name}</span>
              <br></br>
              <small>{place.info}</small>
              <br></br>
              <small>Ratings: {place.rating}</small>
            </li>
          ))}
        </ul>
      </div>
      <footer className="container footer">
        <h3>Contact Me</h3>
        <div className="links-container">
          <a className="links" href="https://www.github.com/Vishnu-Aithal">
            Github
          </a>
          <a className="links" href="https://www.twitter.com/Vishnu_Aithal">
            Twitter
          </a>
          <a className="links" href="https://www.linkedin.com/in/vishnu-aithal">
            linkedin
          </a>
        </div>
      </footer>
    </div>
  );
}
