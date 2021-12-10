import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

export default function CardPopup({ more }) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  console.log(more);
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button
        style={{
          color: "white",
          backgroundColor: "#f8004c",
          fontFamily: "Poppins,sans-serif;",
          border: "1px solid #f8004c",
          marginLeft: "1.5em",
        }}
        onClick={handleClickOpen("paper")}
      >
        Read More <ReadMoreIcon />
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <div>
              <center>
                <b>
                  {" "}
                  <h1>{more.name}</h1>
                </b>
              </center>
              <br />
              <div>
                <h2>Description</h2>
                <p>{more.des}</p>
              </div>
              <div>
                <h2>Important Functionality</h2>
                <ul>
                  {more.impFun.map((e) => (
                    <li>{e}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2>Technology used in Project</h2>
                <br />
                <div>
                  <h3>👉 FrontEnd Technology</h3>
                  <ul>
                    {more.techFrontend.map((e) => (
                      <li>{e}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>👉 Backend Technology</h3>
                  <ul>
                    {more.techBackend.map((e) => (
                      <li>{e}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>👉 API Used</h3>
                  <ul>
                    {more.Apis.map((e) => (
                      <li>
                        <div>
                          <p>
                            <b>
                              {e.title}{" "}
                              <a href={e.link} target="_blank">
                                🔗
                              </a>{" "}
                            </b>
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <br />
                <div>
                  <h2>How to Run </h2>
                  <div>
                    {more.stepToClone.map((e) => (
                      <div>
                        <h3>➤ {e.step}st Step</h3>
                        <p>{e.des}</p>
                        <pre>
                          <code
                            style={{
                              backgroundColor: "grey",
                              color: "white",
                              padding: "5px",
                            }}
                          >
                            {e.code}
                          </code>
                        </pre>
                        <br />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{ color: "#f8004c" }} onClick={handleClose}>
            Cancel
          </Button>
          <Button style={{ color: "#f8004c" }} onClick={handleClose}>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
