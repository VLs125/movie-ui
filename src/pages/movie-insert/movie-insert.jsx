import React, { useState} from "react";
import styled from "styled-components";
import apis from "../../api";

const Title = styled.h1.attrs({
  className: "h1",
})``;

const Wrapper = styled.div.attrs({
  className: "form-group",
})`
  margin: 0 30px;
`;
const Label = styled.label`
  margin: 5px;
`;
const InputText = styled.input.attrs({
  className: "form-control",
})`
  margin: 5px;
`;
const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`,
})`
  margin: 15px 15px 15px 5px;
`;

const MoviesInsert = (props) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [time, setTime] = useState("");
  const [img, setImg] = useState("");

  const [upload, setUpload] = useState({});

  const handleChangeInputName = (event) => {
    setName(event.target.value);
  };

  const handleChangeInputRating = (event) => {
    const getRating = event.target.validity.valid ? event.target.value : rating;
    setRating(getRating);
  };

  const handleChangeInputTime = (event) => {
    setTime(event.target.value);
  };
  const handleChangeInputImg = (event) => {
    setImg(event.target.value);
  };

  const handleIncludeMovie = () => {
    setUpload({ name, rating, time, img });
    apis
      .insertMovie(upload)
      .then((res) => {
        window.alert(`Movie inserted successfully`);
        setName("");
        setRating("");
        setTime("");
        setImg("");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <Wrapper>
      <Title>Create Movie</Title>

      <Label>Name: </Label>
      <InputText type="text" value={name} onChange={handleChangeInputName} />

      <Label>Rating: </Label>
      <InputText
        type="number"
        step="0.1"
        lang="en-US"
        min="0"
        max="10"
        pattern="[0-9]+([,\.][0-9]+)?"
        value={rating}
        onChange={handleChangeInputRating}
      />

      <Label>Time: </Label>
      <InputText type="text" value={time} onChange={handleChangeInputTime} />

      <Label>Image: </Label>
      <InputText type="text" value={img} onChange={handleChangeInputImg} />

      <Button onClick={handleIncludeMovie}>Add Movie</Button>
      <CancelButton href={"/movies/list"}>Cancel</CancelButton>
    </Wrapper>
  );
};

export default MoviesInsert;
