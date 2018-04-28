import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import { spacing } from 'material-ui/styles';

class ImageResults extends Component {

    state = {
        open: false,
        currentImage: ''
    }

    handleOpen = (img) => {
        this.setState({open: true, currentImage: img});
      };
    
      handleClose = () => {
        this.setState({open: false});
      };
      
    render() {
    let imageListContent; 
    const images = this.props.images;
    console.log(images);
    if ( images ){
        imageListContent = (
            <GridList cols={3} >
                {images.map(img => (
                    <GridTile
                       title={img.tags}
                       key={img.id}
                       subtitle={
                           <span> 
                                by { img.user }
                           </span>
                       } 
                       actionIcon = {
                           <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                            <ZoomIn color="white" />
                           </IconButton>                           
                       } >
                       
                       <img src={img.largeImageURL} alt=""/>

                    </GridTile>
                ))}
            

            </GridList>
        )
    }
    else {
        imageListContent = 'Please Start Searching';
        // console.log(imageListContent);
    }

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      /> 
    ];


    return (
      <div>
          {imageListContent} 
          <Dialog
        //   title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
            <img src={this.state.currentImage} alt="" style={{ width: '100%' }}/>
        </Dialog>
      </div>
    )
  }
}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
}

export default ImageResults;