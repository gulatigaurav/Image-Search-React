import React, { Component } from 'react'
import { TextField } from 'material-ui';
import Auxil from '../../hoc/Auxil'
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import axios from 'axios';
import ImageResults from '../../components/Imageresults/ImageResults';
import { ClimbingBoxLoader, RingLoader } from 'react-spinners';


class Search extends Component {
    
    state = {
        searchText: '',
        amount: 15,
        apiURL: 'https://pixabay.com/api',
        apiKey: 'Enter Your own Api Key',
        images: [],
        emptySearch: 'Please Start Searching'
    };

    onTextChange = (e) => {
        const val = e.target.value;
        this.setState({
            searchText: val
        }, () => {
         if ( val==='' ){
            this.setState({images: []});
         }else{
            axios.get(`${this.state.apiURL}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
            .then(res=> this.setState({images: res.data.hits}))
            .catch(e => console.log(e));
         }
        })
    }

    onAmountChange = (e, index, value) => {
        this.setState({amount: value});
    }

    render() {
        console.log(this.state.images);
    return (
      <Auxil>
       <div>
        <TextField 
        name="searchText"
        value={this.state.searchText}
        onChange={this.onTextChange}
        floatingLabelText = "Search Images"  />

        <br />

        <SelectField
        floatingLabelText="Amount"
        name="amount"
        value={this.state.amount}
        onChange={this.onAmountChange}
      >
        <MenuItem value={5} primaryText="5" />
        <MenuItem value={10} primaryText="10" />
        <MenuItem value={15} primaryText="15" />
        <MenuItem value={30} primaryText="30" />
        <MenuItem value={50} primaryText="50" />
      </SelectField>

     {/* Ternary Operator */}
      {this.state.images.length > 0 ? (<ImageResults images={this.state.images}/>) : <ClimbingBoxLoader color={'#3f3f3f'} 
      />}
 </div>
      </Auxil>
    )
  }
}

export default Search;