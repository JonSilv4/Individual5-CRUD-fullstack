import React from 'react';
import styled from 'styled-components';
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from 'react-toastify';


const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: opx opx 5px #ccc;
    border-radius: 5px;
    max-width: 800px;
    margin: 20px auto;
    word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-botton: insert;
    padding-botton: 5px;

    @media (max-width: 500px) {
        ${(props) => props.onlyweb && "display: none"}
    }
`;

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};

    @media (max-width: 500px) {
        ${(props) => props.onlyweb && "display: none"}
    }
`;

export const Tbody = styled.tbody``;


const Grid = ({ users, setUsers, setOnEdit }) => {
    const handleEdit = (item) => {
        setOnEdit(item);
    };

    const handleDelete = async (id) => {
        await axios
          .delete("http://localhost:8800/" + id)
          .then(({ data }) => {
            const newArray = users.filter((user) => user.id !== id);
    
            setUsers(newArray);
            toast.success(data);
          })
          .catch(({ data }) => toast.error(data));
    
        setOnEdit(null);
      };

    


  return (
    <Table>
        <Thead>
            <Tr>
                <Th>marca</Th>
                <Th>time</Th>
                <Th>tamanho</Th>
                <Th>cor</Th>
                <Th></Th>
            </Tr>
        </Thead>
        <Tbody>
            {users.map((item, i) => (
                <Tr key={i}>
                    <Td width="30%">{item.marca}</Td>
                    <Td width="30%">{item.time}</Td>
                    <Td width="30%">{item.tamanho}</Td>
                    <Td width="30%">{item.cor}</Td>
                    <Td alignCen  width="5%">
                        <FaEdit onClick={() => handleEdit(item)} />
                    </Td>
                    <Td alignCen  width="5%">
                        <FaTrash onClick={() => handleDelete(item.id)} />
                    </Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
  )
}

export default Grid
