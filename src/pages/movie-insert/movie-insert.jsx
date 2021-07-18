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

  const handleChange = (e) => {
      const {name,value} = e.target;
      switch(name){
        case 'name':
            setName(value);
            break;
        case 'rating':
            setRating(value);
            break;
        case 'time':
            setTime(value);
            break;
        case 'img':
            setImg(value);
            break;
        
      }
    setName(e.target.value);
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
      <InputText name="name"t type="text" value={name} onChange={handleChange} />
      <Label>Rating: </Label>
      <InputText
        name="rating"
        type="number"
        step="0.1"
        lang="en-US"
        min="0"
        max="10"
        pattern="[0-9]+([,\.][0-9]+)?"
        value={rating}
        onChange={handleChange}
      />

      <Label>Time: </Label>
      <InputText name="time" type="text" value={time} onChange={handleChange} />

      <Label>Image: </Label>
      <InputText name="img" type="text" value={img} onChange={handleChange} />

      <Button onClick={handleIncludeMovie}>Add Movie</Button>
      <CancelButton href={"/movies/list"}>Cancel</CancelButton>
    </Wrapper>
  );
};

export default MoviesInsert;
