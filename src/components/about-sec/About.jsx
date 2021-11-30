import styled from "styled-components";

export const RowGrid = styled.div`
  margin: auto;
  width: 80%;
  background-color: #191919;
  color: white;
`;

export const AboutDiv = styled.div`
  background-color: #191919;
  color: white;
`;

const AboutH1 = styled.h1`
  color: white;
  font-family: "Poppins", sans-serif;
  word-break: break-word;
  font-weight: 700;
  font-size: 4em;
  line-height: 1.4074;
`;

const AboutData = styled.div`
  margin-bottom: 10vh;
`;

const AboutSec = styled.section`
  padding-top: 20vh;
  padding-bottom: 20vh;
  background-color: #191919;
`;

const AboutPara = styled.p`
  line-height: 4vh;
  font-weight: 300;
  color: #717173;
  padding: 0;
  webkit-font-smoothing: antialiased;
  font-family: "Poppins", sans-serif;
`;

export const AboutPic = styled.img``;

export const About = () => {
  return (
    <AboutSec id="about-section" className="p-100 pb-2 bg-one-dark">
      <AboutDiv className="container">
        <RowGrid className="row d-flex align-items-end">
          <div className="col-md-6 text-center">
            <AboutPic
              src="https://i.ibb.co/d5K8rPg/20210821-122531-2.jpg"
              alt="Arpit picture"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <AboutData className="col">
              <AboutH1>About Me</AboutH1>
              <AboutPara>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which dont look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum,
              </AboutPara>
              <div class="btn-container">
                <button class="tab-btn active" data-id="history">
                  history
                </button>
                <button class="tab-btn" data-id="vision">
                  vision
                </button>
                <button class="tab-btn" data-id="goals">
                  goals
                </button>
              </div>
            </AboutData>
          </div>
        </RowGrid>
      </AboutDiv>
    </AboutSec>
  );
};
