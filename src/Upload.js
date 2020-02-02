import React from 'react';
import './Upload.css';

class Upload extends React.Component {
  state = {
    file: null,
    loading: false,
    imageText:''
  }
  handleChange =(event) => {
    this.setState(() =>({
      loading: true
    }));
    var data = new FormData()
    data.append('file', event.target.files[0]);

    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
    let res = fetch('http://localhost:3006/',{
      method: 'POST',
      body: data
    });
    res.then(result => {
      return result.json();
    }).then(actualResult =>
      {
        this.setState({
          loading: false,
          imageText: actualResult.msg
        })
      })
  }
  render() {
    return (
      <div>
      <div className="upload-container">
        <div className="part-1">
          {this.state.file && <img src={this.state.file} alt="uploaded" />}
        </div>
        <div className="part-2">
          {this.state.loading && <h1>Loading...</h1>}
          {!this.state.loading && this.state.imageText && <p>{this.state.imageText}</p>}
        </div>
      </div>
      <div className="btn-wrap">
        <input type="file" onChange={this.handleChange} className="input-btn"/>
      </div>
      </div>
    );
  }
}
export default Upload;