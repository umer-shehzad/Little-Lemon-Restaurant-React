import { useState } from "react";
import { Link } from "react-router-dom";
export default function ReservationForm(props) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");
  const [comments, setComments] = useState("");

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  return (
    <form className="reservation-form">
      <div>
        <label htmlFor="fName" className="reservation-label">First Name</label> <br></br>
        <input
          type="text"
          id="fName"
          placeholder="First Name"
          required
          minLength={2}
          maxLength={50}
          value={fName}
          onChange={(e) => setFName(e.target.value)}
          className="reservation-input"
        ></input>
      </div>

      <div>
        <label htmlFor="lName" className="reservation-label">Last Name</label> <br></br>
        <input
          type="text"
          id="lName"
          placeholder="Last Name"
          minLength={2}
          maxLength={50}
          value={lName}
          onChange={(e) => setLName(e.target.value)}
          className="reservation-input"
        ></input>
      </div>

      <div>
        <label htmlFor="email" className="reservation-label">Email</label> <br></br>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          required
          minLength={4}
          maxLength={200}
          onChange={(e) => setEmail(e.target.value)}
          className="reservation-input"
        ></input>
      </div>

      <div>
        <label htmlFor="phonenum" className="reservation-label">Phone Number</label> <br></br>
        <input
          type="tel"
          id="phonenum"
          placeholder="(xxx)-xxx-xxxx"
          value={tel}
          required
          minLength={10}
          maxLength={25}
          onChange={(e) => setTel(e.target.value)}
          className="reservation-input"
        ></input>
      </div>

      <div>
        <label htmlFor="people" className="reservation-label">Number of People</label> <br></br>
        <input
          type="number"
          id="people"
          placeholder="Number of People"
          value={people}
          required
          min={1}
          max={100}
          onChange={(e) => setPeople(e.target.value)}
          className="reservation-input"
        ></input>
      </div>

      <div>
        <label htmlFor="date" className="reservation-label">Select Date</label> <br></br>
        <input
          type="date"
          id="date"
          required
          value={date}
          onChange={handleDateChange}
          className="reservation-input"
        ></input>
      </div>

      <div>
        <label htmlFor="time" className="reservation-label" >Select Time</label> <br></br>
        <select id="time" className="reservation-input" required>
          {finalTime}
        </select>
      </div>

      <div>
        <label htmlFor="occasion" className="reservation-label">Occasion</label> <br></br>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          className="reservation-input"
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="preferences" className="reservation-label">Seating preferences</label> <br></br>
        <select
          id="preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
          className="reservation-input"
        >
          <option>None</option>
          <option>Indoors</option>
          <option>Outdoor (Patio)</option>
          <option>Outdoor (Sidewalk)</option>
        </select>
      </div>

      <div>
        <label htmlFor="comments" className="reservation-label">Additional Comments</label> <br></br>
        <textarea
          id="comments"
          placeholder="Additional Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          className="reservation-input"
          style={{ height: '8rem' }}
        ></textarea>
      </div>

      <div>
        {/* <br></br> */}
        <small style={{ display: 'block', width: '50vw', textAlign: 'justify' }}>
          <p>
            Note: You cannot edit your reservation after submission. Please
            double-check your answer before submitting your reservation request.
          </p>
        </small>
        <div style={{textAlign:'center', marginTop: 30, marginBottom: 10}}>
          <Link className="action-button" to="/confirmation">
            Book Table
          </Link>
        </div>
      </div>
    </form>
  );
}
