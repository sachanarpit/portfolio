export const AboutData = ({ data }) => {
  return (
    <div>
      {data.map((x) => (
        <div>
          <p>
            <b>{x.cName}</b> - {x.cGiver}
            <br />
            {x.issue} {"     "}
            <a href={x.link} target="_blank">
              🔗
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export const AboutDataEx = ({ data }) => {
  return (
    <div>
      {data.map((x) => (
        <div>
          <p>
            <b>{x.post}</b>{" "}
            <p>
              {x.org} : {x.duration} <a href={x.link}>🔗</a>
            </p>
          </p>
        </div>
      ))}
    </div>
  );
};

export const AboutDataEd = ({ data }) => {
  return (
    <div>
      {data.map((x) => (
        <div>
          <p>
            <b>{x.sName}</b>{" "}
            <p>
              {x.course} <br /> {x.duration}{" "}
            </p>
          </p>
        </div>
      ))}
    </div>
  );
};
