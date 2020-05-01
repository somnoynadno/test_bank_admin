import React from 'react';
import {SelectInput} from "react-admin";
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
        const request = new Request(apiAddress + "/"+ this.props.fetchRel + "?_start=0&_end=-1&_sort=id&_order=asc", {
            method: 'GET',
        });

        return await fetch(request)
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    choices: res
                })
                return res;
            })

    }

    render() {
        return (
            <SelectInput validate={this.props.validate} label={this.props.label}
                         source={this.props.source} optionText={this.props.optionText}
                         choices={this.state.choices} optionValue={this.props.optionValue} />
        );
    }
}
