import React from 'react';
import {SelectInput } from "react-admin";
import {apiAddress} from "../Options";


export class AwaitSelectInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choices: [
                {  }
            ]
        }
        this.getData()
    }

    async getData() {
        return await fetch(apiAddress + "/" + this.props.rel + "s/count")
            .then(res => res.json())
            .then(
                async (result) => {
                    await fetch(apiAddress + "/"+ this.props.rel + "?_start=0&_end=" + result["amount"])
                        .then(res => res.json())
                        .then((res) => {
                            this.setState({
                                choices: res
                            })
                            return res;
                        })
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    render() {
        return (
            <SelectInput source="checker_id" optionText="name" choices={this.state.choices} />
        );
    }
}