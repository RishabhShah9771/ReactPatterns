import Accordion from "./components/Accordian/Accordion";

function App() {
  return (
    <main>
      <section>
        <h1>Why work with us!!</h1>
        <Accordion className="accordion">
          <Accordion.Item className="accordion-item">
            <Accordion.Title id="experience" className="accordion-item-title">
              We got 20 years of Experience.
            </Accordion.Title>
            <Accordion.Content
              id="experience"
              className="accordion-item-content"
            >
              <article>
                <p>You can&apos;t go wrong with us.</p>
                <p>
                  We have been planning individualized vacation trips for more
                  than 20 years.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item className="accordion-item">
            <Accordion.Title id="local-guides" className="accordion-item-title">
              We are working with local guides.
            </Accordion.Title>
            <Accordion.Content
              id="local-guides"
              className="accordion-item-content"
            >
              <article>
                <p>We are not doing this alone from our office.</p>
                <p>
                  Instead, we are working with local guides to ensure that our
                  customers have safe vacations.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
