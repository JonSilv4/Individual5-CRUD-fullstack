import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.marca.value = onEdit.marca;
      user.time.value = onEdit.time;
      user.tamanho.value = onEdit.tamanho;
      user.cor.value = onEdit.cor;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.marca.value ||
      !user.time.value ||
      !user.tamanho.value ||
      !user.cor.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          marca: user.marca.value,
          time: user.time.value,
          tamanho: user.tamanho.value,
          cor: user.cor.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          marca: user.marca.value,
          time: user.time.value,
          tamanho: user.tamanho.value,
          cor: user.cor.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.marca.value = "";
    user.time.value = "";
    user.tamanho.value = "";
    user.cor.value = "";

    setOnEdit(null);
    getUsers();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>marca</Label>
        <Input name="marca" />
      </InputArea>
      <InputArea>
        <Label>time</Label>
        <Input name="time" />
      </InputArea>
      <InputArea>
        <Label>tamanho</Label>
        <Input name="tamanho" />
      </InputArea>
      <InputArea>
        <Label>cor</Label>
        <Input name="cor" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;
