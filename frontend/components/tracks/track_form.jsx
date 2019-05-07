import React from "react";
import SessionButtonContainer from "../session_button/session_button_container";

class TrackForm extends React.Component {
  componentDidMount() {
    this.props.fetchAllTags();
  }

  constructor(props) {
    super(props);
    this.state = this.props.track;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageFile = this.handleImageFile.bind(this);
    this.handleAudioFile = this.handleAudioFile.bind(this);
  }

  handleImageFile(e) {
    const image = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        image: image
      });
    };
    if (image) {
      fileReader.readAsDataURL(image);
    }
  }

  handleAudioFile(e) {
    const audio = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        audio: audio
      });
    };
    if (audio) {
      fileReader.readAsDataURL(audio);
    }
  }

  update(type) {
    return e => this.setState({ [type]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("track[title]", this.state.title);
    formData.append("track[artist_id]", this.state.artist_id);
    formData.append("track[image]", this.state.image);
    formData.append("track[audio]", this.state.audio);
    formData.append("track[tag_id]", this.state.tag_id);
    this.props.action(formData).then(res => this.props.history.push("/tracks"));
  }

  render() {
    return (
      <>
        <SessionButtonContainer />
        <div className="track-form-container">
          <form onSubmit={this.handleSubmit}>
            <h2>{this.props.formType}</h2>
            <div>
              <div className="song-form-left">
                <p>Image preview:</p>
                <img className="form-img-preview" src={this.state.image} />
                <input type="file" onChange={this.handleAudioFile} />
                <input type="file" onChange={this.handleImageFile} />
              </div>
              <div className="song-form-right">
                <label>
                  Title
                  <input
                    type="text"
                    value={this.state.title}
                    onChange={this.update("title")}
                    placeholder="Name your track"
                  />
                </label>
                <label>
                  Genre
                  <select
                    onChange={this.update("tag_id")}
                    value={this.state.tag_id}
                  >
                    {this.props.tags.map(tag => (
                      <option key={Math.random()} value={tag.id}>
                        {tag.title}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            <input type="submit" value="Upload" />
          </form>
        </div>
      </>
    );
  }
}

export default TrackForm;
