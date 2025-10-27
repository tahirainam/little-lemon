// (sometimes referred to as the jumbotron or the hero, this component is the call-to-action section that guides the user to click a call-to-action button while enticing them to do so in as few words as possible)

function CallToAction() {
  return (
    <section className="call-to-action">
      <h2>Ready to Make a Reservation?</h2>
      <p>Book your table now and experience the best dining in town!</p>
      <button className="cta-button">Reserve Now</button>
    </section>
  );
}
export default CallToAction;