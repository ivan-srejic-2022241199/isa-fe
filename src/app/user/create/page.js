"use client"

import {useForm} from "react-hook-form";
import {Row, Col, Button} from "reactstrap";
import axios from "axios";

const UserCreate = () => {
    const {register, watch, handleSubmit, formState: {errors}} = useForm();

    return (
        <>
            <Row className={'mb-6'}>
                <Col md={6}>
                    <input type="text" className={'form-control'} placeholder={"First name"}{...register("firstName", {
                        required: "First name is required",
                        minLength: 5
                    })}/>
                    {errors && errors.firstName && (
                        <span className={"text-danger"}>{errors.firstName.message}</span>
                    )}
                </Col>
                <Col md={6}>
                    <input type="text" className={'form-control'} placeholder={"Last name"}{...register("lastName", {
                        required: "Last name is required"
                    })} />
                    {errors && errors.lastName && (
                        <span className={"text-danger"}>{errors.lastName.message}</span>
                    )}
                </Col>
                <Col md={12}>
                    <input type={"email"} className={"form-control mt-2"} placeholder={"Email"}{...register("email", {
                        required: "Email is required",
                    })} />
                    {errors && errors.email && (
                        <span className={"text-danger"}>{errors.email.message}</span>
                    )}
                </Col>
            </Row>
            <Row className={'mt-1'}>
                <Col md={12} className={'d-flex justify-content-end'}>
                    <Button className={'btn btn-primary'} onClick={() => {
                        handleSubmit(async (data) => {
                            await axios.post("http://localhost:8080/user/create-body", data);
                        })();
                    }}>
                        Create user
                    </Button>
                </Col>
            </Row>

        </>
    );
}

export default UserCreate;