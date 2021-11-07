import React, { useState } from "react";
import Modal from "react-responsive-modal";
import Card from "../Card";

const Homepage = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <section id="shout-out">
        <div className="section-content">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Card
                  img="releases/SOL018.jpg"
                  title="Rusuden • Volume 3"
                  link="21"
                  size="large"
                />
              </div>

              <div className="col-md-6">
                <Card
                  img="releases/SOL020.jpg"
                  title="Digalogue • Normal People"
                  link="23"
                  size="large"
                />
              </div>

              <div className="col-lg-4">
                <button onClick={onOpenModal}>Open modal</button>
                <a href="#" onClick={onOpenModal}>
                  <div className="card mb-4 fadeInView">
                    <img
                      className="card-img-top"
                      src="/img/home-news_Seal-Beach.jpg"
                      alt="Seal Beach 12"
                    />
                    <div className="card-body">
                      <p className="card-title">Seal Beach repress?</p>
                      <p className="card-text">
                        This popular record has been sold out for quite some
                        time. Should we repress?
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-lg-4">
                <Card
                  img="home-news_FeIXX171A.jpg"
                  link="4"
                  modal=""
                  title="Rusuden • Fe IX/X 171 A"
                  cardText='Backstock found of this amazing 12" on blue wax. Do not sleep on this one.'
                  btn="Learn More"
                  size="small"
                />
              </div>

              <div className="col-lg-4">
                <Card
                  img="home-news_AB-cassette.jpg"
                  link="24"
                  modal=""
                  title="Rusuden • A/B (Cassette)"
                  cardText="Released by Body Control in 2017, new expanded version now available."
                  btn="Buy Now"
                  size="small"
                />
              </div>

              <Modal open={open} onClose={onCloseModal} center>
                <div className="sealBeachForm">
                  <h4>Acean - Seal Beach 12"</h4>
                  <div className="row">
                    <div className="col-12">
                      <img
                        src="/img/home-news_Seal-Beach_2.jpg"
                        className="img-fluid"
                        alt="Seal-Beach"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      Are you still looking for Seal Beach on vinyl? Well, we
                      may end up doing a limited edition repress if we see there
                      are enough people who want one!
                      <br />
                      <a href="mailto:hellohuman@sohosix.com">
                        Send us an email
                      </a>{" "}
                      and let us know. If we get enough interest... we'll be in
                      contact.
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
